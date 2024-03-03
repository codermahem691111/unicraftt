import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

const HeroSection = () => {
  return (
    <div className="w-full h-full bg-[#FCFCFC]">
      <div className="h-[600px] w-full flex gap-10  mb-48 lg:container">
        <LeftHeroSection />
        <RightHeroSection />
      </div>
    </div>
  );
};

export default HeroSection;
