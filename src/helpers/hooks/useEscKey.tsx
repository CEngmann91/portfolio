import React from "react";
import { useKeyDown } from "./useKeyDown";

export const useEscKey = () => {
    const { key } = useKeyDown();

    const hasEscaped = (key === "Escape");
    return { hasEscaped }
}