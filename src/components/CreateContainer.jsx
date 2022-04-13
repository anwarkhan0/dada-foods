import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHamburger,
  FaCloud,
  FaTrash,
  FaDollarSign,
  FaAppStore,
} from "react-icons/fa";
import Loader from "./Loader";

export default function CreateContainer() {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImg = (e) => {
    setIsLoading(true);
    const image = e.target.files[0];
    setImageAsset(image.name)
    setIsLoading(false)
  };
  const deleteImage = () => {
    setIsLoading(true);
    setImageAsset(null);
    setIsLoading(false);
  };
  const saveData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFields(true);
      setMsg('Data saved Successfully.');
      clearInputs();
      setIsLoading(false);
    }, 3000);
  };

  const clearInputs = ()=> {
    setTitle('');
    setCategory('');
    setImageAsset(null);
    setCalories('');
    setPrice('');
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
          <input
            type="text"
            required
            value={title}
            placeholder="Give me a title..."
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="w-full">
          <select
            name=""
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 rounded-md cursor-pointer"
            id=""
          >
            <option value="other" className="bg-white">
              Select Category
            </option>
            <option
              value=""
              className="text-base border-0 outline-none capitalize bg-white"
            >
              optione one
            </option>
          </select>
        </div>

        <div className="group flex justify-center items-center flex-col border-2 border-gray-300 w-full h-72 md:h-96 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <>
                  <label
                    className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-2"
                  >
                    <FaCloud className="text-gray-500 text-3xl hover:text-gray-700" />
                    <p className="text-gray-500 hover:text-gray-700">
                      Click Here to upload
                    </p>
                    <input
                      type="file"
                      name="uploadImg"
                      accept="image/*"
                      onChange={uploadImg}
                      className="w-0 h-0"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={require('../img/' + imageAsset)}
                      alt="uploaded Image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in"
                      onClick={deleteImage}
                    >
                      <FaTrash className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <FaAppStore className="text-gray-700 text-2xl" />
            <input
              type="text"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 font-semibold"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <FaDollarSign className="text-gray-700 text-2xl" />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 font-semibold"
            />
          </div>
        </div>
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveData}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
