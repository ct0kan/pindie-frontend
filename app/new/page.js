'use client';

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function New() {
    const newGames = useGetDataByCategory(endpoints.games, 'new');

    if (!newGames) return <Preloader />;

    return (
        <CardsListSection id="new" title="Новинки" data={newGames} />
    );
};
