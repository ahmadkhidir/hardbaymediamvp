import styles from "./Card.module.scss"
import { Add, Error, Favorite, Share } from "@mui/icons-material";
import { FlatButton } from "../button/Button";
import img1 from "./assets/img1.png"
import { Link, useNavigate } from "react-router-dom";

export function ProductCard({ value }) {
    const navigate = useNavigate()
    console.log("Value",value)
    return (
        <section className={styles.product}>
            <div className={styles.head}>
                <div className={styles.discount}>-10%</div>
                <div className={styles.btns}>
                    <Add fontSize="small" />
                    <Favorite fontSize="small" />
                    <Share fontSize="small" />
                    <FlatButton theme={"orange"}>ORDER NOW</FlatButton>
                </div>
            </div>
            <Link to={`/print/products/${value.id}/details`} className={styles.body}>
                <img src={value.images[0].image} alt="product" />
            </Link>
            <div className={styles.foot}>
                <div>
                    <h5>{value.name !== null && value.name}</h5>
                </div>
                <div className={styles.info}>
                    <div>
                        <h6>100pcs</h6>
                    </div>
                    <div>
                        <h4>{(value.price !== null) && value.price.price}</h4>
                        {/* <h5>#10,000</h5> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function MiniProductCard(props) {
    return (
        <section className={styles.miniProductCard}>
            <div className={styles.image}>
                <img src={img1} alt="product" />
            </div>
            <label>BUSINESS CARD</label>
        </section>
    )
}

export function LoadingCard(props) {
    return (
        <div className={styles.loadingCard}>
            <div className={styles.loadingCardRoller}></div>
        </div>
    )
}

export function ErrorCard({ error, reload }) {
    return (
        <div className={styles.failedCard}>
            <div className={styles.row}>
                <Error className={styles.icon} />
                <h5>{error}</h5>
            </div>

            {reload && <FlatButton theme={"white"} onClick={reload}>Reload</FlatButton>}
        </div>
    )
}