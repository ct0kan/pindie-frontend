'use client';

import { Banner } from "@/app/components/Banner/Banner";
import { Promo } from "@/app/components/Promo/Promo";

import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "./api/config";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default function Home() {
  const popularGames = useGetDataByCategory(endpoints.games, 'popular');
  const newGames = useGetDataByCategory(endpoints.games, 'new');

  return (
    <main className="main">
      <Banner />
      <CardsListSection id="popular" title="Популярное" type="slider" data={popularGames} />
      <CardsListSection id="new" title="Новинки" type="slider" data={newGames} />
      <Promo />
    </main>
  );
};
