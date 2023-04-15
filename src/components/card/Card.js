import styles from "./Card.module.scss"
import { Add, Favorite, Share } from "@mui/icons-material";
import { FlatButton } from "../button/Button";
import img1 from "./assets/img1.png"

export function ProductCard(props) {
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
            <div className={styles.body}>
                <img src={img1} alt="product" />
            </div>
            <div className={styles.foot}>
                <div>
                    <h5>BUSINESS CARD</h5>
                </div>
                <div className={styles.info}>
                    <div>
                        <h6>100pcs</h6>
                    </div>
                    <div>
                        <h4>#6,000</h4>
                        <h5>#10,000</h5>
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