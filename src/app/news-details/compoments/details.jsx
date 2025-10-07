"use client";
import React, { useState, useEffect } from "react";
import styles from '@/styles/news/pressdetails.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { ListIcon } from '../../app-constants'
import Link from "next/link";

const PressDetails = () => {
    const sections = [
        { id: "section01", title: "The Future of Telemetry for Flight Test Operations" },
        { id: "section02", title: "What is TmNS?" },
        { id: "section03", title: "Key Benefits of TmNS for the Telemetry Flight Test Community" },
        { id: "section04", title: "Real-World Applications of TmNS" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            let currentIndex = null;
            sections.forEach((section, index) => {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        currentIndex = index;
                    }
                }
            });
            if (currentIndex !== activeIndex) setActiveIndex(currentIndex);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // check on initial render
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);

    const handleClick = (id, index) => {
        setActiveIndex(index);
        const element = document.getElementById(id);
        if (element) {
            const offset = 110; // adjust for fixed header if needed
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };
    return (
        <section className={`${styles.pressDetailsSection}`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.detailsSection}>
                            <div className={styles.detailsRight}>
                                <h2>TmNs</h2>
                                <div id="section01">
                                    <h5>The Future of Telemetry for Flight Test Operations</h5>
                                    <p>As aerospace systems grow more advanced and data-intensive, the telemetry flight test community faces increasing challenges in data acquisition, transmission, and analysis. Traditional telemetry systems, while reliable, often lack the bandwidth and flexibility needed to support today’s complex test scenarios. Enter TmNS—Telemetry Network System—a modern, IP-based solution that is reshaping how flight tests are conducted.</p>
                                </div>
                                <div id="section02">
                                    <h5>What is TmNS?</h5>
                                    <p>TmNS (Telemetry Network System) is an advanced, standards-based architecture developed to modernize telemetry systems used in flight testing. Unlike conventional point-to-point RF telemetry, TmNS leverages IP-based networking to allow for dynamic routing, higher data throughput, and improved spectrum efficiency. It was developed under the guidance of the Integrated Network Enhanced Telemetry (iNET) program and supported by the RCC (Range Commanders Council).</p>
                                </div>
                                <div id="section03">
                                    <h5>Key Benefits of TmNS for the Telemetry Flight Test Community</h5>
                                    <p>TmNS (Telemetry Network System) is an advanced, standards-based architecture developed to modernize telemetry systems used in flight testing. Unlike conventional point-to-point RF telemetry, TmNS leverages IP-based networking to allow for dynamic routing, higher data throughput, and improved spectrum efficiency. It was developed under the guidance of the Integrated Network Enhanced Telemetry (iNET) program and supported by the RCC (Range Commanders Council).</p>
                                </div>
                                <h6>1. High Data Throughput</h6>
                                <p>Modern aircraft and weapon systems generate massive amounts of data—from engine diagnostics to sensor feeds. TmNS supports gigabit-class data rates, enabling engineers to transmit rich telemetry data in real time, without bottlenecks.</p>
                                <h6>2. IP-Based Flexibility</h6>
                                <p>By using standard IP protocols, TmNS allows test teams to dynamically reconfigure networks mid-flight, route data across different nodes, and support multiple users accessing the same data streams simultaneously.</p>
                                <h6>3. Enhanced Spectrum Efficiency</h6>
                                <p>Traditional telemetry consumes large bandwidth slices, often leading to congestion. TmNS introduces more efficient modulation schemes and dynamic spectrum allocation, allowing test ranges to maximize the use of limited RF resources.</p>
                                <h6>4. Bi-Directional Communications</h6>
                                <p>TmNS isn’t just about sending data one way. It enables command and control from the ground to the test article, allowing engineers to adjust test parameters in-flight or remotely manage payloads—something not feasible with legacy telemetry systems.</p>
                                <h6>5. Interoperability Across Ranges</h6>
                                <p>With standardized hardware and protocols, TmNS makes it easier for government and commercial test ranges to share data, systems, and resources, streamlining joint testing efforts and reducing costs.</p>
                                <h6>6. Scalability and Futureproofing</h6>
                                <p>From small UAVs to full-scale hypersonic vehicles, TmNS is scalable to support a wide range of platforms. Its open-architecture approach ensures future integration of emerging technologies, such as AI-driven analytics and edge computing.</p>

                                <div id="section04"> <h5>Real-World Applications of TmNS</h5>
                                    <ul>
                                        <li><ListIcon />Hypersonic Weapons Testing: Where milliseconds matter, TmNS provides the low-latency, high-fidelity telemetry needed to validate system performance.</li>
                                        <li><ListIcon />Advanced Aircraft Flight Testing: For platforms like the F-35 or B-21, TmNS allows test teams to monitor thousands of parameters in real time and make rapid adjustments on the fly.</li>
                                        <li><ListIcon />UAV Swarm Coordination: TmNS supports multi-vehicle data management, ideal for unmanned systems flying coordinated missions with high data complexity.</li>
                                    </ul>
                                </div>
                                <h5>Why the Telemetry Community is Moving Toward TmNS</h5>
                                <p>Legacy telemetry systems have served well, but they were not built with today’s data demands in mind. The shift toward network-centric telemetry through TmNS reflects a broader industry trend: using IP-based, software-defined systems to drive smarter, faster, and more efficient testing.</p>
                                <h5>The benefits are not just technical—they’re operational:</h5>
                                <ul>
                                    <li><ListIcon />Shorter test cycles</li>
                                    <li><ListIcon />Improved data reliability</li>
                                    <li><ListIcon />Better situational awareness</li>
                                    <li><ListIcon />Reduced cost per test hour</li>
                                </ul>
                                <h5>Conclusion: A Smarter Way to Test</h5>
                                <p>The Telemetry Network System (TmNS) represents a significant leap forward for the flight test community. With its ability to handle high-volume data, support real-time control, and adapt to evolving test requirements, TmNS empowers engineers to test smarter, safer, and faster. As aerospace systems become more advanced, TmNS ensures telemetry systems can keep pace.</p>
                                <h6>Ready to modernize your telemetry systems?</h6>
                                <p>Contact us to learn how TmNS can be integrated into your test range or airborne platforms to unlock next-generation flight test capabilities at <a href="mailto:sales@parraid.com">sales@parraid.com</a>.</p>
                            </div>
                            <div className={styles.detailsLeft}>
                                <div className={styles.tableOfContent}>
                                    <h5>Table of Content</h5>
                                    <ul>
                                        {sections.map((section, index) => (
                                            <li key={index}>
                                                <a
                                                    className={activeIndex === index ? styles.active : ""}
                                                    href={`#${section.id}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleClick(section.id, index);
                                                    }}
                                                >
                                                    {section.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.recentNews}>
                                    <h5>Recent News</h5>
                                    <ul>
                                        <li>
                                            <Link href="/news-details">
                                                <h6>TmNS:</h6>
                                                <p>The Future of Telemetry for Flight Test Operations</p>
                                                <div className={styles.date}>September 1, 2025</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news-details">
                                                <h6>TmNS:</h6>
                                                <p>The Future of Telemetry for Flight Test Operations</p>
                                                <div className={styles.date}>September 1, 2025</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news-details">
                                                <h6>TmNS:</h6>
                                                <p>The Future of Telemetry for Flight Test Operations</p>
                                                <div className={styles.date}>September 1, 2025</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news-details">
                                                <h6>TmNS:</h6>
                                                <p>The Future of Telemetry for Flight Test Operations</p>
                                                <div className={styles.date}>September 1, 2025</div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PressDetails