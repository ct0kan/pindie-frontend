'use client';

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
        {pathname === '/' ? (
            <div className={styles['footer__logo']}>
                <span className={styles['footer__logo-name']}>pindie</span>
                <span className={styles['footer__logo-copy']}>, XXI век</span>
            </div>
        ) : (
            <Link href="/" className={styles['footer__logo']}>
                <span className={styles['footer__logo-name']}>pindie</span>
                <span className={styles['footer__logo-copy']}>, XXI век</span>
            </Link>
        )}
        <ul className={styles['social-list']}>
            <li className={styles['social-list__item']}>
                <a href="" className={`button ${styles['social-list__link']}`}>YT</a>
            </li>
            <li className={styles['social-list__item']}>
                <a href="" className={`button ${styles['social-list__link']}`}>ВК</a>
            </li>
            <li className={styles['social-list__item']}>
                <a href="" className={`button ${styles['social-list__link']}`}>TG</a>
            </li>
        </ul>
    </footer>
  );
};
