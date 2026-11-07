import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ipile Earth Synergy Construction Limited",
    short_name: "Ipile Earth",
    description: "Affordable homes and construction in Nigeria with Compressed Earth Brick.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7C290",
    theme_color: "#800020",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
