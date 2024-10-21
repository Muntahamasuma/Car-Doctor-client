import { Link } from "react-router-dom";


const CheckOut = () => {
    return (
        <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-100 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Check Out</h1>
	</div>
	<form className="space-y-12">
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div>
				<label className="block mb-2 text-sm">Frist Name</label>
				<input type="text" name="fristName" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label className="block mb-2 text-sm">Last Name</label>
				<input type="text" name="lastName" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Your Phone</label>
				<input type="number" name="phone" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label className="block mb-2 text-sm">Your Email</label>
				<input type="email" name="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			
		</div>

        <div>
				<textarea type="text" name="message" placeholder="Your Message" className="w-full px-3 py-2 h-40 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>

            <Link to={`/checkout/`} className="btn bg-[#FF3811] rounded-md px-24 py-2 text-white border-none flex mx-auto">Order Confrim</Link>
	</form>
</div>
    );
};

export default CheckOut;