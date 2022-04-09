import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import userPic from "../img/profilepic.jpeg";
import { FaCartArrowDown, FaDoorOpen, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
export default function Header() {
  const [state, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!state.user) {
      const user = {
        email: "user@test.com",
        pass: "123",
      };

      dispatch({
        type: actionType.SET_USER,
        user: user,
      });

      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = ()=>{
    dispatch({
      type: actionType.SET_USER,
      user: null
    })
    setIsMenu(false)
    localStorage.clear()
  }

  return (
    <header className="fixed z-50 w-screen p-3 px-8 md:p-6 md:px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-xl font-bold">Dada Foods</p>
        </Link>
        <div className="flex gap-2">
          <motion.ul
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
          >
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <FaCartArrowDown className="ml-8 text-3xl cursor-pointer" />
            <div className="absolute -top-3 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-500">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              onClick={login}
              src={state.user ? userPic : avatar}
              alt="user picture"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
            />
            {isMenu ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-slate-200 shadow-xl rounded-lg flex flex-col absolute py-2 top-12 right-4"
              >
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300">
                    New Item <FaPlus />
                  </p>
                </Link>
                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300"
                >
                  Logout <FaDoorOpen />
                </p>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-between">
        <div className="relative flex items-center justify-center py-4">
          <FaCartArrowDown className="text-3xl cursor-pointer" />
          <div className="absolute -top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-500">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-xl font-bold">Dada Foods</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            onClick={login}
            src={state.user ? userPic : avatar}
            alt="user picture"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
          />
          {isMenu ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-slate-200 shadow-xl rounded-lg flex flex-col absolute py-2 top-12 right-4"
            >
              <Link to={"/createItem"}>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300">
                  New Item <FaPlus />
                </p>
              </Link>
              <ul className="flex flex-col">
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-slate-300 cursor-pointer">
                  Home
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-slate-300 cursor-pointer">
                  Menu
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-slate-300 cursor-pointer">
                  About Us
                </li>
                <li className="px-4 py-2 flex items-center gap-3 hover:bg-slate-300 cursor-pointer">
                  Services
                </li>
              </ul>
              <p
                onClick={logout}
                className="m-2 p-2 flex items-center gap-3 cursor-pointer justify-center bg-slate-300 shadow-md rounded hover:bg-slate-400"
              >
                Logout <FaDoorOpen />
              </p>
            </motion.div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
}
