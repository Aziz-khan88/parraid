import AboutList from "@/src/app/about-us/components/aboutlist"
import Build from "@/src/app/home/build"
import Connectivity from "@/src/app/about-us/components/connectivity"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import ProjectCounter from "@/src/app/about-us/components/projectcounter"

const Page = () => {
  return (
    <>
      <Build about={true} />
      <AboutList />
      <Connectivity />
      <ProjectCounter />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page