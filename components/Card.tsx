import styles from "@/styles/components/card.module.scss";
import type { IPerson } from "./sections/CardsSection";
import Image from "next/image";

interface ICard {
    person: IPerson;
    onClick: () => void
}

export const Card = ({person, onClick}: ICard): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.card_content}>
                <div className={styles.card_poster}>
                    <Image src={person.image} alt={`@_${person.name}_img`} fill />
                </div>
                <div className={styles.c_name_strip}>
                    <span>{person.name}</span>
                </div>
                <div className={styles.c_details_overlay}>
                    <div className={styles.cdo_strip}>
                        <span><strong>Name: </strong>{person.name}</span>
                    </div>
                    <div className={styles.cdo_strip}>
                        <span><strong>Age: </strong>{person.age}</span>
                    </div>
                    <div className={styles.cdo_strip}>
                        <span><strong>Village: </strong>{person.village}</span>
                    </div>
                    <div className={styles.cdo_strip}>
                        <span><strong>Primary Sch: </strong>{person.primary_sch}</span>
                    </div>
                    <div className={styles.cdo_strip}>
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}