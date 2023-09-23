import React from 'react'
import styles from './StartProject.module.scss'
import Layout from '../../components/layout/Layout'
import { PortfolioAppbar } from '../../components/appbar/Appbar'
import { Footer } from '../../components/footer/Footer'

export default function StartProject() {
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <section className={styles.container}>
                <form>
                    <h4>Shared thoughts will make us great again!</h4>
                    <div className={styles.wrapper}>
                        <div className={styles.field}>
                            <label>first name</label>
                            <input placeholder='Yussuf Babatunde' />
                        </div>
                        <div className={styles.field}>
                            <label>last name</label>
                            <input placeholder='Adio' />
                        </div>
                        <div className={styles.field}>
                            <label>country</label>
                            <input placeholder='Nigeria' />
                        </div>
                        <div className={styles.field}>
                            <label>address</label>
                            <input placeholder='Typing' />
                        </div>
                        <div className={styles.field}>
                            <label>phone number</label>
                            <input placeholder='+2347230093040' />
                        </div>
                        <div className={styles.field}>
                            <label>email</label>
                            <input placeholder='hardbaymedia@mail.com' />
                        </div>
                        <div className={styles.field}>
                            <label>company</label>
                            <input placeholder='Small (1-5 Members)' />
                        </div>
                        <div className={styles.field}>
                            <label>project type</label>
                            <input placeholder='Product Design' />
                        </div>
                        <div className={styles.field}>
                            <label>brief</label>
                            <textarea placeholder='Type something…'></textarea>
                        </div>
                    </div>
                </form>
            </section>
        </Layout>
    )
}
