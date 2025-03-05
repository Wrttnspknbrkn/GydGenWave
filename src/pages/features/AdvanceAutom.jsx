import React from "react";
import { CheckCircle } from 'lucide-react';
import img from "./assets/image5.png";
import img2 from "./assets/image6.png";

const AdvanceAutom = () => {
  const listItems = [
    {
      title: "Intelli Predict",
      desc: "Predictive analytics to forecast lead conversions and sales trends.",
    },
    {
      title: "Smart Chat",
      desc: "AI-powered chatbots to automate customer interactions and FAQs.",
    },
    {
      title: "Sentiment Sense",
      desc: "Sentiment analysis to evaluate customer feedback.",
    },
    {
      title: "Lead Flow Automation",
      desc: "Lead nurturing workflows to engage customers at every stage.",
    },
    {
      title: "Action Triggers",
      desc: "Trigger-based actions for automated follow-ups.",
    },
    {
      title: "Smart Scheduler",
      desc: "AI-recommended times for campaigns and meetings.",
    },
  ];

  return (
    <div className="px-[4rem] pb-[6rem]">
      <div className="mt-[4rem] grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[40px] font-[700] text-text_primary">
            Advanced Automation
          </h2>
          <p className="text-[#94A3B8] font-[500] text-[20px] mt-4">
            Intelli Predict, Smart Chat, Sentiment Sense, Lead Flow, Action
            Triggers & Smart Scheduler.
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {listItems.map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <CheckCircle className="text-primary text-[24px] font-[700]" />
                <p className="text-[16px] text-text_primary">
                  {item.title}:
                  <span className="text-[#94A3B8] ml-2">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={img} alt="Image" className="max-h-[430px] w-full object-cover rounded-md" />
        </div>
      </div>
      <div className="pb-[20rem] sm:pb-[22rem] md:pb-[28rem] lg:pb-[35rem] pt-8">
        <div className="absolute w-screen left-0">
          <div className="mt-[6rem] relative">
            <img src={img2} alt="image" className="min-h-[300px] max-h-[500px] w-full object-cover"/>
            <div className="absolute centerabs text-white text-center w-full">
              <h3 className="text-[20px] sm:text-[40px] font-[700] md:whitespace-nowrap px-8">
                Learn how to optimize your sales process
              </h3>
              <button className="mt-8 bg-white text-black font-[700] px-8 py-3 rounded-[14px] hover:shadow-md transition-all ease-in">
                Watch Tutorial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceAutom;
