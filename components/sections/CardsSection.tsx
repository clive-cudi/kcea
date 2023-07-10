import styles from "@/app/page.module.scss";
import { Card } from "../Card";
import { persons as cards } from "@/assets";

export const CardsSection = (): JSX.Element => {
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