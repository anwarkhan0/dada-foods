import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import HomeContainer from "./HomeContainer";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

export default function MainContainer() {
  
  const [scroll, setScroll] = useState(0);
  
  return (
    <div className="w-full h-auto flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full">
        <div className="w-full flex items-center justify-between p-3">
          <p className="text-2xl font-semibold uppercase relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-500 transition-all ease-in-out">
            {" "}
            Our Fresh Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{scale:0.6}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center" onClick={()=> setScroll(scroll - 200)}><FaArrowAltCircleLeft /></motion.div>
            <motion.div whileTap={{scale:0.6}} className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center" onClick={()=> setScroll(scroll + 200)}><FaArrowAltCircleRight /></motion.div>
          </div>
        </div>
        <RowContainer scrollVal={scroll} flag={true} />
      </section>

      <MenuContainer />
      <CartContainer />
    </div>
  );
}
