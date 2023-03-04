import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import getCar from "../../components/datas/cars";

export default function Par (){
const router: NextRouter = useRouter();
    const { name } = router.query;
    const car = name ? getCar(name) : undefined;
    
    return (
        <div className="relative">
            <div className="h-screen truncate detail_home truncate">
                <img src={car?.image[1]} alt={car?.name} className='w-full'/>
            </div>
            <div className="absolute top-0 px-60 text-center flex justfy-center items-center h-screen">
                <div >
                    <h1 className="font-bold text-6xl">{car?.name}</h1>
                    <a href={car?.link} className='hover:text-[red]'>{car?.link}</a>
                </div>
            </div>
            <div className="flex w-3/5 mx-auto mt-20 rounded-2xl overflow-hidden bg-[#141314] drop-shadow-xl">
                <div className="flex w-2/5">
                    <div><img src={car?.image[2]} alt={car?.name} /></div>
                    {/* <div className="w-2/4"><img src={car?.image[3]} alt={car?.name} /></div> */}
                </div>
                <div className="w-3/5 pl-10">
                    <div className="w-2/4 mb-10 mt-10">
                        <h1 className="text-2xl">{car?.name}</h1>
                        <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                        <h1 className="text-[#fff2] text-6xl font-bold mt-[-3rem]">LUXURY</h1>
                    </div>
                    <p className="w-4/5 text-sm">{car?.detail}</p>
                    <h2 className="text-[#fff8] mt-10">Driving a luxurious</h2>
                    <div className="flex items-center mt-40 ml-40">
                        <div className="w-2/6 h-[0.05rem] bg-[red] mt-1 mr-2"></div>
                        <div className="w-[2rem] h-[2rem] mt-1 border-[0.05rem] rounded-full border-solid border-red-600"></div>
                    </div>
                </div>
            </div>
            <div className="py-32">
                <h1 className="font-bold text-3xl text-center">GALERY</h1>
                <div className="flex flex-wrap justify-between px-56">
                    {car?.galery?.map((item) => (
                        <div className="w-[32%] mt-4"><img src={item} alt={car?.name}/></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
