import React, { useEffect, useState } from "react";

const Schedule = () => {
  const allLessons = [
    "Математика 202к А",
    "Иностранный язык 180 B",
    "Кыргызский язык 197 А ",
    "Компьютерная графика 159 С",
    "Физика 167 С",
    "Основы алгоритмитизации 151 D ",
    "Инновационная информатика 182 В",
    "Математическая логика 178 В",
  ];

  const [lessons, setLessons] = useState([]);
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);

  function getRandomLessons(count = 4) {
    return Array.from({ length: count }, () => {
      const randomIndex = Math.floor(Math.random() * allLessons.length);
      return allLessons[randomIndex];
    });
  }
 
  useEffect(() => {
    setLessons(getRandomLessons(4)); 
    setThursday(getRandomLessons(4));
    setWednesday(getRandomLessons(4));
    setMonday(getRandomLessons(4));
    setTuesday(getRandomLessons(4));
  }, []);
  return (
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
              {tuesday.map((tuesday, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{tuesday}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Среда</p>
              {wednesday.map((wednesday, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{wednesday}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Четверг</p>
              {thursday.map((thursday, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{thursday}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-[200px] flex flex-col items-start justify-start text-[16px] text-[#141621] border border-[1px] border-[#0c3561] p-[5px]">
              {" "}
              <p className="font-bold text-[20px] text-[#0c3561]">Пятница</p>
              {monday.map((monday, i) => (
                <>
                  <div key={i} className="h-[100px]">
                    <p>{monday}</p>
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
