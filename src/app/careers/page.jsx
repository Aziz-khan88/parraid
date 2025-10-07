import Banner from "@/src/app/careers/components/banner"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Team from "@/src/app/home/team"
import Jobs from "@/src/app/careers/components/jobs"

const Page = () => {
  return (
    <>
      <Banner />
      <Team />
      <Jobs />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page
