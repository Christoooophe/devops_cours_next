import { describe, it, expect } from "vitest";

describe("homepage", () => {
    it("should respond with 200 on /", async () => {
        const res = await fetch("http://app:3000/");

        expect(res.status).toBe(200);
    });
});
