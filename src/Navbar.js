import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar(props) {
    const handlelogin = () => {
        console.log("login");
    }
    const handlesignup = () => {
        console.log("Signup");
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <img src="./favicon.ico" alt="icon" />
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home
                            ">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/Complaint">Register the complaint</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Complaint status
                            </a>
                            <ul className={`dropdown-menu dropdown-${props.mode} bg-${props.mode}`}>
                                <li><Link className={`dropdown-item text-${ props.mode ==='light'? 'dark' : 'light'}`} to="/Track">Track your complaint status</Link></li>
                                <li><Link className={`dropdown-item text-${ props.mode ==='light'? 'dark' : 'light'}`}  to="/Resolved">Resolved Complaints</Link></li>
                                {/* <li><hr className="dropdown-divider" /></li> */}
                                <li><Link className={`dropdown-item text-${ props.mode ==='light'? 'dark' : 'light'}`}  to="/History">Complaint history</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <div className={`form-check form-switch  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" style={{marginTop: "9px"}} type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        <Link type="button" className="btn btn-primary mx-1" to='/Login' onClick={handlelogin}>Login</Link>
                        <Link type="button" className="btn btn-primary mx-1" to='/Signup' onClick={handlesignup}>Signup</Link>
                    </div>
                </div>
            </nav >
        </div >
    )
}
