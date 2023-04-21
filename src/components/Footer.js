import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="social-media">
            <FacebookIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2023 sample.com</p>
    </div>
    
  )
}

export default Footer