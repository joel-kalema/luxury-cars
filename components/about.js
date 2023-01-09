import { TbArrowNarrowRight } from 'react-icons/tb';

export default function About () {
    return (
        <div className="py-10 md:py-28">
            <div className="mx-auto w-2/6 mb-28">
                <h1 className="text-2xl">Get All Luxury Cars</h1>
                <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                <h1 className="text-[#fff2] text-8xl font-bold mt-[-4rem]">LUXURY</h1>
            </div>
            <div className="flex w-3/6 mx-auto justify-between">
                <ul>
                    <li className="my-4 hover:text-[red]">Aston Martin</li>
                    <li className="my-4 hover:text-[red]">Ferrari</li>
                    <li className="my-4 hover:text-[red]">Bugatti</li>
                    <li className="my-4 hover:text-[red]">Maserati</li>
                    <li className="my-4 hover:text-[red]">Porsche</li>
                    <li className="my-4 hover:text-[red]">Bentley</li>
                </ul>
                <div className="w-4/6">
                    <img src="about.jpg" alt="cars" />
                    <div className="flex p-4 justify-between bg-[#3F3F3F] items-center">
                        <div>
                            <h1 className='font-semibold text-sm mb-2'>Aston Martin</h1>
                            <p className="text-xs w-5/6">this page hleps you to have more detail about the cars, click the bouton to have more details</p>
                        </div>
                        <a href="" className="p-3 bg-[red] text-[#fff] w-[3rem] h-[2.5rem]"><TbArrowNarrowRight/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}