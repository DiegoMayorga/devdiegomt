import { useEffect, useState } from "react";

type Quote = {
    quote: string;
    author: string;
    category?: string;
};

export function useDailyQuoute() {
    const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchDailyQuote() {
            try {
                const url = "https://api.api-ninjas.com/v1/quotes";
                const response = await fetch(url, {
                    headers: {
                        "X-Api-Key": import.meta.env.VITE_API_KEY,
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) throw new Error("Error fetching quote");
                const resData: Quote[] = await response.json();
                setDailyQuote(resData[0]);
            } catch (error) {
                if (error instanceof Error) {

                    setError(error.message);
                } else {
                    setError("Unknown error");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchDailyQuote();
    }, [])

    return { dailyQuote, loading, error };
}