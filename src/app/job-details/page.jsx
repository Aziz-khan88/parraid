import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import JobDetails from "@/src/app/job-details/components/jobdetails"


const Page = () => {
  return (
    <>
      <JobDetails />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page
