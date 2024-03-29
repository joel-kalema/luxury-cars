import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import { CarsData } from './datas/cars';
import { AiOutlineSearch } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';

export default function Header() {

    const [active, setActive] = useState('nav_active');
    const [seachCar, setSeachCar] = useState('')
    const navToggle = () => (active === 'nav_active' ? setActive('nav_menu') : setActive('nav_active'));
    const filterCar = CarsData.filter(car => car.name.includes(seachCar))

    const router = useRouter();
    const detail = (car) => {
        router.push(`/cars/${car.name.split(' ').join('_')}`);
        navToggle()
    }


    return (
        <div>
            <div className="flex justify-between fixed w-[100%] md:w-5/6 exp backdrop-blur-md p-4 md:left-24 bg-[#0004] z-50">
                <h1><Link href='/'>LXR</Link></h1>
                <ul className="hidden md:flex w-2/6 justify-between text-sm ">
                    <li className='cursor-pointer hover:text-[red]'><Link href='/' offset={100} duration={1000}>Home</Link></li>
                    <li className='cursor-pointer hover:text-[red]'><Link href='/#cars' offset={100} duration={1000}>Cars</Link></li>
                    <li className='cursor-pointer hover:text-[red]'><Link href='/#comparison' offset={100} duration={1000}>comparison</Link></li>
                    <li className='cursor-pointer hover:text-[red]'><Link href='/#news' offset={100} duration={1000}>News</Link></li>
                </ul>
                <div onClick={navToggle}><AiOutlineSearch className="mr-4 cursor-pointer" /></div>
            </div>
            <div className={active}>
                <div className='fixed top-0 left-0 flex items-center flex-col h-screen min-w-full bg-[#1B1A1C] z-50 show-nav'>
                    <VscChromeClose onClick={navToggle} className='absolute top-12 right-12 text-3xl text-[red] hover:rotate-90 transition-all' />
                    <ul className="flex w-2/6 justify-between text-sm mx-auto mt-16 flex-col md:flex-row">
                        <li onClick={navToggle} className='cursor-pointer hover:text-[red] mt-2'><Link href='/' offset={100} duration={1000}>Home</Link></li>
                        <li onClick={navToggle} className='cursor-pointer hover:text-[red] mt-2'><Link href='/#cars' offset={100} duration={1000}>Cars</Link></li>
                        <li onClick={navToggle} className='cursor-pointer hover:text-[red] mt-2'><Link href='/#comparison' offset={100} duration={1000}>comparison</Link></li>
                        <li onClick={navToggle} className='cursor-pointer hover:text-[red] mt-2'><Link href='/#news' offset={100} duration={1000}>News</Link></li>
                    </ul>
                    <form className='mt-[20vh] md:mt-[35vh]'>
                        <input
                            onChange={e => setSeachCar(e.target.value)}
                            className='md:text-4xl' type="text" name="search" id="search" placeholder="START TYPING..." maxlength="30" />
                    </form>
                    <div className='flex w-[95%] md:w-[80%] mt-20 mx-auto duration-300 ease-out overflow-x-auto flex-wrap'>
                        {seachCar !== '' ? filterCar.map((car) => (
                            <div key={car.id} className='w-[49%] md:w-[15%] relative searchIn m-[0.5%] duration-300 compared ease-out' onClick={() => detail(car)}>
                                <div className='compared-hover'>
                                    <span className='cursor-pointer'><p>{car.name}</p></span>
                                </div>
                                <div>
                                    <img src={car.image[0]} alt={car.name} />
                                </div>
                                <p className='text-xs bg-[#fff1] p-2 font-bold text-[#c5c5c5] tracking-[.05em]'>{car.name}</p>
                            </div>
                        )) : []}

                    </div>
                </div>
            </div>
        </div>
    )
}