import { PortfolioAppbar } from "../../components/appbar/Appbar"
import { FlatButton, OutsetButton } from "../../components/button/Button"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./ProjectsPage.module.scss"
import img1 from "./assets/PROJECTS.png"

import { StartAProject } from "../../components/content/Content"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


const categories = [
    {
        key: "branding",
        text: "BRANDING",
    },
    {
        key: "web-design",
        text: "WEB DESIGN",
    },
    {
        key: "comm-design",
        text: "COMM DESIGN",
    },
    {
        key: "product-design",
        text: "PRODUCT DESIGN",
    },
    {
        key: "marketing",
        text: "MARKETING",
    },
    {
        key: "promotion",
        text: "PROMOTION",
    },
    {
        key: "packaging-design",
        text: "PACKAGING DESIGN",
    },
    {
        key: "web-development",
        text: "WEB DEVELOPMENT",
    },
]

const products = [
    {
        categories: ['branding'],
        categoriesText: <h6 style={{color: "#3F106C"}}>BRANDING</h6>,
        text: <h4 style={{color: "#3F106C"}}>Zirr</h4>,
        image: require("./assets/ZIRR.jpg"),
        route: "/projects/zirr"
    },
    {
        categories: ['packaging-design'],
        categoriesText: <h6 style={{color: "white"}}>PACKAGING DESIGN</h6>,
        text: <h4 style={{color: "white"}}>TIA Logistics</h4>,
        image: require("./assets/TIA_LOGISTICS_DELIVERY_BOX_2.png"),
        route: "/projects/tia"
    },
    {
        categories: ['branding'],
        categoriesText: <h6 style={{color: "white"}}>BRANDING</h6>,
        text: <h4 style={{color: "white"}}>Glowup Beauty</h4>,
        image: require("./assets/GLOWUP BEAUTY_2.jpg"),
        route: "/projects/glowup"
    },
    {
        categories: ['branding', 'product-design'],
        categoriesText: <h6 style={{color: "white"}}>BRANDING AND PRODUCT DESIGN</h6>,
        text: <h4 style={{color: "white"}}>Cardify</h4>,
        image: require("./assets/CARDIFY.jpg"),
    },
    {
        categories: ['branding'],
        categoriesText: <h6 style={{color: "#3F106C"}}>BRANDING</h6>,
        text: <h4 style={{color: "#3F106C"}}>Kingsbite</h4>,
        image: require("./assets/KINGSBITE.jpg"),
    },
    {
        categories: ['branding', 'web-development'],
        categoriesText: <h6 style={{color: "white"}}>BRANDING AND WEB DEVELOPMENT</h6>,
        text: <h4 style={{color: "white"}}>ISP Multiconcept</h4>,
        image: require("./assets/ISP_MULTICONCEPTS_DESIGN_1.png"),
    },
    // {
    //     categories: ['branding'],
    //     text: <p color="red">Morell</p>,
    //     image: require("./assets/Group 1428.png"),
    // },
    {
        categories: ['branding', 'web-design'],
        categoriesText: <h6 style={{color: "white"}}>BRANDING AND WEB DESIGN</h6>,
        text: <h4 style={{color: "white"}}>Shortleters</h4>,
        image: require("./assets/SHORTLETERS.jpg"),
    },
]


export function ProjectsPage(props) {
    const navigate = useNavigate()
    const [openCat, setOpenCat] = useState([])

    const handleOpenCat = (key) => {
        if (openCat.includes(key)) {
            setOpenCat(v => v.filter(i => i !== key))
        } else {
            setOpenCat(v => [...v, key])
        }
    }

    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2><span className={styles.important}>Explore</span> the endless possibilities</h2>
                        <p>of great brand designs, website design, mobile app design, website and app development, communication design, product design, products and brand promotion and marketing.</p>
                        <div className={styles.row}>
                            {
                                categories.map((item, index) =>
                                    <OutsetButton key={index}
                                        onClick={() => handleOpenCat(item.key)}
                                        theme={openCat.includes(item.key) ? "green" : "white"}>
                                        {item.text}</OutsetButton>
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </header>
            <section className={styles.projects}>
                <div className={styles.inner}>
                    <div className={styles.itemsContainer}>
                        {
                            (openCat.length === 0 ? products
                                : products.filter(i =>
                                    openCat.some(v =>
                                        i.categories.includes(v)
                                    )
                                )
                            ).map((item, index) => {
                                return <div key={index} onClick={item.route && (() => navigate(item.route))}>
                                    <img src={item.image} alt="" />
                                    <div className={styles.itemsHead}>
                                        <div>
                                            {item.categoriesText}
                                            {item.text}
                                        </div>
                                        {!item.route && <div className={styles.soon}>Soon!</div>}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </section>
            <StartAProject />
        </Layout>
    )
}