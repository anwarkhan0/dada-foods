import React from 'react'
import delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
export default function HomeContainer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-5' id='home'>
      <div className='py-2 px-1 flex-1 flex flex-col items-start gap-4'>
        <div className='flex items-center gap-1 justify-center bg-orange-100 rounded-full p-2'>
          <p className='text-orange-500 font-semibold'>Bike Devlivery</p>
          <div className='w-6 h-6 rounded-full overflow-hidden drop-shadow-xl'>
            <img src={delivery} className='w-full h-full bg-white rounded-full object-contain' alt="" />
          </div>
        </div>
        <p className='text-[3.5rem] lg:text-[4rem] font-bold tracking-wide text'>
          The Fastest Delivery in <span className='text-orange-600 text-[4.5rem] lg:text-[5rem]'>Your City</span>
        </p>
        <p className='text-base text-center md:text-left'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>

        <button type='button' className='bg-gradient-to-br md:w-auto from-orange-500 to-orange-600 w-full py-2 rounded-lg hover:shadow-lg transition-all ease-in duration-100 p-3'>Order Now</button>
      </div>

      <div className='py-2 flex-1 flex items-center '>
        <img src={HeroBg} className='h-96 w-full md:w-auto ml-auto md:h-auto' alt="" />
        <div className='absolute flex items-center justify-center'>
            <div className='w-190 p-2 bg-red-500'></div>
        </div>
      </div>
      
    </section>
  )
}
