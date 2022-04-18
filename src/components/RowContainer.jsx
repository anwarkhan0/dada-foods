import React, { useEffect, useRef } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RowContainer({ flag, scrollVal}) {
  const rowRef = useRef();
  useEffect(()=>{
    rowRef.current.scrollLeft = scrollVal
  })

  const dummData = [];
  for (let i = 0; i < 7; i++) {
    dummData.push(
      <div key={i} className="w-[300px] min-w-[300px] h-auto md:min-w-80 shadow-md backdrop-blur-lg p-3 hover:bg-gray-200 rounded-lg bg-slate-100">
        <div className="flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={require("../img/f1.png")}
            className="w-40"
            alt=""
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full flex justify-center items-center bg-red-500"
          >
            <FaCartArrowDown className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end">
          <p className="font-semibold text-base md:text-md">
            Chocolate & vanilla
          </p>
          <p className="text-sm">30 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg font-semibold">
              <span className="text-sm text-red-500">$</span> 5.53
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rowRef}
       className={`w-full flex my-12 p-4 gap-3 scrollbar-none scroll-smooth ${
        flag ? "overflow-x-scroll flex-nowrap" : "overflow-x-hidden flex-wrap justify-center gap-10"
      }`}
    >
      {dummData}
    </div>
  );
}
