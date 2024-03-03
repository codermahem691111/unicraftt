import ReactPlayer from "react-player/lazy";

const ServiceCard = ({ service }) => {
  const { title, description, video } = service;
  return (
    <div className="p-6 border shadow-xl shadow-gray-400/60 rounded-[10px] relative h-[450px] w-[400px]">
      <div className="flex flex-col items-center  mb-6 rounded-lg w-full">
        <ReactPlayer
          width="100%"
          height="100%"
          className="aspect-video rounded-lg"
          controls
          url={video}
        />
      </div>
      <h5 className="text-xl font-bold">{title}</h5>
      <p className="mt-3 mb-4 text-sm text-typo-1">{description}</p>
      <button className="py-4 px-4 w-[350px] h-[60px] text-lg font-medium text-white duration-300 rounded-[8px]  bg-btn-primary hover:bg-btn-hover absolute right-6 left-6 bottom-6">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
