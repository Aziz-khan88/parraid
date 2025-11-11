import styles from "@/styles/home/industries.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import IMG01 from "media/industries/1.webp";
import IMG02 from "media/industries/2.webp";
import IMG03 from "media/industries/3.webp";
import IMG04 from "media/industries/4.webp";

const data = [
  {
    title: "Aerospace and aviation",
    txt: "Parraid, is a highly regarded, U.S. based technology and engineering company specializing in product solutions for aerospace and ground tactical.",
    img: IMG01.src,
  },
  {
    title: "Military and defense",
    txt: "Parraid, is a highly regarded, U.S. based technology and engineering company specializing in product solutions for aerospace and ground tactical.",
    img: IMG02.src,
  },
  {
    title: "Government and federal agencies",
    txt: "Parraid, is a highly regarded, U.S. based technology and engineering company specializing in product solutions for aerospace and ground tactical.",
    img: IMG03.src,
  },
  {
    title: "R&D organizations",
    txt: "Parraid, is a highly regarded, U.S. based technology and engineering company specializing in product solutions for aerospace and ground tactical.",
    img: IMG04.src,
  },
];

const Industries = () => {
  return (
    <section className={`${styles.industriesSection} p-100`}>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Industries Served</h2>
            <p>
              Parraid specializes in telemetry and mission-critical
              communication solutions, backed by expert design, sales, and
              support.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={styles.industriesWapper}>
              {data.map((item, index) => (
                <div className={styles.industriesItem} key={index}>
                  <Image src={item.img} alt="IMG01" fill />
                  <div className={styles.title}>
                    <h3>{item.title}</h3>
                  </div>
                  <div className={styles.txt}>
                    <p>{item.txt}</p>
                    <SingleButton link="#" whitebg={true} />
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Industries;
