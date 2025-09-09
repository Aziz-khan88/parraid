"use client"
import { useState } from "react";
import styles from "@/styles/home/faqs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PlusIcon } from "@/src/app/app-constants";

export const faqsData = [
    {
        title: "How does the AI generate designs?",
        txt: (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>),
    },
    {
        title: "Can I customize the AI-generated designs?",
        txt: (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>),
    },
    {
        title: "Can you install wide plank flooring in small rooms?",
        txt: (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>),
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
        txt: (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>),
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
        txt: (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>),
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
        txt: (<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>),
    },

];


const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <section className={`${styles.faqsSection} `}>
            <Container className={styles.faqWapper}>
                <Row>
                    <Col md={6} lg={6} xl={5}>
                        <h2>Frequently Asked Questions</h2>
                        <p>Parraid specializes in telemetry and mission-critical communication solutions, backed by expert design, sales, and support.</p>
                    </Col>
                    <Col md={6} lg={6} xl={6} className="offset-xl-1">
                        {faqsData.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={styles.faqsTitle}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {items.title}
                                    <div className={`${styles.iconBox} ${activeIndex === index ? styles.active : ""}`}>
                                        <PlusIcon />
                                    </div>
                                </div>
                                <div className={styles.faqscontent}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faqs