import PropTypes from "prop-types";
const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div className="self-center justify-self-center">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img src={image} />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-4xl text-center text-green-500 bold">
              {brand_name}
            </h2>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-xl antialiased font-semibold leading-relaxed ">
              {phone_name}
            </p>
            <p className="block font-sans text-2xl antialiased font-semibold leading-relaxed text-red-500">
              ${price}
            </p>
          </div>
          <p>{rating}</p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-base font-bold text-white bg-green-400 hover:bg-green-300 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none normal-case"
            type="button"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};
PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhoneCard;
