import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const index = () => {
    return (
        <div>
            <div className="menuWrapper">
        <div className="menuTitle">
            <h1>Game Over</h1>
            <button><Link to="/gamelevel">Restart</Link></button>
        </div>
        </div></div>
    )
}

export default index
