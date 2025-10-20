import React from 'react'
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

const Ai = () => {
  return (
    <section className='w-full bg-[#fffcf6] py-[70px]'>
      <div className="w-[1400px] mx-auto">
        <div className="flex justify-between">
          <div className="bg-[#141621] p-[40px] text-[#fffcf6] rounded-[10px]">
            <form action=""></form>
          </div>
          <div className="bg-[#141621] p-[40px] text-[#fffcf6] rounded-[10px]">
            <h2 className='text-[36px] mb-[15px]'>Совет дня <span className='ml-[10px]'><EventAvailableRoundedIcon sx={{fontSize: 60}} className='pb-[5px]'/></span></h2>
            <p className='text-[24px] leading-[40px]'>Сделай перерыв - <br /> твоя продуктивность на сегодня <span className='font-bold underline mx-[5px]'>87%</span>!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ai