import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
// import { Outlet } from "react-router-dom"
const Main = () => {
  return (
    <>
      <Navbar />
      <section className="px-5 xl:px-0 mt-[84px] max-w-[1440px] mx-auto">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Main;
