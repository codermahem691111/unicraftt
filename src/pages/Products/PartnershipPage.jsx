import spaceTravel from "/images/home/digitalProduct/websites/spaceTravel .png";

const PartnershipPage = () => {
    return (
        <section className='container'>
            <h1 className='text-[56px] font-bold text-center'>Partnership with us through <br /> <span className='text-blue-600'>your Investment</span></h1>
            <div className='flex justify-between my-24'>
  <div>
    <h2 className='font-bold text-5xl w-full'>Our Innovation Ideas</h2>
  </div>
  <div className='border-b-2 border-blue-600 w-[500px]'></div>
</div>
 
<section className="flex justify-between">
    <div className="custom-shadow py-3 mx-2 px-[70px] w-[610px] rounded-xl">
        <img src={spaceTravel} alt="" />
    </div>
 
    <div className="custom-shadow py-3 px-[70px] w-[610px] rounded-xl ">
        <img src={spaceTravel} alt="" />
    </div>
 
 </section>
 <style>
        {`
          .custom-shadow {
            box-shadow: 0px 8px 8px -4px rgba(0, 0, 0, 0.2), 0px 0px 8px 0px rgba(0, 0, 0, 0.14), 0px 0px 16px 0px rgba(0, 0, 0, 0.12);
          }
        `}
      </style>
        </section> 
    );
};

export default PartnershipPage;