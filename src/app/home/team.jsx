import styles from "@/styles/home/team.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from '@/src/app/components/singlebutton'
import BGIMG from "media/home/team.webp";

const Team = () => {
    return (
        <section className={styles.teamSection}>
            <Container className={styles.teamBg} style={{ backgroundImage: `url('${BGIMG.src}')` }}>
                <Row>
                    <Col md={4}>
                        <h2>Join Our Team</h2>
                        <p>If you want to join our team, please go to Parraid Careers Site.</p>
                        <SingleButton link="#" txt="View Job Openings" />
                    </Col>
                </Row>
            </Container>
            <Container className={styles.teamWapper}>
                <Row>
                    <Col md={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Medical, Dental, Vision, and Wellness</div>
                            <div className={styles.txt}>We offer health and welfare benefits to help keep you and your family healthy, including a wellness program that may help you identify and address certain health issues.</div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Medical, Dental, Vision, and Wellness</div>
                            <div className={styles.txt}>We offer health and welfare benefits to help keep you and your family healthy, including a wellness program that may help you identify and address certain health issues.</div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.teamItem}>
                            <div className={styles.title}>Medical, Dental, Vision, and Wellness</div>
                            <div className={styles.txt}>We offer health and welfare benefits to help keep you and your family healthy, including a wellness program that may help you identify and address certain health issues.</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team