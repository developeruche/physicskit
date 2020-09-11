import React, { Component } from 'react';
import logo from "../../heading.png"
import { NavLink, Link } from 'react-router-dom'
import "./navbar.css"


class NavBar extends Component {
    state = {

    }


    render() {

        return (
            <>
                <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div id="navcon" className="container-fluid">
                        <Link className="navbar-brand" id="brand" exact to="/"><img className="logo" src={logo} alt='logo' /></Link>
                        <h1 className="phykit">Phy111 Kit</h1>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/lecture">Lecture</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/pastquestion">Past Question</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cbt">CBT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/connect">Connect</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </>

        );
    }
}

export default NavBar;