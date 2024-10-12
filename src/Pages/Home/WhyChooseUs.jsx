import SectionTitle from "../../Components/SectionTitle";
import card1Img from "../../assets/icons/group.svg"
import card2Img from "../../assets/icons/Group 38729.svg"
import card3Img from "../../assets/icons/person.svg"
import card4Img from "../../assets/icons/Wrench.svg"
import card5Img from "../../assets/icons/check.svg"
import card6Img from "../../assets/icons/deliveryt.svg"

const WhyChooseUs = () => {
    return (
        <div>
            <SectionTitle
            categoryName={'Core Features'}
            categoryTitle={'Why Choose Us'}
            paragraph={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
            />
            {/* cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 my-10">
                {/* card1 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center p-6">
  <figure>
    <img
    className="rounded-xl"
      src={card1Img}
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
  </div>
</div>
                {/* card2 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center p-6">
  <figure>
    <img
    className=" rounded-xl bg-[#FF3811]"
      src={card2Img}
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
  </div>
</div>
                {/* card3 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center p-6">
  <figure>
    <img
    className="rounded-xl"
      src={card3Img}
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
  </div>
</div>
                {/* card4 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center p-6">
  <figure>
    <img
    className="rounded-xl"
      src={card4Img}
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
  </div>
</div>
                {/* card5 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center p-6">
  <figure>
    <img
    className="rounded-xl"
      src={card5Img}
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
  </div>
</div>
                {/* card6 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center p-6">
  <figure>
    <img
    className="rounded-xl"
      src={card6Img}
      alt="Shoes" />
  </figure>
  <div className="">
    <p className="font-bold text-lg text-gray-600">Engine Expert</p>
  </div>
</div>

</div>
        </div>
    );
};

export default WhyChooseUs;