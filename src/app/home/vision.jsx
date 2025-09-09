"use client";
import { useEffect, useState } from "react";
import BannerPoster from "media/home/visionImg.webp";
import styles from "@/styles/home/vision.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import Image from "next/image";


const Vision = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowVideo(true);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <section className={`${styles.visionSection} borderRadiusTop`}>
            <Container className={styles.visionBG}>
                <Row>
                    <Col md={12}>
                        <div className={styles.visionBox}>
                            <div className={styles.visionTitle}>
                                <h2>Our Mission / Vision</h2>
                            </div>
                            <div className={styles.visionTxt}>
                                <p>Say goodbye to messy renovations! Our dustless sanding technology ensures a cleaner, healthier, and more efficient floor refinishing process.</p>
                                <SingleButton link="#" txt="Read More" />
                            </div>
                        </div>
                    </Col>
                </Row>
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
                            <source src="/videos/visionVideo.mp4" type="video/mp4" />
                        </video>
                    </div>
                )}
            </Container>
        </section>
    )
}

export default Vision