import { PortfolioAppbar } from "../../components/appbar/Appbar"
import { FlatButton, OutsetButton } from "../../components/button/Button"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./ZirrPage.module.scss"
import { Projects, StartAProject } from "../../components/content/Content"
import img1 from "./assets/zirr-1.png"
import img2 from "./assets/zirr-2.png"
import img3 from "./assets/zirr-3.png"


export default function ZirrPage(props) {
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <section className={styles.layout}>
                <img
                    src={img1}
                    alt="zirr-1"
                    className={styles.img}
                 />
                 <img
                    src={img2}
                    alt="zirr-2"
                    className={styles.img}
                 />
                 <img
                    src={img3}
                    alt="zirr-3"
                    className={styles.img}
                 />
            </section>
            <Projects />
            <StartAProject />
        </Layout>
    )
}