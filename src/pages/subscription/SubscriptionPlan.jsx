import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SubscriptionPlan = () => {
  const plans = [
    {
      title: "Starter",
      price: "$19",
      subtitle: "Small Business",
      features: [
        "Upto 5 Users",
        "Basic CRM Features",
        "Email Support",
        "Community Access",
        "Limited Integration",
      ],
      highlight: false,
    },
    {
      title: "Professional",
      price: "$49",
      subtitle: "Growing Teams",
      features: [
        "Upto 20 Users",
        "Advance CRM Features",
        "Priority Support",
        "API Access",
        "Unlimited Integration",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      subtitle: "Large Organization",
      features: [
        "Unlimited Users",
        "Custom CRM Features",
        "Dedicated Account Manager",
        "Custom Integration",
        "24/7 Support",
      ],
      highlight: false,
    },
  ];
  const [step, setStep] = useState(1);

  useEffect(() => {
    scrollTo(0, 0);
  }, [step]);

  return (
    <div className="min-h-screen bg-white hover:bg-slate-50 transition-all ease-in px-4 py-20 flex flex-col items-center text-center">
      {step == 1 && (
        <>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[30px] lg:text-[40px] font-bold text-gray-900 mb-2"
          >
            Subscription Plans
          </motion.h2>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#94A3B8] text-[18px] font-light mb-10"
          >
            Pick the plan that works best for your business!
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                className={`rounded-[20px] border p-[36px] shadow-sm flex flex-col items-start transition-transform duration-300 ${
                  plan.highlight
                    ? "border-primary shadow-lg"
                    : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-[18px] font-bold ${
                    plan.highlight ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`text-[48px] font-bold mt-3 ${
                    plan.highlight ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                  {plan.price.includes("$") && (
                    <span
                      className={`text-[14px] font-light ${
                        plan.highlight ? "text-primary" : "text-[#0F172A]"
                      }`}
                    >
                      {" "}
                      per month
                    </span>
                  )}
                </p>
                <p className="text-[#94A3B8] text-[16px] font-light mt-1">
                  {plan.subtitle}
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-6 w-full px-[22px] py-[10px] rounded-[16px] font-medium border border-[#0F172A33] ${
                    plan.highlight
                      ? "bg-primary text-white"
                      : "text-[#0F172A] hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Select Plan
                </motion.button>

                <ul className="mt-8 space-y-2 text-sm text-left text-[#94A3B8] w-full max-w-xs">
                  <hr className="mb-8" />
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {step == 2 && (
        <>
          <h1 className="font-[700] text-[30px] lg:text-[50px] mb-6">
            Subscription Plan Confirmation
          </h1>
          <p className="max-w-[582px] font-light text-[18px] text-[#94A3B8]">
            Congratulation! Awesome choice on picking a subscription plan that
            works for your business! It’s a great step towards making everything
            easier, and we’re super excited to help you along the way!
          </p>
        </>
      )}
    </div>
  );
};

export default SubscriptionPlan;
