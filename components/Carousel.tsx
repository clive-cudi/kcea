"use client"

import styles from "@/styles/components/carousel.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ICarousel {
    images: string[];
}

export const Carousel = ({ images }: ICarousel): JSX.Element => {
    const [currentImage, setCurrentImage] = useState(0);

    function nextImage() {
        if ((currentImage + 1) < images.length) {
            setCurrentImage((prev) => prev + 1);
        } else {
            setCurrentImage(0);
        }
    }

    function prevImage() {
        if (currentImage <= 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage((prev) => prev - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);
    })
    return (
        <div className={styles.carousel_wrapper}>
            <div className={styles.carousel_content}>
                <div className={styles.cc_overlay}></div>
                {/* {images.map((img, ix) => (
                    <div key={ix} className={styles.cc_img_wrapper}>
                        <Image src={img} alt={`@_${img}_`} fill />
                    </div>
                ))} */}
                <div className={styles.cc_img_wrapper}>
                    <Image src={images[currentImage]} alt={`@_${images[currentImage]}_`} fill />
                </div>
            </div>
        </div>
    )
}