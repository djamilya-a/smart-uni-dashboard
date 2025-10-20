import React, { useEffect, useState } from "react";

const Schedule = () => {
  const allLessons = [
    "Математика",
    "Иностранный язык",
    "Кыргызский язык",
    "Компьютерная графика",
    "Физика",
    "Основы алгоритмитизации",
    "Инновационная информатика",
    "Математическая логика",
  ];

  const [lessons, setLessons] = useState([]);

  // Генерация случайного списка уроков
  function getRandomLessons(count = 4) {
    return Array.from({ length: count }, () => {
      const randomIndex = Math.floor(Math.random() * allLessons.length);
      return allLessons[randomIndex];
    });
  }

  useEffect(() => {
    setLessons(getRandomLessons(4)); // Например, 10 уроков
  }, []);
  return (
    //     {schedule.map((daySchedule, i) => (
    //       <div
    //         key={i}
    //         className="bg-[#fafafa] text-gray-900 rounded-2xl shadow-lg p-6 w-[280px]"
    //       >
    //         <h2 className="text-xl font-bold mb-3">{daySchedule.day}</h2>
    //
    //           {daySchedule.lessons.map((lesson, j) => (
    //             <li key={j}>{lesson}</li>
    //           ))}

    //       </div>

    // </div>
    <section className="w-full bg-[#fffcf6] py-[60px]">
      <div className="w-[1400px] mx-auto">
        <h3 className="text-[34px] text-[#141621] font-semibold">
          Мое расписание
        </h3>
        <div className="flex justify-between items-center py-[10px]">
          <div className="w-[1020px] flex border border-[1px] border-[#0c3561] bg-[#e7ffe6]">
            <div className="w-[20px] flex flex-col items-start justify-start border border-[1px] border-[#0c3561] px-[5px]">
              <div className="h-[30px]"></div>
              <div className="h-[100px] font-bold text-[20px] text-[#0c3561]">
                <p>1</p>
              </div>
              <div className="h-[100px] font-bold text-[20px] text-[#0c3561]">
                <p>2</p>
              </div>
              <div className="h-[100px] font-bold text-[20px] text-[#0c3561]">
                <p>3</p>
              </div>
              <div className="h-[100px] font-bold text-[20px] text-[#0c3561]">
                <p>4</p>
              </div>
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">
                Понедельник
              </p>
              {lessons.map((lesson, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{lesson}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Вторник</p>
              {lessons.map((lesson, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{lesson}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Среда</p>
              {lessons.map((lesson, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{lesson}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Четверг</p>
              {lessons.map((lesson, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{lesson}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Пятница</p>
              {lessons.map((lesson, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{lesson}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="px-[10px] text-[24px] text-[#141621]">
            <ul>
              <li className="pb-[10px]">
                <a href="#">Расписание на неделю</a>
              </li>
              <li className="pb-[10px]">
                <a href="#">Только на сегодня</a>
              </li>
              <h6>По корпусам:</h6>
              <ul className="list-disc text-[20px] ml-[30px] pt-[7px]">
                <li>
                  <a href="#">Корпус А</a>
                </li>
                <li>
                  <a href="#">Корпус В</a>
                </li>
                <li>
                  <a href="#">Корпус С</a>
                </li>
                <li>
                  <a href="#">Корпус D</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
