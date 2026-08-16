import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

const instagramUrl = "https://www.instagram.com/bbq.you/";

describe("commercial homepage", () => {
  it("renders the primary landmarks and commercial heading", () => {
    render(<HomePage />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Il barbecue che diventa parte del tuo evento.",
      }),
    ).toBeInTheDocument();
  });

  it("renders the official logo and accessible navigation", () => {
    render(<HomePage />);

    expect(screen.getByRole("img", { name: "Logo Spaccini Barbecue" })).toBeInTheDocument();

    const navigation = screen.getByRole("navigation", { name: "Navigazione principale" });
    const expectedLinks = {
      Esperienza: "#esperienza",
      Cotture: "#cotture",
      Metodo: "#metodo",
      Storia: "#storia",
      Servizi: "#servizi",
    };

    for (const [name, href] of Object.entries(expectedLinks)) {
      expect(within(navigation).getByRole("link", { name })).toHaveAttribute("href", href);
    }

    expect(screen.getByRole("navigation", { name: "Navigazione mobile" })).toBeInTheDocument();
  });

  it("connects the skip link and event calls to action to page sections", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "Salta al contenuto" })).toHaveAttribute(
      "href",
      "#contenuto-principale",
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "contenuto-principale");

    for (const link of screen.getAllByRole("link", { name: "Raccontaci il tuo evento" })) {
      expect(link).toHaveAttribute("href", "#contatti");
    }

    expect(document.querySelector("#contatti")).toBeInTheDocument();
  });

  it("renders the main experience, cooking, method, story and event sections", () => {
    render(<HomePage />);

    const headings = [
      "Tu pensa agli invitati. Al fuoco pensiamo noi.",
      "Una cucina che entra nella scena.",
      "Il tempo è un ingrediente.",
      "Un sistema progettato intorno alla cottura.",
      "Prima è nato il barbecue. Poi è arrivato tutto il resto.",
      "Ogni evento parte da una conversazione.",
    ];

    for (const name of headings) {
      expect(screen.getByRole("heading", { level: 2, name })).toBeInTheDocument();
    }
  });

  it("renders both approved service paths", () => {
    render(<HomePage />);

    const services = screen.getByRole("region", { name: "Due modi per scegliere Spaccini." });
    const serviceHeadings = within(services).getAllByRole("heading", { level: 3 });

    expect(serviceHeadings.map((heading) => heading.textContent)).toEqual([
      "Prenotazione e ritiro",
      "Barbecue e catering per eventi",
    ]);
    expect(
      within(services).getByText(
        "Non è un catering tradizionale: portiamo il nostro barbecue, lo stand e la preparazione dal vivo davanti agli invitati.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Preparazione a vista")).toBeInTheDocument();
    expect(screen.getByText("Preparazioni su prenotazione")).toBeInTheDocument();
  });

  it("presents Roberto Spaccini’s personal manifesto", () => {
    render(<HomePage />);

    const opening = screen.getByText(
      "Voglio offrirti la mia esperienza e trasmetterti la mia passione, perché per me il cibo è un’emozione.",
    );
    const manifesto = opening.closest("blockquote");

    expect(manifesto).not.toBeNull();
    expect(manifesto).toHaveTextContent(
      "Vengo dalla cultura contadina umbra, fatta di rispetto per la materia prima e di condivisione.",
    );
    expect(manifesto).toHaveTextContent(
      "Parto dalle tecniche tradizionali e le unisco all’innovazione del sistema barbecue che ho sviluppato.",
    );
    expect(manifesto).toHaveTextContent("Il risultato? Sarai tu a giudicarlo.");
    expect(manifesto).toHaveTextContent("Roberto Spaccini");
    expect(screen.getByText("“Per me il cibo è un’emozione.”")).toBeInTheDocument();
  });

  it("renders useful frequently asked questions", () => {
    render(<HomePage />);

    const questions = [
      "Per quali eventi è disponibile il servizio?",
      "In quali zone operate?",
      "Esiste un numero minimo di persone?",
      "Portate voi barbecue e stand?",
      "Come viene servito il cibo?",
      "È possibile prenotare e ritirare?",
      "Quanto anticipo serve?",
      "Come viene calcolato il prezzo?",
    ];

    for (const question of questions) {
      expect(screen.getByText(question)).toBeInTheDocument();
    }
  });

  it("uses Instagram as the explicit final contact destination", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Che evento hai in mente?" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Scrivici su Instagram" })).toHaveAttribute(
      "href",
      instagramUrl,
    );
  });

  it("does not publish telephone or WhatsApp contact details", () => {
    render(<HomePage />);

    const publicLinks = Array.from(document.querySelectorAll("a"), (link) => link.href);
    const pageText = document.body.textContent ?? "";

    expect(publicLinks.some((href) => href.startsWith("tel:"))).toBe(false);
    expect(publicLinks.some((href) => /^https:\/\/wa\.me\//i.test(href))).toBe(false);
    expect(pageText).not.toMatch(/\b3\d{2}(?:[\s.-]?\d){7}\b/);
  });

  it("renders the sensory strip and the mid-page atmospheric moment", () => {
    render(<HomePage />);

    const strip = document.querySelector(".sensory-strip");
    expect(strip).not.toBeNull();
    const words = Array.from((strip as HTMLElement).querySelectorAll("li"));
    expect(words.map((item) => item.textContent)).toEqual([
      "Fuoco",
      "Legno",
      "Tempo",
      "Brace",
      "Convivialità",
      "Cura",
    ]);

    expect(
      screen.getByText("Il fuoco si accende. Il resto dell’evento prende forma intorno a lui."),
    ).toBeInTheDocument();
  });

  it("marks the animated reveal islands so the no-JS stylesheet can keep them visible", () => {
    render(<HomePage />);

    expect(document.querySelectorAll("[data-reveal]").length).toBeGreaterThan(10);
  });

  it("does not publish blocked claims or legacy BBQYOU links", () => {
    render(<HomePage />);

    const pageText = document.body.textContent?.toLocaleLowerCase("it") ?? "";
    const blockedClaims = [
      "brevettato",
      "più sana",
      "più sano",
      "meno tossica",
      "meno tossico",
      "priva di ipa",
      "privo di ipa",
      "priva di hca",
      "privo di hca",
      "sempre più digeribile",
    ];

    for (const claim of blockedClaims) {
      expect(pageText).not.toContain(claim);
    }

    const publicLinks = Array.from(document.querySelectorAll("a"), (link) => link.href);
    expect(publicLinks.some((href) => href.includes("bbqyou.it"))).toBe(false);
  });
});
