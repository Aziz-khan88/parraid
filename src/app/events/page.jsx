import Banner from "@/src/app/events/components/banner"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Events from "@/src/app/home/events"

const Page = () => {
  return (
    <>
      <Banner />
      <Events page={true} />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page
