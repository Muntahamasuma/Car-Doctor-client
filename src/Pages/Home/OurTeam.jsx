import SectionTitle from "../../Components/SectionTitle";
import card1Img from "../../assets/images/team/1.jpg"
import card2Img from "../../assets/images/team/2.jpg"
import card3Img from "../../assets/images/team/3.jpg"
import socialImg from "../../assets/Group 38728.png"

const OurTeam = () => {
    return (
        <div>
            <SectionTitle 
            categoryName={'Team'}
            categoryTitle={'Meet Our Team'}
            paragraph={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
            />
            {/* cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
                {/* card1 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card1Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
    <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
    <div className="flex justify-center"><img src={socialImg} alt="" /></div>
  </div>
</div>
                {/* card2 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card2Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
    <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
    <div className="flex justify-center"><img src={socialImg} alt="" /></div>
  </div>
</div>
                {/* card3 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card3Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
    <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
    <div className="flex justify-center"><img src={socialImg} alt="" /></div>
  </div>
</div>
</div>
        </div>
    );
};

export default OurTeam;