import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getById } from '../../Redux/reducers/items-reducer';

const Detail = () => {
    const params = useParams()
    const [descr, setDescr] = useState(false)
    const changeVisible = () => setDescr(!descr)
    const laptopDetail = useSelector(state => state?.laptop?.laptopDetail)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getById(params.id))
    }, [AOS.init()])



    return (
        <section >
            <div className={styles.detail__preview}>
                <h2 className={styles.title}>Detail</h2>
            </div>
            <div className='container'>
                <div data-aos-duration="1000" data-aos="zoom-in" className={styles.block}>
                    <div className={`${styles.detail__card} ${styles.card1}`}>
                        <img className={styles.examp} src={laptopDetail?.image} alt="" />
                    </div>
                    <div className={styles.detail__card}>
                        <h2>{laptopDetail.title}</h2>
                        <h3>Цена: {laptopDetail.price}</h3>
                        <p>Info: {laptopDetail.comment}</p>
                        <div className={styles.detail__add}>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" />
                            <button className={styles.add__btn}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className={styles.detail__description}>
                    <button onClick={changeVisible} className={styles.add__btn}>Description</button>
                    <p style={{ display: descr ? 'block' : 'none' }}>{laptopDetail.description}</p>

                </div>
            </div>

            <div className={styles.over__detail}>

            </div>
        </section>
    );
};

export default Detail;