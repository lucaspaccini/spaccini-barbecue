import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Reveal } from "@/components/motion/reveal";

describe("Reveal", () => {
  it("renders its children marked for the no-JS visibility fallback", () => {
    render(<Reveal>Contenuto animato</Reveal>);

    expect(screen.getByText("Contenuto animato")).toHaveAttribute("data-reveal");
  });

  it("renders as the requested element", () => {
    render(
      <ul>
        <Reveal as="li">Voce di lista</Reveal>
      </ul>,
    );

    const item = screen.getByText("Voce di lista");
    expect(item.tagName).toBe("LI");
  });
});
