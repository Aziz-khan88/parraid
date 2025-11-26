import { BlogListingData } from "@/src/app/data/blogs/data";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/blogs/blogdetails.module.scss";
import Image from "next/image";
import TableOfContents from "@/src/app/blogs/components/tablecontent";
import ContactForm from "@/src/app/components/forms/contactform";
import RelatedBlogs from "@/src/app/blogs/components/relateedblogs";
import Faqs from "@/src/app/home/faqs";
import Clients from "@/src/app/home/clients";
import FaqsBlog from "@/src/app/blogs/components/faqsblog";

// -----------------------------
// Dynamic metadata for SEO
// -----------------------------
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = BlogListingData.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post does not exist.",
    };
  }

  return {
    title: blog.title,
    description: blog.desc,
    openGraph: {
      title: blog.title,
      description: blog.desc,
      images: [
        {
          url: blog.img,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `/${blog.slug}`,
    },
  };
}

// -----------------------------
// Main Page Component
// -----------------------------
export default function Page({ params }) {
  const { slug } = params;
  const blog = BlogListingData.find((post) => post.slug === slug);

  if (!blog) return notFound();

  return (
    <>
      <section className={styles.blogDetails}>
        <Container>
          <Row>
            <Col lg={8} className="order-2 order-lg-1">
              <h1>{blog.title}</h1>
              <div className={styles.bannerImg}>
                <Image src={blog.img} alt={blog.title} fill />
              </div>
              {blog.maintxt}
              {blog.faqsData && <FaqsBlog data={blog.faqsData} />}
            </Col>
            <Col lg={4} className="order-1 order-lg-2">
              <TableOfContents tableContent={blog.tableContent} />
              <div className={styles.blogFrom}>
                <ContactForm blogPage={true} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <RelatedBlogs data={BlogListingData} currentSlug={slug} />
      <Clients noBorder={true} />
      <Faqs />
    </>
  );
}
