import { Link, useLoaderData } from "react-router-dom";
import btn1 from '../assets/icons/btn (1).png'
import btn2 from '../assets/icons/btn2 (1).png'
import btn3 from '../assets/icons/btn3 (1).png'
import imgV from '../assets/images/services/Rectangle (1).png'
import icon from '../assets/images/services/Frame.png'
import logo from '../assets/logo white.png'
const CheckOut = () => {
    const data = useLoaderData()
    const {title ,img , price} = data
    return (
        <div>
            <div className="h-[300px] bg-[url('https://i.ibb.co.com/CKbFjmV/checkout.png')] bg-cover rounded-lg mb-20">
                <p className="px-12 pt-32 text-4xl font-medium text-white ">Service Details</p>
            </div>
        
        {/* Two side */}
        <div className="flex flex-col lg:flex-row my-10">
            <div className="lg:w-4/5 p-4">
                <div><img src={img} alt="" className="rounded-xl w-[800px]"/></div>
                <h2 className="text-4xl font-bold pt-6">{title}</h2>
                <p className="pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. </p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">

                <div className="card bg-[#f3f3f3]  rounded-lg border-t border-[#FF3811]">
  <div className="card-body">
    <h2 className="card-title">Instant Car Services</h2>
    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
  </div>
</div>
                <div className="card bg-[#f3f3f3]  rounded-lg border-t border-[#FF3811]">
  <div className="card-body">
    <h2 className="card-title">24/7 Quality Service</h2>
    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
  </div>
</div>
                <div className="card bg-[#f3f3f3]  rounded-lg border-t border-[#FF3811]">
  <div className="card-body">
    <h2 className="card-title">Easy Customer Service</h2>
    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
  </div>
</div>
                <div className="card bg-[#f3f3f3]  rounded-lg border-t border-[#FF3811]">
  <div className="card-body">
    <h2 className="card-title">Quality Cost Service</h2>
    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
  </div>
</div>
                </div>
          {/* cards end */}
          <p className="pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. </p>
          <h2 className="text-4xl font-bold pt-6">3 Simple Steps to Process</h2>
          <p className="pt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. </p>
          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 text-center gap-4 justify-items-center">
          <div className="card w-64 rounded-lg border-2 border-gray-100">
  <div className="card-body">
   <div> <img src={btn1} alt="" className="mx-auto"/></div>
    <h2 className="text-2xl font-bold">Step 1</h2>
    <p>It uses a dictionary of over 200 .</p>
  </div>
</div>
<div className="card w-64 rounded-lg border-2 border-gray-100">
  <div className="card-body">
    <div><img src={btn2} alt="" className="mx-auto" /></div>
    <h2 className="text-2xl font-bold">Step 2</h2>
    <p>It uses a dictionary of over 200 .</p>
  </div>
</div>
<div className="card w-64 rounded-lg border-2 border-gray-100">
  <div className="card-body">
    <div><img src={btn3} alt="" className="mx-auto"/></div>
    <h2 className="text-2xl font-bold">Step 3</h2>
    <p>It uses a dictionary of over 200 .</p>
  </div>
</div>
          </div>
          <div><img src={imgV} alt=""  className="my-8"/></div>
            </div>

            {/* aside */}
            <div className="lg:w-1/3">
            {/* services */}
            <div className="bg-gray-200 p-4 rounded-xl m-6">
            <p className="text-3xl font-semibold w-4/5 mx-auto p-2">Service</p>

            <div className="space-y-6">
            <div className="bg-white flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
                <p className="text-lg font-semibold">Full Car Repair</p>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            <div className="bg-white flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
                <p className="text-lg font-semibold">Engine Repair</p>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            <div className="bg-white flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
                <p className="text-lg font-semibold">Automatic Services</p>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            <div className="bg-white flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
                <p className="text-lg font-semibold">Engine oil Change</p>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            <div className="bg-white flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
                <p className="text-lg font-semibold">Battary Change</p>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            </div>
            
            </div>
            {/* services end */}

            {/* Download */}
            <div className="bg-black text-white p-4 rounded-xl m-6">
            <p className="text-3xl font-semibold w-4/5 mx-auto p-2">Download</p>

            <div className="space-y-6">
            <div className="flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
                <div className="flex items-center ">
                   <div> <img src={icon} alt="" /></div>
                    <div><p className="text-lg font-semibold">Our Brochure</p>
                    <p className="text-gray-300 ">Download</p></div></div>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            <div className="flex justify-between items-center w-4/5 mx-auto p-2 rounded-md">
               <div className="flex items-center ">
                <div><img src={icon} alt="" /></div>
                <div><p className="text-lg font-semibold">Company Details</p>
                <p className="text-gray-300 ">Download</p></div></div>
                <Link><a className="text-[#FF3811] text-3xl">➜</a></Link>
            </div>
            </div>
            
            </div>
             {/* Download end*/}

             {/* Quote */}
             <div className="bg-black text-white p-4 rounded-xl m-6">
                <div><img src={logo} alt="" className="mx-auto"/></div>
                <p className="text-xl font-semibold text-center mt-4">Need Help? We Are Here
                To Help You</p>
                <div className="bg-white text-center rounded-md my-10 p-6 space-y-3 relative">
                    <p className="font-bold text-xl text-[#FF3811]">Car Doctor <span className="text-black">Special</span></p>
                    <p className="font-bold text-gray-500">Save up to <span className="text-[#FF3811]"> 60% off</span></p>
                   <button className="bg-[#FF3811] rounded-md px-6 py-2 absolute right-20 md:right-96 lg:right-20">Get A Quote</button>
                </div>
             </div>
             {/* Quote end */}
             <p className="text-3xl font-bold mt-4 p-6 text-center lg:text-left">Price: ${price}</p>
             <div><button className="btn bg-[#FF3811] rounded-md px-24 py-2 text-white border-none flex mx-auto">Proceed Checkout</button></div>
            </div>
        </div>
      
    </div>

    );
};

export default CheckOut;