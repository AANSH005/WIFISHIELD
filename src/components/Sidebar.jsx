import {
  LayoutDashboard,
  Wifi,
  Map,
  ShieldCheck,
  BarChart3,
  History,
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Networks",
      icon: Wifi,
    },
    {
      name: "Signal Heatmap",
      icon: Map,
    },
    {
      name: "Security",
      icon: ShieldCheck,
    },
    {
      name: "Channels",
      icon: BarChart3,
    },
    {
      name: "Survey History",
      icon: History,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Wifi size={22} />
        </div>

        <div>
          <h2>WiFiShield</h2>
          <span>Wireless Security</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="connection-status">
          <span className="status-dot"></span>

          <div>
            <strong>Demo Mode</strong>
            <small>ESP32 not connected</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;