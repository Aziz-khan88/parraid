"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/layout/header.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import {
  ClosedIcon,
  FbIcon,
  InsaIcon,
  MainLogo,
  NavIcon,
} from "@/src/app/app-constants";
import Link from "next/link";
import { SearchIcon } from "../app-constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setIsActive(false);
        document.body.classList.remove("active");
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (window.innerWidth < 767) {
      const newState = !isActive;
      setIsActive(newState);
      document.body.classList.toggle("active", newState);
    }
  };
  return (
    <section
      className={`${styles.headerSection} ${isScrolled ? styles.fixed : ""} `}
    >
      <Container
        className={`${styles.topHeader} ${pathname === "/" ? styles.home : ""}`}
      >
        <Row className="h-100">
          <Col className="my-auto">
            <div className={styles.leftTxt}>
              <div>
                Email :{" "}
                <Link href="mailto:sales@parraid.com">sales@parraid.com</Link>
              </div>
              <div>
                Call Us : <Link href="tel:+13016900690">+1 (301) 690-0690</Link>
              </div>
            </div>
          </Col>
          <Col className={`${styles.rightTxt} my-auto`}>
            <p>
              Follow Us :{" "}
              <Link href="https://www.facebook.com/people/Noho-Flooring-Construction-Services/100027208581024/">
                <FbIcon />
              </Link>{" "}
              <Link href="https://www.instagram.com/nohoflooring/">
                <InsaIcon />
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className={`${styles.headerContainer}`}>
        <Row className="h-100">
          <Col xs={6} md={3} className="my-auto">
            <div className={styles.mainLogo}>
              <Link href="/">
                <MainLogo />
              </Link>
            </div>
          </Col>
          <Col xs={6} md={9} className="my-auto">
            <div
              onClick={handleClick}
              className={`${isActive ? "navIcon active" : "navIcon"}`}
            >
              {isActive ? <ClosedIcon /> : <NavIcon />}
            </div>
            <ul
              className={`${styles.headerNavigation} ${
                isActive ? styles.active : ""
              }`}
            >
              <li>
                <Link href="/about-us" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" onClick={handleClick}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/careers" onClick={handleClick}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press-release" onClick={handleClick}>
                  Press
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={handleClick}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" onClick={handleClick}>
                  Contact Us{" "}
                </Link>
              </li>
              <li>
                <Link href="#">
                  <SearchIcon />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
