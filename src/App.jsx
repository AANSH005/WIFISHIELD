import { useState } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Networks from "./pages/Networks";
import Heatmap from "./pages/Heatmap";
import Security from "./pages/Security";
import Channels from "./pages/Channels";
import SurveyHistory from "./pages/SurveyHistory";

import Layout from "./components/Layout";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  function renderPage() {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;

      case "Networks":
        return <Networks />;

      case "Signal Heatmap":
        return <Heatmap />;

      case "Security":
        return <Security />;

      case "Channels":
        return <Channels />;

      case "Survey History":
        return <SurveyHistory />;

      default:
        return <Dashboard />;
    }
  }

  return (
    <Layout
      activePage={activePage}
      setActivePage={setActivePage}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;