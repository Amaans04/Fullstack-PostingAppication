import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '15px',
    backgroundColor: '#111827',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
  }

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 14px',
    borderRadius: '6px',
    transition: 'all 0.3s ease'
  }

  return (
    <div style={navStyle}>
        <Link to='/feed' style={linkStyle}>Feed</Link>    
        <Link to='/create-post' style={linkStyle}>Create Post</Link> 
    </div>
  )
}

export default Navbar
