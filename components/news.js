import newsData from './datas/news'
import { MdOutlineModeComment } from 'react-icons/md';

export default function News() {
    return (
        <div className="py-10 md:py-52">
            <div className="mx-auto w-2/6 mb-10">
                <h1 className="text-2xl">News and Events</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff1] text-9xl font-bold mt-[-6rem]">NEWS</h1>
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
            <div className='flex justify-center items-center px-32 mt-32'>
                <div className="mt-32 mr-[-3rem] w-[15rem] relative h-[15rem] p-10 border-solid border-2 border-wight-500 rounded-full flex justify-center items-center">
                    <MdOutlineModeComment
                        className='text-7xl text-[red] absolute top-[-1rem] left-[10%] bg-[#1B1A1C] '
                    />
                    <h1 className="text-xl">It&lsquo;s not just a car, It&lsquo;s someone else&lsquo;s dream
                        <span className="text-[red]">.</span></h1>
                </div>
                <div className='w-3/5 exp backdrop-blur-[.5rem] bg-[#fff1] p-10 mt-6 shadow'>
                    <p>You find yourself in a large car dealership, surrounded by rows of shiny, expensive vehicles. You're there because you've been dreaming of owning a luxury car for as long as you can remember, and today you're finally going to make that dream a reality.</p>
                </div>
            </div>
        </div>
    )
}