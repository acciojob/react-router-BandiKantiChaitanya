import React from 'react'
import { Switch,Route,Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/about' >About</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation