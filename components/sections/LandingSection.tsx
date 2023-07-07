import styles from "@/app/page.module.scss"
import { Carousel } from "../Carousel";
import Image from "next/image";

export const LandingSection = () => {
    const carousel_images = [
        "/images/home/poster-1.jpg",
        "/images/home/poster-2.jpg",
        "/images/home/poster-3.jpg"
    ]
    return (
        <section className={`${styles.page_section} ${styles.landing_section}`}>
            <Carousel images={carousel_images} />
          <div className={styles.page_section_content}>
            <div className={styles.ls_strip}>
                <h1 className={styles.gradient_font}>KCEA</h1>
            </div>
            <div className={styles.ls_strip}>
                <h2>Kenya Community Education & Action</h2>
            </div>
            <span className={styles.scroll_for_more}>
                <button>
                    <span>
                        <Image src={"/icons/down-chevron.svg"} alt="@_down" fill />
                    </span>
                </button>
            </span>
          </div>
        </section>
    )
}