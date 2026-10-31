"use client";

import * as React from "react";

/** Renders the current year. Starts from a build-time year and updates on the client so prerendering stays stable. */
export function CurrentYear({ initial = 2026 }: { initial?: number }) {
  const [year, setYear] = React.useState(initial);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
