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

// import img5 from "./assets/BOX V2.png"
// import img6 from "./assets/Group 405.png"
// import img7 from "./assets/Group 1456.png"
// import img8 from "./assets/Group 1455.png"
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
            <LinkButton to={'/start-a-project'} theme={'green'}>Start a Project</LinkButton>
            <div className={styles.showInMobile}>
                <LinkButton to={'/start-a-project'} theme={'greenShade'}>Print Online</LinkButton>
            </div>
        </section>
    )
}


const products = [
    {
        categoriesText: <h6 style={{ color: "#3F106C" }}>BRANDING</h6>,
        text: <h4 style={{ color: "#3F106C" }}>Zirr</h4>,
        image: require("./assets/ZIRR.jpg"),
        route: "/projects/zirr"
    },
    {
        categoriesText: <h6 style={{ color: "white" }}>PACKAGING DESIGN</h6>,
        text: <h4 style={{ color: "white" }}>TIA Logistics</h4>,
        image: require("./assets/TIA_LOGISTICS_DELIVERY_BOX_2.png"),
        route: "/projects/tia"
    },
    {
        categoriesText: <h6 style={{ color: "white" }}>BRANDING</h6>,
        text: <h4 style={{ color: "white" }}>Glowup Beauty</h4>,
        image: require("./assets/GLOWUP BEAUTY_2.jpg"),
        route: "/projects/glowup"
    },
    {
        categoriesText: <h6 style={{ color: "white" }}>BRANDING AND PRODUCT DESIGN</h6>,
        text: <h4 style={{ color: "white" }}>Cardify</h4>,
        image: require("./assets/CARDIFY.jpg"),
    },
    {
        categoriesText: <h6 style={{ color: "#3F106C" }}>BRANDING</h6>,
        text: <h4 style={{ color: "#3F106C" }}>Kingsbite</h4>,
        image: require("./assets/KINGSBITE.jpg"),
    },
    {
        categoriesText: <h6 style={{ color: "white" }}>BRANDING AND WEB DEVELOPMENT</h6>,
        text: <h4 style={{ color: "white" }}>ISP Multiconcept</h4>,
        image: require("./assets/ISP_MULTICONCEPTS_DESIGN_1.png"),
    },
    // {
    //     categories: ['branding'],
    //     text: <p color="red">Morell</p>,
    //     image: require("./assets/Group 1428.png"),
    // },
    {
        categoriesText: <h6 style={{ color: "white" }}>BRANDING AND WEB DESIGN</h6>,
        text: <h4 style={{ color: "white" }}>Shortleters</h4>,
        image: require("./assets/SHORTLETERS.jpg"),
    },
]

export function Projects() {
    const navigate = useNavigate()
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
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
                <Slider {...settings} >
                    {
                        products.map((item, index) => {
                            return <div key={index} className={styles.spacer}>
                                <div className={styles.items} onClick={item.route && (() => navigate(item.route))}>
                                    <img src={item.image} alt="" />
                                    <div className={styles.itemsHead}>
                                        <div>
                                            {item.categoriesText}
                                            {item.text}
                                        </div>
                                        {!item.route && <div className={styles.soon}>Soon!</div>}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Slider>
            </section>
        </section>
    )
}


export function Testimonies(props) {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const testimonies = [
        {
            image: require("./assets/1_TUNDE BUREMO.jpg"),
            comment: "You don't have an idea how much i love to create and prepare representations myself. I really wish i had more time for these things.  That's why i specifically look for agency like Hardbaymedia Limited to aid these representations and branding",
            name: "Tunde Buremo, CEO",
            role: "Founder Cardify",
        },
        {
            image: require("./assets/2_IDRIS TAIWO.jpg"),
            comment: "Great company that pays particular attention to the client's needs. Excellent customer service as well!! Love their works.",
            name: "Idris Taiwo",
            role: "HR SaverTech",
        },
        {
            image: require("./assets/3_TNNBP HIGHLIGHT.jpg"),
            comment: "Top branding agency of year, 2022",
            name: "",
            role: "TNNBP Awards",
        },
        {
            image: require("./assets/4_Tope Anifalaje.jpg"),
            comment: "One best and top notch design agency, with efficient and effective complete branding solutions in Nigeria!",
            name: "Tope Anifalaje",
            role: "",
        },
        {
            image: require("./assets/5_DEBORAH SHITTU.jpg"),
            comment: "In need of marketing solutions for my brand and they came through, really great company to work with",
            name: "Deborah Shittu",
            role: "CEO, Founder GlowUp Beauty",
        },
    ]
    return (
        <section id="testimonies" className={styles.testimonies}>
            <section className={styles.head}>
                <h3>Testimonies</h3>
                <p></p>
            </section>
            <section className={styles.carousel}>
                <Slider {...settings}>
                    {testimonies.map((item, index) => {
                        return (
                            <div key={index} className={styles.writeup}>
                                <div className={styles.head}>
                                    <div className={styles.avatar}>
                                        <img src={item.image} alt="" />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <p>{item.comment}</p>
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </section>
        </section>
    )
}