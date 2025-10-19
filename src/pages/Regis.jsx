import React from 'react'
import { useState } from "react";

export default function Regis() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("https://673842654eb22e24fca7564c.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Регистрация прошла успешно!");
      } else {
        setMessage(data.message || "Ошибка регистрации");
      }
    } catch (error) {
      setMessage("Нет подключения к сети");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[100px] pb-[100px] flex flex-col items-center justify-start bg-[#FFFCF6]">
      <div className="bg-[#FFFCF6] flex flex-col items-center justify-center gap-[50px] px-[300px] py-[50px] border border-[#0c3561] border-[3px] rounded-[20px]">
        <h2 className="text-[80px] text-[#141621] font-bold text-center">Регистрация</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-[30px]">
          <input
            type="text"
            name="username"
            placeholder="Введите ваше ФИО"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-[400px] px-[10px] py-[15px] border border-[#141621] rounded-[10px] text-[16px] text-[#141621]"
          />
          <input
            type="email"
            name="email"
            placeholder="Введите ваш e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-[400px] px-[10px] py-[15px] border border-[#141621] rounded-[10px] text-[16px] text-[#141621]"
          />
          <input
            type="password"
            name="password"
            placeholder="Придумайте пароль"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-[400px] px-[10px] py-[15px] border border-[#141621] rounded-[10px] text-[16px] text-[#141621]"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-[400px] bg-[#fffcf6] border border-[2px] border-[#0c3561] text-[#141621] py-[15px] rounded-[10px] text-[16px] text-[#0c3561] hover:bg-[#FFFCF6] transition"
          >
            {loading ? "Загрузка..." : "Зарегистрироваться"}
          </button>
        </form>
        {message && <p className="text-center text-[#141621] text-[18px]">{message}</p>}
      </div>
    </div>
  );
}