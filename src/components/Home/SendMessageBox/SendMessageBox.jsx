import React from "react";

const SendMessageBox = () => {
  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const Service = form.service.value;
    const Description = form.description.value;
    const Number = form.number.value;
    const Email = form.email.value;

    const formData = { Name, Service, Description, Number, Email };
    console.log(formData);
    form.reset();
  };
  return (
    <div className="mb-[317px] mt-[235px] mx-[100px] rounded-xl p-5 h-[844px] bg-[#FCFCFC] shadow-xl shadow-gray-400/60">
      <div className="mt-[50px]">
        <h2 className="text-[56px] text-center font-bold">
          Need a <span className="text-[#007BF9]">Project?</span>
        </h2>
        <p className="text-[#5E5E5E] text-[30px] text-center tracking-widest pt-[6px]">
          Get in touch with us to know more about the timeline & budget
        </p>
      </div>
      <form
        onSubmit={handleFormData}
        className="w-[660px] mx-auto space-y-[30px] mt-[55px]"
      >
        <div className="flex justify-center gap-[60px]">
          <div className="w-full">
            <label htmlFor="Name" className="">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered border-2 border-[#ABABAB] w-full ps-[20px] py-[8px] rounded-md mt-[10px]"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="Name">Email Address</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email address"
              className="input input-bordered border-2 border-[#ABABAB] w-full ps-[20px] py-[8px] rounded-md mt-[10px]"
              required
            />
          </div>
        </div>
        <div className="flex gap-[60px]">
          <div className="w-full">
            <label htmlFor="Name">Phone Number</label>
            <input
              name="number"
              type="text"
              placeholder="Enter your number with C-code"
              className="input input-bordered border-2 border-[#ABABAB] w-full ps-[20px] py-[8px] rounded-md mt-[10px]"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="Name">Service</label>
            <select
              name="service"
              className="select w-full border-2 border-[#ABABAB] ps-[20px] py-[8px] rounded-md mt-[10px]"
              required
            >
              <option selected disabled>
                Select service
              </option>
              <option>Software Development</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>UIUX Design</option>
              <option>Graphic Designy</option>
              <option>Digital Marketing</option>
              <option>Video Editing</option>
            </select>
          </div>
        </div>
        <div className="">
          <label htmlFor="Description">Description</label>
          <textarea
            className="border-2 border-[#ABABAB] w-full ps-[20px] py-[8px] rounded-md mt-[12px]"
            name="description"
            id=""
            cols="40"
            rows="5"
            placeholder="Describe us about your project....."
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center ">
          <input
            className="btn w-[270px] h-[40px] bg-[#F95F00] hover:bg-[#F95F00] text-white font-bold rounded-md mb-[100px] mt-[35px]"
            type="submit"
            value="Send Message"
          />
        </div>
      </form>
    </div>
  );
};

export default SendMessageBox;
