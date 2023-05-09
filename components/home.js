import { BsFillPlayFill } from 'react-icons/bs';

export default function HomePage (){
    return (
        <div className="home_page flex items-center relative">
            <div className="h-full w-2/6 flex items-center z-10">
                <div className="w-3/4 ml-[2rem]">
                    <div className="bg-[#fff] w-3/4 w-[0.1rem] h-20  mx-auto"></div>
                    <span className="relative flex h-4 w-4 mx-auto">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                    </span>
                </div>
                <div className="mr-[-20rem] mt-60">
                    <h1 className="text-6xl text-[#fff] font-semibold">CHERON</h1>
                    <h2 className="text-6xl text-[red] font-extralight">LUXER</h2>
                    <div className="bg-[#fff] w-3/4 h-[0.1rem] mt-40"></div>
                </div>
            </div>
            <div className="flex w-2/6 justify-between items-flex-end z-10 absolute bottom-0 right-0 text-xs">
                <div className="w-1/4 flex justify-center items-center text-xs">
                    <div>
                        <h3>3.4 sec</h3>
                        <h4>from 0 to 90km/h</h4>
                    </div>
                </div>
                <div className="w-1/4 flex justify-center items-center text-xs">
                    <div>
                        <h3>370 ml</h3>
                        <h4>90km/h</h4>
                    </div>
                </div>
                <div className="1/4 justify-center items-center relative">
                    <img src="play.jpg" alt="" className="w-[6rem]"/>
                    <a href="#" className="absolute top-4 left-6 bg-[red] w-[3rem] h-[3rem] rounded-full flex justify-center items-center text-4xl"><BsFillPlayFill /></a>
                </div>
            </div>
        </div>
    )
}