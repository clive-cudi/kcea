"use client"

import styles from "@/styles/components/nav/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const links = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "#"
        },
        {
            label: "Blog",
            link: "#"
        },
        {
            label: "Contact us",
            link: "#"
        }
    ];
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const app_container = document.getElementById("app");
        
        const scrollListener = app_container?.addEventListener('scroll', (e) => {
            if (app_container.scrollTop > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });

        return () => {scrollListener && app_container?.removeEventListener('scroll', scrollListener)};
    }, [])

    return (
        <nav className={`${styles.nav} ${styles[`scrolled_${scrolled}`]}`}>
            <div className={styles.nav_content}>
                <div className={styles.nav_col}>
                    <div className={styles.nav_col_img_icon}>
                        <Image src={`/logos/kcea-logo.jpeg`} alt={"@kcea_logo"} fill />
                    </div>
                </div>
                <div className={styles.nav_col}>
                    <ul data-elm-type={"nav-links"}>
                        {links.map((lnk, ix) => (
                            <li key={`${lnk.label.toLowerCase()}_${ix}`}><Link href={lnk.link}>{lnk.label}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}