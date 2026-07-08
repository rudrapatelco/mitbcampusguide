import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ResourcesSection from "../components/resourcessection";
import HelpSection from "../components/helpsection";
import QuickLinks from "../components/quicklinks";

function CampusGuide() {
  return (
    <>
      <Navbar />
      <Hero />
      <ResourcesSection />
      <HelpSection/>
      <QuickLinks/>
    </>
  );
}

export default CampusGuide;