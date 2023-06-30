import { useNavigation, useParams } from 'react-router-dom'
import Appbar from '../../components/appbar/Appbar'
import { ErrorCard, LoadingCard, ProductCard } from '../../components/card/Card'
import { Footer } from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import { useProducts, useProductsByCategory } from '../../redux/hooks'
import styles from './ProductsPage.module.scss'
import { Status } from '../../utilities/helper'
import { MarketingMaterialProducts } from '../../widgets/products/Products'

export function ProductsPage(props) {
    const { category } = useParams();
    const [status, data, error, reload] = useProducts();
    console.log(data);
    if (status === Status.failed) {
        return <ErrorCard error={error} reload={reload} />
    } else if (status === Status.pending || data === undefined) {
        return <LoadingCard />
    } else {
        return (
            <Layout appBar={<Appbar />} footer={<Footer />}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {/* {console.log(data.data.data.results)} */}
                        {Object.entries(data.data).map(([title, value], index) => (
                            <MarketingMaterialProducts key={index} title={title} data={value} />
                        ))}
                    </div>

                </div>
            </Layout>
        )
    }
} 