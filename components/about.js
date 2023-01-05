export default function About () {
    return (
        <div>
            <div className="mx-auto w-2/6 py-10 md:py-28">
                <h1 className="text-2xl">Get All Luxury Cars</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red]"></div>
                <h1 className="text-[#fff3] text-8xl font-bold mt-[-4rem]">LUXURY</h1>
            </div>
            <div>
                <ul>
                    <li>Aston Martir</li>
                    <li>Ferrari</li>
                    <li>Bugatti</li>
                    <li>Maserati</li>
                    <li>Porsche</li>
                    <li>Bentley</li>
                </ul>
                <div className="w-2/6">
                    <img src="about.jpg" alt="cars" />
                    <div>
                        <p>detail</p>
                        <a href="">see detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}