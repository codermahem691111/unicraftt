import React from "react";
import Partnership from "../../components/Home/Partnership/Partnership";
import SectionTitle from "../../components/Home/SectionTitle/SectionTitle";
import OurProducts from "./OurProducts";
import OurWebsites from "./OurWebsites";
import OurMobileApps from "./OurMobileApps";

const Products = () => {
  return (
    <section className="space-y-48">
      <Partnership />
      <OurProducts />
      <OurWebsites />
      <OurMobileApps />
    </section>
  );
};

export default Products;
