import React from 'react'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ForestRoundedIcon from '@mui/icons-material/ForestRounded';

const Ecology = () => {
  return (
    <section className='w-[full] pt-[50px] bg-[#141621]'>
      <div className="w-[1400px] mx-auto flex justify-between items-start pt-[30px]">
        <div className="w-[270px]">
          <h3 className='text-[34px] text-[#FFFCF6]'>Позаботимся об экологии вместе с МУКР!</h3>
        </div>
        <div className="flex justify-evenly items-center w-[550px] h-[200px]">
          <div className="my-auto">
            <LocalFloristIcon sx={{ fontSize: 120 }} className='text-[#fffcf6]' />
          </div>
          <div className="my-auto">
            <HealthAndSafetyIcon sx={{ fontSize: 120 }} className='text-[#fffcf6]' />
          </div>
          <div className="my-auto">
            <ForestRoundedIcon sx={{ fontSize: 120 }} className='text-[#fffcf6]' />
          </div>
        </div>
        <div className="w-[300px] h-[200px] flex flex-col justify-between">
          <h4 className='text-[26px] text-[#FFFCF6]'>Энергия, сэкономленная на этой неделе:</h4>
          <h4 className='text-[30px] text-[#fffcf6] underline'>120 КилоВатт</h4>
        </div>
      </div>
    </section>
  )
}

export default Ecology