import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { CarsData } from './datas/cars'

export default function About () {

    const [info, setinfo] = useState([CarsData[0]])
    const router = useRouter();
    const content = (car) => {
        setinfo([car])
    }
    const detail = (car) => {
        router.push(`/cars/${car.name.split(' ').join('_')}`);
    }

    return (
        <div className="py-10 md:py-28">
            <div className="mx-auto w-2/6 mb-28">
                <h1 className="text-2xl">Get All Luxury Cars</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff2] text-8xl font-bold mt-[-4rem]">LUXURY</h1>
            </div>
            <Link href='/paths/cars' className='ml-[68%] text-xs border-stone-400 border-[1px] py-2 px-4'>VIEW ALL</Link>
            <div className="flex w-3/6 mx-auto justify-between mt-10">
                <ul>
                    {CarsData.map((car) => (
                        <li
                            onClick={() => content(car)} className="hover:text-[red] my-2 cursor-pointer hover:ml-4 transition-all hover:font-bold">
                            {car.name}
                        </li>
                    ))}
                </ul>
                {
                    info &&(
                        info.map((car) => (
                            <div className="w-4/6">
                                <img src={car.image[0]} alt="cars" />
                                <div className="flex p-4 justify-between bg-[#3F3F3F] items-center">
                                    <div>
                                        <h1 className='font-semibold text-sm mb-2'>{car.name}</h1>
                                        <p className="text-xs w-5/6">{car.extract}</p>
                                    </div>
                                    <div onClick={() => detail(car)} className="p-3 bg-[red] text-[#fff] w-[3rem] h-[2.5rem]"><TbArrowNarrowRight/></div>
                                </div>
                            </div>
                        ))
                    )
                }  
            </div>
        </div>
    )
}