"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/home/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BannerPoster from "media/home/HomeBanner.webp";
import Image from "next/image";
import SingleButton from "../components/singlebutton";

const Banner = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowVideo(true); // load video after 1.5s
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="my-auto">
                        <div className={styles.bannerText}>
                            <h1>Next-Gen Telemetry & Connectivity.</h1>
                            <p>Powering secure, real-time data transmission across land, sea, and sky. Our solutions are engineered for precision, reliability, and mission success.</p>
                            <SingleButton link="#" />
                        </div>
                    </Col>
                </Row>
            </Container>
            {!showVideo ? (
                <div className={styles.bannerVideo}>
                    <Image
                        src={BannerPoster.src}
                        alt="Banner background"
                        decoding="async"
                        loading="lazy"
                        fill
                    />
                </div>
            ) : (
                <div className={styles.bannerVideo}>
                    <video
                        autoPlay
                        muted
                        loop
                        preload="none"
                        aria-label="Background video"
                        playsInline
                        poster={BannerPoster.src}
                    >
                        <source src="/videos/homeVideo.mp4" type="video/mp4" />
                    </video>
                </div>
            )}


        </section >

    )
}

export default Banner