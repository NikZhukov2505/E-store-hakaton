import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../Redux/reducers/store-reducer';
import styles from './Registration.module.css'
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';

const Registration = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: "",
        username: "",
        password: "",
    })
    const isLoading = useSelector(state => state.user.isLoading)
    const dispatch = useDispatch()

    const getUserData = (type, value) => {
        setUserData({ ...userData, [type]: value })
    }
    const regist = (e) => {
        e.preventDefault()
        dispatch(signUp(userData, navigate))
    }


    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className={styles.container}>
            <form onSubmit={regist} className={styles.form__regist}>
                <div className={styles.inputs}>
                    <p>Email</p>
                    <input value={userData.email} onChange={(e) => getUserData('email', e.target.value)} className={styles.enter} placeholder='Ваш Email' type="text" />
                </div>
                <div className={styles.inputs}>
                    <p>UserName</p>
                    <input value={userData.username} onChange={(e) => getUserData('username', e.target.value)} className={styles.enter} placeholder='Ваш Логин' type="text" />
                </div>
                <div className={styles.inputs}>
                    <p>Password</p>
                    <input value={userData.password} onChange={(e) => getUserData('password', e.target.value)} className={styles.enter} placeholder='Ваш Пароль' type="text" />
                </div>
                <div className={styles.btn__wrap}>
                    <button className={styles.add__btn}>Регистрация</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;