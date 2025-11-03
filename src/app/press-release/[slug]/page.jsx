"use client";
import { useParams } from "next/navigation";
import PressDetails from "@/src/app/press-release/components/details"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"
import { PressListing } from "@/src/app/data/press-release/data";


const Page = () => {
  const params = useParams();
  const { slug } = params;
  const allPress = Object.values(PressListing).flat();
  const pressItems = allPress.filter((press) => press.slug === slug);

  if (!pressItems || pressItems.length === 0) {
    return <p>Product not found!</p>;
  }

  const pressItem = pressItems[0];
  return (
    <>
      <PressDetails data={pressItem} />
      <Blogs />
      <Faqs />
    </>
  )
}

export default Page