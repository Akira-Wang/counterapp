import React, { Component } from 'react';

//stateless functional component (sfc)

const NavBar = ({totolCounters}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light" style={{padding:0, marginBottom:10, marginTop:10}}>
            <div className="container-fluid" style={{backgroundColor:"#99d6ff"}}>
                <p className="navbar-brand" href="#"><strong>Navbar  </strong>
                    <span className="badge badge-pill badge-secondary">{totolCounters}</span>
                </p>
            </div>
            </nav>
        </div>
    );
}
 
export default NavBar;