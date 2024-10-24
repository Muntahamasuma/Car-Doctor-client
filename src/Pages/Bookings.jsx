import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import BookingRow from "../Components/BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-server-livid-ten.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = id => {

      fetch(`https://car-doctor-server-livid-ten.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
              }
            });
          }
        });
  };

  const handleConfrim = id =>{
    fetch(`https://car-doctor-server-livid-ten.vercel.app/bookings/${id}`, {
        method: 'PATCH',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status: 'confrim'})
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        if( data.modifiedCount > 0){
            Swal.fire({
                title: "You want to Approved?",
                icon: "confusion",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Approved!",
                    text: "Your order has been Approved.",
                    icon: "success",
                  });
                  const remaining = bookings.filter(booking => booking._id !== id);
                  const update = bookings.find(booking => booking._id === id);
                  update.status= 'confrim'
                  const newBooking = [update, ...remaining]
                  setBookings(newBooking)
                }
              });
        }
        })
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name/Email</th>
            <th>Price/Phone</th>
            <th>Service Name</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <BookingRow 
            key={bookings._id} 
            booking={booking} 
            handleDelete={handleDelete}
            handleConfrim={handleConfrim}
            ></BookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
