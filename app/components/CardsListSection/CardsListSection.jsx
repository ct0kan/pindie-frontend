import styles from "./CardsListSection.module.css";
import { CardsList } from "./CardsList";
import { CardsSlider } from "./CardsSlider.jsx";

export const CardsListSection = (props) => {
  return (
    <section className={styles["list-section"]}>
      <h2 className={styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      {props.type === 'slider' ? <CardsSlider data={props.data} /> : <CardsList data={props.data} />}
    </section>
  );
};
