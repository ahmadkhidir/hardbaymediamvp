import { PortfolioAppbar } from "../../components/appbar/Appbar"
import { FlatButton, OutsetButton } from "../../components/button/Button"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./TiaPage.module.scss"
import { Projects, StartAProject } from "../../components/content/Content"
import img1 from "./assets/tia-1.png"
import img2 from "./assets/tia-2.png"
import img3 from "./assets/tia-3.png"


export default function TiaPage(props) {
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <section className={styles.layout}>
                <img
                    src={img1}
                    alt="tia-1"
                    className={styles.img}
                 />
                 <img
                    src={img2}
                    alt="tia-2"
                    className={styles.img}
                 />
                 <img
                    src={img3}
                    alt="tia-3"
                    className={styles.img}
                 />
            </section>
            <Projects />
            <StartAProject />
        </Layout>
    )
}