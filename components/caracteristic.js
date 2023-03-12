import { AiFillStar } from 'react-icons/ai';
import { GiAlliedStar } from 'react-icons/gi';

export default function Caracteristic() {

    const lists = ['comfort', 'equipment', 'amenities', 'quality', 'performance']

    return (
        <div className="p-20 mx-auto relative">
            <h1 className='font-bold mb-10 text-3xl text-center'>How are luxury cars defined?</h1>
            <div className='w-3/4 mx-auto bg-[#fff1] pb-4 rounded-xl'>
                <div className='w-full p-20 flex justify-center mx-auto mt-[1rem] bg-[#fff1] mt-16 relative rounded-xl drop-shadow-lg'>
                    <img src='/images/car.png' alt='' />
                    <div className='flex absolute bottom-[5.5rem] right-[8rem] items-center'>
                        <div>
                            <span class="relative flex h-4 w-4">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                            </span>
                        </div>
                        <div className='w-[8rem] bg-[#fff] h-[0.1rem]'></div>
                        <div className='text-[.7rem] text-sm exp backdrop-blur-sm bg-[#fff1] px-3 py-2 flex items-center'>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <h1 className='ml-2'>Performance</h1>
                        </div>
                    </div>
                    <div className='flex absolute left-[10rem] top-[6rem] items-center'>
                        <div className='text-[.7rem] exp backdrop-blur-sm bg-[#fff1] px-3 py-2 flex items-center'>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <h1 className='ml-2'>Comfort</h1>
                        </div>
                        <div className='w-[8rem] bg-[#fff] h-[0.1rem]'></div>
                        <div>
                            <span class="relative flex h-4 w-4">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute text-sm left-[17rem] bottom-[3rem] py-4 px-6 exp backdrop-blur-sm bg-[#fff1] rounded-xl drop-shadow-lg'>
                <lu>
                    {lists.map(list => (
                        <li className='flex items-center'><GiAlliedStar  className='mr-1 text-[red]'/> {list}</li>
                    ))}
                </lu>
            </div>
            <div className='absolute text-sm left-[26rem] bottom-[1rem] py-4 px-6 exp backdrop-blur-sm bg-[#fff1] rounded-xl drop-shadow-lg'>
                <div className='flex items-end'>
                    <div className='w-[.2rem] h-[1rem] bg-[red] mr-2'></div>
                    <div className='w-[.2rem] h-[3rem] bg-[#fff] mr-2'></div>
                    <div className='w-[.2rem] h-[2rem] bg-[#fff]'></div>
                </div>
                <p className='text-sd'>1 3 2</p>
            </div>  
        </div>
    )
}