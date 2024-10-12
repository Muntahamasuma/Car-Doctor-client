import AboutUs from "./AboutUs";
import Banner from "./Banner";
import InfoSection from "./InfoSection";
import Popular from "./Popular";
import ServiceArea from "./ServiceArea";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <ServiceArea></ServiceArea>
          <InfoSection/>
          <Popular></Popular>
        </div>
    );
};

export default Home;