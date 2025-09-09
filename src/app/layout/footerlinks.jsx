import styles from "@/styles/layout/footerlinks.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { EmailIcon, LocationIcon, MainLogo, PhoneIcon, TimingIcon } from "@/src/app/app-constants";
import Link from "next/link";


const FooterLinks = () => {
    return (
        <section className={`${styles.footerSection} `}>
            <Container className={styles.contactWapper}>
                <Row>
                    <Col md={12} lg={4}>
                        <div className={styles.MianLogo}>
                            <MainLogo />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={styles.serviceStyle}>
                            <h6>Our Services</h6>
                            <ul>
                                <li><Link href="#">Custom Product Solutions</Link></li>
                                <li><Link href="#">Everything Over IP (EoIP)</Link></li>
                                <li><Link href="#">Ruggesd Enhancements</Link></li>
                                <li><Link href="#">Telemetry And Data Systems</Link></li>
                                <li><Link href="#">Custom Product Solutions</Link></li>
                                <li><Link href="#">Everything Over IP (EoIP)</Link></li>
                                <li><Link href="#">Ruggesd Enhancements</Link></li>
                                <li><Link href="#">Telemetry And Data Systems</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className={`${styles.serviceStyle} ${styles.servicelast}`}>
                            <h6>Quick Links</h6>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Carrers</Link></li>
                                <li><Link href="#">Blogs</Link></li>
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
                                    <a href="#">44150 Smartronix Way <br />200, Hollywood, MD 20636</a>
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
                            <p>Copyright © 2025 all rights reserved.</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className={`${styles.copyRightSec} ${styles.RightTxt}`}>
                            <p>Designed / Developed By <a href="#">Infiniti Digital Marketing Agency</a></p>
                        </div>
                    </Col>
                    <div className={styles.logoTxt}>Parraid</div>
                </Row>
            </Container>
        </section >
    )
}
export default FooterLinks