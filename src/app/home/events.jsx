import styles from "@/styles/home/events.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import Link from "next/link";
import Event01 from "media/events/logo1.webp"
import Image from "next/image";

const Events = () => {
    return (
        <section className={`${styles.eventSection}`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Events</h2>
                        <p>Parraid specializes in telemetry and mission-critical communication solutions, backed by expert design, sales, and support.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="mt-5">
                        <div className={styles.eventWapper}>
                            <div className={styles.eventImg}>
                                <Image src={Event01.src} alt="Event" width={520} height={391} />
                            </div>
                            <div className={styles.eventContent}>
                                <ul>
                                    <li>10:00 AM</li>
                                    <li>August 18-21, 2025</li>
                                </ul>
                                <h2>ITEA Annual T&E Symposium</h2>
                                <div className={styles.locaiotn}>Location: <Link href="#">Augusta, GA</Link></div>
                                <div className={styles.eventbtn}>
                                    <SingleButton link="#" txt="Event Website" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.eventWapper}>
                            <div className={styles.eventImg}>
                                <Image src={Event01.src} alt="Event" width={520} height={391} />
                            </div>
                            <div className={styles.eventContent}>
                                <ul>
                                    <li>10:00 AM</li>
                                    <li>August 18-21, 2025</li>
                                </ul>
                                <h2>ITEA Annual T&E Symposium</h2>
                                <div className={styles.locaiotn}>Location: <Link href="#">Augusta, GA</Link></div>
                                <div className={styles.eventbtn}>
                                    <SingleButton link="#" txt="Event Website" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.eventWapper}>
                            <div className={styles.eventImg}>
                                <Image src={Event01.src} alt="Event" width={520} height={391} />
                            </div>
                            <div className={styles.eventContent}>
                                <ul>
                                    <li>10:00 AM</li>
                                    <li>August 18-21, 2025</li>
                                </ul>
                                <h2>ITEA Annual T&E Symposium</h2>
                                <div className={styles.locaiotn}>Location: <Link href="#">Augusta, GA</Link></div>
                                <div className={styles.eventbtn}>
                                    <SingleButton link="#" txt="Event Website" />
                                </div>
                            </div>
                        </div>
                        <div className={styles.viewMore}>
                            <SingleButton link="#" txt="View All Events" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Events