import { Banner } from "@/app/components/Banner/Banner";
import { Promo } from "@/app/components/Promo/Promo";

import { getGamesByCategory } from "./data/data-utils";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default function Home() {
  const popularGames = getGamesByCategory('popular');
  const newGames = getGamesByCategory('new');

  return (
    <main className="main">
      <Banner />
      <CardsListSection id="popular" title="Популярное" type="slider" data={popularGames} />
      <CardsListSection id="new" title="Новинки" type="slider" data={newGames} />
      <Promo />
    </main>
  );
};
