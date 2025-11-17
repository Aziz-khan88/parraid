"use client";
import { useState } from "react";
import styles from "@/styles/products/prodetails.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import { TabIcon } from "@/src/app/app-constants";

const ProDetails = ({ product }) => {
  const prod = product[0];
  const [mainImage, setMainImage] = useState(product.images[0].src);
  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    { key: "tab1", label: "Overview" },
    { key: "tab2", label: "Key System Advantage" },
    { key: "tab3", label: "Capabilities" },
    { key: "tab5", label: "Features" },
    { key: "tab6", label: "Interoperability" },
    { key: "tab4", label: "Data Sheets" },
  ];
  return (
    <section className={styles.ProDetails}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={styles.mainImage}>
              <Image src={mainImage} alt="Slider" fill />
            </div>
            <div className={styles.imageSlide}>
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={styles.imgBox}
                  onClick={() => setMainImage(img.src)}
                >
                  <Image src={img.src} alt={`Slider ${index}`} fill />
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.ImgContent}>
              <h2>{product.name}</h2>
              {product.txt}
            </div>
          </Col>
          <Col>
            <div className={styles.tabDescription}>
              <div className={styles.tabList}>
                {tabs
                  .filter((tab) => product[tab.key]) // sirf un tabs ko rakho jinke liye content hai
                  .map((tab) => (
                    <div
                      key={tab.key}
                      className={`${styles.tabItem} ${
                        activeTab === tab.key ? styles.active : ""
                      }`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      <h4>
                        {tab.label} <TabIcon />
                      </h4>
                    </div>
                  ))}
              </div>

              <div className={styles.tabContent}>
                {product[activeTab] ? (
                  product[activeTab]
                ) : (
                  <p>No data available for this section.</p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProDetails;
