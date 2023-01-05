export default function About () {
    return (
        <div>
            <div className="mx-auto w-2/6 py-10 md:py-28">
                <h1 className="text-2xl">Get All Luxury Cars</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red]"></div>
                <h1 className="text-[#fff3] text-8xl font-bold mt-[-4rem]">LUXURY</h1>
            </div>
            <div className="flex w-3/6 mx-auto justify-between">
                <ul>
                    <li className="my-4">Aston Martir</li>
                    <li className="my-4">Ferrari</li>
                    <li className="my-4">Bugatti</li>
                    <li className="my-4">Maserati</li>
                    <li className="my-4">Porsche</li>
                    <li className="my-4">Bentley</li>
                </ul>
                <div className="w-4/6">
                    <img src="about.jpg" alt="cars" />
                    <div className="flex p-4 justify-between bg-[#fff2]">
                        <p className="text-xs w-5/6">this page hleps you to have more detail about the cars, click the bouton to have more details</p>
                        <a href="" className="p-3 bg-[red] text-[#fff] mb-[-5rem] mt-3 h-[3rem]">see</a>
                    </div>
                </div>
            </div>
        </div>
    )
}