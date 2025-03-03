import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FiPaperclip, FiMessageSquare  } from "react-icons/fi";
import { SlEnergy } from "react-icons/sl";
import { LuWrench } from "react-icons/lu";
import { IoClipboardOutline  } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import img from "./assets/image4.png";

const Ai_powerd = () => {
  const listItems = [
    {
      title: "Templates",
      desc: "Access pre-designed templates for emails, workflows, and more.",
    },
    {
      title: "Meeting Scheduler",
      desc: "Meeting Scheduler: Set up meetings effortlessly with AI-powered scheduling tools.",
    },
    {
      title: "Files",
      desc: "Store and share files securely within the CRM.",
    },
    {
      title: "Documents",
      desc: "Collaborate on documents with your team and track how they’re being used.",
    },
    {
      title: "Playbooks",
      desc: "Provide step-by-step guides for common processes and strategies.",
    },
    {
      title: "Snippets",
      desc: "Save and reuse frequently used text for quick and consistent communication.",
    },
  ];

  const integrationItems = [
    {
      icon: <FiMessageSquare  className="text-[#38BDF8]" />,
      desc: "Provide step-by-step guides for common processes and strategies.",
    },
    {
      icon: <IoClipboardOutline  className="text-[#ED4F9D]" />,
      desc: "Save and reuse frequently used text for quick communication.",
    },
    {
      icon: <SlEnergy className="text-[#34D399]" />,
      desc: "AI-powered insights for better decision-making.",
    },
    {
      icon: <FiPaperclip className="text-[#38BDF8]" />,
      desc: "Integrated tools to enhance productivity.",
    },
    {
      icon: <PiShareFat className="text-[#ED4F9D]" />,
      desc: "Real-time collaboration across teams.",
    },
    {
      icon: <LuWrench className="text-[#34D399]" />,
      desc: "Customizable workflows to suit your needs.",
    },
  ];
  
  return (
    <div className="px-[4rem] pb-[6rem]">
      <div className="mt-[4rem] grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-[40px] font-[700] text-text_primary">
            AI-Powered Features
          </h2>
          <p className="text-[#94A3B8] font-[500] text-[20px] mt-4">
            Templates, Meeting Scheduler, Files, Documents, Playbooks &
            Snippets.
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {listItems.map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <CiCircleCheck className="text-primary text-[26px] font-[700]" />
                <p className="text-[16px] text-text_primary">
                  {item.title}:
                  <span className="text-[#94A3B8] ml-2">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={img} alt="Image" className="max-h-[380px]" />
        </div>
      </div>
      <div className="pb-[32rem]">
        <div className="mt-[6rem] px-[4rem] py-[4rem] bg-gray-100 absolute w-screen left-0">
          <h3 className="text-[40px] font-[700] text-center text-text_primary">
          How AI-Powered Features work?
          </h3>
          <div className="grid grid-cols-3 mt-10 gap-16">
            {integrationItems.map((item, index) => (
              <div key={index}>
                <p className="text-[35px] mb-4">{item.icon}</p>
                <h3 className="max-w-[280px] font-normal text-text_primary">
                  {item.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ai_powerd;
