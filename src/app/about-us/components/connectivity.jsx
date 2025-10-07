import styles from "@/styles/about/connectivity.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import SingleButton from "@/src/app/components/singlebutton"
import IMG from "media/about/vissionImg.webp"

const Connectivity = () => {
    return (
        <>
            <section className={`${styles.connectivitySec}  borderRadiusTop`}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.connectivityTitle}>
                                <h2>Next-Gen Telemetry & Connectivity.</h2>
                                <p>Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section
                className={`${styles.connectivityPoints} borderRadiusTop`}
                style={{ backgroundImage: `url(${IMG.src})` }}
            >
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.connectivityList}>
                                <h3>Our Mission</h3>
                                <p>Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success. Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success.</p>
                                <p>Powering secure, real-time data transmission across land, sea, and sky.</p>
                                <SingleButton link="#" whitebg={true} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${styles.connectivityList} ${styles.visionList}`}>
                                <h3>Our Vision</h3>
                                <SingleButton link="#" whitebg={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>

    )
}

export default Connectivity