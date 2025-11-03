import styles from "@/styles/category/category.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"

const CategoryContent = ({ data }) => {
    return (
        <section className={`${styles.categorySection}  borderRadiusTop`}>
            <Container>
                <Row>
                    <Col md={10} className="m-auto text-center">
                        <h2>Telemetry and Data Systems Overview</h2>
                        <p>Telemetry Data Recording and Processing Systems a 25+ year heritage. The Parraid Telemetry and Data Systems offering has grown to include the most feature rich ground based data processing and recording systems in the world for use in all data processing applications. Our current capabilities include:</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6} className="my-auto">
                        {data.maintxt1}
                    </Col>
                    <Col md={5} className="offset-md-1 my-auto">
                        <div className={styles.ImgBox}>
                            <Image src={data.img1} alt="Image" fill />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={5} className=" my-auto">
                        <div className={styles.ImgBox}>
                            <Image src={data.img2} alt="Image" fill />
                        </div>
                    </Col>
                    <Col md={6} className="my-auto offset-md-1">
                        {data.maintxt2}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CategoryContent