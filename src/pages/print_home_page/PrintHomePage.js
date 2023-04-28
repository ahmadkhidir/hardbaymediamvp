import styles from "./PrintHomePage.module.scss";
import Appbar from "../../components/appbar/Appbar";
import Layout from "../../components/layout/Layout";
import img1 from "./assets/img1.png";
import { OutsetButton } from "../../components/button/Button";
import { BestSellingProducts, BirthdayPackageProducts, ClearanceSalesProducts, MarketingMaterialProducts, OfficeStationaryProducts } from "../../widgets/products/Products";
import { SlideFadeAnimation } from "../../components/animation/Animation";
import { useDispatch } from "react-redux";
import { loginUserThunk, registerUserThunk } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import { Footer } from "../../components/footer/Footer";

export function PrintHomePage(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loginUserThunk({
            "email": "ahmad@gmail.com",
            "password": "password123"
        }))
        console.log("Done");
    }, [])

    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
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
                        <aside className={styles.aside}></aside>
                        <section>
                            <MarketingMaterialProducts />
                            <OfficeStationaryProducts />
                            <BirthdayPackageProducts />
                        </section>
                        <aside className={styles.aside}>
                            <BestSellingProducts />
                        </aside>
                    </section>
                    <ClearanceSalesProducts />
                </section>
            </SlideFadeAnimation>
        </Layout>
    )
}