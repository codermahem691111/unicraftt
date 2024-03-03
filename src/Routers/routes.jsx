import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Services from "../pages/Services/Services";
import DataEntryDetails from "../pages/Services/DataEntryDetails";
import OurTeam from "../pages/OurTeam/OurTeam";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import SpaceTravel from "../pages/Products/SpaceTravel";
import Partnership from "../components/Home/Partnership/Partnership";
import PartnershipPage from "../pages/Products/PartnershipPage";

import About from "../pages/About/About";
import Testimonials from "../pages/Testimonials/Testimonials";
import TermsOfService from "../pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import Blogs from "../pages/Blog/Blogs";
import Blog01 from "../pages/Blog/Blog01";
import Blog03 from "../pages/Blog/Blog03";
import Blog02 from "../pages/Blog/Blog02";
import Sponsership from "../pages/Sponsership/Sponsership";
import SponsershipPayment from "../pages/Sponsership/SponsershipPayment";
import Membership from "../pages/Membership/Membership";
import MembershipPayment from "../pages/Membership/MembershipPayment";
import ThankyouPage from "../pages/Services/ThankyouPage";
import VideoDetailsPage from "../pages/Services/VideoDetailsPage";
import SoftwareDevDetails from "../pages/Services/SoftwareDevDetails";
import WebDev from "../pages/Services/WebDev";
import MobileApp from "../pages/Services/MobileApp";
import DigitalMarketing from "../pages/Services/DigitalMarketing";
import ContentWr from "../pages/Services/ContentWr";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },

      {
        path: "/services",
        element: <Services></Services>,
      },

      {
        path: "/services/softwaredev",
        element: <SoftwareDevDetails></SoftwareDevDetails>,
      },
      {
        path: "/services/app-details",
        element: <MobileApp></MobileApp>,
      },

      {
        path: "/services/webdev",
        element: <WebDev></WebDev>,
      },
      {
        path: "/services/digital-marketing-details",
        element: <DigitalMarketing></DigitalMarketing>,
      },
      {

      path:"/services/content-writing-details",
      element:<ContentWr></ContentWr>



      },
      {
        path: "/services/data-entry-details",
        element: <DataEntryDetails></DataEntryDetails>,
      },
      {
        path: "/services/video-details",
        element: <VideoDetailsPage></VideoDetailsPage>,
      },

      {
        path: "/our-team",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/careers",
        element: <Careers></Careers>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products/space-travel",
        element: <SpaceTravel></SpaceTravel>,
      },
      {
        path: "/products/partnership",
        element: <PartnershipPage></PartnershipPage>,
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>,
      },
      {
        path: "/terms-of-service",
        element: <TermsOfService></TermsOfService>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/blog01",
        element: <Blog01></Blog01>,
      },
      {
        path: "/blogs/blog02",
        element: <Blog02></Blog02>,
      },
      {
        path: "/blogs/blog03",
        element: <Blog03></Blog03>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },
]);
