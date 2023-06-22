import { useNavigation,useSearchParams } from "react-router-dom";
import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import { ClearanceSalesProducts, MoreProducts, SearchResultProducts, MarketingMaterialProducts } from "../../widgets/products/Products";
import styles from "./SearchResultPage.module.scss";

export default function SearchResultPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q") ?? ""

    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.row}>
                    {/* <SearchResultProducts q={q} /> */}
                    <MarketingMaterialProducts title={`Search Showing ${q.toUpperCase()}`} />
            </section>
            {/* <MoreProducts q={q} /> */}
            <MarketingMaterialProducts title={"Products You May Also Like"} />
            <ClearanceSalesProducts />
        </Layout>
    )
}