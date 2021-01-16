import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
function AppHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <Link to="/bitcoin"> <a className="nav-link" href="#"> Bitcoin  </a> </Link> */}
                        <Link to="/bitcoin" href="#" className="nav-link"> Bitcoin </Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/headlines-us"> <a className="nav-link" href="#"> Headlines-US  </a> </Link> */}
                        <Link to="/headlines-us" href="#" className="nav-link"> Headlines-US </Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/apple"> <a className="nav-link" href="#">  Apple </a> </Link> */}
                        <Link to="/apple" href="#" className="nav-link"> Apple </Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link to="/tech-crunch"> <a className="nav-link" href="#">  TechCrunch  </a> </Link> */}
                        <Link to="/tech-crunch" href="#" className="nav-link"> TechCrunch </Link>
                    </li>                 
                </ul>
            </nav>
        </div>
    )
}

export default AppHeader