export default function HomePage (){
    return (
        <div className="home_page flex items-center">
            <div className="bg-[#fff1] h-full w-2/6 flex items-center">
                <div className="w-3/4">
                    <div className="bg-[#fff] w-3/4 w-[0.1rem] h-20  mx-auto"></div>
                </div>
                <div className="mr-[-20rem] mt-60">
                    <h1 className="text-6xl text-[#fff]">CHERON</h1>
                    <h2 className="text-6xl text-[red]">LUXER</h2>
                    <div className="bg-[#fff] w-3/4 h-[0.1rem] mt-40"></div>
                </div>
            </div>
            <div className="flex w-4/6 justify-between">
                <div className="1/4 justify-center items-center">hello</div>
                <div className="1/4 justify-center items-center">hello</div>
                <div className="1/4 justify-center items-center">hello</div>
                <div className="1/4 justify-center items-center">hello</div>
            </div>
        </div>
    )
}