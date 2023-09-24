import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { createContext } from "react";

const PhonesContext = createContext(null);

const MainLayout = () => {
  const phones = useLoaderData();
  console.log(phones);

  return (
    <div className="container mx-auto">
      <PhonesContext.Provider value={phones}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </PhonesContext.Provider>
    </div>
  );
};

export default MainLayout;

// Export the PhonesContext for use in child components
