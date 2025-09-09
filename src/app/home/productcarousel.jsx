import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "@/styles/home/productcarousel.module.scss";
import TwoButton from "@/src/app/components/twobutton";


const ProductCarousel = ({ products }) => {
    const [emblaRef] = useEmblaCarousel({
        align: "center",
        slidesToScroll: 1,
        containScroll: "trimSnaps",
    });
    return (
        <section className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {products.map((item, index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.productCard}>
                                <h5>{item.name}</h5>
                                <div className={styles.contentSec}>
                                    <p>{item.txt}</p>
                                    <TwoButton link1="#" link2="#" black={true} />
                                </div>
                                <Image src={item.img} alt={item.name} width={322} height={118} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCarousel

