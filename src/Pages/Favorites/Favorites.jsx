import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PhoneCard from "../../Components/Phones/PhoneCard";

const Favorites = () => {
  const phones = useLoaderData();
  const [displayFavorites, setDisplayFavorites] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const [favoritePrice, setFavoritePrice] = useState(0);

  const handleRemoveFavorites = () => {
    localStorage.removeItem("favoritesItem");
    setDisplayFavorites([]);
    setFavoritePrice(0); // Reset favoritePrice to 0 when removing favorites
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favoritesItem")) || [];

    const favoritePhones = phones.filter((phone) => items.includes(phone.id));
    setDisplayFavorites(favoritePhones);

    // Calculate the total price using reduce
    const sum = favoritePhones.reduce((accumulator, favorite) => {
      return accumulator + favorite.price;
    }, 0);

    setFavoritePrice(sum);
  }, [phones]);

  return (
    <div className="px-2 py-10">
      {displayFavorites.length > 0 ? (
        <div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleRemoveFavorites}
              className="mt-5 text-xl normal-case btn btn-warning"
            >
              Delete All Favorites
            </button>
          </div>
          <p className="mt-5 text-2xl font-bold text-center">
            Total Favorites price:{" "}
            <span className="text-red-500">${favoritePrice}</span>
          </p>
          <div className="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-3">
            {isShow
              ? displayFavorites?.map((favorite) => (
                  <PhoneCard key={favorite.id} phone={favorite}></PhoneCard>
                ))
              : displayFavorites
                  ?.slice(0, 2)
                  .map((favorite) => (
                    <PhoneCard key={favorite.id} phone={favorite}></PhoneCard>
                  ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h2 className="text-2xl font-bold">No favorites</h2>
        </div>
      )}
      <div className="flex items-center justify-center mt-4">
        {displayFavorites.length > 2 ? (
          <button
            className="text-base text-white normal-case bg-red-400 btn btn-info"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? "Show Less" : "Show All"}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Favorites;
