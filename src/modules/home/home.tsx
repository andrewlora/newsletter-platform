import Footer from "@/shared/widgets/footer";
import Header from "@/shared/widgets/header/header";
import Banner from "./elements/banner";
import Benefits from "./elements/benefits";
import Branding from "./elements/branding";
import FeatureHighlight from "./elements/feature.highlight";
import Pricing from "./elements/pricing";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
