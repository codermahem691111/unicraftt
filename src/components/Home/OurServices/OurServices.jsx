import { ourServiceData } from "../../../data/Home/ourServiceData";
import ServiceCard from "../Card/ServiceCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const OurServices = () => {
  return (
    <section className="mt-[174px]">
      <SectionTitle title="Our Services" textCenter />

      <div className="grid gap-20 mt-10 md:grid-cols-2 xl:grid-cols-3 lg:container">
        {ourServiceData.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
