import React from "react";
import { motion } from "framer-motion";
import { InputField, SelectField } from "../../components";

const FreeTrialPage = () => {
  return (
    <div className="min-h-screen bg-white transition-all ease-in px-4 py-10 flex flex-col items-center text-center">
      <>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[30px] lg:text-[40px] font-bold text-gray-900 mb-2"
        >
          Get 30 Days Free Trial
        </motion.h2>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#94A3B8] text-[18px] font-light mb-2"
        >
          100% free. No credit card needed.
        </motion.p>
      </>
      <form
        action=""
        className="mt-4 flex flex-col gap-4 text-left w-full max-w-[400px]"
      >
        <InputField label={"Email"} placeHolder={"Enter Email here"} />
        <InputField
          type={"tel"}
          label={"Phone"}
          placeHolder={"+1 (555) 000-0000"}
        />

        <button className="bg-primary btn-anim text-white py-3 rounded-[8px] font-semibold">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default FreeTrialPage;
