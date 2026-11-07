export type GsapLib = {
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
};

let lib: Promise<GsapLib> | null = null;

/** GSAP is only needed for scroll effects, so it stays out of the initial page load. */
function loadGsap() {
  lib ??= Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  });
  return lib;
}

/** Runs `run` with GSAP after the visitor first scrolls or touches the page. Returns a cleanup function. */
export function whenActive(run: (lib: GsapLib) => void | (() => void)) {
  let cancelled = false;
  let cleanup: void | (() => void);
  const events = ["scroll", "pointerdown", "touchstart", "keydown"] as const;

  const start = () => {
    events.forEach((e) => window.removeEventListener(e, start));
    loadGsap().then((loaded) => {
      if (!cancelled) cleanup = run(loaded);
    });
  };

  if (window.scrollY > 0) start();
  else events.forEach((e) => window.addEventListener(e, start, { passive: true }));

  return () => {
    cancelled = true;
    events.forEach((e) => window.removeEventListener(e, start));
    cleanup?.();
  };
}
