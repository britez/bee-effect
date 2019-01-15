import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Menu from './Menu';

const Header = () => (
    <header className='header'>
      <Link to='/' className='logo'><img src='/static/logo.jpg'/></Link>

      <nav className='nav'>
        <Link to="/areas">Áreas</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/secret">Secret</Link>
      </nav>
      <Menu />

    </header>
);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Header);
