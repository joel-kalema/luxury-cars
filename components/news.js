import newsData from './datas/news'
import { GiCarWheel } from 'react-icons/gi';
import Image from 'next/image';

export default function News() {
    return (
        <div className="py-10 md:py-52">
            <div className="mx-auto w-4/6 md:w-2/6 mb-28">
                <h1 className="text-sm md:text-2xl">News and Events</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff1] text-6xl md:text-9xl font-bold mt-[-3rem] md:mt-[-6rem]">NEWS</h1>
            </div>
            <div className="flex w-[90%] md:w-3/6 mx-auto justify-between text-xs mt-20 news-items">
                {newsData.map((news) => (
                    <div key={news.detail} className=' hover:text-[red] w-[100%] md:w-[30%] mb-4'>
                        <Image src={news.image} alt='' width={500} height={500} />
                        <p className='text-[#fff5] my-2'>{news.date}</p>
                        <p>{news.detail}</p>
                        <a className='flex  items-center'>
                            <div className='h-[0.2rem] w-[1rem] bg-[red] mr-2'></div>
                            see more
                        </a>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center mt-10'>
                <div className="w-[10rem] h-[2px] liner2"></div>
                <GiCarWheel className="text-[red] text-6xl rotate" />
                <div className="w-[10rem] h-[2px] liner1"></div>
            </div>
        </div>
    )
}