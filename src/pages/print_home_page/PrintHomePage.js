import styles from "./PrintHomePage.module.scss";
import Appbar from "../../components/appbar/Appbar";
import Layout from "../../components/layout/Layout";
import img1 from "./assets/img1.png";
import { FlatButton, OutsetButton } from "../../components/button/Button";
import { BestSellingProducts, BirthdayPackageProducts, ClearanceSalesProducts, MarketingMaterialProducts, OfficeStationaryProducts } from "../../widgets/products/Products";
import { SlideFadeAnimation } from "../../components/animation/Animation";
import { useDispatch } from "react-redux";
import { loginUserThunk, registerUserThunk } from "../../redux/slices/authSlice";
import { useEffect, useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { getProducts } from "../../redux/api";
import { useProducts } from "../../redux/hooks";
import { Status } from "../../utilities/helper";
import { Alert, AlertTitle, Button as ButtonMaterial, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, ThemeProvider, createTheme } from "@mui/material"
import { Refresh } from "@mui/icons-material";

export function PrintHomePage(props) {
    const [status, data, error, reload] = useProducts();
    console.log(data)
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <Snackbar open={status === Status.pending} autoHideDuration={null}>
                <Alert severity="info" sx={{ width: '100%' }}>
                    STATUS: {status}
                </Alert>
            </Snackbar>
            <Snackbar open={status === Status.failed} autoHideDuration={null}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    STATUS: {error}
                    <ButtonMaterial onClick={reload} variant="text" size="small" color="error" autoFocus><Refresh /></ButtonMaterial>
                </Alert>
            </Snackbar>
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
                        <section className={styles.content}>
                            {data !== undefined &&
                                // data.map(value => <p>{value}</p>)
                                // console.log(data.data)
                                Object.entries(data.data).map(([title, value], index) => <MarketingMaterialProducts key={index} title={title} data={value} />)
                            }
                            {/* <MarketingMaterialProducts />
                            <OfficeStationaryProducts />
                            <BirthdayPackageProducts /> */}
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