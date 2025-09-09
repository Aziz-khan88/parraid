import Banner from "@/src/app/home/banner"
import Build from "@/src/app/home/build"
import ProductTab from "@/src/app/home/producttab"
import Clients from "@/src/app/home/clients"
import Team from "@/src/app/home/team"
import Events from "@/src/app/home/events"
import Vision from "@/src/app/home/vision"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"


const Page = () => {
  return (
    <>
      <Banner />
      <Build />
      <ProductTab />
      <Clients />
      <Team />
      <Events />
      <Vision />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page