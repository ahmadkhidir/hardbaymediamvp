import { PortfolioAppbar } from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import styles from "./HomePage.module.scss"
import img1 from "./assets/img1.png"
import img2 from "./assets/BRAND DESIGN.png"
import img3 from "./assets/MARKETING.png"
import img4 from "./assets/ONLINE PRINT.png"
import img9 from "./assets/man_eating_healthy_43050240.png"


import { Button, LinkButton, OutsetButton } from "../../components/button/Button";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { OurClient, Projects, StartAProject } from "../../components/content/Content";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {
    const navigate = useNavigate()
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2>We make it, you love it</h2>
                        <p>Explore the endless possibilities of great brand  design, website design and development, unique marketing strategies and quality prints.</p>
                    </div>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </header>
            <section className={styles.info}>
                <div className={styles.inner}>
                    <section className={styles.item}>
                        <div className={styles.content}>
                            <h3>Brand Design</h3>
                            <p>We tell your brand stories with great UI and UX  principles and skills; communication design, visuals and  design strategies that communicate brand strength,  loyalty, shared value and passion to  your target customers.</p>
                            <OutsetButton onClick={() => navigate('/print')} theme={"green"}>Explore</OutsetButton>
                        </div>
                        <div className={styles.image}>
                            <img src={img2} alt="brand design" />
                        </div>
                    </section>
                    <section className={styles.item}>
                        <div className={styles.content}>
                            <h3>Marketing</h3>
                            <p>We develop unique, selling digital marketing strategies to achieve a common goal with a process of evaluating the feasibilities of  your products and service, through analysis, SEO optimization, planning, launching, implementation and control.</p>
                            <OutsetButton onClick={() => navigate('/print')} theme={"green"}>Explore</OutsetButton>
                        </div>
                        <div className={styles.image}>
                            <img src={img3} alt="marketing" />
                        </div>
                    </section>
                    <section className={styles.item}>
                        <div className={styles.content}>
                            <h3>Online Print</h3>
                            <p>Get MORE! Quality, Satisfaction and Love when you order cost-effective, quality, and custom prints and design for your businesses and personal need. Get professional cooperate and promotional prints such as business cards, brochures, postcards, stickers, banners, posters etc.</p>
                            <OutsetButton onClick={() => navigate('/print')} theme={"green"}>Order Now</OutsetButton>
                        </div>
                        <div className={styles.image}>
                            <img src={img4} alt="online print" />
                        </div>
                    </section>
                </div>
            </section>
            <Projects />
            <OurClient />
            <section className={styles.testimonies}>
                <section className={styles.carousel}>
                    <Swiper
                        slidesPerView={2}
                        centeredSlides={true}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className={styles.writeup}>
                                <div className={styles.head}>
                                    <img src={img9} className={styles.avatar} alt="" />
                                    <div className={styles.socials}>
                                        <LinkedIn />
                                        <Instagram />
                                        <Twitter />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <p>They are creative and gifted professionals who can assist any business to develop and wax strong. I would highly applaud them for responsiveness, value creation, and ability to implement client's goal.</p>
                                    <h4>IYANUOLUWA Ibinaiye</h4>
                                    <p>CEO TIA Logistics</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.writeup}>
                                <div className={styles.head}>
                                    <img src={img9} className={styles.avatar} alt="" />
                                    <div className={styles.socials}>
                                        <LinkedIn />
                                        <Instagram />
                                        <Twitter />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <p>They are creative and gifted professionals who can assist any business to develop and wax strong. I would highly applaud them for responsiveness, value creation, and ability to implement client's goal.</p>
                                    <h4>IYANUOLUWA Ibinaiye</h4>
                                    <p>CEO TIA Logistics</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </section>
            <StartAProject />
        </Layout>
    )
}
