import styles from "@/styles/careers/jobs.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { DownloadIcon } from "../../app-constants"
import Link from "next/link"

const Jobs = () => {
    return (
        <section className={`${styles.jobsSection} p-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Current Job Openings</h2>
                        <p>Parraid, based in Hollywood, MD, specializes in telemetry data systems and mission-critical communications, with strong products, a skilled team, and a growing client base.</p>
                    </Col>
                    <Col md={12}>
                        <div className={`${styles.tableResponsive} `}>
                            <div className={styles.headingTable}>
                                <ul>
                                    <li>Position</li>
                                    <li>Location</li>
                                    <li>Type</li>
                                    <li>Status</li>
                                    <li>Already Applied</li>
                                    <li>Action</li>
                                </ul>
                            </div>
                            <div className={styles.contentTable}>
                                <ul>
                                    <li>Hardware Engineer</li>
                                    <li>Hollywood, MD</li>
                                    <li>Full Time</li>
                                    <li>Open</li>
                                    <li>15</li>
                                    <li><Link href="/job-details"><DownloadIcon /></Link></li>
                                </ul>
                                <ul>
                                    <li>Hardware Engineer</li>
                                    <li>Hollywood, MD</li>
                                    <li>Full Time</li>
                                    <li>Open</li>
                                    <li>15</li>
                                    <li><Link href="/job-details"><DownloadIcon /></Link></li>
                                </ul>
                                <ul>
                                    <li>Hardware Engineer</li>
                                    <li>Hollywood, MD</li>
                                    <li>Full Time</li>
                                    <li>Open</li>
                                    <li>15</li>
                                    <li><Link href="/job-details"><DownloadIcon /></Link></li>
                                </ul>
                                <ul>
                                    <li>Hardware Engineer</li>
                                    <li>Hollywood, MD</li>
                                    <li>Full Time</li>
                                    <li>Open</li>
                                    <li>15</li>
                                    <li><Link href="/job-details"><DownloadIcon /></Link></li>
                                </ul>
                                <ul>
                                    <li>Hardware Engineer</li>
                                    <li>Hollywood, MD</li>
                                    <li>Full Time</li>
                                    <li>Open</li>
                                    <li>15</li>
                                    <li><Link href="/job-details"><DownloadIcon /></Link></li>
                                </ul>
                                <ul>
                                    <li>Hardware Engineer</li>
                                    <li>Hollywood, MD</li>
                                    <li>Full Time</li>
                                    <li>Open</li>
                                    <li>15</li>
                                    <li><Link href="/job-details"><DownloadIcon /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Jobs