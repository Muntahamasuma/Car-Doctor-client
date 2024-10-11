import personImg from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Button from '../../Components/Button';

const AboutUs = () => {
    return (
        <div className="hero my-10 lg:my-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img
      src={personImg}
      className="w-3/4 rounded-lg shadow-2xl" />
    <img
      src={parts}
      className="w-1/2 rounded-md shadow-2xl absolute top-1/2 right-12 border-8 border-white" />
    </div>
    <div className='lg:w-1/2'>
    <h6 className='font-bold text-lg text-[#FF3811]'>About Us</h6>
      <h1 className="text-4xl lg:text-5xl font-bold w-2/3">We are qualified & of experience in this field</h1>
      <p className="py-6 font-normal">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. <br /> <br />
      the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. 
      </p>
      <Button button={"Get More Info"}></Button>
    </div>
  </div>
</div> 
    );
};

export default AboutUs;