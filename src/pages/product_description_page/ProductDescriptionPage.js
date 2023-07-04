import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import styles from "./ProductDescriptionPage.module.scss"
import img1 from "./assets/img1.png"
import gift from "./assets/gift.svg"
import { AddBox, GifBox, RateReview, ReduceCapacity, StarRate, StarRateOutlined, StarRateRounded } from "@mui/icons-material";
import { Button, FlatButton } from "../../components/button/Button";
import { useEffect, useState } from "react";
import { DropdownCollapsible } from "../../components/dropdown/Dropdown";
import { ClearanceSalesProducts, MarketingMaterialProducts, MoreProducts } from "../../widgets/products/Products";
import { useProductById } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { Status } from "../../utilities/helper";
import { ErrorCard, LoadingCard } from "../../components/card/Card";

export default function ProductDescriptionPage(props) {
    const { id } = useParams();
    const [status, data, error, reload] = useProductById(id);
    const [currentCarouselImage, setCurrentCarouselImage] = useState()
    const [ratingList, setRatingList] = useState([0,0,0,0,0])
    useEffect(() => {
        if (status === Status.success) {
            setCurrentCarouselImage(data.data.image_link[0].image)
            let _ratingList = ratingList
            data.data.customer_feedback.forEach((element, index) => {
                _ratingList[element.rating-1] ++;
            });  
            // console.log(_ratingList)
            setRatingList(_ratingList)
        }
        return () => {
            setRatingList([0,0,0,0,0])
        }
    }, [status, data])
    console.log(status, data)
    if (status === Status.failed) {
        return <ErrorCard error={error} reload={reload} />
    } else if (status === Status.pending || data === undefined) {
        return <LoadingCard />
    }

    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.productDescriptionPage}>
                <div className={styles.inner}>
                    <div className={styles.main}>
                        <div className={styles.productFace}>
                            <div className={styles.priceTag}>
                                <h6 title="actual price">$80,000</h6>
                                <h5 title="discount price">${data.data.price.price}</h5>
                            </div>
                            <div className={styles.faceCarousel}>
                                {/* Images */}
                                <img src={currentCarouselImage} alt="current crousel image" />
                            </div>
                            <div className={styles.productReview}>
                                <h5>{data.data.name}</h5>
                                {/* Rate System */}
                                <div className={styles.rateSystem}>
                                    {Array.from({ length: 5 }, (_, i) => i + 1).map(
                                        (i) => (i <= data.data.rating.rating)
                                            ? <StarRateRounded />
                                            : <StarRateOutlined />
                                    )}
                                </div>
                                <p>({data.data.rating.rating}/5) {data.data.customer_feedback.length} Reviews</p>
                            </div>
                            <div className={styles.secondaryFace}>
                                {data.data.image_link.map(v => <img src={v.image} alt={`image-${v.view}`} onClick={() => setCurrentCarouselImage(v.image)} />)}
                            </div>
                        </div>
                        {/* Callapsible */}
                        <DropdownCollapsible
                            icon={gift}
                            title={"Product Description"}
                        >
                            <div className={styles.textonlyField}>
                                <p>{data.data.description}</p>
                            </div>
                        </DropdownCollapsible>
                        <DropdownCollapsible
                            icon={gift}
                            title={"Customers' Reviews"}
                            className={styles.reviews}
                        >
                            <div className={styles.ratings}>
                                <h3>{data.data.rating.rating}/5.0</h3>
                                <div>
                                    <div className={styles.rateSystem}>
                                        {Array.from({ length: 5 }, (_, i) => i + 1).map(
                                            (i) => (i <= data.data.rating.rating)
                                                ? <StarRateRounded />
                                                : <StarRateOutlined />
                                        )}
                                    </div>
                                    <h6>{data.data.customer_feedback.length} Reviews</h6>
                                </div>
                            </div>
                            <div className={styles.linearRatings}>
                                <div className={styles.line}>
                                    <div className={styles.col1}>5 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>{ratingList[4]}</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>4 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>{ratingList[3]}</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>3 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>{ratingList[2]}</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>2 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>{ratingList[1]}</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>1 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>{ratingList[0]}</div>
                                </div>
                            </div>
                            {data.data.customer_feedback.map(v =>
                                <div className={styles.commentField}>
                                    <div className={styles.comment}>
                                        <div className={styles.head}>
                                            <h5>{v.user__email}</h5>
                                            <div className={styles.rateSystem}>
                                                {Array.from({ length: 5 }, (_, i) => i + 1).map(
                                                    (i) => (i <= v.rating)
                                                        ? <StarRateRounded />
                                                        : <StarRateOutlined />
                                                )}
                                            </div>
                                            <h6>({v.rating}/5.0)</h6>
                                        </div>
                                        <p>{v.comment}<br/>{v.recommendation}</p>
                                    </div>
                                    <div className={styles.timeStamp}>January 13, 2021</div>
                                </div>
                            )}
                        </DropdownCollapsible>

                        <DropdownCollapsible
                            icon={gift}
                            title={"Delivery"}
                        >
                            <div className={styles.textonlyField}>
                                <h4>Estimate time</h4>
                                <p>Delivery by <b>03 June - 08 June</b> when you order within next 24hrs</p>
                                <h4>Cost</h4>
                                <p><b>#1000</b> within Ibadan</p>
                                <p><b>#2000</b> Nationwide</p>
                            </div>
                        </DropdownCollapsible>

                        <DropdownCollapsible
                            icon={gift}
                            title={"Delivery"}
                        >
                            <div className={styles.textonlyField}>
                                <h4>Estimate time</h4>
                                <p>Within 1-5 working days</p>
                                <h4>Pick Up Stations</h4>
                                <h5>Ibadan</h5>
                                <p>No 1, Shop 45, Arisekola shopping complex. Bodija, Ibadan</p>
                                <h5>Lagos</h5>
                                <p>No 1, Shop 45, Arisekola shopping complex. Bodija, Ibadan</p>
                                <h5>Osogbo</h5>
                                <p>No 1, Shop 45, Arisekola shopping complex. Bodija, Ibadan</p>
                            </div>
                        </DropdownCollapsible>
                    </div>
                    <div className={styles.aside}>
                        <FlatButton theme={"orange"}>BUY NOW</FlatButton>
                        <FlatButton theme={"white"}>ADD TO CART</FlatButton>
                        <FlatButton theme={"white"}>WISHLIST</FlatButton>
                        <FlatButton theme={"white"}>SHARE</FlatButton>
                    </div>
                </div>
                <div className={styles.rowCenter}><Button theme={"orange"}>Need Help?</Button></div>
            </section>

            <MarketingMaterialProducts title="Products You May Also Like" />
            <ClearanceSalesProducts />
        </Layout>
    )
}