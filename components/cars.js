import images from './datas/images/images'
import { useEffect } from 'react';
import Link from 'next/link'
import AOS from 'aos';

export default function Cars() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="py-10 md:py-28 relative flex" data-aos="fade-up">
            <div className='w-2/5 z-0'>
                <img src='/car.jpg' alt='car' className='z-0'/>
            </div>
            <div className='z-40 w-3/5 ml-[-10rem]'>
                <div className="ml-44 w-2/6 mb-10" data-aos="fade-left">
                    <h1 className="text-2xl">Witch is the No 01 Luxury cars?</h1>
                    <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                    <h1 className="text-[#fff1] text-9xl font-bold mt-[-6rem]">CARS</h1>
                </div>
                <div className="w-4/5 my-20 ml-[6rem]">
                    <p className="px-20">So whether you're a long-time luxury car enthusiast or you're just starting to explore the world of high-end vehicles, we invite you to explore our site and discover all that we have to offer.</p>
                </div>
                <div className='mt-32'>
                    <div className='ml-20'>
                        <h1 className='text-3xl font-bold'>Compare Cars Side By Side</h1>
                        <p className='text-xl mt-4 mb-10'>Choose Cars To Compare, Or Check Out Our Popular Comparisons.</p>
                        <Link href='/paths/comparesion' className='text-[red] view text-xl font-semibold py-2 px-4'>start Comparison</Link>
                    </div>
                    {/* <div className='w-1/4 ml-10 p-6 exp backdrop-blur-sm bg-[#fff3] rounded-xl drop-shadow-lg'>
                        <img src='/images/compareson.png' alt='' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}