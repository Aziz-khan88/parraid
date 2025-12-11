import styles from "@/styles/components/forms/contactfrom.module.scss";
import Link from "next/link";

const ContactForm = ({ product, blogPage }) => {
  return (
    <div className={`${product ? styles.productBox : ""}`}>
      <div className={styles.divFull}>
        {/* <h3>Can’t Reach Us?</h3> */}
        <p>
          Powering secure, real-time data transmission across land, sea, and
          sky.
        </p>
      </div>
      <form action="">
        <div
          className={`${styles.contactForm} ${blogPage ? styles.blogPage : ""
            } ${product ? styles.productForm : ""}`}
        >
          <div className={styles.divField}>
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className={styles.divField}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className={styles.divField}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className={styles.divField}>
            <textarea name="msg" placeholder="Message"></textarea>
          </div>
          <div className={styles.divField}>
            <input type="checkbox" name="check" required />
            By signing up, you agree to our{" "}
            <Link href="#">Terms of Service.</Link> and{" "}
            <Link href="#">Privacy Policy.</Link>
          </div>
          <div className={styles.divSubmit}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
