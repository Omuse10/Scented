import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { FeaturedRituals } from "@/components/site/FeaturedRituals";
import { Manifesto } from "@/components/site/Manifesto";
import { Ritual } from "@/components/site/Ritual";
import { Mood } from "@/components/site/Mood";
import { Bestsellers } from "@/components/site/Bestsellers";
import { DiscoveryFeature } from "@/components/site/DiscoveryFeature";
import { Founder } from "@/components/site/Founder";
import { InstagramGrid } from "@/components/site/InstagramGrid";
import { ShopByProduct } from "@/components/site/ShopByProduct";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Scented Space — Beautifully Scented Skin" },
      {
        name: "description",
        content:
          "Luxury perfume oils and body rituals — designed to scent the skin beautifully, from the first cleanse to the last whisper of perfume.",
      },
    ],
  }),
  component: Home,
});

/**
 * Homepage rhythm — alternating cinematic & focused moments.
 *
 *   Hero                  XL cinematic
 *   FeaturedRituals       editorial (1 hero + 3 supporting)
 *   Manifesto             quiet pause — one line, lots of air
 *   Ritual                XL scroll story — alternating steps
 *   Mood                  editorial (1 featured + 4 supporting)
 *   Bestsellers           focused product grid
 *   DiscoveryFeature      XL cinematic — dark, conversion
 *   Founder               editorial — light, breathes after dark
 *   InstagramGrid         focused — gentle outro
 */
function Home() {
  return (
    <>
      <Hero />
      <ShopByProduct />
      <FeaturedRituals />
      <Manifesto />
      <Ritual />
      <Mood />
      <Bestsellers />
      <DiscoveryFeature />
      <Founder />
      <InstagramGrid />
    </>
  );
}
