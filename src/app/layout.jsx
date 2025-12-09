import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Footer from "@/src/app/layout/footer";
import Header from "@/src/app/layout/header";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    { path: "./assets/fonts/MyriadPro-BoldCondIt.woff2", weight: "bold", style: "italic" },
    { path: "./assets/fonts/MyriadPro-BoldCondIt.woff", weight: "bold", style: "italic" },
  ],
  variable: "--font-myfont",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://parraid.vercel.app/"),
  title: "Parraid | Expert Telemetry Data Systems Design, Engineering, Sales",
  description: "A small products-oriented business, Parraid is wholly devoted to design, engineering, sales, and support of telemetry data systems and tactically oriented mission-critical communications solutions.",
  //===== OG Tags =====
  openGraph: {
    title: "Parraid | Expert Telemetry Data Systems Design, Engineering, Sales",
    description: "A small products-oriented business, Parraid is wholly devoted to design, engineering, sales, and support of telemetry data systems and tactically oriented mission-critical communications solutions.",
    url: "/",
    siteName: "Parraid",
    locale: "en_US",
    type: "website",
    images: "#",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${myFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
