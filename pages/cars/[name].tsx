import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import getCar from "../../components/datas/cars";

export default function Par (){
const router: NextRouter = useRouter();
    const { name } = router.query;
    const car = name ? getCar(name) : undefined;
    
    return (
        <div>
            <img src={car?.image[0]} alt="cars" />
        </div>
    );
}
