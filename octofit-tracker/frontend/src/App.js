import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';
import octofitLogo from '../octofitapp-small.png';

function Navigation() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
      <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
        OctoFit Tracker
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className={`nav-link${location.pathname === '/activities' ? ' active' : ''}`} to="/activities">Activities</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname === '/leaderboard' ? ' active' : ''}`} to="/leaderboard">Leaderboard</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname === '/teams' ? ' active' : ''}`} to="/teams">Teams</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname === '/users' ? ' active' : ''}`} to="/users">Users</Link></li>
          <li className="nav-item"><Link className={`nav-link${location.pathname === '/workouts' ? ' active' : ''}`} to="/workouts">Workouts</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <Routes>
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/" element={<Leaderboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
