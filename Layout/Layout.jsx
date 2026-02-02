import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../img/bag logo.jpg";
import "./Layout.css";

function Layout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <nav className="navbar">

        <img className="logo" src={logo} alt="logo" />

        <h1>Bella Carry</h1>

        {/* Toggle visible only on mobile */}
        <div className="nav-toggle" onClick={() => setNavOpen(!navOpen)}>
          &#9776;
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${navOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
          <Link to="/bags" onClick={() => setNavOpen(false)}>Bags</Link>
          <Link to="/about" onClick={() => setNavOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
            <Link to="/dashboard" onClick={() => setNavOpen(false)}>Dashboard</Link>
        </div>

      </nav>

      <div id="outlet">
        <Outlet />
      </div>

      <footer className="footer">
        <h1>Bella Carry</h1>
        <p>&copy; 2025 Bella Carry — All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Layout;
