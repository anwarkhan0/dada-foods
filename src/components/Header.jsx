import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
import avatar from '../img/avatar.png';
import userPic from '../img/profilepic.jpeg';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
export default function Header() {

  const [state, dispatch] = useStateValue();

  const login = async ()=>{
    const user = {
      email: 'user@test.com',
      pass: '123'
    }

    dispatch({
      type: actionType.SET_USER,
      user: user
    })
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <Link to={'/'} className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 object-cover" />
          <p className="text-xl font-bold">Dada Foods</p>
        </Link>
        <div className="flex gap-2">

          <ul className="flex items-center gap-8">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Menu</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
          </ul>

          <div className="relative flex items-center justify-center">
            <FaCartArrowDown className="ml-8 text-3xl cursor-pointer" />
            <div className="absolute -top-3 right-0 w-5 h-5 rounded-full flex items-center justify-center bg-red-500">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          
          <motion.img whileTap={{scale: 0.6}} onClick={login} src={ state.user ? userPic : avatar } alt="user picture" className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"/>
        </div>
      </div>
    </header>
  );
}
