'use client';

import React, { useEffect, useState } from 'react';
import styles from './Promo.module.css';

export const Promo = () => {
  const [codeIsVisible, setCodeIsVisible] = useState(false);

  const handleButtonClick = () => {
    if (!codeIsVisible) {
      setCodeIsVisible(true);
    }
  };

  useEffect(() => {
    let timeout;

    if (codeIsVisible) {
      timeout = setTimeout(() => {
        setCodeIsVisible(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [codeIsVisible]);

  return (
    <section className={styles.promo}>
        <div className={styles['promo__description-block']}>
          <h2 className={styles['promo__title']}>Твой промо-код</h2>
          <p className={styles['promo__description']}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
          <button className={`button ${styles['promo__button']}`} onClick={handleButtonClick}>
            {codeIsVisible === true && <span className={styles["promo-code"]}>WEBTEENS10</span>}
            {codeIsVisible === false && <span>Получить код</span>}
          </button>
        </div>
        <img src="./images/promo-illustration.svg" alt="Собака" className={styles['promo__image']} />
    </section>
  );
};
