import Appbar from "../../components/appbar/Appbar"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./CartPage.module.scss"
import cartIc from "./assets/cart.png"
import arrowDownIc from "./assets/arrowDown.svg"
import { DropdownCollapsible } from "../../components/dropdown/Dropdown"
import { Button, FlatButton } from "../../components/button/Button"
import { MarketingMaterialProducts, MoreProducts } from "../../widgets/products/Products"

export function CartPage(props) {
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.cart}>
                <div className={styles.inner}>
                    <div className={styles.cartBasket}>
                        <div className={styles.avatar}>
                            <img src={cartIc} alt="avatar" />
                        </div>
                        <div className={styles.texts}>
                            <h3>My Cart</h3>
                        </div>
                        <div className={styles.count}>
                            <h3>3</h3>
                        </div>
                    </div>
                    <div className={styles.cartItem}>
                        <div className={styles.image}>
                            <div className={styles.discount}>10%</div>
                            <img src={cartIc} alt="" />
                        </div>
                        <div className={styles.content}>
                            <h4>JOTTER SOFT BIND</h4>
                            <h5>100 Pieces</h5>
                            <h5>$200 000</h5>
                        </div>
                        <div className={styles.navs}>
                            <button className={styles.orange}>Checkout</button>
                            <button className={styles.white}>Edit</button>
                            <button className={styles.white}>Delete</button>
                        </div>
                    </div>

                    <div className={styles.cartItem}>
                        <div className={styles.image}>
                            <div className={styles.discount}>10%</div>
                            <img src={cartIc} alt="" />
                        </div>
                        <div className={styles.content}>
                            <h4>JOTTER SOFT BIND</h4>
                            <h5>100 Pieces</h5>
                            <h5>$200 000</h5>
                        </div>
                        <div className={styles.navs}>
                            <button className={styles.orange}>Checkout</button>
                            <button className={styles.white}>Edit</button>
                            <button className={styles.white}>Delete</button>
                        </div>
                    </div>

                    <div className={styles.cartItem}>
                        <div className={styles.image}>
                            <div className={styles.discount}>10%</div>
                            <img src={cartIc} alt="" />
                        </div>
                        <div className={styles.content}>
                            <h4>JOTTER SOFT BIND</h4>
                            <h5>100 Pieces</h5>
                            <h5>$200 000</h5>
                        </div>
                        <div className={styles.navs}>
                            <button className={styles.orange}>Checkout</button>
                            <button className={styles.white}>Edit</button>
                            <button className={styles.white}>Delete</button>
                        </div>
                    </div>
                    <MarketingMaterialProducts />
                </div>
            </section>
            <MoreProducts />
            <div className={styles.row}>
                <Button theme={"orange"} className={styles.btn}>NEEDS HELP</Button>
            </div>

        </Layout>
    )
}