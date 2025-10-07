import Banner from "@/src/app/news/components/banner"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Press from "@/src/app/news/components/press"


const Page = () => {
  return (
    <>
      <Banner />
      <Press />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page
