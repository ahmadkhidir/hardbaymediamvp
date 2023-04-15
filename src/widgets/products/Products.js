import styles from "./Products.module.scss";
import { FlatButton } from "../../components/button/Button";
import { MiniProductCard, ProductCard } from "../../components/card/Card";

export function MarketingMaterialProducts(props) {
    return (
        <section className={styles.marketingMaterialProducts}>
            <header>
                <h4>Marketing materials</h4>
                <FlatButton theme={"white"}>VIEW ALL</FlatButton>
            </header>
            <section className={styles.products}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </section>
        </section>
    )
}

export function BestSellingProducts(props) {
    return (
        <section className={styles.bestSellingProducts}>
            <header>
                <h4>Best Selling</h4>
            </header>
            <section className={styles.content}>
                <MiniProductCard />
                <MiniProductCard />
                <MiniProductCard />
            </section>
        </section>
    )
}