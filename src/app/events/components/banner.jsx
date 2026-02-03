import styles from "@/styles/products/banner.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Container className="h-100">
        <Row className="h-100">
          <Col className="my-auto">
            <span>
              Our <br />
              Events
            </span>
            {/* <div className={styles.paraSec}>
              <p>
               A small, products-oriented business, Parraid is wholly devoted to design, engineering, sales, and support of telemetry data systems and tactically oriented mission-critical communications solutions. We regularly attend industry events where you can find our booth on the exhibition floor. Our event teams include sales leads, field engineers, and product line managers to answer your questions and show off our product portfolio. Please stop by and talk with us! 
              </p>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
