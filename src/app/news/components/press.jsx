"use client"
import { useState } from "react"
import styles from "@/styles/news/press.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowSmall } from "@/src/app/app-constants"

const pressItems = [
    {
        date: "September 1, 2025",
        title: "TmNS:",
        subtitle: "The Future of Telemetry for Flight Test Operations",
        para: "As aerospace systems grow more advanced and data-intensive, the telemetry flight test community faces increasing challenges in data acquisition, transmission, and analysis. Traditional telemetry systems, while reliable, often lack the bandwidth and flexibility needed to support today’s complex test scenarios. Enter TmNS—Telemetry Network System—a modern, IP-based solution that is reshaping."
    },
    {
        date: "September 1, 2025",
        title: "IRIG:",
        subtitle: "A New Era of Communication Standards",
        para: "As aerospace systems grow more advanced and data-intensive, the telemetry flight test community faces increasing challenges in data acquisition, transmission, and analysis. Traditional telemetry systems, while reliable, often lack the bandwidth and flexibility needed to support today’s complex test scenarios. Enter TmNS—Telemetry Network System—a modern, IP-based solution that is reshaping."

    },
    {
        date: "September 1, 2025",
        title: "Range Ops:",
        subtitle: "Optimizing Flight Data Analysis",
        para: "As aerospace systems grow more advanced and data-intensive, the telemetry flight test community faces increasing challenges in data acquisition, transmission, and analysis. Traditional telemetry systems, while reliable, often lack the bandwidth and flexibility needed to support today’s complex test scenarios. Enter TmNS—Telemetry Network System—a modern, IP-based solution that is reshaping."
    },
]

const Press = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    return (
        <section className={`${styles.pressSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Press Releases</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.pressWapper}>
                            {pressItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.pressItem} ${activeIndex === index ? styles.active : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={styles.Title}>
                                        <div className={styles.date}>{item.date}</div>
                                        <h4>{item.title}</h4>
                                        <h6>{item.subtitle}</h6>
                                        <p>{item.para}</p>
                                        <Link href="/news-details">Read More</Link>
                                    </div>
                                    <div className={styles.Btn}>
                                        <ArrowSmall />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Press