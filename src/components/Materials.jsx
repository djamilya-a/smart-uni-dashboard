import React from 'react'

const Materials = () => {
  return (
    <section className='w-[full] bg-[#141621] py-[70px]'>
      <div className="w-[1400px] mx-auto flex justify-between items-start">
        <div className="flex flex-col gap-[20px]">
          <div className="p-[30px] w-[600px] bg-[#fffcf6] rounded-[10px]">
            <h3 className='text-[26px] text-[#141621] pb-[15px]'>Учебные материалы:</h3>
            <ul className='text-[18px] text-[#141621] list-disc flex flex-col justify-start items-start gap-[15px] font-semibold pl-[15px]'>
              <li><a className='underline' href="https://studfile.net/preview/9744729/">Введение в Компьютерную графику</a></li>
              <li><a className='underline' href="https://mathprofi.ru/osnovy_matematicheskoj_logiki.html">Основы Математической логики</a></li>
              <li><a className='underline' href="https://prog-cpp.ru/algorithmization/">Основы алгоритмитизации</a></li>
              <li><a className='underline' href="https://www.sviaz-expo.ru/ru/articles/sovremennye-informacionnye-tehnologii/">Современные информационные технологии</a></li>
            </ul>
          </div>
          <div className="flex gap-[30px] py-[10px]">
            <div className="w-[285px] rounded-[10px] bg-[#fffcf6] p-[20px]">
              <h3 className='text-[22px] text-[#141621] bold'>Посещаемость</h3>
              <h4 className='text-[16px] text-[#141621] mt-[10px] mb-[7px]'>Пропусков за октябрь: <span className='text-[#0c3561] font-bold'> 2</span></h4>
              <h4 className='text-[16px] text-[#141621]'>Всего пропусков: <span className='text-[#0c3561] font-bold'> 7</span></h4>
            </div>
            <div className="w-[285px] rounded-[10px] bg-[#fffcf6] p-[20px]">
              <h3 className='text-[22px] text-[#141621] bold'>Вовлеченность</h3>
              <h4 className='text-[16px] text-[#141621] mt-[10px] mb-[7px]'>За октябрь: <span className='text-[#0c3561] font-bold'>93%</span></h4>
              <h4 className='text-[16px] text-[#141621]'>Общая вовлеченность: <span className='text-[#0c3561] font-bold'>89%</span></h4>
            </div>
          </div>
        </div>
        <div className="p-[33px] w-[600px] bg-[#fffcf6] rounded-[10px]">
          <h3 className='text-[26px] text-[#141621] pb-[15px]'>Мои оценки:</h3>
          <div className="flex gap-[60px]">
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