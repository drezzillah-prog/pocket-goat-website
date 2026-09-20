import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pocket Goat",
    short_name: "Pocket Goat",
    description: "Books, tea, stories, culture, quiet company and kindness in Constanța.",
    start_url: "/ro",
    display: "standalone",
    background_color: "#07110d",
    theme_color: "#07110d"
  };
}
