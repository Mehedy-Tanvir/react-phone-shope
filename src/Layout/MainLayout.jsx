import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { createContext, useEffect } from "react";

const PhonesContext = createContext(null);

const MainLayout = () => {
  const loc = useLocation();
  console.log("mainlayout", loc);
  const phones = useLoaderData();
  useEffect(() => {
    console.log(loc.pathname);

    if (loc.pathname === "/") {
      document.title = `Phone -Home`;
    } else {
      document.title = `Phone ${loc.pathname.replace("/", "-")}`;
    }
    if (loc.state) {
      document.title = `Phone ${loc.state}`;
    }
  }, [loc]);

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
