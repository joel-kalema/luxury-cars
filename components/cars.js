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
                <img src='/car.jpg' alt='car' className='z-0' />
            </div>
            <div className='z-40 w-3/5 ml-[-10rem]'>
                <div className="ml-56 w-2/6 mb-10" data-aos="fade-left">
                    <h1 className="text-2xl">Witch is the No 01 Luxury cars?</h1>
                    <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                    <h1 className="text-[#fff1] text-9xl font-bold mt-[-6rem]">CARS</h1>
                </div>
                <div className="w-4/5 my-20 ml-[9rem]">
                    <p className="px-20">So whether you're a long-time luxury car enthusiast or you're just starting to explore the world of high-end vehicles, we invite you to explore our site and discover all that we have to offer.</p>
                    <div className='bg-[red] w-[13rem] h-[1px] mt-6 ml-[-2rem]'></div>
                </div>
                <div className='mt-28 exp backdrop-blur-xl bg-[#fff1] py-10 relative drop-shadow-lg'>
                    <div className='w-[3rem] h-[3rem] bg-[red] absolute top-[-.5rem] left-[-.5rem] drop-shadow-md'></div>
                    <div className='ml-20'>
                        <h1 className='text-3xl font-bold'>Compare Cars Side By Side</h1>
                        <p className='text-xl mt-4 mb-10'>Choose Cars To Compare, Or Check Out Our Popular Comparisons.</p>
                        <Link href='/paths/comparesion' className='text-[red] view text-xl font-semibold py-2 px-4'>start Comparison</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}