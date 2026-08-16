import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { EmberGlow } from "@/components/motion/ember-glow";
import { Reveal } from "@/components/motion/reveal";

// Framer Motion's reduced-motion detection is a module-level singleton that
// only reads `matchMedia` once on the first render, so the override must
// land before that render (Vitest isolates modules per test file, so this
// only has to run once here, ahead of the render calls below).
vi.stubGlobal(
  "matchMedia",
  vi.fn().mockImplementation((query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
);

describe("motion islands with prefers-reduced-motion: reduce", () => {
  it("keeps Reveal's initial paint identical regardless of the device's motion preference", () => {
    // Regression guard: a real visitor with reduced motion enabled hit a
    // hydration crash because this component used to start already-visible
    // on the client while the server always rendered it hidden. `initial`
    // must stay fixed no matter what `useReducedMotion()` reports.
    render(<Reveal>Contenuto</Reveal>);

    expect(screen.getByText("Contenuto")).toHaveStyle({ opacity: "0" });
  });

  it("always renders EmberGlow's element, regardless of the device's motion preference", () => {
    // Regression guard: the previous version returned `null` under reduced
    // motion, which differed from the server output and shifted every later
    // sibling during hydration. The element itself must always render.
    const { container } = render(<EmberGlow />);

    expect(container.querySelector(".ember-glow")).not.toBeNull();
  });
});
