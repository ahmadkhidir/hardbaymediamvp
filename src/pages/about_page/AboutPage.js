import { PortfolioAppbar } from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import styles from "./AboutPage.module.scss"
import img1 from "./assets/PROJECTS HEADER IMAGE.png"
import img2 from "./assets/1.png"
import img3 from "./assets/28.png"
import img4 from "./assets/3.png"
import img5 from "./assets/8.png"
import img6 from "./assets/_MG_4817.png"
import img7 from "./assets/WhatsApp Image 2021-07-07 at 15.30.50.png"
import img8 from "./assets/_MG_4637.png"
import img9 from "./assets/_MG_4696.png"
import { OurClient, StartAProject } from "../../components/content/Content";

export function Aboutpage(props) {
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2><span className={styles.important}>Creativity</span> breathe the new spark</h2>
                        <p>We are a design and marketing agency with a team of excellent doers, passionate about using creativity, innovation, strategy, design and technology to develop products, websites, app and promote brands across the world.</p>
                    </div>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </header>
            <section className={styles.about}>
                <section className={styles.head}>
                    <h3>Who we are</h3>
                    <p>Excellent doers dedicated to visualing how brands are accepted by using creative thinking and strategies to tell the brand stories to its target audience.</p>
                </section>
                <section className={styles.items}>
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </section>
            </section>
            <section className={styles.ourMission}>
                <section className={styles.head}>
                    <h3>Our mission</h3>
                    <p>To build brands that will continually and sustainably excel in its competitive market while we continue to make the world a better place for all, creating opportunities for talented and creative individuals.</p>
                </section>
                <section className={styles.items}>
                    <div className={styles.card}>
                        <h4>ENRICH</h4>
                        <div className={styles.list}>
                            <h3>5000+</h3>
                            <h4>STARTUPS</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h4>PROMOTE</h4>
                        <div className={styles.list}>
                            <h3>500+</h3>
                            <h4>STARTUPS</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h4>CREATE</h4>
                        <div className={styles.list}>
                            <h3>1000+</h3>
                            <h4>EMPLOYMENT</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h4>PRINT</h4>
                        <div className={styles.list}>
                            <h3>100%</h3>
                            <h4>QUALITY & SATISFACTION</h4>
                        </div>
                    </div>
                </section>
                <section className={styles.head}>
                    <h3>Our Vision</h3>
                    <p>To partner with great clients eager for success within Nigeria and across the world and continually exploring the endless possibilities of strategies to reach the global audience through our great works.</p>
                </section>
            </section>
            <section className={styles.ourTeam}>
                <section className={styles.head}>
                    <h3>Our Team</h3>
                    <p>Excellent doers ready to innovate with you on your projects.</p>
                </section>
                <section className={styles.items}>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.image}><img src={img6} alt="" /></div>
                            <div className={styles.info}>
                                <h4>Yusuf Adio Babatunde</h4>
                                <h5>Creative Director</h5>
                            </div>

                        </div>
                        {/* <div className={styles.overlay}></div> */}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.image}><img src={img6} alt="" /></div>
                            <div className={styles.info}>
                                <h4>BAY</h4>
                                <h5>Creative Director</h5>
                            </div>

                        </div>
                        {/* <div className={styles.overlay}></div> */}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.image}><img src={img7} alt="" /></div>
                            <div className={styles.info}>
                                <h4>Adedugbe Bamidele</h4>
                                <h5>Developer</h5>
                            </div>

                        </div>
                        {/* <div className={styles.overlay}></div> */}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.image}><img src={img8} alt="" /></div>
                            <div className={styles.info}>
                                <h4>Shittu Sarah Victoria</h4>
                                <h5>Content Creator</h5>
                            </div>

                        </div>
                        {/* <div className={styles.overlay}></div> */}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.image}><img src={img9} alt="" /></div>
                            <div className={styles.info}>
                                <h4>Ayodele</h4>
                                <h5>Graphics Designer</h5>
                            </div>

                        </div>
                        {/* <div className={styles.overlay}></div> */}
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.image}><img src={img7} alt="" /></div>
                            <div className={styles.info}>
                                <h4>Dada Adepoju</h4>
                                <h5>UI/UX Designer</h5>
                            </div>

                        </div>
                        {/* <div className={styles.overlay}></div> */}
                    </div>
                </section>
            </section>
            <OurClient />
            <StartAProject />
        </Layout>
    )
}

// Working life balance