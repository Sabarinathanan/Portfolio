import React from "react";
import { ABOUT_TEXT } from "../dataStore/DataStore";
import { motion } from "framer-motion";

function AboutPage(){
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500 "> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 1000 }}
          transition={{duration:1}}
          className="w-full lg:w-1/2 lg:px-28"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" width={500} src='https://cdni.iconscout.com/illustration/premium/thumb/programmer-doing-coding-on-computer-10494399-8470766.png?f=webp' alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{ opacity: 0, x: -1000 }}
          transition={{duration:1}}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 leading-9">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};



export default AboutPage;
