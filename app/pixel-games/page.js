'use client';

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";
import { Preloader } from "../components/Preloader/Preloader";

export default function PixelGames() {
    const pixelGames = useGetDataByCategory(endpoints.games, 'pixel');

    if (!pixelGames) return <Preloader />;

    return (
        <CardsListSection id="pixel" title="Пиксельные" type="slider" data={pixelGames} />
    );
};
