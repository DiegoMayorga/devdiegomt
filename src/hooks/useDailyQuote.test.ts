import { renderHook } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { useDailyQuote, getDailyQuote, QUOTES } from "./useDailyQuote";

describe("useDailyQuote", () => {
    test("returns a quote from the local pool", () => {
        const { result } = renderHook(() => useDailyQuote());
        expect(QUOTES).toContainEqual(result.current.dailyQuote);
    });

    test("is deterministic for a given date", () => {
        const date = new Date("2026-07-14T10:00:00Z");
        expect(getDailyQuote(date)).toEqual(getDailyQuote(date));
    });

    test("rotates through the pool on consecutive days", () => {
        const day1 = getDailyQuote(new Date("2026-07-14T10:00:00Z"));
        const day2 = getDailyQuote(new Date("2026-07-15T10:00:00Z"));
        expect(day1).not.toEqual(day2);
    });

    test("every quote in the pool has text and author", () => {
        for (const q of QUOTES) {
            expect(q.quote.length).toBeGreaterThan(0);
            expect(q.author.length).toBeGreaterThan(0);
        }
    });
});
