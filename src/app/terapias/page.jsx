import BackgroundImageTerapias from "@/src/components/terapias/BackgroundImageTerapias";
import BannerTerapias from "@/src/components/terapias/BannerTerapias";
import CardSection1Terapias from "@/src/components/terapias/CardSection1Terapias";
import MainSectionTerapias from "@/src/components/terapias/MainSectionTerapias";

export default function Terapias() {
  return (
    <>
      <BackgroundImageTerapias path={"terapias"} />
      <CardSection1Terapias />
      <MainSectionTerapias />
    </>
  );
}
