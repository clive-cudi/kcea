import styles from "@/app/page.module.scss";
import { Card } from "../Card";

export interface IPerson {
  name: string;
  age: number;
  image: string;
  village: string;
  primary_sch: string;
  description: string;
}

export const CardsSection = (): JSX.Element => {
  const cards: IPerson[] = [
    {
      name: "Veronica Maloi Musuni",
      age: 16,
      image: "/images/home/veronica-2.jpeg",
      village: "Nkoisuash",
      primary_sch: "Nkoisuash",
      description: "_"
    }
  ];
    return (
        <section className={`${styles.page_section} ${styles.cards_section}`}>
          <div className={styles.page_section_content}>
            <div className={`${styles.ls_strip} ${styles.ls_strip_header}`}>
              <h2>Our Stories</h2>
              <hr />
            </div>
            <div className={`${styles.ls_strip}`}>
              <div className={styles.story_cards_wrapper}>
                {cards.map((card, i) => (<Card key={`${card.name} ${i}`} person={card} onClick={() => {}} />))}
              </div>
            </div>
          </div>
        </section>
    )
}