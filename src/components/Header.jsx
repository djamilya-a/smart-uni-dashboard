import { Link } from "react-router-dom"
import React from "react"
import Logo from '../assets/Logo.png'

const Header = () => {
    return (
        <header className='w-full bg-[#141621]'>
            <div className="w-[1400px] mx-auto py-[30px] flex justify-between items-center">
                <div className="logo">
                    <h4 className='font-[Comfortaa] uppercase font-semibold text-[20px] text-[#FFFCF6]'>мукр</h4>
                </div>
                <nav className='hidden md:flex justify-between gap-[60px]'>
                    <Link className='text-[#FFFCF6] text-[18px] no-underline' to='/'>Главная</Link>
                    <Link className='text-[#FFFCF6] text-[18px] no-underline' to='/schedule'>Мое расписание</Link>
                    <Link className='text-[#FFFCF6] text-[18px] no-underline' to='/materials'>Учебные материалы</Link>
                    <Link className='text-[#FFFCF6] text-[18px] no-underline' to='/regis'>Регистрация</Link>
                </nav>
                <div className="w-[120px]">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header