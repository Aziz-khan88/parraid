import { EmailIcon, PhoneIcon } from "@/src/app/app-constants"
import styles from "@/styles/home/contactfrom.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BGIMG from "media/home/contactBG.webp"
import ContactForm from "@/src/app/components/forms/contactform";


const ContactFrom = () => {
    return (
        <section className={`${styles.contactFormSection}`}>
            <Container className={styles.contactBg} style={{ backgroundImage: `url('${BGIMG.src}')` }}>
                <Row>
                    <Col md={6} lg={5} xl={5}>
                        <h2>For More Information</h2>
                        <p>Please contact our experienced Sales Team for more product information, to request brochures or spec sheets, or to set up a demo or site visit.</p>
                        <ul className={styles.footerWapper}>
                            <li>
                                <div className={styles.footerInfo}>
                                    <PhoneIcon /> Fax Number
                                    <a href="tel:+1(301)690-0095">+1 (301) 690-0095</a>
                                </div>
                            </li>
                            <li>
                                <div className={styles.footerInfo}>
                                    <EmailIcon /> Email
                                    <a href="mailto:support@parraid.com">support@parraid.com</a>
                                </div>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} lg={6} xl={6} className="offset-lg-1">

                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default ContactFrom