export default function HomePage (){
    return (
        <div className="home_page flex items-center relative">
            <div className="bg-[#fff1] h-full w-2/6 flex items-center z-10">
                <div className="w-3/4">
                    <div className="bg-[#fff] w-3/4 w-[0.1rem] h-20  mx-auto"></div>
                </div>
                <div className="mr-[-20rem] mt-60">
                    <h1 className="text-6xl text-[#fff]">CHERON</h1>
                    <h2 className="text-6xl text-[red]">LUXER</h2>
                    <div className="bg-[#fff] w-3/4 h-[0.1rem] mt-40"></div>
                </div>
            </div>
            <div className="flex w-2/6 justify-between items-flex-end z-10 absolute bottom-0 right-0 text-xs">
                <div className="1/4 flex justify-center items-center">
                    <div>
                        <h3>3.4 sec</h3>
                        <h4>from 0 to 90km/h</h4>
                    </div>
                </div>
                <div className="1/4 flex justify-center items-center">
                    <div>
                        <h3>370 ml</h3>
                        <h4>90km/h</h4>
                    </div>
                </div>
                <div className="1/4 justify-center items-center relative">
                    <img src="play.jpg" alt="" className="w-[6rem]"/>
                    <a href="#" className="absolute top-3 bg-[red]">play</a>
                </div>
            </div>
        </div>
    )
}