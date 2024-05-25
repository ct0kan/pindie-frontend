'use client';

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooters() {
    const runnerGames = useGetDataByCategory(endpoints.games, 'runner');

    if (!runnerGames) return <Preloader />;

    return (
        <CardsListSection id="runner" title="Ранеры" data={runnerGames} />
    );
};
