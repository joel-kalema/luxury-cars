import { useState } from 'react';
import Import from '../import';

export default function Compareson () {

    const [comparison, setComparison] = useState([])
    const result = (car) => {
        const checkCar = comparison.filter(carItem => car.name === carItem.name);
        if(comparison.length < 2 && checkCar.length === 0){
            setComparison([...comparison, car]);
        }
    }

    return (
        <div>
            <Import.Header />
            <div className='py-28 px-28'>
                <h1 className='text-xl'>Compare Cars Side By Side</h1>
                <div className='flex flex-wrap mx-auto'>
                    {Import.CarsData.map((car) => (
                        <div className='w-[19%] relative compared m-[0.5%]' onClick={() => result(car)}>
                            <div className='compared-hover'>
                                <span className='cursor-pointer'><p>{car.name}</p></span>
                            </div>
                            <div>
                                <img src={car.image[0]} alt={car.name} />
                            </div>
                            <p>{car.name}</p>
                        </div>
                    ))}
                </div>
                {
                    comparison && (
                        <div className='flex jutify-between'>
                            {comparison.map((car) => (
                                <div className='w-1/5 p-2'>
                                    <div>
                                        <img src={car.image[0]} alt={car.name} />
                                    </div>
                                    <h2>{car.name}</h2>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    )
}