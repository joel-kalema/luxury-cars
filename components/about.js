import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { CarsData } from './datas/cars';
import Text from './aboutPage';
import Wide from './wide';
import AOS from 'aos';

export default function About() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [info, setinfo] = useState([CarsData[0]]);
    const [clicked, setClicked] = useState(null)
    const router = useRouter();

    const content = (car) => {
        setinfo([car])
    }
    const detail = (car) => {
        router.push(`/cars/${car.name.split(' ').join('_')}`);
    }

    return (
        <div className="py-10 md:py-52 relative">
            <div className="mx-auto w-4/6 md:w-2/6 mb-28">
                <h1 className="text-sm md:text-2xl">Get All Luxury Cars</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff1] text-6xl md:text-9xl font-bold mt-[-3rem] md:mt-[-6rem]">LUXURY</h1>
            </div>
            <Text />
            <div id="cars" className=' pt-40' data-aos="fade-up" data-aos-duration="1000">
                <div className='mb-20 flex flex-col items-center'>
                    <div className='h-[1px] w-[3rem] bg-[red] mr-20'></div>
                    <h2 className='text-center font-extrabold text-2xl tracking-[.5rem] mb-2 mt-1'>Luxury Cars</h2>
                    <div className='h-[1px] w-[3rem] bg-[red] ml-20'></div>
                </div>

                <Link href='/paths/cars' className='ml-[68%] view text-xs font-semibold py-2 px-4'>VIEW ALL</Link>
                <div className="flex w-5/5 p-2 md:w-3/5 mx-auto justify-between mt-6 max-h-[35vh] md:min-h-[60vh]" data-aos-duration="1000">
                    <div className='hidden md:flex flex-col items-center justify-between w-1/6'>
                        <h3 className='rotate-90  text-[red] font-semibold text-xs -tracking-4 mt-14'>CHECK CACRS</h3>
                        <div className='w-[2px] h-[8rem] bg-[red]'></div>
                    </div>
                    <ul className='w-2/6 ml-[1rem] mr-[-3rem] md:mr-[0rem] z-20'>
                        {CarsData.map((car) => (
                            <li
                                key={car.id}
                                onClick={() => { content(car); setClicked(car.name) }}
                                className={
                                    clicked === car.name ?
                                        "text-[red] text-sm md:text-xl my-2 cursor-pointer ml-0 md:ml-4 duration-500 ease-out font-bold"
                                        :
                                        "hover:text-[red] text-sm md:text-xl my-2 cursor-pointer hover:ml-4 duration-500 ease-out hover:font-bold"
                                }>
                                {car.name}
                            </li>
                        ))}
                    </ul>
                    {

                        info && (
                            info.map((car) => (
                                <div className='min-w-4/4 min-h-[5rem] md:max-h-[25rem] overflow-hidden'>
                                    <div key={car.id} className="w-4/4 md:w-4/4 drop-shadow-xl" data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine">
                                        <div>
                                            <Image src={car.image[0]} alt="cars" className='w-full' width={300} height={300} />
                                        </div>
                                        <div className="flex p-4 justify-between bg-[#3F3F3F] items-center">
                                            <div>
                                                <div className='flex items-center'>
                                                    <h1 className='font-semibold text-sm mb-2'>{car.name}</h1>
                                                    <div className="w-1/6 h-[0.05rem] bg-[red]  ml-2"></div>
                                                </div>
                                                <p className="text-[5px] md:text-xs w-5/6">{car.extract}</p>
                                            </div>
                                            <div onClick={() => detail(car)} className="p-3 bg-[red] text-[#fff] w-[3rem] h-[2.5rem] cursor-pointer"><TbArrowNarrowRight /></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
                <Wide />
            </div>
        </div>
    )
}