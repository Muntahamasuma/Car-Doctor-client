

const Service = ({service}) => {
    const {
        title,
        img,
        price,
        } = service
    return (
            <div className="card rounded-xl border-2 border-gray-200">
  <figure>
    <img
    className="h-56 rounded-xl"
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-2xl">{title}</h2>
    <div className="card-actions justify-end">
    <p className="text-[#FF3811] font-bold text-xl">Price:{price}</p>
      <a className="text-[#FF3811] text-4xl">»</a>
    </div>
  </div>
</div>
    );
};

export default Service;