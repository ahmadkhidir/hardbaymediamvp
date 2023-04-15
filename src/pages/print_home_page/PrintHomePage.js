import styles from "./PrintHomePage.module.scss";
import Appbar from "../../components/appbar/Appbar";
import Layout from "../../components/layout/Layout";
import img1 from "./assets/img1.png";
import { OutsetButton } from "../../components/button/Button";
import { BestSellingProducts, MarketingMaterialProducts } from "../../widgets/products/Products";
import { SlideFadeAnimation } from "../../components/animation/Animation";

export function PrintHomePage(props) {
    return (
        <Layout appBar={<Appbar />}>
            <SlideFadeAnimation>
                <section className={styles.printHomePage}>
                    <header>
                        <div className={styles.inner}>
                            <div className={styles.content}>
                                <h2><span className={styles.orange}>Order</span> quality prints anywhere you are!</h2>
                                <p>Personalise your premium business cards, business stationery, marketing materials, flyers, promotional items, wedding stationery, paper bags, tote bags, branded box, apparels and more, from anywhere and get them delivered to your best location.</p>
                                <OutsetButton theme={"orange"}>ORDER NOW</OutsetButton>
                            </div>
                            <div className={styles.image}>
                                <img src={img1} alt="Order quality prints anywhere you are!" />
                            </div>
                        </div>
                    </header>
                    <section className={styles.row}>
                        {/* <aside className={styles.aside}></aside> */}
                        <MarketingMaterialProducts />
                        <aside className={styles.aside}>
                            <BestSellingProducts />
                        </aside>
                    </section>
                </section>
            </SlideFadeAnimation>
        </Layout>
    )
}