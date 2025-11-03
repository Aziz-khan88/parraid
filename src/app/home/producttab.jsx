"use client";
import { useState } from "react";
import styles from "@/styles/home/producttab.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProductCarousel from "@/src/app/home/productcarousel";
import { productsData, tabList } from "@/src/app/data/products/data";

const ProductTab = () => {
    const [activeTab, setActiveTab] = useState("cat1");

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
                            {activeTab === "cat1" && <ProductCarousel products={productsData.cat1} />}
                            {activeTab === "cat2" && <ProductCarousel products={productsData.cat2} />}
                            {activeTab === "cat3" && <ProductCarousel products={productsData.cat3} />}
                            {activeTab === "cat4" && <ProductCarousel products={productsData.cat4} />}
                            {activeTab === "cat5" && <ProductCarousel products={productsData.cat5} />}
                        </div>

                    </Col>
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <Col md={12}>
                        <SingleButton link="#" txt="View All Products" />

                    </Col>
                </Row>

            </Container> */}
        </section>
    );
};

export default ProductTab;
