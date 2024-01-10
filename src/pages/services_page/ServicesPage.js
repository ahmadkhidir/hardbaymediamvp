import React, { useRef } from 'react'
import styles from "./ServicesPage.module.scss"
import Layout from '../../components/layout/Layout'
import { PortfolioAppbar } from '../../components/appbar/Appbar'
import { Footer } from '../../components/footer/Footer'
import img1 from "./assets/ORTHOGRAPHIC WHAT WE DO V3.png"

import img22 from "./assets/BRAND-DESIGN.png"
import img2 from "./assets/PRODUCT DESING V2.png"
import img3 from "./assets/WEB DEVELOPMENT V2.png"
import img4 from "./assets/ORTHOGRAPHIC MARKETING9.png"
import img5 from "./assets/ORTHOGRAPHIC PRINTING v5.png"
import img6 from "./assets/meeting-svgrepo-com (1).png"
import img7 from "./assets/Mask Group 37.png"
import img8 from "./assets/Mask Group 4.png"
import { StartAProject } from '../../components/content/Content'
import { Link, useNavigate } from 'react-router-dom'
import { useCounter } from '../../utilities/hooks'

export default function ServicesPage() {
    const navigate = useNavigate()
    const yearsRef = useRef(null)
    const satisfiedRef = useRef(null)
    const projectsRef = useRef(null)
    const expertRef = useRef(null)
    useCounter({
        targetRef: yearsRef,
        max: 5,
        incr: 1,
        ms: 100,
    })
    useCounter({
        targetRef: satisfiedRef,
        max: 20,
        incr: 2,
        ms: 100,
    })
    useCounter({
        targetRef: projectsRef,
        max: 100,
        incr: 10,
        ms: 100,
    })
    useCounter({
        targetRef: expertRef,
        max: 10,
        incr: 1,
        ms: 100,
    })
    return (
        <Layout appBar={<PortfolioAppbar />} footer={<Footer type={2} />}>
            <header className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2>Possibilities and <span className={styles.important}>Result</span> Driven</h2>
                        <p>We are a team of doers that believe in possibilities and excited to connect, work and build with you to achieve a sustainable growth and results.</p>
                    </div>
                    <div className={styles.image}>
                        <img src={img1} alt="" />
                    </div>
                </div>
            </header>
            <section className={styles.info}>
                <div className={styles.inner}>
                    <div className={styles.item}>
                        <h3><span ref={yearsRef}></span></h3>
                        <p>Years of Operation</p>
                    </div>
                    <div className={styles.item}>
                        <h3><span ref={satisfiedRef}></span>+</h3>
                        <p>Satisfied clients</p>
                    </div>
                    <div className={styles.item}>
                        <h3><span ref={projectsRef}></span>+</h3>
                        <p>Projects delivered</p>
                    </div>
                    <div className={styles.item}>
                        <h3><span ref={expertRef}></span>+</h3>
                        <p>Experts</p>
                    </div>
                </div>

            </section>
            <section id='services' className={styles.ourServices}>
                <section className={styles.head}>
                    <h3>Our Services</h3>
                    <p>We help brands communicate to their audience through creative design, clever strategy and technology.</p>
                </section>
                <section className={styles.items}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Brand Design</h4>
                            <p>Logo Design and Visual Identity, Marketing Materials, Collateral, Brand Assets, Brand Guidelines.</p>
                            <h5>Projects:</h5>
                            <div className={styles.proj}>
                                <Link to={"/projects/tia"} className={styles.projItem}>TIA Logistics</Link>
                                <Link to={"/projects/zirr"} className={styles.projItem}>Zirr</Link>
                                <Link to={"/projects/glowup"} className={styles.projItem}>Glowup Beauty</Link>
                                <Link to={"/projects"} className={styles.projItem}>Shortleter</Link>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img22} alt="" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Product Design</h4>
                            <p>Product Discovery, Definition, Information Architecture, User Flow Mapping, Interface Design, Wireframing and Prototyping, Visual Design, User Experience, Responsive Design, Modelling, UI Kits and Libraries.</p>
                            <h5>Projects:</h5>
                            <div className={styles.proj}>
                            <a href='http://www.cardify.co' className={styles.projItem}>Cardify</a>
                            <a href='https://load.ng' className={styles.projItem}>LoadNG</a>
                            <a href='http://www.shortleters.com' className={styles.projItem}>Shortleter</a>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Website Design and Development</h4>
                            <p>Mapping, User Flow, Wireframing, Prototyping, Front-end Development, Back-end Development, Support and Maintenance.</p>
                            <h5>Projects:</h5>
                            <div className={styles.proj}>
                                <a href='http://www.beholdhomes.com' className={styles.projItem}>BeholdHomes</a>
                                <a href='http://www.shortleters.com' className={styles.projItem}>Shortleters</a>
                                <a href='http://www.cardify.co' className={styles.projItem}>Cardify</a>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Digital Marketing/Social Media Management</h4>
                            <p>We help brands communicate to their audience through creative design, clever strategy and technology.</p>
                            <h5>Projects:</h5>
                            <div className={styles.proj}>
                                <a href='http://www.instagram.com/load.ng_' className={styles.projItem}>LoadNG</a>
                                <a href='http://www.instagram.com/cardifyafrica' className={styles.projItem}>Cardify</a>
                                <a href='http://www.instagram.com/shortleters' className={styles.projItem}>Shortleters</a>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Online Print</h4>
                            <p>Get premium prints directly to your location within minutes. Order business cards, business stationery, marketing materials, flyers, promotional items, wedding stationery, paper bags, branded box, apparels and more.</p>
                            <h5>Projects:</h5>
                            <div className={styles.proj}>
                                <Link to="/print" className={styles.projItem} style={{backgroundColor: '#00E2A2'}}>Order Now</Link>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </section>
            </section>
            <section id='process' className={styles.ourProcess}>
                <section className={styles.head}>
                    <h3>Our Process</h3>
                    <p>We help brands communicate to their audience through creative design, clever strategy and technology.</p>
                </section>
                <section className={styles.items}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Discussion</h4>
                            <p>To discover your problem through research and learnings.</p>
                            <h5>Key Process:</h5>
                            <div className={styles.proj}>
                                <div className={styles.projItem}>Product Observation</div>
                                <div className={styles.projItem}>Brainstorming</div>
                                <div className={styles.projItem}>Problem Stating</div>
                                <div className={styles.projItem}>Analysis</div>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img6} alt="" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Mapping</h4>
                            <p>To structure the process and solve your problem.</p>
                            <h5>Key Process:</h5>
                            <div className={styles.proj}>
                                <div className={styles.projItem}>Define Strategy</div>
                                <div className={styles.projItem}>Innovation</div>
                                <div className={styles.projItem}>Brainstorming</div>
                                <div className={styles.projItem}>Define Project Requirement</div>
                                <div className={styles.projItem}>Sketching and Wireframing</div>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img7} alt="" />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4>Execution</h4>
                            <p>Turn our thinking and brainstorming process to stand out visual output.</p>
                            <h5>Key Process:</h5>
                            <div className={styles.proj}>
                                <div className={styles.projItem}>Creative Process</div>
                                <div className={styles.projItem}>Prototyping</div>
                                <div className={styles.projItem}>Testing</div>
                                <div className={styles.projItem}>Development</div>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={img8} alt="" />
                        </div>
                    </div>
                </section>
            </section>
            <StartAProject />
        </Layout>
    )
}
