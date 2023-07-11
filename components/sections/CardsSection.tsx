"use client";

import styles from "@/app/page.module.scss";
import { Card } from "../Card";
import { persons as cards } from "@/assets";
import { useState } from "react";
import { Modal } from "../Modal";
import { PersonInfoPopup } from "../PersonInfoPopup";

export interface IPerson {
  name: string;
  age: number;
  image: string;
  village: string;
  primary_sch: string;
  description: string;
}

export const CardsSection = (): JSX.Element => {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    data: IPerson | null
  }>({
    isOpen: false,
    data: null
  });

  function openModal(data: IPerson) {
    setModalConfig({
      isOpen: true,
      data
    })
  }

  function closeModal() {
    setModalConfig({
      isOpen: false,
      data: null
    })
  }

    return (
        <section className={`${styles.page_section} ${styles.cards_section}`}>
          <div className={styles.page_section_content}>
            <div className={`${styles.ls_strip} ${styles.ls_strip_header}`}>
              <h2>Our Stories</h2>
              <hr />
            </div>
            <div className={`${styles.ls_strip}`}>
              <div className={styles.story_cards_wrapper}>
                {cards.map((card, i) => (<Card key={`${card.name} ${i}`} person={card} onClick={() => {openModal(card)}} />))}
              </div>
            </div>
          </div>
          {modalConfig.isOpen ? <Modal data={ modalConfig.data ? <PersonInfoPopup info={modalConfig.data} /> : null} outerClickCloseHandler={() => {closeModal()}} /> : null}
        </section>
    )
}