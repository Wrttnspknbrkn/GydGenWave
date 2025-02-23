import React from "react";
import bgOne from "../assets/BgOne.png";
import bgTwo from "../assets/BgTwo.png";
import bgThree from "../assets/BgThree.png";

const InfoSide = ({ formStep }) => {
  const swiperText = [
    {
      id: 0,
      img: bgOne,
      head: "Welcome to GydgenWave",
      para: "Simplify your workflows, manage customers seamlessly, and boost business growth—all in one platform",
    },
    {
      id: 1,
      img: bgTwo,
      head: "Work Smarter with Automation",
      para: "Automate tasks, nurture leads, and focus on what matters most with AI-powered tools",
    },
    {
      id: 2,
      img: bgThree,
      head: "Grow Your Business with Data",
      para: "Leverage detailed analytics and reports to make data-driven decisions that drive success",
    },
  ];
  return (
    <div className="relative">
      {swiperText.map((item, index) => (
        <div key={index}>
          {item.id == formStep && (
            <div>
              <div className="relative">
                <img
                  src={item.img}
                  alt="image"
                  className="object-cover w-full h-[500px]"
                />
              </div>
              <div className="p-6 mt-8">
                <div>
                  <h1 className="text-[2rem] font-bold text-[#063564]">
                    {item.head}
                  </h1>

                  <p className="text-[#667185] text-[18px] mt-2 pb-12">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="grid grid-cols-3 gap-3 p-5 absolute bottom-[1.5rem] w-full">
        <div
          className={`h-[5px] rounded-[100px] ${
            formStep == 0 || formStep == 1 || formStep == 2
              ? "bg-[#475367]"
              : "bg-[#E4E7EC]"
          } `}
        ></div>
        <div
          className={`h-[5px] rounded-[100px] ${
            formStep == 1 || formStep == 2 ? "bg-[#475367]" : "bg-[#E4E7EC]"
          } `}
        ></div>
        <div
          className={`h-[5px] rounded-[100px] ${
            formStep == 2 ? "bg-[#475367]" : "bg-[#E4E7EC]"
          } `}
        ></div>
      </div>
    </div>
  );
};

export default InfoSide;
