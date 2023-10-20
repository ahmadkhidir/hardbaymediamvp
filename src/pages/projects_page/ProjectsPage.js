import { PortfolioAppbar } from "../../components/appbar/Appbar"
import { FlatButton, OutsetButton } from "../../components/button/Button"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./ProjectsPage.module.scss"
import img1 from "./assets/PROJECTS.png"
import img2 from "./assets/Group 1100.png"
import img3 from "./assets/Group 1255.png"
import img4 from "./assets/Group 1390.png"
import img5 from "./assets/Group 1391.png"
import img6 from "./assets/Group 1392.png"
import img7 from "./assets/Group 1393.png"
import img8 from "./assets/Group 1397.png"
import img9 from "./assets/Group 1428.png"
import { StartAProject } from "../../components/content/Content"
import { useNavigate } from "react-router-dom"


export function ProjectsPage(props) {
    const navigate = useNavigate()
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2><span className={styles.important}>Explore</span> the endless possibilities</h2>
                        <p>of great brand designs, website design, mobile app design, website and app development, communication design, product design, products and brand promotion and marketing.</p>
                        <div className={styles.row}>
                            <OutsetButton onClick={() => navigate('#')} theme={"white"}>BRANDING</OutsetButton>
                            <OutsetButton onClick={() => navigate('#')} theme={"white"}>WEB DESIGN</OutsetButton>
                            <OutsetButton onClick={() => navigate('#')} theme={"white"}>COMM DESIGN</OutsetButton>
                            <OutsetButton onClick={() => navigate('#')} theme={"white"}>PRODUCT DESIGN</OutsetButton>
                            <OutsetButton onClick={() => navigate('#')} theme={"white"}>MARKETING & PROMOTION</OutsetButton>
                            {/* <OutsetButton theme={"white"}>PRODUCT DESIGN</OutsetButton>
                            <OutsetButton theme={"white"}>MARKETING & PROMOTION</OutsetButton> */}
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </header>
            <section className={styles.projects}>
                <div className={styles.inner}>
                    <div className={`${styles.row}`}>
                        <img src={img4} alt="" onClick={() => navigate("/projects/zirr")} />
                        <img src={img5} alt="" onClick={() => navigate("/projects/tia")} />
                    </div>

                    <img src={img6} alt="" onClick={() => navigate("/projects/glowup")} />
                    <div className={`${styles.row} ${styles.reversed}`}>
                        <img src={img7} alt="" />
                        <img src={img9} alt="" />
                    </div>
                    <img src={img2} alt="" />
                    <div className={`${styles.row} ${styles.reversed}`}>
                        <img src={img3} alt="" />
                        <img src={img8} alt="" />
                    </div>
                </div>

            </section>
            <StartAProject />
        </Layout>
    )
}