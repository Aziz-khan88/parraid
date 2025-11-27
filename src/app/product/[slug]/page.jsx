import { ProdDetails } from "@/src/app/data/products/data";
import ProductPage from "@/src/app/product/components/productpage";

export async function generateMetadata({ params }) {
    const slug = params.slug;

    const allProducts = Object.values(ProdDetails).flat();
    const product = allProducts.find((p) => p.slug === slug);

    if (!product) {
        return {
            title: "Product Not Found",
            description: "No product found for this slug.",
        };
    }

    const firstImage = product.images?.[0];
    const ogImage = typeof firstImage === "string" ? firstImage : firstImage?.src;

    return {
        title: product.name,
        description: product.shortDesc || "",
        openGraph: {
            title: product.name,
            description: product.shortDesc || "",
            images: ogImage
                ? [{ url: ogImage, width: 1200, height: 630 }]
                : [],
        },
        alternates: {
            canonical: `/product/${product.slug}`,
        },
    };
}

export default function Page({ params }) {
    // Pass plain object to client component
    return <ProductPage slug={params.slug} />;
}
