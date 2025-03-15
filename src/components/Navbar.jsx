import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
        <nav className='navbar navbar-expand-sm p-2 fw-bold'>
            <Link to="/" className='navbar-brand'>Amaizing Quiz Web App</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/maths" className='nav-link'>Maths</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/science" className='nav-link'>Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gk" className='nav-link'>General Knowledge</Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
