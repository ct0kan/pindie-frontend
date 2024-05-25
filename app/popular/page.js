'use client';

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Popular() {
    const popularGames = useGetDataByCategory(endpoints.games, 'popular');

    if (!popularGames) return <Preloader />;

    return (
        <CardsListSection id="popular" title="Популярные" data={popularGames} />
    );
};
