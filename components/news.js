import newsData from './datas/news'
import { MdOutlineModeComment } from 'react-icons/md';

export default function News () {
    return (
        <div className="py-10 md:py-28">
            <div className="mx-auto w-2/6 mb-10">
                <h1 className="text-2xl">News and Events</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff2] text-8xl font-bold mt-[-4rem]">NEWS</h1>
            </div>
            <div className="flex w-3/6 mx-auto justify-between text-xs mt-20">
                {newsData.map((news) => (
                    <div key={news.detail} className=' hover:text-[red] w-[30%]'>
                        <img src={news.image} alt='' />
                        <p className='text-[#fff5] my-2'>20 jun 2021 </p>
                        <p>{news.detail}</p>
                        <a className='flex  items-center'>
                            <div className='h-[0.2rem] w-[1rem] bg-[red] mr-2'></div>
                            see more
                        </a>
                    </div>
                ))}
            </div>
            <div className="mt-32 w-[20rem] relative h-[20rem] mx-auto p-10 border-solid border-2 border-wight-500 rounded-full flex justify-center items-center">
                <MdOutlineModeComment 
                className='text-7xl text-[red] absolute top-[-1rem] left-[10%] bg-[#1B1A1C] '
                />
                <h1 className="text-3xl">It&lsquo;s not just a car, It&lsquo;s someone else&lsquo;s dream
                <span className="text-[red]">.</span></h1>
           </div>
        </div>
    )
}