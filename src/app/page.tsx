import Hero from "@/components/sections/Hero";
import MainAbout from "@/components/sections/MainAbout";
import MainExperience from "@/components/sections/MainExperience";
import MainPortfolio from "@/components/sections/MainPortfolio";
import MainContact from "@/components/sections/MainContact";

export default function Home() {
  return (
    <section>
      {/* <div className="container mx-auto px-4"></div> */}
      <Hero />
      <MainAbout />
      <MainExperience />
      <MainPortfolio />
      <MainContact />
    </section>
  );
}
