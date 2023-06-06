import { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { GiCarWheel } from 'react-icons/gi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import getCar from "../../components/datas/cars";
import axios from "axios";

export default function Par() {
    const [url, setUrl] = useState()

    const router = useRouter();
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
            <div className="h-[40vh] md:h-screen truncate detail_home truncate">
                <img src={car?.image[1]} alt="car image" className='w-full' />
            </div>
            <div className="absolute top-14 md:top-0 text-center flex justfy-center items-center h-[30hv] md:h-screen w-full">
                <div className="mx-auto">
                    <div className='mb-6 flex flex-col items-center'>
                        <div className='h-[.4rem] w-[8rem] liner1 mr-28 mb-2 md:mb-4 animate-pulse'></div>
                        <h2 className='text-center font-bold text-2xl md:text-6xl uppercase datail-name'>{car?.name}</h2>
                        <div className='h-[.4rem] w-[8rem] liner2 ml-28 mt-2 md:mt-4 animate-pulse'></div>
                    </div>
                    <h2 className="mb-4 text-sm md:text-xl">Get more details about {car?.name}</h2>
                    <AiOutlineArrowDown className='animate-bounce w-9 h-9 text-[red] mx-auto mt-10' />
                </div>
            </div>
            <div className="flex max-w-[25rem] md:max-w-[50rem] mx-auto rounded-2xl overflow-hidden bg-[#141314] drop-shadow-xl h-[30rem] mt-[-4rem]" data-aos="zoom-in-up">
                <div className="flex hidden md:block w-2/5"><img src={car?.image[2]} alt="car image" /></div>
                <div className="w-5/5 md:w-3/5 pl-10">
                    <div className="w-2/4 mb-10 mt-10">
                        <h1 className="text-xl md:text-2xl">{car?.name}</h1>
                        <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                        <h1 className="text-[#fff2] text-3xl md:text-6xl font-bold mt-[-3rem]">LUXURY</h1>
                    </div>
                    <p className="w-4/5 text-xs md:text-sm">{car?.detail}</p>

                    <h2 className="mb-4 mt-10">Tcheck the {car?.name}&lsquo;s official website</h2>
                    <a href={car?.link} className='text-[red]'>{car?.name}</a>

                    <div className="flex items-center mt-10 ml-64">
                        <div className="w-2/6 h-[0.05rem] liner2 mt-4 mr-2 animate-pulse"></div>
                        <GiCarWheel className="text-[red] text-4xl rotate" />
                    </div>
                </div>
            </div>
            <div className="py-32">
                <h1 className="font-bold text-3xl text-center mb-6">GALERY</h1>
                <div className="w-[8rem] h-[2px] liner1 mx-auto"></div>
                <p className="text-center tracking-[1rem] text-sm font-bold text-[red] my-2">Luxury car</p>
                <div className="w-[8rem] h-[2px] liner2 mx-auto"></div>
                <div className="gallery" data-aos="fade-up">
                    {url?.map((value) =>(
                            <div key={value.alt_description} className="img mb-4" data-aos="fade-up">
                                <img src={value.urls.small} alt='image' className="gall-image" />
                                <div className="p-2 exp backdrop-blur-md bg-[#0009] image-detail">
                                    <div className="mb-4 flex items-end justify-center">
                                        <AiOutlineHeart className="text-2xl text-[red]" />
                                        <h1 className="ml-2">{value.likes}</h1>
                                    </div>
                                    <p className="hidden md:block text-sm text-center w-4/5">{value.alt_description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
