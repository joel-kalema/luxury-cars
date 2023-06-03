import { useEffect } from "react";
import { AiFillStar } from 'react-icons/ai';
import { GiAlliedStar } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Caracteristic() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const lists = ['comfort', 'equipment', 'amenities', 'quality', 'performance']

    return (
        <div className="py-52 px-10 md:px-20 mx-auto relative caract">
            <h1 className='font-bold mb-10 text-3xl text-center'>How are luxury cars defined?</h1>
            <div className='w-[96%] md:w-[75%] mx-auto bg-[#fff1] pb-4 rounded-xl' data-aos="fade-up" data-aos-duration="3000">
                <div className='w-full p-20 flex justify-center mx-auto mt-[1rem] bg-[#fff1] mt-16 relative rounded-xl drop-shadow-lg' data-aos="fade-up" data-aos-duration="1000">
                    <img src='/images/car.png' alt='' />
                    <div className='flex absolute bottom-[11rem] md:bottom-[5.5rem] right-[1rem] md:right-[8rem] items-center'>
                        <div>
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                            </span>
                        </div>
                        <div className='hidden md:block w-[8rem] bg-[#fff] h-[0.1rem]'></div>
                        <div className='text-[.7rem] text-sm exp backdrop-blur-sm bg-[#fff1] px-3 py-2 flex items-center'>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <h1 className='ml-2'>Performance</h1>
                        </div>
                    </div>
                    <div className='flex absolute left-[1rem] md:left-[10rem] top-[10rem] md:top-[6rem] items-center'>
                        <div className='text-[.7rem] exp backdrop-blur-sm bg-[#fff1] px-3 py-2 flex items-center'>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <AiFillStar className="text-[red]"/>
                            <h1 className='ml-2'>Comfort</h1>
                        </div>
                        <div className='hidden md:block w-[8rem] bg-[#fff] h-[0.1rem]'></div>
                        <div>
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute text-sm left-[2rem] md:left-[17rem] bottom-[7rem] py-4 px-6 exp backdrop-blur-sm bg-[#fff1] rounded-xl drop-shadow-lg' data-aos="fade-up" data-aos-duration="3000">
                <lu>
                    {lists.map(list => (
                        <li key={list} className='flex items-center'><GiAlliedStar  className='mr-1 text-[red]'/> {list}</li>
                    ))}
                </lu>
            </div>
            <div className='absolute text-sm left-[12rem] md:left-[26rem] bottom-[6rem] py-4 px-6 exp backdrop-blur-sm bg-[#fff1] rounded-xl drop-shadow-lg' data-aos="fade-up" data-aos-duration="1000">
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
