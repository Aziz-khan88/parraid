import styles from "@/styles/resources/listing.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"

const ListingPage = ({ data }) => {
    return (
        <section className={styles.listingPages}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.listingPageSec}>

                            {data.map((item, index) => (
                                <div className={styles.listingPageItem} key={index}>
                                    <Link href={item.slug}>{item.title}</Link>
                                </div>
                            ))}


                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default ListingPage

