import styles from "@/styles/layout/footerlinks.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { EmailIcon, LocationIcon, MainLogo, PhoneIcon, TimingIcon } from "@/src/app/app-constants";
import Link from "next/link";
import Logo from "media/logo.webp"
import Image from "next/image";

const FooterLinks = () => {
    return (
        <section className={`${styles.footerSection} `}>
            <Container className={styles.contactWapper}>
                <Row>
                    <Col md={12} lg={3}>
                        <div className={styles.MianLogo}>
                            <Image src={Logo.src} alt="Parraid Logo" width={230} height={60} />
                            <p>Parraid delivers mission-critical telemetry and tactical communications solutions designed to perform when failure is not an option.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={7}>
                        <div className={styles.serviceStyle}>
                            <h6>Our Products</h6>
                            <ul>
                                <li><Link href="/product/edge2-telemetry-reciver">EDGE² TELEMETRY NETWORK APPLIANCE</Link></li>
                                <li><Link href="/product/network-radio-gateway-ds-04v3">NETWORK RADIO GATEWAY NRG® DS-04V3</Link></li>
                                <li><Link href="/product/imux-g2e-and-g2eh-recorders">IMUX G2e AND IMUX G2eH</Link></li>
                                <li><Link href="/product/our-featured-network-radio-gateway">PACSTAR® 466 FEATURING PARRAID’S NRG®</Link></li>
                                <li><Link href="/product/omega-next-real-time-data-processing-software">OMEGA NExT </Link></li>
                                <li><Link href="/product/outsource-the-workload-owl">OUTSOURCE THE WORKLOAD OWL</Link></li>
                                <li><Link href="/product/series-5000-data-processors">S-5000e DATA PROCESSOR</Link></li>
                                <li><Link href="/product/network-radio-gateway-NRG-deployable-systems">NETWORK RADIO GATEWAY RACK MOUNT SYSTEMS</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className={`${styles.serviceStyle} ${styles.servicelast}`}>
                            <h6>Quick Links</h6>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><a href="https://parraidllc.applicantstack.com/x/openings">Open Position</a></li>
                                <li><Link href="/blogs">Blogs</Link></li>
                                <li><Link href="/press-release">Press</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.footerInfo}>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}> <PhoneIcon /> PHONE</div>
                                <div className={styles.value}>
                                    <a href="tel:+1(301)690-0690">+1 (301) 690-0690</a><br />
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><EmailIcon />Email</div>
                                <div className={styles.value}>
                                    <a href="mailto:sales@parraid.com">sales@parraid.com</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><LocationIcon />Address</div>
                                <div className={styles.value}>
                                    <a href="#">44150 Smartronix Way <br /> Hollywood, MD 20636</a>
                                </div>
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.infoName}><TimingIcon />Opening Hours</div>
                                <div className={styles.value}>
                                    Mon to Sat: 9.00am - 8.30pm<br />
                                    Sun: Closed
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.copyrightSection}>
                    <Col md={12} lg={6}>
                        <div className={styles.copyRightSec}>
                            <p>Copyright © 2026 all rights reserved.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={`${styles.copyRightSec} ${styles.RightTxt}`}>
                            <p>Designed / Developed By <a href="#">Infiniti Digital Marketing Agency</a></p>
                        </div>
                    </Col>
                    <div className={styles.logoTxt}>
                        <Image src={Logo.src} alt="Parraid Logo" fill />
                    </div>
                </Row>
            </Container>
        </section >
    )
}
export default FooterLinks