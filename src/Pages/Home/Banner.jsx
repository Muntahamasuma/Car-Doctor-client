import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full h-full object-cover rounded-xl" /> 
                <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className='space-y-7 p-6 md:p-10 lg:p-16'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-semibold w-1/2'>
                        Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className='btn bg-[#FF3811] border-none text-white mr-5'>Discover more</button>
                        <button className='btn btn-outline border-2 border-white text-white'>Leatest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className='space-y-7 p-6 md:p-10 lg:p-16'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-semibold w-1/2'>
                        Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className='btn bg-[#FF3811] border-none text-white mr-5'>Discover more</button>
                        <button className='btn btn-outline border-2 border-white text-white'>Leatest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className='space-y-7 p-6 md:p-10 lg:p-16'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-semibold w-1/2'>
                        Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className='btn bg-[#FF3811] border-none text-white mr-5'>Discover more</button>
                        <button className='btn btn-outline border-2 border-white text-white'>Leatest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className='space-y-7 p-6 md:p-10 lg:p-16'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-semibold w-1/2'>
                        Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className='btn bg-[#FF3811] border-none text-white mr-5'>Discover more</button>
                        <button className='btn btn-outline border-2 border-white text-white'>Leatest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={img5}
                    className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className='space-y-7 p-6 md:p-10 lg:p-16'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-semibold w-1/2'>
                        Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className='btn bg-[#FF3811] border-none text-white mr-5'>Discover more</button>
                        <button className='btn btn-outline border-2 border-white text-white'>Leatest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">

                <img
                    src={img6}
                    className="w-full h-full object-cover rounded-xl" />
                    <div className="absolute h-full bottom-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  rounded-xl">
                    <div className='space-y-7 p-6 md:p-10 lg:p-16'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl text-white font-semibold w-1/2'>
                        Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className='btn bg-[#FF3811] border-none text-white mr-5'>Discover more</button>
                        <button className='btn btn-outline border-2 border-white text-white'>Leatest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;