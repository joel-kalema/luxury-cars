import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { GiCarWheel } from 'react-icons/gi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import getCar from "../../components/datas/cars";
import axios from "axios";

export default function Par() {
    const [url, setUrl] = useState()

    const router: NextRouter = useRouter();
    const { name } = router.query;
    const car = name ? getCar(name) : undefined;

    const key = 'n423Wu-So2B3sFhiA1N5VMb6KaPcGWrg7BD0Tx-DxCo';

    const getImage = () => {
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${car?.name}&client_id=${key}`)
            .then((response) => {
                setUrl(response.data.results)
            })
    }

    getImage();

    return (
        <div className="relative">
            <div className="h-screen truncate detail_home truncate">
                <img src={car?.image[1]} alt={car?.name} className='w-full' />
            </div>
            <div className="absolute top-0 text-center flex justfy-center items-center h-screen w-full">
                <div className="mx-auto">
                    <h1 className="font-bold text-6xl mb-10">{car?.name}</h1>
                    <h2 className="mb-4">Tcheck the {car?.name}&lsquo;s official website</h2>
                    <a href={car?.link} className='text-[red]'>{car?.link}</a>
                    <AiOutlineArrowDown className='animate-bounce w-9 h-9 text-[red] mx-auto mt-14' />
                </div>
            </div>
            <div className="flex max-w-[50rem] mx-auto mt-20 rounded-2xl overflow-hidden bg-[#141314] drop-shadow-xl h-[30rem]">
                <div className="flex w-2/5"><img src={car?.image[2]} alt={car?.name} /></div>
                <div className="w-3/5 pl-10">
                    <div className="w-2/4 mb-10 mt-10">
                        <h1 className="text-2xl">{car?.name}</h1>
                        <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                        <h1 className="text-[#fff2] text-6xl font-bold mt-[-3rem]">LUXURY</h1>
                    </div>
                    <p className="w-4/5 text-sm">{car?.detail}</p>
                    <h2 className="text-[#fff8] mt-10">Driving a luxurious</h2>

                    <div className="flex items-center mt-16 ml-64">
                        <div className="w-2/6 h-[0.05rem] bg-[red] mt-4 mr-2"></div>
                        <GiCarWheel className="text-[red] text-4xl rotate" />
                    </div>
                </div>
            </div>
            <div className="py-32">
                <h1 className="font-bold text-3xl text-center">GALERY</h1>
                <div className="gallery">
                    {url?.map((value) => (
                        <div>
                            <img src={value.urls.small} alt='image' className="gall-image" />
                            <p className="mb-6 p-2 exp backdrop-blur-md bg-[#0004] text-xs">{value.alt_description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
