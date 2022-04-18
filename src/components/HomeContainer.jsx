import React from 'react'
import delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import iceImg from '../img/i1.png'
import imgOne from '../img/f1.png'
import imgTwo from '../img/cu1.png'
import imgThree from '../img/c6.png'

export default function HomeContainer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-5' id='home'>
      <div className='py-2 px-1 flex-1 flex flex-col items-start gap-4'>
        <div className='flex items-center gap-1 justify-center bg-orange-100 rounded-full p-2 mt-4 md:mt-none'>
          <p className='text-orange-500 font-semibold'>Bike Devlivery</p>
          <div className='w-6 h-6 rounded-full overflow-hidden drop-shadow-xl'>
            <img src={delivery} className='w-full h-full bg-white rounded-full object-contain' alt="" />
          </div>
        </div>
        <p className='text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-wide'>
          The Best Food provider in <span className='text-orange-600 text-[3.5rem] md:text-[4.5] lg:text-[5rem]'>Your Town</span>
        </p>
        <p className='text-base text-center md:text-left'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>

        <button type='button' className='bg-gradient-to-br md:w-auto from-orange-500 to-orange-600 w-full py-2 rounded-lg hover:shadow-lg transition-all ease-in duration-100 p-3'>Order Now</button>
      </div>

      <div className='py-2 flex-1 flex md:items-center'>
        <img src={HeroBg} className='h-96 w-full md:w-auto ml-auto md:h-auto' alt="" />
        <div className='absolute flex flex-wrap mt-12 justify-center items-center gap-12 pt-6'>
            <div className=' md:w-[190px] h-32 basis-2/5 md:basis-auto md:h-52 p-2 bg-purple-100 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                <img src={iceImg} className='w-24 md:w-40 -mt-20' alt="" />
                <p className='text-base font-semibold'>Ice Cream</p>
                <p className='text-sm text-gray-400'>vanilla and something else</p>
                <p className='text-sm font-semibold'>2.5 <span className='text-red-500'>$</span></p>
            </div>
            <div className=' md:w-[190px] h-32 basis-2/5 md:basis-auto md:h-52 p-2 bg-purple-100 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                <img src={imgOne} className='w-24 md:w-40 -mt-20' alt="" />
                <p className='text-base font-semibold'>Straberry</p>
                <p className='text-sm text-gray-400'>vanilla and something else</p>
                <p className='text-sm font-semibold'>2.5 <span className='text-red-500'>$</span></p>
            </div>
            <div className=' md:w-[190px] h-32 basis-2/5 md:basis-auto md:h-52 p-2 bg-purple-100 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                <img src={imgTwo} className='w-24 md:w-40 -mt-20' alt="" />
                <p className='text-base font-semibold'>Chicken Karahi</p>
                <p className='text-sm text-gray-400'>vanilla and something else</p>
                <p className='text-sm font-semibold'>2.5 <span className='text-red-500'>$</span></p>
            </div>
            <div className=' md:w-[190px] h-32 basis-2/5 md:basis-auto md:h-52 p-2 bg-purple-100 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'>
                <img src={imgThree} className='w-24 md:w-40 -mt-20' alt="" />
                <p className='text-base font-semibold'>Fried Fish</p>
                <p className='text-sm text-gray-400'>vanilla and something else</p>
                <p className='text-sm font-semibold'>2.5 <span className='text-red-500'>$</span></p>
            </div>
        </div>
      </div>
      
    </section>
  )
}
