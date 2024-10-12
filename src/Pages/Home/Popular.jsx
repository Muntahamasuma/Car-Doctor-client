import SectionTitle from "../../Components/SectionTitle";
import card1Img from "../../assets/images/products/6.png"
import card2Img from "../../assets/images/products/3.png"
import card3Img from "../../assets/images/products/1.png"
import card4Img from "../../assets/images/products/2.png"
import card5Img from "../../assets/images/products/5.png"
import card6Img from "../../assets/images/products/4.png"
import ratingImg from "../../assets/Group 46.png"
import OutLineButton from "../../Components/OutLineButton";
const Popular = () => {
    return (
        <div>
            <SectionTitle 
            categoryName={'Popular Products'}
            categoryTitle={'Browse Our Products'}
            paragraph={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
            />
            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {/* card1 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card1Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex justify-center"><img src={ratingImg} alt="" /></div>
    <h2 className="card-title font-bold text-2xl">Car Engine Plug</h2>
    <p className="text-[#FF3811] font-bold text-xl">$20.00</p>
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
  <div className="flex justify-center"><img src={ratingImg} alt="" /></div>
    <h2 className="card-title font-bold text-2xl">Car Air Filter</h2>
    <p className="text-[#FF3811] font-bold text-xl">$20.00</p>
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
  <div className="flex justify-center"><img src={ratingImg} alt="" /></div>
    <h2 className="card-title font-bold text-2xl">Cools Led Light</h2>
    <p className="text-[#FF3811] font-bold text-xl">$20.00</p>
  </div>
</div>
                {/* card4 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card4Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className="flex justify-center"><img src={ratingImg} alt="" /></div>
    <h2 className="card-title font-bold text-2xl">Cools Led Light</h2>
    <p className="text-[#FF3811] font-bold text-xl">$20.00</p>
  </div>
</div>
                {/* card5 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card5Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className="flex justify-center"><img src={ratingImg} alt="" /></div>
    <h2 className="card-title font-bold text-2xl">Cools Led Light</h2>
    <p className="text-[#FF3811] font-bold text-xl">$20.00</p>
  </div>
</div>
                {/* card6 */}
            <div className="card rounded-xl border-2 border-gray-200 items-center text-center">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={card6Img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className="flex justify-center"><img src={ratingImg} alt="" /></div>
    <h2 className="card-title font-bold text-2xl">Cools Led Light</h2>
    <p className="text-[#FF3811] font-bold text-xl">$20.00</p>
  </div>
</div>
            </div>
            <OutLineButton outLineBtn={'More Products'}/>
        </div>
    );
};

export default Popular;