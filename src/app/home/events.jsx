import styles from "@/styles/home/events.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SingleButton from "@/src/app/components/singlebutton";
import Event01 from "media/events/logo1.webp";
import Event02 from "media/events/logo2.webp";
import Event03 from "media/events/logo3.webp";
import Event04 from "media/events/logo4.webp";
import Event05 from "media/events/logo5.webp";
import Event06 from "media/events/logo6.webp";
import Event07 from "media/events/logo7.webp";
import Event08 from "media/events/logo8.webp";
import Event09 from "media/events/logo9.webp";
import Event10 from "media/events/logo10.webp";
import Event11 from "media/events/logo11.webp";
import Event12 from "media/events/logo12.webp";
import Event13 from "media/events/logo13.webp";
import Event14 from "media/events/logo14.webp";
import Event15 from "media/events/logo15.webp";
import Event16 from "media/events/logo16.webp";
import Event17 from "media/events/logo17.webp";
import Event18 from "media/events/logo18.webp";
import Event19 from "media/events/logo19.webp";
import Event20 from "media/events/logo20.webp";
import Image from "next/image";

const data = [
  {
    title: "TechNet Augusta",
    add: "Augusta, GA",
    link: "https://events.afcea.org/Augusta25/Public/enter.aspx",
    img: Event01.src,
    date: "August 18-21",
    time: "10:00 AM"
  },
  {
    title: "NGAFL Adjutant General’s Leadership Summit",
    add: "Palm Beach, FL",
    link: "https://engafl.org/ngafl-annual-state-conference/",
    img: Event02.src,
    date: "September 25-28",
    time: "09:00 AM"
  },
  {
    title: "Aerospace International Test & Development Show",
    add: "Toulouse, France",
    link: "https://www.aerotestdevelopmentshow.com/",
    img: Event03.src,
    date: "September 30 – October 1",
    time: "07:00 AM"
  },
  {
    title: "ITC",
    add: "Las Vegas, NV",
    link: "https://events.afcea.org/tip25/Public/enter.aspx",
    img: Event04.src,
    date: "October 20-23",
    time: "11:00 AM"
  },
  {
    title: "TechNet Indo-Pacifc",
    add: "Honolulu, HI",
    link: "https://events.afcea.org/tip25/Public/enter.aspx",
    img: Event05.src,
    date: "October 28-30",
    time: "09:00 AM"
  },
  {
    title: "ITEA Annual T&E Symposium",
    add: "Destin, FL",
    link: "https://itea.org/annual-te-symposium/",
    img: Event06.src,
    date: "November 11-14",
    time: "11:00 AM"
  },
  {
    title: "WEPTAC",
    subtitle: "Nellis Airforce Base",
    add: "Las Vegas, NV",
    link: "https://www.weptac.com/",
    img: Event07.src,
    date: "January 10-11th",
    time: "11:00 AM"
  },
  {
    title: "Singapore Airshow",
    subtitle: "Changi Exhibition Center",
    add: "Singapore",
    link: "https://www.singaporeairshow.com/",
    img: Event08.src,
    date: "February 20-25",
    time: "10:00 AM"
  },
  {
    title: "TechNet Ft. Liberty",
    subtitle: "Fort Liberty",
    add: "Ft. Liberty, NC",
    link: "https://www.technetfortliberty.com/",
    img: Event09.src,
    date: "February 21-23",
    time: "09:00 AM"
  },
  {
    title: "Shadow Warrior Tech Expo",
    subtitle: "Fort Liberty",
    add: "Ft. Liberty, NC",
    link: "https://www.parraid.com/events/",
    img: Event10.src,
    date: "April 15-19",
    time: "09:00 AM"
  },
  {
    title: "SOF Week",
    subtitle: "Tampa Convention Center",
    add: "Tampa, FL",
    link: "https://www.sofweek.org/about/sof-week",
    img: Event11.src,
    date: "May 6-10",
    time: "08:00 AM"
  },
  {
    title: "ITEA TIW",
    subtitle: "The Tuscany Hotel",
    add: "Las Vegas, NV",
    link: "https://itea.org/event/2024-test-instrumentation-workshop-tiw/",
    img: Event12.src,
    date: "May 14-16",
    time: "11:00 AM"
  },
  {
    title: "ETTC",
    subtitle: "NCC Nuremberg Convention Center",
    add: "Nuremberg GER",
    link: "https://www.telemetry-europe.org/",
    img: Event13.src,
    date: "June 11-13",
    time: "11:00 AM"
  },
  {
    title: "NGAFL Annual Conference",
    subtitle: "Embassy Suites Orlando",
    add: "Orlando, FL",
    link: "https://engafl.org/ngafl-annual-state-conference/",
    img: Event02.src,
    date: "June 27-30",
    time: "11:00 AM"
  },
  {
    title: "ITEA MDO",
    subtitle: "Hilton at the Mark Center",
    add: "Alexandria, VA",
    link: "https://itea.org/event/2024-annual-multi-domain-operations-workshop/",
    img: Event14.src,
    date: "July 16-18",
    time: "11:00 AM"
  },
  {
    title: "GVSETS",
    subtitle: "Suburban Collection Showplace",
    add: "Novi, MI",
    link: "https://www.ndia.org/events/2023/8/15/gvsets",
    img: Event15.src,
    date: "August 13-15",
    time: "11:00 AM"
  },
  {
    title: "TechNet Augusta",
    subtitle: "Augusta Marriott at the Convention Center",
    add: "Augusta, GA",
    link: "https://events.afcea.org/Augusta24/Public/enter.aspx",
    img: Event16.src,
    date: "August 19-24",
    time: "11:00 AM"
  },
  {
    title: "TechNet Indo-Pacific",
    subtitle: "Hawaii Convention Center",
    add: "Honolulu, HI",
    link: "https://events.afcea.org/tip24/public/enter.aspx",
    img: Event17.src,
    date: "October 22-24",
    time: "11:00 AM"
  },
  {
    title: "ITC",
    subtitle: "Renaissance Glendale",
    add: "Glendale, AZ",
    link: "http://www.telemetry.org/",
    img: Event18.src,
    date: "October 21-24",
    time: "11:00 AM"
  },
  {
    title: "WEPTAC Tucson",
    subtitle: "Venue TBA",
    add: "Tucson, AZ",
    link: "https://arcweptac.com/",
    img: Event19.src,
    date: "October 21-25",
    time: "11:00 AM"
  },
  {
    title: "ITEA East Symposium",
    subtitle: "Embassy Suites",
    add: "Huntsville, AL",
    link: "https://itea.org/event/2024-41st-annual-international-te-symposium/",
    img: Event20.src,
    date: "November 4-7",
    time: "11:00 AM"
  }
]

const Events = ({ page, home }) => {
  return (
    <section className={`${styles.eventSection} ${page ? "p-100" : ""}`}>
      <Container>
        <Row>
          <Col md={8} lg={7}>
            <h2>Events</h2>
            <p>
              Parraid actively engages with global aerospace, defense, and
              technology communities to showcase our latest innovations in
              tactical communications systems, telemetry communication
              solutions, and deployable communication products.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-5">
            {(home ? data.slice(0, 3) : data).map((event, index) => (
              <div className={styles.eventWapper} key={index}>
                <div className={styles.eventImg}>
                  <Image src={event.img} alt="Event" width={520} height={391} />
                </div>
                <div className={styles.eventContent}>
                  <ul>
                    <li>{event.time}</li>
                    <li>{event.date}</li>
                  </ul>
                  <h2>{event.title}</h2>
                  {event.subtitle !== "" ? (
                    <h4>{event.subtitle}</h4>
                  )
                    :
                    ""
                  }
                  <div className={styles.locaiotn}>
                    Location: {event.add}
                  </div>
                  <div className={styles.eventbtn}>
                    <SingleButton link={event.link} txt="Event Website" />
                  </div>
                </div>
              </div>
            ))}

            {page ? (
              ""
            ) : (
              <div className={styles.viewMore}>
                <SingleButton link="/events" txt="View All Events" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Events;
