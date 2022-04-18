import { React, useEffect, useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";

export default function MenuContainer() {
  const dummyData = [];
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    console.log('render')
  }, [activeItem])
  for (let i = 0; i < 8; i++) {
    dummyData.push(<motion.div whileTap={{scale: 0.75}} key={i} className={`group ${i === activeItem ? 'bg-red-500 text-white hover:text-black hover:bg-slate-300' : 'bg-slate-100 hover:bg-red-600' }  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center  duration-150 transition-all ease-in-out`} onClick={()=> setActiveItem(i)}>
    <div className={`w-10 h-10 rounded-full ${ i == activeItem ? 'bg-white text-red-500 group-hover:bg-red-500 group-hover:text-black' : 'bg-red-600 group-hover:bg-slate-300 '}  flex items-center justify-center shadow-lg`}>
      <FaPizzaSlice />
    </div>
    <p className="text-base group-hover:text-white">Category</p>
  </motion.div>);
  }
  return (
    <section className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center p-3">
        <p className="text-2xl font-semibold uppercase relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 mr-auto before:-bottom-2 before:-left-0 ease-in-out duration-100 before:bg-gradient-to-tr from-orange-400 to-orange-500">
          Our Dishes
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {dummyData}
        </div>
      </div>

      <div className="w-full">
          <RowContainer flag={false} />
      </div>
    </section>
  );
}
