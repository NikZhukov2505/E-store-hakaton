import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import './../../App.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className='container'>
                <nav className={styles.menu__nav}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/detail'>Detail</NavLink></li>
                    <li><NavLink to='/basket'>Basket</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='registration'>Registration</NavLink></li>
                </nav>
            </div>
        </header>
    );
};

export default Header;