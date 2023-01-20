import { useState } from 'react';
import Link from "next/link";
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

export default function Header (){

    const [active, setActive] = useState('nav_active');
    const navToggle = () => (active === 'nav_active' ? setActive('nav_menu') : setActive('nav_active'));

    return (
        <div>
            <div className="flex justify-between fixed w-5/6 exp backdrop-blur-md p-4 left-24 bg-[#0004] z-50">
                <div>LOGO</div>
                <ul className="flex w-2/6 justify-between text-sm">
                    <li className='cursor-pointer hover:text-[red]'><Link href='/'>Home</Link></li>
                    <li className='cursor-pointer hover:text-[red]'>cars</li>
                    <li className='cursor-pointer hover:text-[red]'>About</li>
                    <li className='cursor-pointer hover:text-[red]'>Infos</li>
                    <li className='cursor-pointer hover:text-[red]'>Contact</li>
                </ul>
                <div onClick={navToggle}><AiOutlineSearch className="mr-4 cursor-pointer"/></div>
            </div>
            <div className={active}>
                <div className='fixed top-0 left-0 flex justify-center items-center flex-col h-screen w-full bg-[#1B1A1C] z-50'>
                    <AiOutlineClose onClick={navToggle} className='absolute top-12 right-12 text-xl hover:rotate-90 transition-all' />
                    <form>
                        <input className='text-4xl' type="text" name="search" id="search" placeholder="START TYPING..." maxlength="30"/>
                    </form>
                </div>
            </div>
        </div>
    )
}