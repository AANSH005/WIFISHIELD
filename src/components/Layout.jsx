import Sidebar from "./Sidebar";

function Layout({ children, activePage, setActivePage }) {
  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;