import { GiCityCar } from 'react-icons/gi';

export default function HomePage (){
    return (
        <div className="home_page flex items-center relative">
            <div className="h-full w-2/6 flex items-center z-10">
                <div className="w-2/4 md:w-3/4 ml-[2rem]">
                    <div className="bg-[#fff] w-3/4 w-[0.1rem] h-20  mx-auto"></div>
                    <span className="relative flex h-4 w-4 mx-auto">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                    </span>
                </div>
                <div className="mr-[-20rem] pt-52">
                    <h1 className="text-xl md:text-3xl text-[#fff] font-semibold">Explore Our World of</h1>
                    <h2 className="text-4xl md:text-6xl text-[red] font-extralight">Luxury Cars</h2>
                    <div className="bg-[#fff] w-3/4 h-[0.1rem] mt-40"></div>
                </div>
            </div>
            <div className="flex w-2/6 justify-between items-flex-end z-10 absolute bottom-14 md:bottom-0 right-[4rem] md:right-0 text-xs">
                <div className="w-1/4 flex justify-center items-center text-xs">
                    <div className='border border-[red] p-2 md:p-6'>
                        <h3 className='text-3xl text-[red]'>3.4<span className='text-sm'>sec</span></h3>
                        <h1>from 0 to 90km/h</h1>
                    </div>
                </div>
                <div className="w-1/4 flex justify-center items-center text-xs">
                    <div>
                        <h3 className='text-3xl'><GiCityCar /></h3>
                        <h4>90km/h</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}