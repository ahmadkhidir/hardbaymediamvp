import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import { ClearanceSalesProducts, MoreProducts, SearchResultProducts } from "../../widgets/products/Products";
import styles from "./SearchResultPage.module.scss";

export default function SearchResultPage(props) {
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.row}>
                <aside className={styles.aside}></aside>
                <section>
                    <SearchResultProducts />
                </section>
                <aside className={styles.aside}>
                </aside>
            </section>
            <MoreProducts />
            <ClearanceSalesProducts />
        </Layout>
    )
}