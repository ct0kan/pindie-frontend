import Link from 'next/link';
import { Card } from '../Card/Card';
import styles from './CardsListSection.module.css';

export const CardsList = (props) => {
  if (!props.data?.length) return null;

  return (
    <ul className={styles["cards-list"]}>
      {props.data.map((item) => {
        return (
          <li className={styles["cards-list__item"]} key={item.id}>
            <Link href={`/games/${item.id}`} className={styles["card-list__link"]}>
              <Card {...item} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
