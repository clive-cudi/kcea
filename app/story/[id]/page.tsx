import { persons as person_data } from "@/assets";
import { Navbar } from "@/components";
import styles from "./page.module.scss";
import Image from "next/image";


interface IStoryPage {
    params: {
        id: string
    }
}

export default function StoryPage({params}: IStoryPage) {
    const person = person_data.find((prsn) => prsn.uid === params.id) ?? null;

    return (
        <main className={`app ${styles.app} ${styles.story_page}`} id='app'>
            <div className={`content ${styles.content}`}>
                <Navbar />
                <div className={styles.banner_wrapper}>
                    <div className={styles.banner_bg_image} style={{backgroundImage: `url('${person?.image}')`}}></div>
                    <div className={styles.banner_img}>
                        {person?.image && <Image src={person.image} alt={`@banner`} fill />}
                    </div>
                </div>
                <section className={styles.story_paragraph_wrapper}>
                    {/* <div className={styles.sp_strip}>
                        <h2>My Story</h2>
                        <hr />
                    </div> */}
                    <div className={styles.sp_strip}>
                        <h2>{person?.name}</h2>
                        <hr />
                    </div>
                    <div className={styles.sp_strip}>
                        {/* <h4>Bio: </h4> */}
                        {/* bio */}
                        <ul>
                            <li><strong>Age: </strong>{person?.age ?? "_"}</li>
                            <li><strong>Village: </strong>{person?.village ?? "_"}</li>
                            <li><strong>Primary School: </strong>{person?.primary_sch ?? "_"}</li>
                        </ul>
                    </div>
                    <div className={`${styles.sp_strip} ${styles.sp_strip_with_p}`}>
                        {/* <hr data-elm-type={"sp_strip_gray_line"} /> */}
                        <p>{person?.story}</p>
                    </div>
                </section>
            </div>
    </main>
    )
}