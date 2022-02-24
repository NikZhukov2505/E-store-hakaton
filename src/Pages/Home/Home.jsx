import React, { useEffect } from 'react';
import styles from './Home.module.css'
import pic from './../../Images/pic/first.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getAlllaptops, getByName } from '../../Redux/reducers/items-reducer';
import { Link } from 'react-router-dom';

const Home = () => {
    const laptopArr = useSelector(state => state?.laptop?.laptopArr)
    const dispatch = useDispatch()

    const search = (e) => {
        dispatch(getByName(e?.target?.value))
    }


    useEffect(() => {
        dispatch(getAlllaptops())
    }, [])


    return (
        <section className={styles.home_section}>

            <div className={styles.title_back}>
                <h2 >Home page</h2>
            </div>
            <div className='container'>
                <form className={styles.search} onSubmit={e => e.preventDefault()}>
                    <input onChange={search} type='text' placeholder='Enter' className={styles.inp} />
                    <button className={styles.btn}>Search </button>
                </form>
                <div className={styles.menu}>
                    <div className={styles.container}>
                        {
                            laptopArr.map(e => {
                                return (
                                    <div key={e.id} className={styles.menu_card}>
                                        <Link to={'/detail/' + e?.id}>
                                            <div>
                                                <img alt="" />

                                            </div>
                                            <div className={styles.menu_title}>
                                                <h2>{e.title}</h2>

                                            </div>
                                            <div className={styles.menu_price}>
                                                <p>{e.price}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>




            </div>

        </ section>
    );
};

export default Home;