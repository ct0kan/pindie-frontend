'use client';

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function Shooters() {
    const shooterGames = useGetDataByCategory(endpoints.games, 'shooter');

    if (!shooterGames) return <Preloader />;

    return (
        <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
    );
};
