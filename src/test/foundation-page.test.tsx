import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

const foundationText =
  "Cotture lente e barbecue per eventi a Perugia e in Umbria. Il nuovo sito è in preparazione.";

describe("foundation page", () => {
  it("renders the approved semantic landmarks and content", () => {
    render(<HomePage />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Spaccini Barbecue" }),
    ).toBeInTheDocument();
    expect(screen.getByText(foundationText)).toBeInTheDocument();
  });

  it("renders the official logo and Instagram destination", () => {
    render(<HomePage />);

    expect(screen.getByRole("img", { name: "Logo Spaccini Barbecue" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Seguici su Instagram" })).toHaveAttribute(
      "href",
      "https://www.instagram.com/bbq.you/",
    );
  });

  it("links the skip control to the main content", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "Salta al contenuto" })).toHaveAttribute(
      "href",
      "#contenuto-principale",
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "contenuto-principale");
  });
});
