import { useEffect, useState } from "react";
import {
  ShieldCheck,
  AlertTriangle,
  Lock,
  Activity,
} from "lucide-react";

import {
  getTrustedAP,
  getAlerts,
} from "../services/api";

function Security() {
  const [trustedAP, setTrustedAP] = useState(null);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function loadSecurityData() {
      const trustedData = await getTrustedAP();
      const alertData = await getAlerts();

      setTrustedAP(trustedData);
      setAlerts(alertData);
    }

    loadSecurityData();
  }, []);

  return (
    <div className="page-container">

      {/* PAGE HEADER */}

      <div className="page-header">
        <div>
          <h1>Security Monitoring</h1>

          <p>
            Monitor trusted networks and identify potential wireless
            security anomalies.
          </p>
        </div>

        <div className="status-badge">
          <span></span>
          DEMO MODE
        </div>
      </div>


      {/* SECURITY SUMMARY */}

      <div className="security-summary">

        <div className="summary-card">
          <ShieldCheck size={22} />

          <div>
            <span>Trusted AP</span>

            <strong>
              {trustedAP ? "1" : "0"}
            </strong>
          </div>
        </div>


        <div className="summary-card warning-card">
          <AlertTriangle size={22} />

          <div>
            <span>Potential Alerts</span>

            <strong>
              {alerts.length}
            </strong>
          </div>
        </div>


        <div className="summary-card">
          <Activity size={22} />

          <div>
            <span>Highest Anomaly</span>

            <strong>
              {alerts.length > 0
                ? `${alerts[0].anomalyScore}/100`
                : "0/100"}
            </strong>
          </div>
        </div>

      </div>


      {/* TRUSTED NETWORK */}

      <div className="security-grid">

        <div className="panel">

          <div className="panel-header">
            <h3>Trusted Access Point</h3>

            <ShieldCheck size={20} />
          </div>


          {trustedAP ? (
            <div className="trusted-security-card">

              <div className="security-icon">
                <ShieldCheck size={32} />
              </div>

              <div className="security-info">

                <h2>{trustedAP.ssid}</h2>

                <p>
                  BSSID: {trustedAP.bssid}
                </p>

                <div className="security-details">

                  <span>
                    <Lock size={15} />
                    {trustedAP.security}
                  </span>

                  <span>
                    Channel {trustedAP.channel}
                  </span>

                </div>

              </div>

            </div>
          ) : (
            <p>No trusted access point configured.</p>
          )}

        </div>


        {/* SECURITY ALERT */}

        <div className="panel">

          <div className="panel-header">
            <h3>Security Alerts</h3>

            <AlertTriangle size={20} />
          </div>


          {alerts.length === 0 ? (

            <div className="no-alerts">
              <ShieldCheck size={32} />

              <strong>No security alerts</strong>

              <p>
                No potential wireless anomalies were detected.
              </p>
            </div>

          ) : (

            <div className="security-alert-list">

              {alerts.map((alert) => (

                <div
                  className="security-alert"
                  key={alert.bssid}
                >

                  <div className="alert-icon">
                    <AlertTriangle size={24} />
                  </div>

                  <div>

                    <strong>
                      Potential Duplicate Network
                    </strong>

                    <p>
                      SSID: {alert.ssid}
                    </p>

                    <p>
                      BSSID: {alert.bssid}
                    </p>

                    <span>
                      Anomaly Score:{" "}
                      {alert.anomalyScore}/100
                    </span>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>


      {/* DETECTION INFORMATION */}

      <div className="panel security-info-panel">

        <div className="panel-header">
          <h3>Detection Information</h3>
        </div>

        <div className="detection-info">

          <div>
            <strong>SSID Matching</strong>

            <p>
              Networks with matching SSIDs are compared using
              BSSID, signal strength, security type and channel.
            </p>
          </div>


          <div>
            <strong>Anomaly Score</strong>

            <p>
              The anomaly score represents how different a
              detected network is from the trusted network.
            </p>
          </div>


          <div>
            <strong>Security Status</strong>

            <p>
              WiFiShield highlights networks that may require
              further investigation.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Security;