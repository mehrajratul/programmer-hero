import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="Programmer-hero">Programmer-Hero</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto margined">
                <li className="nav-item"><a className="nav-link" href="home">Home</a></li>
                <li className="nav-item active"><a className="nav-link" href="/course">Courses</a></li>
                <li className="nav-item"><a className="nav-link" href="/#">About Us</a></li>
              </ul>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search Courses"/>
                <button className="btn btn-light my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
    );
};

export default Header;