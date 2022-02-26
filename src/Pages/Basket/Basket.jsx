import React from 'react';
import styles from './Basket.module.css'

const Basket = () => {



    const [products, setProdcts] = React.useState([])

    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('products'));

        if (data != null || data != undefined) {
            setProdcts(JSON.parse(localStorage.getItem('products')));
        }
    }, [])

    const removeItem = (id) => {
        let all_products = JSON.parse(localStorage.getItem('products')) || []

        const result = all_products.filter(item => item.id != id)

        setProdcts(result)
        localStorage.setItem('products', JSON.stringify(result))
    }


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
                        <p>КОЛИЧЕСТВО</p>
                        <p>ЦЕНА</p>
                        <p>Всего</p>
                        <div> </div>
                    </div>
                </div>


                {
                    products.length > 0 ?
                        products?.map(e => (
                            <div key={e.id} className={styles.card}>
                                <div className={styles.card_left}>
                                    <img src={e.img} width='100' alt="wa" />
                                    <h1>{e.name}</h1>
                                </div>
                                <div className={styles.card_right}>

                                    <input defaultValue={e.count} type="number" />
                                    <p>{e.price}</p>
                                    <p>{e.count * e.price}</p>
                                    <button onClick={() => removeItem(e.id)}>REMOVE</button>
                                </div>
                            </div>
                        ))
                        :
                        <h2 style={{ fontSize: 40, color: '#fff' }}>Basket empty</h2>
                }


            </div>
        </section>
    );
};

export default Basket;