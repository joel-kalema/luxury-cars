import images from './datas/images/images'
import Link from 'next/link'

export default function Cars () {
    return (
        <div className="py-10 md:py-28" data-aos="fade-up">
            <div className="mx-auto w-2/6 mb-10" data-aos="fade-left">
                <h1 className="text-2xl">Witch is the No 01 Luxury cars?</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff2] text-8xl font-bold mt-[-4rem]">CARS</h1>
            </div>
            <div className="mx-auto w-4/6">
                <p className="text-sm px-20 text-center">I can help you build a product, feature or website Look through some of my work and experience! 
                    If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
                <div className='flex justify-around mx-8 my-16'>
                    {images.map((image) => (
                        <img src={image.logo} alt={image} className='h-[4rem]' />
                    ))}
                </div>
            </div>
            <div className='campareson py-28 flex justify-around'>
                <div className='ml-20'>
                    <h1 className='text-5xl font-bold'>Compare Cars Side By Side</h1>
                    <p className='text-xl mt-4 mb-10'>Choose Cars To Compare, Or Check Out Our Popular Comparisons.</p>
                    <Link href='/paths/comparesion' className='text-[red] view text-xl font-semibold py-2 px-4'>start Comparison</Link>
                </div>
                <div className='w-1/4 ml-10'>
                    <img src='/images/compareson.png' alt='' />
                </div>
            </div>
        </div>
    )
}