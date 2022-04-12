import React, { useState } from "react";
import { motion } from "framer-motion";

import { FaHamburger } from "react-icons/fa";
import Loader from "./Loader";

export default function CreateContainer() {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
            className={`w-full p-2 rounded-lg text-center ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400"
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <FaHamburger className="text-xl text-gray-700" />
          <input type="text" required value={title} placeholder="Give me a title..." className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500" onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="w-full">
          <select name="" onChange={e => setCategory(e.target.value)} className="outline-none w-full text-base border-b-2 border-gray-200 rounded-md cursor-pointer" id="">
            <option value="other" className="bg-white">Select Category</option>
            <option value="" className="text-base border-0 outline-none capitalize bg-white">optione one</option>
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border-2 border-gray-300 w-full h-72 md:h-96 cursor-pointer rounded-lg">
          {isLoading ? <Loader /> : ''}
        </div>
      </div>
    </div>
  );
}
