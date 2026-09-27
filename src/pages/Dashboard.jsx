import { useEffect, useState } from "react";
import {
  Wifi,
  ShieldCheck,
  AlertTriangle,
  Activity,
} from "lucide-react";

import {
  getNetworks,
  getAlerts,
  getTrustedAP,
} from "../services/api";

function Dashboard() {
  const [networks, setNetworks] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [trustedAP, setTrustedAP] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      const networkData = await getNetworks();
      const alertData = await getAlerts();
      const trustedData = await getTrustedAP();

      setNetworks(networkData);
      setAlerts(alertData);
      setTrustedAP(trustedData);
    }

    loadDashboard();
  }, []);

  const anomalyScore =
    alerts.length > 0 ? alerts[0].anomalyScore : 0;

  return (
    <div className="dashboard">
      <div className="page-header">
        <div>
          <h1>WiFiShield Dashboard</h1>
          <p>
            Monitor nearby wireless networks and detect potential
            security anomalies.
          </p>
        </div>

        <div className="status-badge">
          <span></span>
          DEMO MODE
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Wifi size={24} />
          </div>
          <div>
            <p>APs Detected</p>
            <h2>{networks.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p>Trusted AP</p>
            <h2>{trustedAP ? 1 : 0}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon warning">
            <AlertTriangle size={24} />
          </div>
          <div>
            <p>Suspicious APs</p>
            <h2>{alerts.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Activity size={24} />
          </div>
          <div>
            <p>Anomaly Score</p>
            <h2>{anomalyScore}</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Detected Networks</h3>
            <span>{networks.length} networks</span>
          </div>

          <div className="network-list">
            {networks.map((network) => (
              <div
                className="network-row"
                key={network.bssid}
              >
                <div>
                  <strong>{network.ssid}</strong>
                  <small>{network.bssid}</small>
                </div>

                <div className="network-details">
                  <span>{network.rssi} dBm</span>
                  <span>CH {network.channel}</span>
                  <span>{network.security}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel security-panel">
          <div className="panel-header">
            <h3>Security Status</h3>
          </div>

          {trustedAP && (
            <div className="trusted-network">
              <ShieldCheck size={30} />

              <div>
                <strong>{trustedAP.ssid}</strong>
                <p>{trustedAP.bssid}</p>
                <small>
                  {trustedAP.security} • Channel {trustedAP.channel}
                </small>
              </div>
            </div>
          )}

          {alerts.length > 0 && (
            <div className="alert-box">
              <AlertTriangle size={22} />

              <div>
                <strong>Potential Duplicate Network</strong>

                <p>SSID: {alerts[0].ssid}</p>
                <p>BSSID: {alerts[0].bssid}</p>

                <span>
                  Anomaly Score: {alerts[0].anomalyScore}/100
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;