import React from "react";
import { motion } from "framer-motion";
import { InputField } from "../../components";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-white transition-all ease-in px-4 py-10 flex flex-col items-center text-center">
      <>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[30px] lg:text-[40px] font-bold text-gray-900 mb-2"
        >
          Sign In your Account
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
          type={"password"}
          label={"Password"}
          placeHolder={"••••••••"}
        />

        <div className="flex gap-4 items-start justify-between">
          <div className="remember-me flex items-center gap-2 flex-row-reverse">
            <label htmlFor="checkbox">Remember me</label>
            <input type="checkbox" id="checkbox" />
          </div>
          <span className="text-primary link text-[14px] font-medium mr-2 cursor-pointer">
            Forgot Password?
          </span>
        </div>
        <button className="bg-primary btn-anim text-white py-3 rounded-[8px] font-semibold">
          Sign In
        </button>
        <p className="text-center text-text_secondary text-[12px] m-0">OR</p>
        <hr />
        <div className="login-options">
          <button className="flex items-center justify-center w-full bg-white border border-gray-300 py-3 px-4 rounded-lg font-medium text-gray-700 mb-4">
            <img
              src="src\pages\authentication\assets\google-icon.png"
              alt="Apple logo"
              className="mr-2"
            />{" "}
            Sign in with Google
          </button>

          <button className="flex items-center justify-center w-full bg-blue-600 py-3 px-4 rounded-lg font-medium text-white mb-4">
            <img
              src="src\pages\authentication\assets\facebook-icon.png"
              alt="Apple logo"
              className="mr-2"
            />
            Sign in with Facebook
          </button>

          <button className="flex items-center justify-center w-full bg-black py-3 px-4 rounded-lg font-medium text-white">
            <img
              src="src\pages\authentication\assets\apple-icon.png"
              alt="Apple logo"
              className="mr-2"
            />{" "}
            Sign in with Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
