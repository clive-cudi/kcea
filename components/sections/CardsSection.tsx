"use client";

import React, { useRef, useState, DetailedHTMLProps, HTMLAttributes, useEffect, ReactElement } from "react";
import styles from "@/app/page.module.scss";
import { Card } from "../Card";
import { persons as cards_data } from "@/assets";
import { Modal } from "../Modal";
import { PersonInfoPopup } from "../PersonInfoPopup";
import type { IPerson } from "@/assets";

export const CardsSection = (): JSX.Element => {
  const [cards, setCards] = useState<IPerson[]>([...cards_data]);
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    data: IPerson | null
  }>({
    isOpen: false,
    data: null
  });
  const MAX_CARDS_PER_SLIDE = 6;
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const NUMBER_OF_SLIDES = Math.ceil(cards.length / MAX_CARDS_PER_SLIDE);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
  };

  function nextSlide() {
    if (scrollRef && isElementInViewport(cardsWrapperRef)) {
      if (currentSlide < (NUMBER_OF_SLIDES - 1)) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide(0);
      }
    }
  };

  function prevSlide() {
    if (scrollRef && isElementInViewport(cardsWrapperRef)) {
      if (currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      } else {
        setCurrentSlide((prev) => (NUMBER_OF_SLIDES - 1));
      }
    }
  };

  function isElementInViewport (el: React.RefObject<HTMLDivElement>) {

    if (!el.current) {
      return false;
    }

    var rect = el.current.getBoundingClientRect();
    console.log(rect);
    console.log()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

  useEffect(() => {
    // if (scrollRef) {
    //   console.log(scrollRef.current?.children[0]);
    // }
    // console.log(`No. of slides: ${NUMBER_OF_SLIDES}`)
    // console.log(`slide: ${currentSlide}`);
    if (scrollRef) {
      isElementInViewport(cardsWrapperRef) && scrollRef.current?.children[currentSlide].scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }

  }, [currentSlide]);
  

  useEffect(() => {
    if (searchQuery) {
      setCards(cards_data.filter((crd) => crd.name.toLowerCase().includes(searchQuery.toLowerCase())));
    } else {
      setCards(cards_data);
    }
  }, [searchQuery]);

    return (
        <section className={`${styles.page_section} ${styles.cards_section}`}>
          <div className={styles.page_section_content}>
            <div className={`${styles.ls_strip} ${styles.ls_strip_header}`} ref={cardsWrapperRef}>
              <div className={styles.ls_strip_search}>
                <input type={"search"} placeholder={"Search"} onChange={(e) => {setSearchQuery(e.target.value)}} />
              </div>
              <h2>Our Stories</h2>
              <hr />
              <div className={styles.ls_strip_nav}>
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
              </div>
            </div>
            <div className={`${styles.ls_strip} ${styles.ls_strip_with_cards}`}>
              <div className={styles.scrollable_card_container} ref={scrollRef}>
                {Array.from(Array(NUMBER_OF_SLIDES)).map((slide, ix) => {
                  return (
                    <div key={`slide${ix}`} className={styles.story_cards_wrapper}>
                      {cards.slice((ix * MAX_CARDS_PER_SLIDE), ((ix + 1) * MAX_CARDS_PER_SLIDE)).map((card_, i) => {
                        return (
                          <Card key={`${i}_${card_.name}`} person={card_} onClick={() => {openModal(card_)}} />
                        )
                      })}
                    </div>
                  )
                })}
                {/* <div className={styles.story_cards_wrapper}>
                  {cards.map((card, i) => (<Card key={`${card.name} ${i}`} person={card} onClick={() => {openModal(card)}} />))}
                </div> */}
              </div>
            </div>
          </div>
          {modalConfig.isOpen ? <Modal data={ modalConfig.data ? <PersonInfoPopup info={modalConfig.data} /> : null} outerClickCloseHandler={() => {closeModal()}} /> : null}
        </section>
    )
}