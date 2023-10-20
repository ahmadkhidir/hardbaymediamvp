import styles from "./Footer.module.scss"
import logo1 from "./assets/logo_full_green.png"
import logo2 from "./assets/HM LOGO 2225 x 517.png"
import { FlatButton } from "../button/Button"

export function Footer({type=1}) {
    return (
        <footer className={`${styles.footer} ${type===2 && styles.type2}`}>
            <div className={styles.navs}>
                <section>
                    <img src={type === 1 ? logo1 : logo2} alt="logo" />
                    <a><span>T.</span>+234 7069 360 311</a>
                    <a><span>E.</span>Contact@hardbaymedia.net</a>
                    <a><span>A.</span>Shop 156, Arisekola Shopping complex, Bodija, Ibadan, Nigeria</a>
                    <a><span>A2.</span>Shop 156, Arisekola Shopping complex, Bodija, United Kingdom</a>
                </section>
                <section className={styles.rows}>
                    <div>
                        <h5>ABOUT US</h5>
                        <a>About</a>
                        <a>What We Do</a>
                        <a>Projects</a>
                        <a>Our Process</a>
                        <a>Testimonies</a>
                    </div>
                    <div>
                        <h5>SERVICES</h5>
                        <a>Brand Design</a>
                        <a>Web Design</a>
                        <a>Web Development</a>
                        <a>Marketing</a>
                        <a>Online Print</a>
                    </div>
                    <div>
                        <h5>FOLLOW US</h5>
                        <a>Instagram</a>
                        <a>Behance</a>
                        <a>Pinterest</a>
                        <a>Facebook</a>
                        <a>Twitter</a>
                    </div>
                </section>
                <section>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Receive up to date promotional offers, news, materials etc.</p>
                    <form className={styles.newsletter}>
                        <input placeholder="Email Address" className={ type === 1 ? styles.green : styles.white} />
                        <FlatButton theme={ type === 1 ? "white" : "purple"}>SUBSCRIBE</FlatButton>
                    </form>
                </section>
            </div>
        </footer>
    )
}