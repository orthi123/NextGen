import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import { Outlet } from "react-router";
const RootLayout = () => {
  return(
     <>
  
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  );

};

export default RootLayout;