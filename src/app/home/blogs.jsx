import Image from 'next/image';
import styles from "@/styles/home/blogs.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from 'next/link';
import img01 from "media/blogs/img1.webp";
import img02 from "media/blogs/img2.webp";
import img03 from "media/blogs/img3.webp";

export const BlogListingData = [
    {
        title: "Starting and Growing a Career in Web Design",
        date: "2025-08-06",
        img: img01.src,
        link: "#",
        slug: "",
    },
    {
        title: "Create a Landing Page That Performs Great",
        date: "2025-08-06",
        img: img02.src,
        link: "#",
        slug: "",
    },
    {
        title: "How Can Designers Prepare for the Future?",
        date: "2025-08-06",
        img: img03.src,
        link: "#",
        slug: "",
    },


];
function getTimeSince(dateString) {
    const postDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

    const intervals = [
        { label: 'year', seconds: 31536000 },
        { label: 'month', seconds: 2592000 },
        { label: 'week', seconds: 604800 },
        { label: 'day', seconds: 86400 },
        { label: 'hour', seconds: 3600 },
        { label: 'minute', seconds: 60 },
        { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(diffInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
        }
    }

    return 'just now';
}

const Blogs = ({ data, dataListing }) => {
    return (
        <section className={`${styles.blogSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={10} lg={7} className="my-auto">
                        <h2>Stay Inspired with Our
                            Latest Insights</h2>
                        <p>Dive into our blog for the latest trends, tips, and insights in the world of design and AI
                            technology. Whether you’re looking for inspiration, tutorials, or industry news, our articles
                            are crafted to keep you informed and inspired.</p>
                    </Col>
                    <Col md={12} className="my-auto">
                        <div className={styles.blogWapper}>
                            {BlogListingData.slice(0, 3).map((item, index) => (
                                <div className={styles.blogItem} key={index}>
                                    <div className={styles.blogImage}>
                                        <Image src={item.img} alt={item.title} fill />
                                    </div>
                                    <div className={styles.blogContent}>
                                        <div className={styles.dateSec}>
                                            <div className={styles.date}>{item.date}</div>
                                            <div className={styles.date}>{getTimeSince(item.date)}</div>
                                        </div>
                                        <h3><Link href={item.link}>{item.title}</Link></h3>
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

export default Blogs;
