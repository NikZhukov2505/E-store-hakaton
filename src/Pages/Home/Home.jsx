import React from 'react';
import styles from './Home.module.css'
import pic from './../../Images/pic/first.jpg'

const Home = () => {

    return (
        <section>

            <div className={styles.title_back}>
                <h2 >Home page</h2>
            </div>
            <div className='container'>
                <form className={styles.search}>
                    <input type='text' placeholder='Enter' className={styles.inp} />
                    <button className={styles.btn}>Search </button>
                </form>
                <div className={styles.menu}>
                    <div className={styles.container}>
                        <div className={styles.menu_card}>
                            <div>
                                <img src={pic} alt="" />
                            </div>
                            <div className={styles.menu_title}>
                                <h2>Norton Internet Security</h2>

                            </div>
                            <div className={styles.menu_price}>
                                <p>200$</p>
                            </div>
                        </div>
                        <div className={styles.menu_card}>
                            <img src={pic} alt="" />
                            <div className={styles.menu_title}>
                                <h2>Norton Internet Security</h2>

                            </div>
                            <div className={styles.menu_price}>
                                <p>200$</p>
                            </div>
                        </div>
                        <div className={styles.menu_card}>
                            <img src={pic} alt="" />
                            <div className={styles.menu_title}>
                                <h2>Norton Internet Security</h2>

                            </div>
                            <div className={styles.menu_price}>
                                <p>200$</p>
                            </div>
                        </div>





                    </div>
                </div>




            </div>

        </ section>
    );
};

export default Home;