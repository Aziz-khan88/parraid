"use client";
import { useState } from "react";
import styles from "@/styles/home/producttab.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductCarousel from "@/src/app/home/productcarousel";
import Pro01 from "media/products/Pro01.webp";
import SingleButton from "@/src/app/components/singlebutton";

const productsData = {
    tab1: [
        { id: 1, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
        { id: 2, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
        { id: 3, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
        { id: 4, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
    ],
    tab2: [
        { id: 1, name: "IMUX G2 and G2e Recorder / Reproducer 01", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
        { id: 2, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
        { id: 3, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
        { id: 4, name: "IMUX G2 and G2e Recorder / Reproducer", img: Pro01.src, txt: "Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success." },
    ]
};

const tabList = [
    { id: "tab1", label: "All Products" },
    { id: "tab2", label: "Telemetry Products" },
    { id: "tab3", label: "Deployable Products" },
    { id: "tab4", label: "Everything over IP Products" },
    { id: "tab5", label: "Rugged Enhancements" }
];

const ProductTab = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <section className={`${styles.productTabSec} p-100`}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>Our Products</h2>
                        <p>
                            Parraid, LLC is a highly regarded, U.S. based technology and
                            engineering company specializing in product solutions for aerospace
                            and ground tactical applications.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.customTabs}>
                            {tabList.map((tab) => (
                                <div
                                    key={tab.id}
                                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="px-0">
                <Row>
                    <Col md={12}>
                        <div className={styles.tabContent}>
                            {activeTab === "tab1" && <ProductCarousel products={productsData.tab1} />}
                            {activeTab === "tab2" && <ProductCarousel products={productsData.tab2} />}
                            {activeTab === "tab3" && <ProductCarousel products={productsData.tab1} />}
                            {activeTab === "tab4" && <ProductCarousel products={productsData.tab2} />}
                            {activeTab === "tab5" && <ProductCarousel products={productsData.tab1} />}
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12}>
                        <SingleButton link="#" txt="View All Products" />
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default ProductTab;
