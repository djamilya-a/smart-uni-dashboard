import React from 'react'

const Materials = () => {
  return (
    <section className='w-[full] bg-[#fffcf6] py-[30px]'>
      <div className="w-[1400px] mx-auto flex justify-around items-start">
        <div className="flex flex-col"></div>
        <div className="w-[1px] h-[500px] bg-[#0c3561]"></div>
        <div className="px-[15px]">
          <h3 className='text-[22px] text-[#141621] pb-[15px]'>Мои оценки:</h3>
          <div className="flex gap-[30px]">
            <ul className='text-[18px] text-[#141621] flex flex-col justify-start items-start gap-[15px]'>
              <li>Кыргызский язык</li>
              <li>Иностранный язык</li>
              <li>Инновационная информатика</li>
              <li>Математика</li>
              <li>Математическая логика</li>
              <li>Основы алгоритмитизации</li>
              <li>Компьютерная графика</li>
              <li>Физика</li>
            </ul>
            <ul className='text-[18px] flex flex-col justify-start items-start gap-[15px] font-bold'>
              <li className='text-[#0c3561]'>5, 5, 4</li>
              <li className='text-[#0c3561]'>5, 5, 5</li>
              <li className='text-[#0c3561]'>5, 5, 4, 5</li>
              <li className='text-[#0c3561]'>4, 5, 5</li>
              <li className='text-[#0c3561]'>5, 4, 5</li>
              <li className='text-[#0c3561]'>5, 4, 4, 5</li>
              <li className='text-[#0c3561]'>5, 5, 4, 5</li>
              <li className='text-[#0c3561]'>5, 5, 5, 5</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials