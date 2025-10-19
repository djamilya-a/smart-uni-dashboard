import React, { useState, useEffect } from "react";

export default function Test() {
  const [exams, setExams] = useState([]);
  const [deadlines, setDeadlines] = useState([]);
  const [events, setEvents] = useState([]);

  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("exams");

  // Загружаем из localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("plansData"));
    if (saved) {
      setExams(saved.exams || []);
      setDeadlines(saved.deadlines || []);
      setEvents(saved.events || []);
    }
  }, []);

  // Сохраняем при каждом изменении
  useEffect(() => {
    const data = { exams, deadlines, events };
    localStorage.setItem("plansData", JSON.stringify(data));
  }, [exams, deadlines, events]);

  const addPlan = (e) => {
    e.preventDefault();
    if (!input || !date) return alert("Заполни все поля!");

    const newItem = { name: input, date };
    if (type === "exams") setExams([...exams, newItem]);
    if (type === "deadlines") setDeadlines([...deadlines, newItem]);
    if (type === "events") setEvents([...events, newItem]);

    setInput("");
    setDate("");
  };

  return (
    <div className="min-h-screen bg-[#10111a] text-gray-900 flex flex-col items-center gap-8 p-8 text-[18px]">
      <div className="flex gap-6 flex-wrap justify-center">
        <Card title="Мои экзамены:" items={exams} />
        <Card title="Дедлайны:" items={deadlines} />
      </div>
      <Card title="Мероприятия:" items={events} />

      <form
        onSubmit={addPlan}
        className="bg-white rounded-2xl p-6 mt-6 shadow-lg flex flex-col gap-3 w-[320px]"
      >
        <h2 className="text-lg font-semibold mb-2">Добавить план</h2>

        <label>Тип:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded p-2"
        >
          <option value="exams">Экзамен</option>
          <option value="deadlines">Дедлайн</option>
          <option value="events">Мероприятие</option>
        </select>

        <label>Название:</label>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded p-2"
          placeholder="Например: Математика"
        />

        <label>Дата:</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded p-2"
          placeholder="Например: 25.10.25"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg p-2 mt-3 hover:bg-blue-700 transition"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="bg-[#fafafa] rounded-2xl shadow-lg p-6 w-[300px]">
      <h2 className="font-semibold text-lg mb-3">{title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {items.length === 0 && (
          <p className="text-gray-500 text-sm">Пока ничего нет</p>
        )}
        {items.map((item, i) => (
          <li key={i}>
            {item.name}:{" "}
            <a href="#" className="text-blue-700 underline">
              {item.date}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
