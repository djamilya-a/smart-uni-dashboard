import React from 'react'
import { Link } from 'react-router-dom'
import GppBadIcon from '@mui/icons-material/GppBad';

const NotFound = () => {
    return (
        <section className='bg-[#141621] flex flex-col justify-center items-center gap-[30px] py-[100px]'>
            <GppBadIcon sx={{ fontSize: 150 }} className='text-[#FCD043] error' />
            <h4 className='text-[#FFFCF6] text-[65px] text-center uppercase'>Страница <br /> не найдена</h4>
            <button className='bg-[#141621] opacity-85 border border-[3px] rounded-[27px] border-[#FCD043] h-[100px] w-[300px]'><Link className='text-[18px] text-[#FFFCF6] no-underline uppercase' to='/'>На главную</Link></button>
        </section>
    )
}

export default NotFound