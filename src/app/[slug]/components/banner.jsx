import styles from "@/styles/products/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap";

const Banner = ({ data }) => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col className="my-auto">
                        <span>{data.title}</span>
                        <div className={styles.paraSec}>
                            <p>{data.tittxt}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner