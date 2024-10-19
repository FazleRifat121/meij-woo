const Card = ({ item }) => {
  const { title, img } = item;
  return (
    <div>
      <div className="card  ">
        <figure className="px-10 pt-10">
          <img src={img} alt={title} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions mt-7">
            <button className="bg-[#F7F6F0] w-16 py-1 border rounded-2xl ">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
