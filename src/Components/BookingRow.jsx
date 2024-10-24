
const BookingRow = ({ booking, handleDelete, handleConfrim }) => {
  const { _id, customerName, email, img, service, phone, price, status } = booking;

  return (
    <tr>
      <th>
        <button onClick={() => {handleDelete(_id)}} className="btn btn-circle btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {price}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>{service}</td>
      <th>
        { status==='confrim'?<span className="btn btn-outline border-green-500 text-green-500">Approved</span> :
            <button onClick={() => {handleConfrim(_id)}} className="btn btn-outline border-[#FF3811] text-[#FF3811]">Pending</button>}
      </th>
    </tr>
  );
};

export default BookingRow;
