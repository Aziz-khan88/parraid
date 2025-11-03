"use client";
import { useParams } from "next/navigation";
import { ProdDetails } from "@/src/app/data/products/data";
import ProDetails from "@/src/app/product/components/prodetails"
import ConnectivityForm from "@/src/app/product/components/connectivityform"
import ProductList from "@/src/app/product/components/productlist"
import Blogs from "@/src/app/home/blogs"
import Faqs from "@/src/app/home/faqs"



const ProductDetailPage = () => {
    const params = useParams();
    const { slug } = params;
    const allProducts = Object.values(ProdDetails).flat();
    const products = allProducts.filter((prod) => prod.slug === slug);

    if (!products || products.length === 0) {
        return <p>Product not found!</p>;
    }

    const product = products[0];


    return (
        <>
            <ProDetails product={product} />
            <ConnectivityForm />
            <ProductList cat={product.cat} />
            <Blogs />
            <Faqs />
        </>
    );
};

export default ProductDetailPage;
