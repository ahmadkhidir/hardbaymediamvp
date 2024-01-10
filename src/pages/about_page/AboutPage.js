import { PortfolioAppbar } from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout, { layoutBodyRef } from "../../components/layout/Layout";
import styles from "./AboutPage.module.scss"
import img1 from "./assets/PROJECTS HEADER IMAGE.png"
import img2 from "./assets/1.png"
import img3 from "./assets/28.png"
import img4 from "./assets/3.png"
import img5 from "./assets/8.png"
import { OurClient, StartAProject } from "../../components/content/Content";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useCounter } from "../../utilities/hooks";

export function Aboutpage(props) {
    const [carousel, setCarousel] = useState(img2)

    const screens = [img2, img3, img4] //, img5

    const teams = [
        {
            name: "Yusuf Adio Babatunde",
            role: "Creative Director",
            image: require("./assets/ADIO_YUSUF_BABATUNDE_CREATIVE_DIRECTOR.jpg")
        },
        {
            name: "Adedugbe Bamidele",
            role: "Developer",
            image: require("./assets/Adedugbe Bamidele_DEVELOPER.jpeg")
        },
        {
            name: "Shittu Sarah Victoria",
            role: "Content Creator",
            image: require("./assets/SARAH SHITTU_CONTENT CREATOR.png")
        },
        {
            name: "Ahmad Usman",
            role: "Developer",
            image: require("./assets/AHMAD USMAN_DEVELOPER.jpg")
        },
        {
            name: "Dada Adepoju",
            role: "UI/UX Designer",
            image: require("./assets/DADA ADEPOJU_UIUX DESIGNER.jpg")
        },
    ]


    const enrichRef = useRef(null)
    const promoteRef = useRef(null)
    const _createRef = useRef(null)
    useCounter({
        targetRef: enrichRef,
        max: 5000,
        incr: 200,
        ms: 100,
    })
    useCounter({
        targetRef: promoteRef,
        max: 500,
        incr: 50,
        ms: 100,
    })
    useCounter({
        targetRef: _createRef,
        max: 1000,
        incr: 100,
        ms: 100,
    })

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
                    <img src={carousel} alt="display screen" />
                    {screens.map((item, index) => <img key={index}
                        onClick={() => setCarousel(item)}
                        src={item} alt={`screen-${index}`} />
                    )}
                    {/* <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" /> */}
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
                            <h3><span ref={enrichRef}>0</span>+</h3>
                            <h4>STARTUPS</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h4>PROMOTE</h4>
                        <div className={styles.list}>
                            <h3><span ref={promoteRef}>0</span>+</h3>
                            <h4>STARTUPS</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <h4>CREATE</h4>
                        <div className={styles.list}>
                            <h3><span ref={_createRef}>0</span>+</h3>
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
                    {teams.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.top}>
                                <div className={styles.image}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={styles.info}>
                                    <h4>{item.name}</h4>
                                    <h5>{item.role}</h5>
                                </div>
                            </div>
                            {/* <div className={styles.overlay}></div> */}
                        </div>
                    ))}
                </section>
            </section>
            <OurClient />
            <StartAProject />
        </Layout>
    )
}

// Work life balance