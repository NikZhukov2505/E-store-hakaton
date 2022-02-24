import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css'
import examp from './../../Images/detail.jpg'
import { useSelector } from 'react-redux';
import Spinner from '../../Components/Spinner/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Detail = () => {
    const [descr, setDescr] = useState(false)
    const changeVisible = () => setDescr(!descr)

    // const isLoading = useSelector(state => state)
    // console.log(isLoading);

    useEffect(() => {

    }, [AOS.init()])


    // if (isLoading) {
    //     return <Spinner />
    // }
    return (
        <section >
            <div className={styles.detail__preview}>
                <h2 className={styles.title}>Detail</h2>
            </div>
            <div className='container'>
                <div data-aos-duration="1000" data-aos="zoom-in" className={styles.block}>
                    <div className={`${styles.detail__card} ${styles.card1}`}>
                        <img className={styles.examp} src={examp} alt="" />
                    </div>
                    <div className={styles.detail__card}>
                        <h2>Norton Internet Security</h2>
                        <h3>Цена$</h3>
                        <p>Info: Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque ullam, obcaecati veniam molestiae quod quaerat voluptatum fugit tenetur ex! Nesciunt nisi modi velit quasi repellat, sequi excepturi perferendis vel temporibus facilis sapiente harum amet quae dicta voluptas blanditiis ratione accusantium sed debitis? Veritatis, ab non iusto eos ullam qui.</p>
                        <div className={styles.detail__add}>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" />
                            <button className={styles.add__btn}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className={styles.detail__description}>
                    <button onClick={changeVisible} className={styles.add__btn}>Description</button>
                    <p style={{ display: descr ? 'block' : 'none' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat officiis ipsam at inventore nihil saepe neque voluptatum ratione, maxime perspiciatis id debitis deserunt veniam voluptates modi officia esse molestiae error magni similique, earum iusto accusamus. Quae amet sint labore non accusantium culpa esse, dolorum dignissimos. Vel, ducimus. Ad nemo quas quae illo odio officiis ipsam iure nobis error! Repellat pariatur corporis praesentium hic error voluptate minima, recusandae odit explicabo placeat nesciunt quisquam numquam dolorem a velit sapiente reiciendis sint. Esse molestiae natus sunt iure illo labore, beatae voluptatibus aperiam voluptates. Nemo a quasi eligendi consequatur animi quae dolore minus!</p>

                </div>
            </div>

            <div className={styles.over__detail}>

            </div>
        </section>
    );
};

export default Detail;