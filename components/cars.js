import { useEffect } from 'react';
import Link from 'next/link'
import AOS from 'aos';

export default function Cars() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div id="comparison" className="py-40 md:py-28 relative flex flex-col md:flex-row">
            <div className='mb-[-15rem] md:top-[0rem] w-2/5 z-0' data-aos="fade-up" data-aos-duration="1000">
                <img src='/car.jpg' alt='car' className='z-0' />
            </div>
            <div className='z-40 w-[90%] md:w-3/5 ml-[1.5rem] md:ml-[-10rem]'>
                <div className="mx-auto w-4/6 md:w-2/6 mb-28">
                    <h1 className="text-sm md:text-2xl">Witch is the No 01?</h1>
                    <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                    <h1 className="text-[#fff1] text-6xl md:text-9xl font-bold mt-[-3rem] md:mt-[-6rem]">CARS</h1>
                </div>
                <div className="w-5/5 md:w-4/5 my-20 ml-16 md:ml-[9rem]">
                    <p className="px-2 md:px-20" data-aos="fade-up" data-aos-duration="1000">So whether you&apos;re a long-time luxury car enthusiast or you&apos;re just starting to explore the world of high-end vehicles, we invite you to explore our site and discover all that we have to offer.</p>
                    <div className="flex items-center mt-4">
                        <div className="w-2/6 h-[0.07rem] mt-1 mr-2 liner2"></div>
                        <div className="w-[1rem] h-[1rem] mt-1 border-[0.05rem] rounded-full border-solid border-red-600"></div>
                        <p className="text-xs text-[red] ml-4">Experience</p>
                    </div>
                </div>
                <div className='mt-28 exp backdrop-blur-xl bg-[#fff1] py-10 relative shadow' data-aos="fade-up" data-aos-duration="1000">
                    <div className='w-[3rem] h-[3rem] bg-[red] absolute top-[-.5rem] left-[-.5rem] drop-shadow-md'></div>
                    <div className='ml-20'>
                        <h1 className='text-xl md:text-3xl font-bold'>Compare Cars Side By Side</h1>
                        <p className='text-xs md:text-xl mt-4 mb-10'>Choose Cars To Compare, Or Check Out Our Popular Comparisons.</p>
                        <Link href='/paths/comparesion' className='text-[red] view text-xl font-semibold py-2 px-4'>start Comparison</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}