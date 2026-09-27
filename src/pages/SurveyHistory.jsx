import { useEffect, useState } from "react";
import {
  History,
  Wifi,
  AlertTriangle,
  Calendar,
} from "lucide-react";

const demoHistory = [
  {
    id: 1,
    date: "26 Sep 2026",
    time: "16:42",
    networks: 5,
    alerts: 1,
    status: "Completed",
  },
  {
    id: 2,
    date: "26 Sep 2026",
    time: "14:18",
    networks: 4,
    alerts: 0,
    status: "Completed",
  },
  {
    id: 3,
    date: "25 Sep 2026",
    time: "18:35",
    networks: 6,
    alerts: 1,
    status: "Completed",
  },
  {
    id: 4,
    date: "25 Sep 2026",
    time: "11:22",
    networks: 3,
    alerts: 0,
    status: "Completed",
  },
];

function SurveyHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(demoHistory);
  }, []);

  const totalSurveys = history.length;

  const totalNetworks = history.reduce(
    (total, survey) => total + survey.networks,
    0
  );

  const totalAlerts = history.reduce(
    (total, survey) => total + survey.alerts,
    0
  );

  return (
    <div className="page-container">

      {/* PAGE HEADER */}

      <div className="page-header">
        <div>
          <h1>Survey History</h1>

          <p>
            View previous wireless network surveys and detection results.
          </p>
        </div>

        <div className="status-badge">
          <span></span>
          DEMO MODE
        </div>
      </div>


      {/* SUMMARY */}

      <div className="history-summary">

        <div className="summary-card">
          <History size={22} />

          <div>
            <span>Total Surveys</span>
            <strong>{totalSurveys}</strong>
          </div>
        </div>


        <div className="summary-card">
          <Wifi size={22} />

          <div>
            <span>Networks Detected</span>
            <strong>{totalNetworks}</strong>
          </div>
        </div>


        <div className="summary-card warning-card">
          <AlertTriangle size={22} />

          <div>
            <span>Alerts Detected</span>
            <strong>{totalAlerts}</strong>
          </div>
        </div>

      </div>


      {/* HISTORY TABLE */}

      <div className="panel history-panel">

        <div className="panel-header">
          <h3>Previous Surveys</h3>

          <span>
            {history.length} records
          </span>
        </div>


        <div className="history-table-wrapper">

          <table className="history-table">

            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Networks</th>
                <th>Alerts</th>
                <th>Status</th>
              </tr>
            </thead>


            <tbody>

              {history.map((survey) => (

                <tr key={survey.id}>

                  <td>
                    <div className="history-date">
                      <Calendar size={15} />
                      {survey.date}
                    </div>
                  </td>

                  <td>
                    {survey.time}
                  </td>

                  <td>
                    <strong>
                      {survey.networks}
                    </strong>
                  </td>

                  <td>

                    {survey.alerts > 0 ? (

                      <span className="history-alert">
                        <AlertTriangle size={14} />
                        {survey.alerts}
                      </span>

                    ) : (

                      <span className="history-safe">
                        0
                      </span>

                    )}

                  </td>

                  <td>
                    <span className="survey-status">
                      {survey.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* FUTURE ESP32 SECTION */}

      <div className="panel history-info-panel">

        <div className="panel-header">
          <h3>Survey Data</h3>
        </div>

        <div className="history-info">

          <div>
            <strong>Current Demo</strong>

            <p>
              Survey records are currently generated from
              frontend demo data.
            </p>
          </div>


          <div>
            <strong>Future ESP32 Integration</strong>

            <p>
              The ESP32 can send survey results to the same
              frontend API without changing this page.
            </p>
          </div>


          <div>
            <strong>Stored Results</strong>

            <p>
              Future versions can store network scans,
              timestamps, anomaly scores and locations.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SurveyHistory;