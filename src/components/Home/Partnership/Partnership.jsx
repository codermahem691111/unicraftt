import PartnershipCard from "../Card/PartnershipCard";

const Partnership = () => {
  return (
    <section className="min-h-[813px] h-auto mb-48 border-primary-1 border-[10px] rounded-[20px] p-10 space-y-10  lg:container">
      <h2 className="text-[64px] font-bold text-center">
        Want a <span className="text-primary-1">Partnership?</span>
      </h2>
      <p className="text-[32px] font-bold text-center ">
        Partnership unites industry leaders <br />
        to drive innovation and success
      </p>
      <div className="flex justify-evenly">
        <PartnershipCard
          service={{
            title: "Offer Sponsorship",
            description:
              "Elevate your brand's visibility with our sponsorship opportunities.we will feature your products on our websites and apps",
            image: "/images/home/ourService/handsheck.jpg",
            btnName: "Offer",
            link: "/sponsership",
          }}
        />
        <PartnershipCard
          service={{
            title: "Buy Membership",
            description:
              "Purchase your membership today to earn upto 30% on our products.Join us today and embark on a journey of opportunities and connections.",
            image: "/images/home/ourService/discuation.jpg",
            btnName: "Purchase",
            link: "/memberShip",
          }}
        />
      </div>
    </section>
  );
};

export default Partnership;
