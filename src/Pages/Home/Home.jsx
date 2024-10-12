import AboutUs from "./AboutUs";
import Banner from "./Banner";
import InfoSection from "./InfoSection";
import OurTeam from "./OurTeam";
import Popular from "./Popular";
import ServiceArea from "./ServiceArea";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AboutUs></AboutUs>
          <ServiceArea></ServiceArea>
          <InfoSection/>
          <Popular></Popular>
          <OurTeam></OurTeam>
          <WhyChooseUs></WhyChooseUs>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;