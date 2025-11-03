"use client"
import { CategoryData } from '@/src/app/data/category/data';
import { useParams } from 'next/navigation';
import Banner from '@/src/app/[slug]/components/banner';
import CategoryContent from '@/src/app/[slug]/components/categorycontent';
import BlueBox from '@/src/app/[slug]/components/bluebox';
import ProductListing from "@/src/app/shop/components/productlisting"


const Page = () => {
    const { slug } = useParams();
    const category = CategoryData.find((cat) => cat.slug === slug);

    if (!category) {
        return <p>Category Page not found!</p>;
    }

    return (
        <>
            <Banner data={category} />
            <CategoryContent data={category} />
            <BlueBox data={category} />
            <ProductListing id={category.cat} />
        </>
    )
}

export default Page