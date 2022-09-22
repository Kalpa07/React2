import React, {useState,useEffect} from "react";
import "./style.scss"
import {Link,useNavigate, useLocation, Navigate} from "react-router-dom";
import logo from "../assets/logo/br_.png"

const Navbar = () => {
    const location =useLocation()
    const [activeLink, setActiveLink] = useState()
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    useEffect(() => {
        setActiveLink(location.pathname)
    },[location])
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="" />
            </div>
        
            <ul className="navbar-menu">
                <li className={activeLink === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                </li>
                <li className={activeLink === "/about" ? "active" : ""}>
                    <Link to="/about">About</Link>
                </li>
                <li className={activeLink === "/flavors" ? "active" : ""}>
                    <Link to="/flavors">Flavors</Link>
                </li>
                <li className={activeLink === "/contact" ? "active" : ""}>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    
    )
}

export default Navbar