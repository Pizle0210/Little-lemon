import { FC } from "react";
import { Container } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomersSay from "../../components/CustomersSay";
import Chicago from "../../components/Chicago";
import CallToAction from "../../components/CallToAction";
import Specials from "../../components/Specials";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </Container>
  );
};

export default Home;
