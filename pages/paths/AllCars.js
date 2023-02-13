import Import from '../import'
import { useRouter } from 'next/router';

export default function AllCars() {
    const router = useRouter();
    const detail = (car) => {
        router.push(`/cars/${car.name.split(' ').join('_')}`);
    }
    return (
        <div className="h-screen flex flex-wrap justify-between px-56 mt-[-4rem]">
            {Import.CarsData.map((car) => (
                <div onClick={() => detail(car)} className="w-[32%] mt-4 over_div cursor-pointer">
                    <img src={car.image[0]} alt="cars" />
                    <div className="flex p-4 justify-between bg-[#3F3F3F] items-center relative overflow-hidden">
                        <div>
                            <h1 className='font-semibold text-sm mb-2'>{car.name}</h1>
                            <p className="text-xs w-5/6 text-[#c5c5c5]">{car.extract}</p>
                            <span className='absolute font-extrabold over_name'>{car.name[0]}</span> 
                        </div>
                        {/* <div onClick={() => detail(car)} className="p-3 bg-[red] text-[#fff] w-[3rem] h-[2.5rem]"><TbArrowNarrowRight/></div> */}
                    </div>
                </div>
            ))}
        </div>
    )
}