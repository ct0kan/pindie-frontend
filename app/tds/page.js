'use client';

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Tds() {
    const tdsGames = useGetDataByCategory(endpoints.games, 'TDS');

    if (!tdsGames) return <Preloader />;

    return (
        <CardsListSection id="tds" title="TDS" type="slider" data={tdsGames} />
    );
};
