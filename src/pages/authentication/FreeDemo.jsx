import React from "react";
import { motion } from "framer-motion";
import { InputField } from "../../components";

const FreeDemoPage = () => {
  return (
    <div className="min-h-screen bg-white transition-all ease-in px-4 py-10 flex flex-col lg:flex-row justify-between text-center lg:px-40 gap-10">
      <div className="flex flex-col text-left w-full lg:w-[40%] max-w-[600px]">
        <>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[30px] lg:text-[40px] font-bold text-gray-900 mb-2"
          >
            Get a Free Demo of CRM’s Customer Platform
          </motion.h2>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#94A3B8] text-[18px] font-light mb-2"
          >
            The CRM’s AI-driven customer platform has everything you need for
            marketing, sales, and customer service. Each tool is great on its
            own, but the real fun starts when you use them all together!
          </motion.p>
        </>
      </div>

      <form
        action=""
        className="mt-4 flex flex-col gap-4 text-left w-full lg:w-[40%] max-w-[400px]"
      >
        <div className="name flex flex-col sm:flex-row gap-4 items-start justify-between">
          <div className="w-full">
            <InputField label={"First Name"} placeHolder={"First Name"} />
          </div>
          <div className="w-full">
            <InputField label={"Last Name"} placeHolder={"Last Name"} />
          </div>
        </div>
        <InputField label={"Email"} placeHolder={"Enter Email here"} />
        <InputField
          type={"tel"}
          label={"Phone"}
          placeHolder={"+1 (555) 000-0000"}
        />
        <div className="name flex flex-col sm:flex-row gap-4 items-start justify-between">
          <div className="w-full">
            <InputField label={"Company Name"} placeHolder={" Name"} />
          </div>
          <div className="w-full">
            <InputField label={"Company Website"} placeHolder={"Website"} />
          </div>
        </div>
        <InputField
          label={"Country of Company Headquarter"}
          placeHolder={"Accra"}
        />
        <div className="flex gap-4 items-start justify-between">
          <div className="remember-me flex items-center gap-2 flex-row-reverse">
            <label htmlFor="checkbox">
              You agree to our friendly privacy policy.
            </label>
            <input type="checkbox" id="checkbox" />
          </div>
        </div>
        <button className="bg-primary btn-anim text-white py-3 rounded-[8px] font-semibold">
          Get your free Demo
        </button>
      </form>
    </div>
  );
};

export default FreeDemoPage;
