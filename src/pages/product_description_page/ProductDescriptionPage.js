import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import styles from "./ProductDescriptionPage.module.scss"
import img1 from "./assets/img1.png"
import gift from "./assets/gift.svg"
import { AddBox, GifBox, RateReview, ReduceCapacity, StarRate, StarRateOutlined, StarRateRounded } from "@mui/icons-material";
import { Button, FlatButton } from "../../components/button/Button";
import { useState } from "react";
import { DropdownCollapsible } from "../../components/dropdown/Dropdown";
import { ClearanceSalesProducts, MarketingMaterialProducts, MoreProducts } from "../../widgets/products/Products";

export default function ProductDescriptionPage(props) {
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.productDescriptionPage}>
                <div className={styles.inner}>
                    <div className={styles.main}>
                        <div className={styles.productFace}>
                            <div className={styles.priceTag}>
                                <h6>$80,000</h6>
                                <h5>#40,000</h5>
                            </div>
                            <div className={styles.faceCarousel}>
                                {/* Images */}
                                <img src={img1} alt="carousel-1" />
                            </div>
                            <div className={styles.productReview}>
                                <h5>Jotter</h5>
                                {/* Rate System */}
                                <div className={styles.rateSystem}>
                                    <StarRateRounded />
                                    <StarRateRounded />
                                    <StarRateRounded />
                                    <StarRateOutlined />
                                </div>
                                <p>(4.0/5) 20 Reviews</p>
                            </div>
                            <div className={styles.secondaryFace}>
                                <img src={img1} alt="carousel-1" />
                                <img src={img1} alt="carousel-1" />
                                <img src={img1} alt="carousel-1" />
                                <img src={img1} alt="carousel-1" />
                            </div>
                        </div>
                        {/* Callapsible */}
                        <DropdownCollapsible
                            icon={gift}
                            title={"Product Description"}
                        >
                            <div className={styles.textonlyField}>
                                <p>Do you prefer being a softie? The rich velvet luxe look of Pandora in a soft grey pastel will create a more gentle feel in the bedroom. Smooth to the touch and with a vertical tubular headboard design it brings a showroom vibe to your home. Pop it open from the foot of the bed using the ingenious gas-lift mechanism and hey presto, loads of underbed storage appears. Hide all your extra linen and duvets, surplus clothes and rarely worn shoes there. With sprung slats - it gives a great foundation for your double mattress of choice.</p>
                            </div>
                        </DropdownCollapsible>
                        <DropdownCollapsible
                            icon={gift}
                            title={"Customers' Reviews"}
                            className={styles.reviews}
                        >
                            <div className={styles.ratings}>
                                <h3>4.0/5.0</h3>
                                <div>
                                    <div className={styles.rateSystem}>
                                        <StarRateRounded />
                                        <StarRateRounded />
                                        <StarRateRounded />
                                        <StarRateOutlined />
                                    </div>
                                    <h6>4 Reviews</h6>
                                </div>
                            </div>
                            <div className={styles.linearRatings}>
                                <div className={styles.line}>
                                    <div className={styles.col1}>5 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>20</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>4 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>11</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>3 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>5</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>2 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>2</div>
                                </div>
                                <div className={styles.line}>
                                    <div className={styles.col1}>1 Star</div>
                                    <div className={styles.col2}></div>
                                    <div className={styles.col3}>8</div>
                                </div>
                            </div>
                            <div className={styles.commentField}>
                                <div className={styles.comment}>
                                    <div className={styles.head}>
                                        <h5>Patricia Smith</h5>
                                        <div className={styles.rateSystem}>
                                            <StarRateRounded />
                                            <StarRateRounded />
                                            <StarRateRounded />
                                            <StarRateOutlined />
                                        </div>
                                        <h6>(4.0/5.0)</h6>
                                    </div>
                                    <p>The product is awesome, I love it. I would recommend it several times. Thanks.</p>
                                </div>
                                <div className={styles.timeStamp}>January 13, 2021</div>
                            </div>

                            <div className={styles.commentField}>
                                <div className={styles.comment}>
                                    <div className={styles.head}>
                                        <h5>Patricia Smith</h5>
                                        <div className={styles.rateSystem}>
                                            <StarRateRounded />
                                            <StarRateRounded />
                                            <StarRateRounded />
                                            <StarRateOutlined />
                                        </div>
                                        <h6>(4.0/5.0)</h6>
                                    </div>
                                    <p>The product is awesome, I love it. I would recommend it several times. Thanks.</p>
                                </div>
                                <div className={styles.timeStamp}>January 13, 2021</div>
                            </div>

                            <div className={styles.commentField}>
                                <div className={styles.comment}>
                                    <div className={styles.head}>
                                        <h5>Patricia Smith</h5>
                                        <div className={styles.rateSystem}>
                                            <StarRateRounded />
                                            <StarRateRounded />
                                            <StarRateRounded />
                                            <StarRateOutlined />
                                        </div>
                                        <h6>(4.0/5.0)</h6>
                                    </div>
                                    <p>The product is awesome, I love it. I would recommend it several times. Thanks.</p>
                                </div>
                                <div className={styles.timeStamp}>January 13, 2021</div>
                            </div>
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