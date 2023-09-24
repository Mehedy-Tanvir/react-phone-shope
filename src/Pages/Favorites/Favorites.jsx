import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PhoneCard from "../../Components/Phones/PhoneCard";

const Favorites = () => {
  const phones = useLoaderData();
  const [displayFavorites, setDisplayFavorites] = useState([]);
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
      <div className="grid grid-cols-1 mt-5 lg:grid-cols-3">
        {displayFavorites?.map((favorite) => (
          <PhoneCard key={favorite.id} phone={favorite}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
