import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import img from "./assets/image1.png";
import img2 from "./assets/image2.png";

const RnA = () => {
  const listItems = [
    {
      title: "Dashboards",
      desc: "Customize dashboards to display the data that matters most to you.",
    },
    {
      title: "Marketing Analytics",
      desc: "Measure campaign performance and get suggestions to improve results.",
    },
    {
      title: "Sales Analytics",
      desc: "Track sales activities, conversion rates, and revenue trends in real time.",
    },
    {
      title: "Service Analytics",
      desc: "Monitor customer support performance, such as response times and resolution rates.",
    },
    {
      title: "Forcasts",
      desc: "Use past data to predict future sales and make informed decisions.",
    },
    {
      title: "Goals",
      desc: "Set and track goals for teams and individuals with progress indicators.",
    },
  ];
  return (
    <div className="px-[4rem] pb-[6rem]">
      <div className="mt-[4rem] grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-[40px] font-[700] text-text_primary">
            Reports & Analytics
          </h2>
          <p className="text-[#94A3B8] font-[500] text-[20px] mt-4">
            Sales performance and customer insights.
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {listItems.map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <CiCircleCheck className="text-primary text-[24px] font-[700]" />
                <p className="text-[16px] text-text_primary">
                  {item.title}:
                  <span className="text-[#94A3B8] ml-2">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={img} alt="Image" />
        </div>
      </div>
      <div className="mt-[6rem] relative">
        <img src={img2} alt="image" />
        <div className="absolute centerabs text-white text-center">
          <h3 className="text-[40px] font-[700]">Ready to boost your sales?</h3>
          <p className="text-[18px] mt-2">
            Join thousands of businesses using CRM to enhance their customer
            relationships.
          </p>
          <button className="mt-8 bg-white text-primary font-[700] px-8 py-3 rounded-[40px] hover:shadow-md transition-all ease-in">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default RnA;
