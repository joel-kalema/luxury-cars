import newsData from './datas/news'

export default function News () {
    return (
        <div className="py-10 md:py-28">
            <div className="mx-auto w-2/6 mb-10">
                <h1 className="text-2xl">News and Events</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff2] text-8xl font-bold mt-[-4rem]">NEWS</h1>
            </div>
            <div className="flex w-3/6 mx-auto justify-between text-xs">
                {newsData.map((news) => (
                    <div className=' hover:text-[red] w-[30%]'>
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
        </div>
    )
}