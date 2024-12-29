import BackgroundImage from "../components/BackgroundImage";
import BannerHome from "../components/home/BannerHome";
import CardSection1 from "../components/home/CardSection1";
import CardSection2 from "../components/home/CardSection2";
import CardSection3 from "../components/home/CardSection3";

export default function Home() {
  return (
    <div>
      <BackgroundImage path={"home"} />
      <BannerHome />
      <CardSection1 />
      <CardSection2 />
      <CardSection3 />
    </div>
  );
}
