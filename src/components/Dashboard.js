import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../images/background.jpg"
import '../styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
        <h1>Medical Laboratory</h1>
        <p>Behind every great Doctor, there's a great Medical Technologist.</p>
        <Link to="/schedule">
        <button>SCHEDULE NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard