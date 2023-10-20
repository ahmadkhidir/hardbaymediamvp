import styles from "./Content.module.scss"

import cli1 from "./assets/HERXITY.png"
import cli2 from "./assets/ISP.png"
import cli3 from "./assets/Layer_x-1.png"
import cli4 from "./assets/Layer_x-2.png"
import cli5 from "./assets/Layer_x-3.png"
import cli6 from "./assets/Layer_x0020_1.png"
import cli7 from "./assets/MARYANNE.png"
import cli8 from "./assets/MORELL.png"
import cli9 from "./assets/MOVIE BLUFFS.png"
import cli10 from "./assets/TIA.png"
import cli11 from "./assets/ZIRR.png"
import cli12 from "./assets/GLOW UP.png"
import { FlatButton, LinkButton, OutsetButton } from "../button/Button"
import { Swiper, SwiperSlide } from 'swiper/react';

import img5 from "./assets/BOX V2.png"
import img6 from "./assets/Group 405.png"
import img7 from "./assets/Group 1456.png"
import img8 from "./assets/Group 1455.png"
import { Pagination } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import Slider from "react-slick"


export function OurClient(props) {
    return (
        <section className={styles.client}>
            <section className={styles.head}>
                <h3>Our Clients</h3>
                <p>We like to build close relationships with our clients. We are bond with love and we are Family! We believe dynamic collaboration is the only way to get the job done well. see what they said about us in testimonial stories</p>
            </section>
            <section className={styles.items}>
                <img src={cli1} alt="" />
                <img src={cli2} alt="" />
                <img src={cli3} alt="" />
                <img src={cli5} alt="" />
                <img src={cli6} alt="" />
                <img src={cli7} alt="" />
                <img src={cli8} alt="" />
                <img src={cli9} alt="" />
                <img src={cli10} alt="" />
                <img src={cli11} alt="" />
                <img src={cli12} alt="" />
                <img src={cli4} alt="" />
            </section>
        </section>
    )
}

export function StartAProject(props) {
    return (
        <section className={styles.navigation}>
            <LinkButton to={'/start-a-project'} theme={'green'}>START A PROJECT</LinkButton>
        </section>
    )
}

export function Projects() {
    const navigate = useNavigate()
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section className={styles.projects}>
            <div className={styles.head}>
                <h3>Projects</h3>
                <FlatButton onClick={() => navigate('/projects')} style={{
                    border: '1px solid var(--color-purple)',
                    color: 'var(--color-purple)',
                }}>VIEW ALL</FlatButton>
            </div>
            <section className={styles.carousel}>
                <Slider {...settings}>
                    <img className={styles.carouselImg} src={img5} alt="" />
                    <img className={styles.carouselImg} src={img6} alt="" />
                    <img className={styles.carouselImg} src={img7} alt="" />
                    <img className={styles.carouselImg} src={img8} alt="" />
                </Slider>
            </section>
        </section>
    )
}
