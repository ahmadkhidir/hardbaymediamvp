import Appbar from "../../components/appbar/Appbar"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./CartPage.module.scss"
import cartIc from "./assets/cart.png"
import arrowDownIc from "./assets/arrowDown.svg"
import { DropdownCollapsible } from "../../components/dropdown/Dropdown"
import { Button, FlatButton } from "../../components/button/Button"
import { MarketingMaterialProducts, MoreProducts } from "../../widgets/products/Products"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { removeFromCart } from "../../redux/slices/cartSlice"

export function CartPage(props) {
    // const auth = useSelector(state => state.auth)
    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (auth.authToken === null) {
    //         navigate("/auth")
    //     }
    // }, [])
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
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
                            <h3>{cart.length}</h3>
                        </div>
                    </div>
                    {cart.map((value) =>
                        <div className={styles.cartItem}>
                            <div className={styles.image}>
                                {/* <div className={styles.discount}>10%</div> */}
                                <img src={value.images[0].image} alt="" />
                            </div>
                            <div className={styles.content}>
                                <h4>{value.name !== null && value.name}</h4>
                                <h5>100 Pieces</h5>
                                <h5>{(value.price !== null) && value.price.price}</h5>
                            </div>
                            <div className={styles.navs}>
                                <button className={styles.orange}>Checkout</button>
                                <button className={styles.white}>Edit</button>
                                <button className={styles.white} onClick={() => dispatch(removeFromCart(value.id))}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.other}>
                    <MarketingMaterialProducts title="Recently Viewed Items" />
                </div>
                <div className={styles.other}>
                    <MarketingMaterialProducts title="Products You May Also Like" />
                </div>
            </section>

            <div className={styles.row}>
                <Button theme={"orange"} className={styles.btn}>NEEDS HELP</Button>
            </div>

        </Layout>
    )
}