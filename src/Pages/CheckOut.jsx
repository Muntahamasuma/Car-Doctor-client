import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const data = useLoaderData();
    // console.log(data)
  const {price, _id, img, title } = data;

  const {user} = useContext(AuthContext);

  const handleOrder = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const email = user?.email

    // console.log(name,price,phone, email)

    const booking = {
    customerName: name,
    email,
    img: img,
    price,
    phone,
    service: title,
    service_id : _id,
    }

    console.log(booking)

    fetch('https://car-doctor-server-livid-ten.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Confrim order succesfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }
  return (
    <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-100 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Check Out</h1>
      </div>
      <form onSubmit={handleOrder} className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              defaultValue={user?.DisplayName}
              name="name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Due Price</label>
            <input
              type="text"
              defaultValue={'$' + price}
              name="price"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Your Phone
            </label>
            <input
              type="number"
              name="phone"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Your Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              name="email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>

        <div>
          <textarea
            type="text"
            name="message"
            placeholder="Your Message"
            className="w-full px-3 py-2 h-40 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
          />
        </div>
          <button type="submit" className="btn bg-[#FF3811] rounded-md px-24 py-2 text-white border-none flex mx-auto">Order Confrim</button>
      </form>
    </div>
  );
};

export default CheckOut;
