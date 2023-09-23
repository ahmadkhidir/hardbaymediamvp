import { PortfolioAppbar } from "../../components/appbar/Appbar"
import { FlatButton, OutsetButton } from "../../components/button/Button"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./GlowupPage.module.scss"
import { Projects, StartAProject } from "../../components/content/Content"
import img1 from "./assets/glowup-1.png"
import img2 from "./assets/glowup-2.png"
import img3 from "./assets/glowup-3.png"
import img4 from "./assets/glowup-4.png"


export default function GlowupPage(props) {
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <section className={styles.layout}>
                <img
                    src={img1}
                    alt="glowup-1"
                    className={styles.img}
                 />
                 <img
                    src={img2}
                    alt="glowup-2"
                    className={styles.img}
                 />
                 <img
                    src={img3}
                    alt="glowup-3"
                    className={styles.img}
                 />
                 <img
                    src={img4}
                    alt="glowup-4"
                    className={styles.img}
                 />
            </section>
            <Projects />
            <StartAProject />
        </Layout>
    )
}