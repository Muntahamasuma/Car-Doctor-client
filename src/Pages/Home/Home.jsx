import AboutUs from "./AboutUs";
import Banner from "./Banner";
import InfoSection from "./InfoSection";
import ServiceArea from "./ServiceArea";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <ServiceArea></ServiceArea>
          <InfoSection/>
        </div>
    );
};

export default Home;