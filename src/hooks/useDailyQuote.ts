export type Quote = {
    quote: string;
    author: string;
};

// Local quote pool: no external API, no client-exposed keys,
// no loading/error states on first paint.
export const QUOTES: Quote[] = [
    { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { quote: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { quote: "Optimism is an occupational hazard of programming.", author: "Kent Beck" },
];

// Deterministic pick: same quote for everyone during the same day,
// rotating through the pool as days pass.
export function getDailyQuote(date: Date = new Date()): Quote {
    const startOfYear = Date.UTC(date.getFullYear(), 0, 0);
    const today = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const dayOfYear = Math.floor((today - startOfYear) / 86_400_000);
    return QUOTES[dayOfYear % QUOTES.length];
}

export function useDailyQuote() {
    return { dailyQuote: getDailyQuote() };
}
