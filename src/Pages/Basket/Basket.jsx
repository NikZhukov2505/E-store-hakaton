import React from 'react';
import styles from './Basket.module.css'
import product from '../../Images/overdetail.jpg'

const Basket = () => {
    return (
        <section className={styles.basket__page}>
            <div className={styles.up__page}>
                <h2 className={styles.title}>basket</h2>
            </div>
            <div className='container'>

                <div className={styles.wrapper}>
                    <div className={styles.inner__wrapperLeft}>
                        <p>ТОВАР</p>
                    </div>
                    <div className={styles.inner__wrapperRight}>
                        <p>НАЛИЧИЕ</p>
                        <p>КОЛИЧЕСТВО</p>
                        <p>ЦЕНА</p>
                        <div> </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_left}>
                        <img src={product} width='100' alt="wa" />
                        <h1>Norton Internet Security</h1>

                    </div>
                    <div className={styles.card_right}>
                        <p>В наличии</p>
                        <input type="number" id="quantity" name="quantity" min="1" max="10" />
                        <p>25$</p>


                        <button>REMOVE    </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Basket;