import React from 'react';
import logo from '../media/logo.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg" >
            <div className="container-fluid">
                <Link to={"/"}>
                    <img className='navbar__logo' src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar__brand " id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                    <h4>CARVEY - CAR BOOKING MADE SIMPLE! </h4>
                    {/* </ul> */}
                    <Link to={"/chat"} className="btn btn-outline-light">Book a Car</Link>
                </div>
            </div>
        </nav>

    )

}