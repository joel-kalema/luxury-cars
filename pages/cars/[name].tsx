import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import getCar from "../../components/datas/cars";

export default function Par (){
const router: NextRouter = useRouter();
    const { name } = router.query;
    const car = name ? getCar(name) : undefined;
    
    return (
        <div className="relative">
            <div className="h-screen truncate detai_home">
                <img src={car?.image[1]} alt="lambourghini"/>
            </div>
            <div className="absolute top-0 px-60 text-center flex justfy-center items-center h-screen">
                <div >
                    <h1 className="font-bold text-6xl">{car?.name}</h1>
                    <p>{car?.detail}</p>
                </div>
            </div>
        </div>
    );
}
