import { useState } from 'react';
import Import from '../import';

export default function Compareson () {

    const [comparison, setComparison] = useState([])

    const result = (car) => {
        const checkCar = comparison.filter(carItem => car.name === carItem.name);
        if(comparison.length <2 && checkCar.length === 0){
            setComparison([...comparison, car]);
        }
        console.log(comparison)
    }

    return (
        <div>
            <Import.Header />
            <div className='py-28'>
                <h1>Choose the Cars</h1>
                <div className='flex flex-wrap w-4/6 mx-auto'>
                    {Import.CarsData.map((car) => (
                        <div className='w-1/5 p-2' onClick={() => result(car)}>
                            <div>
                                <img src={car.image[0]} alt={car.name} />
                            </div>
                            <p>{car.name}</p>
                        </div>
                    ))}
                </div>
                {
                    comparison && (
                        comparison.map((car) => (
                            <div>{car.name}</div>
                        ))
                    )
                }
            </div>
        </div>
    )
}