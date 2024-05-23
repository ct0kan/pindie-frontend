'use client';

import { useEffect } from 'react';

import Swiper from 'swiper';
import { Autoplay, Pagination } from "swiper/modules";
import Link from 'next/link';
import { Card } from '../Card/Card';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CardsSlider.module.css';

export const CardsSlider = (props) => {
  if (!props.data.length) return null;

    useEffect(() => {
        const options = {
          loop: false,
          spaceBetween: 10,
          allowTouchMove: true,
          slidesPerView: 1,
          autoplay: {
            enabled: false,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            enabled: true,
            clickable: true,
          },
          breakpoints: {
            450: {
              loop: true,
              spaceBetween: 20,
              slidesPerView: "auto",
              allowTouchMove: false,
              speed: 6500,
              autoplay: {
                enabled: true,
                delay: 0,
              },
              pagination: {
                enabled: false,
              },
            },
          },
          modules: [Autoplay, Pagination],
        };
        
        new Swiper(".swiper", options);
      }, []);

    return (
      <>
        <div className={`swiper ${styles["slider"]}`}>
          <ul className={`swiper-wrapper ${styles["slider-wrapper"]}`}>
            {props.data.map((item, i) => {
              return (
                <li className={`swiper-slide ${styles["slide"]}`} key={i}>
                  <Link href={`/games/${item.id}`}>
                    <Card {...item} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={`swiper-pagination ${styles["pagination"]}`}></div>
        </div>
      </>
    );
  }; 