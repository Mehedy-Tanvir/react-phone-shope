// ES6 Modules or TypeScript
import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { phoneId } = useParams();
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === phoneId);
    setPhone(findPhone);
  }, [phoneId, phones]);
  const handleAddToFavorites = (id) => {
    let favoritesItem = JSON.parse(localStorage.getItem("favoritesItem")) || [];
    if (!favoritesItem.includes(id)) {
      favoritesItem.push(id);
      localStorage.setItem("favoritesItem", JSON.stringify(favoritesItem));
      Swal.fire(
        "Good job!",
        "You have added this item to favorite list!",
        "success"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This item is already added to favorite list!",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex w-full max-w-[48rem] flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={phone.image}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {phone.brand_name}
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {phone.phone_name}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            ${phone.price}
          </p>

          <button
            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => handleAddToFavorites(phoneId)}
          >
            Add to Favorites
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
