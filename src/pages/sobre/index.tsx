import Header from "../../components/Header";
import Description, { DescriptionAbout } from "../../components/Model/Description";
import FooterSection from "../../components/Sections/Footer";
import OurTeam from "../../components/Sobre/Team";

export default function Sobre() {
  return (
    <div className="mt-[120px]">
      <Header title="Sobre a empresa" />
      <DescriptionAbout />
      <OurTeam />
      <FooterSection />
    </div>
  )
}
