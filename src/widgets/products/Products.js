import styles from "./Products.module.scss";
import { FlatButton } from "../../components/button/Button";
import { MiniProductCard, ProductCard } from "../../components/card/Card";
import img1 from "./assets/img1.png"

export function MarketingMaterialProducts({key, title, data}) {
    return (
        <section key={key} className={styles.marketingMaterialProducts}>
            <header>
                <h4>{title}</h4>
                <FlatButton theme={"white"}>VIEW ALL</FlatButton>
            </header>
            <section className={styles.products}>
                {data !== null && data.map((value) => <ProductCard value={value} />)}
                {/* <ProductCard value={{}} />
                <ProductCard value={{}} />
                <ProductCard value={{}} /> */}
            </section>
        </section>
    )
}

export function OfficeStationaryProducts(props) {
    return (
        <section className={styles.officeStationaryProducts}>
            <header>
                <h4>Office Stationary</h4>
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

export function BirthdayPackageProducts(props) {
    return (
        <section className={styles.birthdayPackageProducts}>
            <header>
                <h4>Birthday Package</h4>
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

export function SearchResultProducts(props) {
    return (
        <section className={styles.searchResultProducts}>
            <header>
                <h4>Search Showing "{props.q.toUpperCase()}"</h4>
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


export function MoreProducts(props) {
    return (
        <section className={styles.moreProducts}>
            <header>
                <h4>Products you may also like</h4>
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

export function ClearanceSalesProducts(props) {
    return (
        <section className={styles.clearanceSalesProducts}>
            <div className={styles.inner}>
                <header>
                    <h4>Clearance Sales</h4>
                    <nav>
                        <button className={styles.active}>Jotter</button>
                        <button>Pen</button>
                        <button>Shirt</button>
                        <button>Lanyard</button>
                        <button>Flyer</button>
                        <button>Sticker</button>
                        <button>Label</button>
                    </nav>
                </header>
                <section className={styles.content}>
                    <div className={styles.display}>
                        <img src={img1} alt="banner" />
                        <div className={styles.mini_bannner}>
                            <img src={img1} alt="banner" />
                            <img src={img1} alt="banner" />
                            <img src={img1} alt="banner" />
                            <img src={img1} alt="banner" />
                        </div>
                    </div>
                    <div className={styles.discount}>
                        <h2>Get <span>50</span>%ff</h2>
                        <FlatButton theme={"orange"}>BUY NOW</FlatButton>
                    </div>
                </section>
            </div>
        </section>
    )
}
