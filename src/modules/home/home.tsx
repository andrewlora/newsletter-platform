import Header from "@/shared/widgets/header/header";
import Banner from "./features/banner";
import Benefits from "./features/benefits";
import Branding from "./features/branding";
import FeatureHighlight from "./features/feature.highlight";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
    </div>
  );
};

export default Home;
