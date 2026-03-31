import { render, screen } from "@testing-library/react";
import Home from "../home/page";

describe("Page page", () => {
    it("affiche le titre Bienvenue", () => {
        render(<Home />);
        expect(screen.getByRole("heading", { name: /bienvenue/i })).toBeInTheDocument();
    });

    it("affiche le texte de description", () => {
        render(<Home />);
        expect(screen.getByText(/voici mon super site/i)).toBeInTheDocument();
    });
});
