import { useEffect, useState } from "react";
import { Map, Activity } from "lucide-react";

import { getHeatmap } from "../services/api";

function Heatmap() {
  const [heatmap, setHeatmap] = useState([]);

  useEffect(() => {
    async function loadHeatmap() {
      const data = await getHeatmap();
      setHeatmap(data);
    }

    loadHeatmap();
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1>Signal Heatmap</h1>
          <p>
            Visualize wireless signal strength across the surveyed area.
          </p>
        </div>

        <div className="status-badge">
          <span></span>
          DEMO MODE
        </div>
      </div>

      <div className="heatmap-summary">
        <div className="summary-card">
          <Map size={22} />

          <div>
            <span>Survey Points</span>
            <strong>
              {heatmap.length * (heatmap[0]?.length || 0)}
            </strong>
          </div>
        </div>

        <div className="summary-card">
          <Activity size={22} />

          <div>
            <span>Strongest Signal</span>
            <strong>
              {heatmap.length > 0
                ? Math.max(...heatmap.flat())
                : "--"}{" "}
              dBm
            </strong>
          </div>
        </div>

        <div className="summary-card">
          <Activity size={22} />

          <div>
            <span>Weakest Signal</span>
            <strong>
              {heatmap.length > 0
                ? Math.min(...heatmap.flat())
                : "--"}{" "}
              dBm
            </strong>
          </div>
        </div>
      </div>

      <div className="panel heatmap-panel">
        <div className="panel-header">
          <h3>Signal Strength Map</h3>
          <span>dBm</span>
        </div>

        <div className="heatmap-container">
          {heatmap.map((row, rowIndex) =>
            row.map((value, columnIndex) => (
              <div
                key={`${rowIndex}-${columnIndex}`}
                className="heatmap-cell"
              >
                <strong>{value}</strong>
                <small>dBm</small>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Heatmap;