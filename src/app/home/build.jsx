import styles from "@/styles/home/build.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import TwoButton from "@/src/app/components/twobutton";
import BGIMG from "media/home/buildImage.webp";

const Build = () => {
    return (
        <section className={`${styles.buildSection}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <h4>Design - Build - Support
                            <span>About Parraid</span>
                        </h4>
                        <p>Our Parraid, LLC is a highly regarded, U.S. based technology and engineering company specializing in product solutions for aerospace and ground tactical applications. Our product offerings include Telemetry Data Systems (TDS), deployable tactical systems, and net-centric Everything over IP (EoIP) products. From expedited acquisition to rapid fielding and execution, our mission-critical solutions enable our customers to transform, evolve, and modernize.</p>
                    </Col>
                    <Col md={12} className={styles.buildBackground} style={{ backgroundImage: `url('${BGIMG.src}')` }}>
                        <div className={styles.buildBox}>
                            <div className={styles.tit}>
                                <h2>From expedited acquisition to rapid.</h2>
                            </div>
                            <div className={styles.txt}>
                                <p>Parraid, LLC is a highly regarded, U.S. based technology and engineering company specializing in product solutions for aerospace and ground tactical applications.</p>
                                <TwoButton link1="#" link2="#" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Build