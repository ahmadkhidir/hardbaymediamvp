import { useNavigation, useParams } from 'react-router-dom'
import Appbar from '../../components/appbar/Appbar'
import { ErrorCard, LoadingCard, ProductCard } from '../../components/card/Card'
import { Footer } from '../../components/footer/Footer'
import Layout from '../../components/layout/Layout'
import { useProductsByCategory } from '../../redux/hooks'
import styles from './CategoryPage.module.scss'
import { Status } from '../../utilities/helper'

export function CategoryPage(props) {
    const { category } = useParams();
    const [status, data, error, reload] = useProductsByCategory(category);
    console.log(data);
    if (status === Status.failed) {
        return <ErrorCard error={error} reload={reload} />
    } else if (status === Status.pending || data === undefined) {
        return <LoadingCard />
    } else {
        return (
            <Layout appBar={<Appbar />} footer={<Footer />}>
                <div className={styles.container}>
                    <h4>{category}</h4>
                    <div className={styles.row}>
                        {/* {console.log(data.data.data.results)} */}
                        {Object.entries(data.data.results).map(([key, value], index) => (
                            <ProductCard value={value} />
                        ))}
                    </div>

                </div>
                <div className={styles.container}>
                    <h4>Popular Products</h4>
                    <div className={styles.row}>
                        {/* {console.log(data.data.data.results)} */}
                        {Object.entries(data.popular_products).map(([key, value], index) => (
                            <ProductCard value={value} />
                        ))}
                    </div>
                </div>
            </Layout>
        )
    }
} 