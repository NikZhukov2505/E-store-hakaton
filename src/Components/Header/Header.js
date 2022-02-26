import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css'
import './../../App.css'
import adress from './../../Images/adress2.png'
import mail from './../../Images/mail.png'
import facebook from './../../Images/facebook2.png'
import instagram from './../../Images/instagram2.png'
import twitter from './../../Images/twitter.png'
import logo from './../../Images/it_logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { getToken, removeLSToken } from '../../LocalStorage';
import { setToken } from '../../Redux/reducers/store-reducer';



const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const lsToken = getToken()
    const { token } = useSelector(state => state.user)

    const logOut = () => {
        dispatch(removeLSToken())
        navigate('/login')
    }

    useEffect(() => {
        lsToken && dispatch(setToken(lsToken));
        navigate('/');
    }, [token]);

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
                        <a title='Instagram' href="https://www.instagram.com/itcbootcamp/"><img className={styles.top__img} src={instagram} alt="" /></a>
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

                                {
                                    token ? (
                                        <>
                                            <li><Link className={styles.menu} to='/'>Home</Link></li>
                                            <li><Link className={styles.menu} to='/basket'>Cart</Link></li>
                                            <button className={styles.add__btn} onClick={logOut}>Выход</button>
                                        </>
                                    ) :
                                        (
                                            <>
                                                <li><Link className={styles.menu} to='/'>Home</Link></li>
                                                <li><Link className={styles.menu} to='/basket'>Cart</Link></li>
                                                <li><Link className={styles.menu} to='/login'>Login</Link></li>
                                                <li><Link className={styles.menu} to='registration'>Registration</Link></li>
                                            </>
                                        )

                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;