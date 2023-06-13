import { useState } from 'react';
import { CarsData } from "../../components/datas/cars";

export default function Compareson () {

    const [comparison, setComparison] = useState([])

    const result = (car) => {
        const checkCar = comparison.filter(carItem => car.name === carItem.name);
        if(comparison.length < 2 && checkCar.length === 0){
            setComparison([...comparison, car]);
        }
    }

    const reset = () => {
       setComparison([]);
    }

    return (
        <div>
            <div className='px-4 py-28 md:px-28'>
                <h1 className='text-2xl font-bold mb-2'>Compare Cars Side By Side</h1>
                <div className='w-[5rem] h-[.1rem] bg-[red] mb-6'></div>
                <div 
                    className={
                        comparison.length === 2 ? 'hidden duration-300 ease-out' 
                        : 
                        'flex flex-wrap mx-auto duration-300 ease-out'}>
                    {CarsData.map((car) => (
                        <div key={car.id} className='w-[32%] md:w-[15%] relative compared m-[0.5%]' onClick={() => result(car)}>
                            <div className='compared-hover'>
                                <span className='cursor-pointer'><p>{car.name}</p></span>
                            </div>
                            <div>
                                <img src={car.image[0]} alt={car.name} />
                            </div>
                            <p className='text-xs bg-[#fff1] py-1 px-2 font-bold text-[#c5c5c5] tracking-[.05em]'>{car.name}</p>
                        </div>
                    ))}
                </div>
                {
                    comparison && (
                        <div className='mt-16 flex flex-col items-center w-[90%] mx-auto exp backdrop-blur-sm bg-[#fff1] rounded-xl p-4 md:p-10'>
                            <div className='flex mb-10'>
                                <div className="hidden md:flex items-center mr-4">
                                    <div className="w-[1rem] h-[1rem] mr-2 mt-1 border-[0.05rem] flex justify-center items-center p-2 rounded-full border-solid border-red-600">1</div>
                                    <div className="w-[7rem] h-[0.05rem] bg-[red] mt-1"></div>
                                </div>
                                <h1 className='font-bold text-2xl'>See your result</h1>
                                <div className="hidden md:flex items-center ml-4">
                                    <div className="w-[7rem] h-[0.05rem] bg-[red] mt-1 mr-2"></div>
                                    <div className="w-[1rem] h-[1rem] mt-1 border-[0.05rem] flex justify-center items-center p-2 rounded-full border-solid border-red-600">2</div>
                                </div>
                            </div>
                            <div className='flex jutify-between flex-wrap'>
                            {comparison.map((car) => (
                                <div key={car.id} className='w-4/4 md:w-2/4 p-2 md:p-6 mt-2 md:mt-[-2rem] rounded-xl drop-shadow-lg'>
                                    <div className='z-30'>
                                        <img src={car.image[0]} alt={car.name} />
                                    </div>
                                    <div className='bg-[#fff1] z-50 p-6'>
                                        <div className='flex items-center'>
                                            <h1 className='up font-semibold text-[#c5c5c5] text-sm mb-2 uppercase tracking-[.4em]'>{car.name}</h1>
                                            <div className="w-[3rem] h-[0.05rem] bg-[red] ml-1"></div>
                                        </div>
                                        <p className='up text-[.8rem] mb-4'>{car.detail}</p>
                                        <a href={car.link} className='up hover:text-[red] hover:font-bold text-xs hover:ml-4 duration-300 ease-out'>visit the site</a>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <button
                                onClick={() => reset()}
                                className='mb-[-3.5rem] rounded-xl reset'
                            >reset</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}