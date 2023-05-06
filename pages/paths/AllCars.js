import { useEffect } from "react";
import Import from '../import'
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AllCars() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const router = useRouter();
    const detail = (car) => {
        router.push(`/cars/${car.name.split(' ').join('_')}`);
    }
    return (
        <div className="flex flex-wrap justify-between pb-28 px-56 mt-[-4rem]">
            {Import.CarsData.map((car) => (
                <div key={car.id} onClick={() => detail(car)} className="w-[49%] mt-4 over_div cursor-pointer" data-aos="fade-up" data-aos-duration="1000">
                    <img src={car.image[0]} alt="cars" />
                    <div className="flex p-4 justify-between bg-[#3F3F3F] items-center relative">
                        <div>
                            <div className='flex items-center'>
                                <h1 className='font-semibold text-sm mb-2'>{car.name}</h1>
                                <div className="w-0 h-[0.05rem] bg-[red] line ml-2"></div>
                            </div>
                            <p className="text-xs w-5/6 text-[#c5c5c5]">{car.extract}</p> 
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}