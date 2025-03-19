import { renderHook, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { useDailyQuoute } from "./useDailyQuote";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("useDailyQuote", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    test("starts with loading true", () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve([{ quote: "Test quote", author: "Tester" }]),
        });

        const { result } = renderHook(() => useDailyQuoute());

        expect(result.current.loading).toBe(true);
        expect(result.current.dailyQuote).toBeNull();
        expect(result.current.error).toBeNull();
    })

    test("fetches and sets quote successfully", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve([{ quote: "Success quote", author: "Author Name" }]),
        })

        const { result } = renderHook(() => useDailyQuoute());

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.dailyQuote).toEqual({ quote: "Success quote", author: "Author Name" });
        expect(result.current.error).toBeNull();
    })

    test("handles fetch error correctly", async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
        });

        const { result } = renderHook(() => useDailyQuoute());

        await waitFor(
            () => {
                expect(result.current.loading).toBe(false);
            }
        );

        expect(result.current.dailyQuote).toBeNull();
        expect(result.current.error).toBe("Error fetching quote");
    })

    test("handles network failure", async () => {
        mockFetch.mockRejectedValueOnce(new Error("Network error"));

        const { result } = renderHook(() => useDailyQuoute());

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.dailyQuote).toBeNull();
        expect(result.current.error).toBe("Network error");
    });
});