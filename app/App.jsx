'use client';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { useEffect } from "react";
import { useStore } from "./store/app-store";

export const App = ({ children }) => {
    const store = useStore();

    useEffect(() => {
        store.checkAuth();
    }, []); 

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};