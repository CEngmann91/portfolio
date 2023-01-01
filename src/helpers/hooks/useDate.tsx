import React, { useEffect } from "react";

export const useDate = () => {
    const date: Date = new Date();
    const dayOfWeekName = date.toLocaleString('default', { weekday: 'long' });
    const dayNumeric: string = String(date.getDate()).padStart(2, '0');
    const fullMonth = date.toLocaleString('default', { month: 'long' });
    const fullYear = date.getFullYear();



    useEffect(() => {
        
    }, [dayOfWeekName, dayNumeric, fullMonth, fullYear])

    return { dayOfWeekName, dayNumeric, fullMonth, fullYear };
}