import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
import './../../App.css'
import adress from './../../Images/adress2.png'
import mail from './../../Images/mail.png'
import facebook from './../../Images/facebook2.png'
import instagram from './../../Images/instagram2.png'
import twitter from './../../Images/twitter.png'
import logo from './../../Images/it_logo.png'



const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className={styles.container__header}>
                    <div className={styles.info__block}>
                        <div className={styles.info}>
                            <img className={styles.adress} src={adress} alt="" />
                            <h3>Bishkek, Business center Olymp</h3>
                        </div>
                        <div className={styles.info}>
                            <img className={styles.adress} src={mail} alt="" />
                            <a title='GMail' href="https://google.com/mail"><h3>example@gmail.com</h3></a>

                        </div>
                    </div>
                    <div className={styles.info__block2}>
                        <a title='Facebook' href="https://facebook.com"><img className={styles.top__img} src={facebook} alt="" /></a>
                        <a title='Instagram' href="https://instagram.com"><img className={styles.top__img} src={instagram} alt="" /></a>
                        <a title='Twitter' href="https://twitter.com"><img className={styles.top__img} src={twitter} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}>
                <div className='container'>
                    <div className={styles.bottom__block}>
                        <div>
                            <img className={styles.logo} src={logo} alt="logo" />
                        </div>
                        <div className={styles.navigatiion}>
                            <nav className={styles.menu__nav}>
                                <li><NavLink className={styles.menu} to='/'>Home</NavLink></li>
                                <li><NavLink className={styles.menu} to='/detail'>Detail</NavLink></li>
                                <li><NavLink className={styles.menu} to='/basket'>Basket</NavLink></li>
                                <li><NavLink className={styles.menu} to='/login'>Login</NavLink></li>
                                <li><NavLink className={styles.menu} to='registration'>Registration</NavLink></li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;