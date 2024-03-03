import ClientReview from "../../components/ClientReviews/ClientReview";
import DigitalProduct from "../../components/Home/DigitalProducts/DigitalProduct";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import OurServices from "../../components/Home/OurServices/OurServices";
import OurTechnology from "../../components/Home/OurTechnology/OurTechnology";
import Partnership from "../../components/Home/Partnership/Partnership";
import SendMessageBox from "../../components/Home/SendMessageBox/SendMessageBox";
import OurTeam from "../../components/Home/Our team/Ourteam";
import WhyChose from "../Why choose us/WhyChose";
import Process from "../../components/Home/Process/Process";
import Card from "../../shared/reUseComp/card/Card";
import PartnershipNew from "../../components/Home/Partnership/PartnershipNew";
const Home = () => {
  return (
    <>
      <HeroSection />

      <PartnershipNew />
      {/* <section className="grid grid-cols-2 gap-5 lg:container md:grid-cols-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <Card
            buttonTitle={"offer"}
            details={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt itaque ipsa, similique ab esse ipsum consequatur ea hic repudiandae! In cumque quibusdam laudantium temporibus ut delectus numquam debitis deleniti totam?"
            }
            path={"/"}
            title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          ></Card>
        ))}
      </section> */}
      <OurServices />
      <DigitalProduct />
      <OurTechnology />
      <Process />
      <OurTeam />
      <WhyChose />
      <ClientReview></ClientReview>
      <SendMessageBox></SendMessageBox>
    </>
  );
};

export default Home;
