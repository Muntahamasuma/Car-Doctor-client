import SectionTitle from "../../Components/SectionTitle";
import img from "../../assets/images/review/Ellipse 2.png"
import img2 from "../../assets/images/review/Ellipse 2 (1).png"
import ratingImg from "../../assets/Group 46.png"

const Testimonial = () => {
    return (
        <div>
            <SectionTitle 
            categoryName={'Testimonial'}
            categoryTitle={'What Customer Says'}
            paragraph={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
            />
            <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
	
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&rsquo;t look even slightly believable. 
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
				<img src={img} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
				<p className="text-xl font-semibold leading-tight">Awlad Hossain</p>
				<p className="text-sm uppercase">Businessman</p>
                <div><img src={ratingImg} alt="" /></div>
			</div>
		</div>

		<div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
				<p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&rsquo;t look even slightly believable. 
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-600">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
				<img src={img2} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
				<p className="text-xl font-semibold leading-tight">Awlad Hossain</p>
				<p className="text-sm uppercase">Businessman</p>
                <div><img src={ratingImg} alt="" /></div>
			</div>
		</div>
		
		
	</div>
</section>
        </div>
    );
};

export default Testimonial;