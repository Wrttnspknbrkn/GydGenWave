import React from "react";
import { motion } from "framer-motion";
import { InputField, SelectField } from "../../components";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-white transition-all ease-in px-4 py-10 flex flex-col items-center text-center">
      <>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[30px] lg:text-[40px] font-bold text-gray-900 mb-2"
        >
          Sign Up your Account
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
        <div className="name flex gap-4 items-start justify-between">
          <InputField label={"First Name"} placeHolder={"First Name"} />
          <InputField label={"Last Name"} placeHolder={"Last Name"} />
        </div>
        <InputField label={"Email"} placeHolder={"Enter Email here"} />
        <InputField
          type={"tel"}
          label={"Phone"}
          placeHolder={"+1 (555) 000-0000"}
        />
        <SelectField
          label={"Gender"}
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
          ]}
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
