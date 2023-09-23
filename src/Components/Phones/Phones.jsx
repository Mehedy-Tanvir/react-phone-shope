import PropTypes from "prop-types";
import PhoneCard from "./PhoneCard";
const Phones = ({ phones }) => {
  return (
    <div className="py-10">
      <h1 className="text-2xl text-center ">All Categories Phones</h1>
      <div className="grid grid-cols-1 gap-5 py-10 lg:grid-cols-3">
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Phones;
