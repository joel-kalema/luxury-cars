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
                        <div className='flex'>
                            <div className='w-1/5 p-2'>
                                <div>
                                    <img src={comparison[0].image[0]} alt={comparison[0].name} />
                                </div>
                                <div>{comparison[0].name}</div>
                            </div>


                            <div className='w-1/5 p-2'>
                                <div>
                                    <img src={comparison[1].image[0]} alt={comparison[1].name} />
                                </div>
                                <div>{comparison[1].name}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}