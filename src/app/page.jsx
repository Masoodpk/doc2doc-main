import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import AutoslideCarousel from "../components/Autoslide-carousel/Autoslide-carousel.jsx";
import UniversitySec from "../components/UniversitySec/UniversitySec.jsx";
import Helpsec from "@/components/Helpsec/Helpsec.jsx";
export default function Home() {
  return (
   <>
   <Navbar />
   <Hero/>
   <AutoslideCarousel />
   <UniversitySec />
   <Helpsec />
   </>
  );
}
