describe("Check", () => {
    test("GET 200", async () => {
        const res = await fetch("http://localhost:3000/home");

        expect(res.status).toBe(200);
    });
});
