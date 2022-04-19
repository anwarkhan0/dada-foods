import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowAltCircleLeft, FaAccusoft, FaMinus, FaPlug, FaPlus } from 'react-icons/fa';

export default function CartContainer() {
  return (
    <div className='fixed top-0 right-0 z-50 w-full md:w-[375px] h-full bg-white drop-shadow-md flex flex-col'>
        <div className='w-full flex items-center justify-between p-4'>
            <FaArrowAltCircleLeft className='cursor-pointer text-2xl' />
            <p className='text-lg font-semibold'>Cart</p>
            <motion.p whileTap={{scale: 0.75}} className='flex items-center gap-2 p-1 px-2 bg-gray-100 rounded-md hover:shadow-md duration-100 cursor-pointer'>Clear <FaAccusoft /></motion.p>
        </div>

        <div className='w-full h-full bg-gray-600 rounded-[2rem] flex flex-col p-4 gap-4 justify-between'>

            <div className='w-full px-6 flex flex-col gap-3 overflow-y-scroll scrollbar-none bg-slate-500 shadow-lg'>
                <div className='w-full p-1 px-2 rounded-lg flex items-center gap-2'>
                    <img src={require('../img/c1.png')} className='w-20 h-20 max-w-[60px] rounded-full object-contain' alt="" />

                    <div className='flex flex-col gap-2'>
                        <p className='text-base text-gray-50'>Vanilla cream</p>
                        <p className='text-sm block text-gray-300 font-semibold'>$8.3</p>
                    </div>

                    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div whileTap={{scale: 0.75}}>
                            <FaMinus className='text-gray-50' />
                        </motion.div>
                        <p className='w-5 h-5 rounded-sm bg-gray-600 text-gray-50 flex items-center justify-center'>1</p>
                        <motion.div whileTap={{scale: 0.75}}>
                            <FaPlus className='text-gray-50' />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* cart total */}
            <div className='w-full rounded-[2rem] flex flex-col items-center px-8 py-2 bg-slate-700'>
                <div className='w-full flex items-center justify-between m-5'>
                    <p className='text-gray-400 text-lg'>Sub total</p>
                    <p className='text-gray-400 text-lg'>$ 2.5</p>
                </div>
                <div className='w-full flex items-center justify-between m-5'>
                    <p className='text-gray-400 text-lg'>Delivery</p>
                    <p className='text-gray-400 text-lg'>$ 1.3</p>
                </div>

                <div className='w-full border-b border-gray-600'></div>

                <div className='w-full flex items-center justify-between m-5'>
                    <p className='text-gray-400 text-lg'>Total</p>
                    <p className='text-gray-400 text-lg'>$ 23.3</p>
                </div>

                <motion.button whileTap={{scale: 0.8}} className='w-full p-2 rounded-full bg-orange-400 text-gray-50 text-center text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out'>
                    Check Out
                </motion.button>
            </div>
            
        </div>
    </div>
  )
}
