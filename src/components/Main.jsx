import React from 'react'

const Main = () => {
  return (
    <main className='w-full bg-[#141621]'>
      <div className="w-[1300px] mx-auto flex justify-between items-center pt-[20px] pb-[80px]">
        <div className="border border-[3px] border-[#0c3561] py-[50px] pl-[70px] pr-[100px] rounded-[15px]">
          <h1 className='text-[46px] font-semibold text-[#fffcf6]'>С возвращением, <br /> Бегимай!</h1>
          <ul className='pt-[30px] flex flex-col gap-[7px] items-start text-[16px] text-[#fffcf6] opacity-80 list-disc ml-[20px]'>
            <li>Студент</li>
            <li>Первый курс</li>
            <li>Программная инженерия</li>
            <li>ПИ оч 1-25</li>
            <li>Авасканова Бегимай Бектуровна</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px]">
            <div className="w-[270px] bg-[#fffcf6] h-[200px] p-[15px] rounded-[8px]">
              <h3 className='text-[20px] text-[#141621]'>Мои экзамены:</h3>
              <ul className='text-[16px] text-[#141621] py-[5px] list-disc pl-[15px]'>
                <li>
                  <h5>Английский язык:</h5>
                  <p className='text-[#0c3561] font-bold mb-[5px] underline'>21.10.25</p>
                </li>
                <li>
                  <h5>Русский язык:</h5>
                  <p className='text-[#0c3561] font-bold underline'>23.10.25</p>
                </li>
              </ul>
            </div>
            <div className="w-[270px] bg-[#fffcf6] h-[200px] p-[15px] rounded-[8px]">
              <h3 className='text-[20px] text-[#141621]'>Дедлайны:</h3>
              <ul className='text-[16px] text-[#141621] py-[5px] list-disc pl-[15px]'>
                <li>
                  <h5>Эко-проект:</h5>
                  <p className='text-[#0c3561] font-bold underline'>27.10.25</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[560px] bg-[#fffcf6] p-[15px] h-[200px] rounded-[8px]">
            <h3 className='text-[20px] text-[#141621]'>Мероприятия:</h3>
            <ul className='text-[16px] text-[#141621] py-[5px] list-disc pl-[15px]'>
              <li>
                <h5>Осенний бал:</h5>
                <p className='text-[#0c3561] font-bold underline mb-[5px]'>31.10.25</p>
              </li>
              <li>
                <h5>Презентация лучших проектов::</h5>
                <p className='text-[#0c3561] font-bold underline'>22.10.25</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main