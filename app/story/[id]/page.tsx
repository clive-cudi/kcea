import { persons as person_data } from "@/assets";
import { Navbar } from "@/components";
import styles from "./page.module.scss";


interface IStoryPage {
    params: {
        id: string
    }
}

export default function StoryPage({params}: IStoryPage) {
    const person = person_data.find((prsn) => prsn.uid === params.id);

    return (
        <main className={`app ${styles.app}`} id='app'>
            <div className={`content ${styles.content}`}>
                <Navbar />
                <h2>{params.id}</h2>
                <h3>{person?.name}:width</h3>
                <p>{person?.description}</p>
            </div>
    </main>
    )
}