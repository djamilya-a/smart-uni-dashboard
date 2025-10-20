import React, { useState } from 'react';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import { gradesData, scheduleData } from "./grades";

const Ai = () => {
  const [answer, setAnswer] = useState("");

  const attendance = { status: "85%", message: "Все пары посещены ✅" };
  const events = ["Олимпиада по программированию - Пятница", "Кураторский час - Среда"];

  const today = new Date()
    .toLocaleString("ru-RU", { weekday: "long" })
    .replace(/^./, (str) => str.toUpperCase());

  const showSchedule = () => {
    const lessons = scheduleData[today] || ["Сегодня выходной"];
    setAnswer(`📘 Уроки сегодня (${today}):\n${lessons.join(", ")}`);
  };

  const showGrades = () => {
    let text = "📊 Мои оценки:\n";
    for (let subject in gradesData) {
      text += `${subject}: ${gradesData[subject]}\n`;
    }
    setAnswer(text);
  };

  const showAttendance = () => {
    setAnswer(`🕒 Посещаемость: ${attendance.status}\n${attendance.message}`);
  };

  const showEvents = () => {
    setAnswer("📅 Ближайшие мероприятия:\n" + events.join("\n"));
  };

  return (
    <section className='w-full bg-[#fffcf6] py-[50px]'>
      <div className="w-[1400px] mx-auto flex justify-between gap-6">
        
        {/* Левая часть: совет дня */}
        <div className="bg-[#141621] p-[20px] text-[#fffcf6] rounded-[10px] w-[400px]">
          <h2 className='text-[28px] mb-[10px]'>
            Совет дня <span className='ml-[10px]'>
              <EventAvailableRoundedIcon sx={{ fontSize: 50 }} className='pb-[3px]'/>
            </span>
          </h2>
          <p className='text-[20px] leading-[30px]'>
            Сделай перерыв - твоя продуктивность на сегодня 
            <span className='font-bold underline mx-[5px]'>87%</span>!
          </p>
        </div>

        {/* Правая часть: бот */}
        <div className="bg-[#141621] p-[20px] text-[#fffcf6] rounded-[10px] w-[400px] flex flex-col items-end">
          <h1 className="text-xl font-bold mb-4">🎓 Бот-помощник</h1>

          <div className="grid grid-cols-1 gap-2 w-full">
            <button onClick={showSchedule} className="bg-white text-[#0c3561] rounded-xl p-2 hover:bg-gray-200 font-semibold">
              1️⃣ Какие уроки сегодня?
            </button>
            <button onClick={showGrades} className="bg-white text-[#0c3561] rounded-xl p-2 hover:bg-gray-200 font-semibold">
              2️⃣ Мои оценки
            </button>
            <button onClick={showAttendance} className="bg-white text-[#0c3561] rounded-xl p-2 hover:bg-gray-200 font-semibold">
              3️⃣ Моя посещаемость
            </button>
            <button onClick={showEvents} className="bg-white text-[#0c3561] rounded-xl p-2 hover:bg-gray-200 font-semibold">
              4️⃣ Ближайшие мероприятия
            </button>
          </div>

          {answer && (
            <div className="mt-4 bg-white text-[#141621] rounded-2xl p-3 w-full text-right whitespace-pre-line shadow-lg max-h-[150px] overflow-y-auto">
              {answer}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Ai;
