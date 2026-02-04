"use client";

import { useState } from "react";
import styles from "@/styles/components/forms/contactfrom.module.scss";
import Link from "next/link";

const ContactForm = ({ product, blogPage }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      company: form.company.value,
      message: form.msg.value,
      pageurl: window.location.href,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed.");
      setLoading(false);
    }
  };

  return (
    <div className={`${product ? styles.productBox : ""}`}>
      <div className={styles.divFull}>
        <p>
          Powering secure, real-time data transmission across land, sea, and
          sky.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
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
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
            />
          </div>

          <div className={styles.divField}>
            <textarea name="msg" placeholder="Message"></textarea>
          </div>

          <div className={styles.divField}>
            <input type="checkbox" name="check" required /> By signing up, you
            agree to our <Link href="#">Terms of Service</Link> and{" "}
            <Link href="#">Privacy Policy</Link>.
          </div>

          <div className={styles.divSubmit}>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
