import Banner from "@/src/app/products/components/banner"
import ProductTab from "@/src/app/home/producttab"
import ConnectivityVideo from "@/src/app/products/components/connectivityvideo"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import Industries from "@/src/app/home/industries"


const Page = () => {
  return (
    <>
      <Banner />
      <ProductTab />
      <ConnectivityVideo />
      <Industries />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page