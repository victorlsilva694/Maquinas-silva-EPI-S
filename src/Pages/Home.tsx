import NavBar from "../Components/NavBar/NavBar";
import InitialPresentation from "../Components/InitialPresentation";
import CardsProducts from "../Components/CardsProducts";
import CarouselContainer from "../Components/Carousel";
import { SideBar } from "./style";
import SideBarNavigate from "../Components/SideBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <InitialPresentation /> 
      <CarouselContainer />
      <SideBar>
        <SideBarNavigate/>
        <CardsProducts />
      </SideBar>
    </>
  );
};

export default Home;
