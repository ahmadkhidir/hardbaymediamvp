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
                            <OutsetButton onClick={() => navigate('/projects/glowup')} theme={"white"}>GLOWUP BEAUTY</OutsetButton>
                            <OutsetButton onClick={() => navigate('/projects/zirr')} theme={"white"}>ZIRR</OutsetButton>
                            <OutsetButton onClick={() => navigate('/projects/tia')} theme={"white"}>TIA LOGISTICS</OutsetButton>
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
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
            </section>
            <StartAProject />
        </Layout>
    )
}