import Header from "@/shared/widgets/header/header";
import Banner from "./features/banner";
import Benefits from "./features/benefits";
import Branding from "./features/branding";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
    </div>
  );
};

export default Home;
