import { useNavigation, useSearchParams } from "react-router-dom";
import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import { ClearanceSalesProducts, MoreProducts, SearchResultProducts, MarketingMaterialProducts } from "../../widgets/products/Products";
import styles from "./SearchResultPage.module.scss";
import { useProductsBySearchName } from "../../redux/hooks";
import { Status } from "../../utilities/helper";
import { ErrorCard, LoadingCard } from "../../components/card/Card";

export default function SearchResultPage(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q") ?? ""
    const [status, data, error, reload] = useProductsBySearchName(q);

    if (status === Status.failed) {
        return <ErrorCard error={error} reload={reload} />
    } else if (status === Status.pending || data === undefined) {
        return <LoadingCard />
    } 
    // return (
    //     Object.entries(data!==undefined ? data.data : []).map(([title, value], index) => (
    //         <MarketingMaterialProducts key={index} title={title} data={value} />
    //     ))
    // )

    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.row}>
                <MarketingMaterialProducts extendable={false} title={`Search Showing ${q.toUpperCase()}`} data={data} />
            </section>
            {/* <MoreProducts q={q} /> */}
            {/* <MarketingMaterialProducts title={"Products You May Also Like"} /> */}
            <ClearanceSalesProducts />
        </Layout>
    )
}