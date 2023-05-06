import { useEffect } from "react";
import AOS from "aos";
export default function Text() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='relative flex'>
            <div className="w-1/5" data-aos="fade-up" data-aos-duration="1000">
                <img src="./RR.jpg" alt="" />
            </div>

            <div className="w-3/5 px-10 flex relative">
                <h1 className=" absolute rotate-90 text-[red] text-3xl top-[12rem] font-semibold left-[-6rem] h-20">The most luxurious vehicles</h1>
                <div className="ml-40 w-3/5">
                    <div>
                        <p className="mb-6 text-[0.9rem]">Welcome to our website dedicated to luxury cars! We are passionate about all things high-end and our goal is to provide you with the latest news, reviews, and information on the most luxurious vehicles on the market.</p>
                        <p className="mb-6 text-[0.9rem]">Our site is designed to be the ultimate resource for luxury car enthusiasts. Whether you're interested in the latest models from top brands like Mercedes-Benz, BMW, or Audi, or you're looking for tips on how to care for your luxury car, we've got you covered.</p>
                        <p className="mb-6 text-[0.9rem]">We offer in-depth reviews of the newest luxury cars, including detailed information on their features, performance, and price. You'll also find information on the latest trends in luxury car design and technology, as well as news on upcoming models and concept cars.</p>
                        <p className="mb-6 text-[0.9rem]">If you're in the market for a luxury car, we can help you make an informed decision. Our buying guides provide information on everything from the best luxury sedans to the top SUVs and sports cars. We also offer tips on how to finance your luxury car and how to get the best deal when you're ready to buy.</p>
                        <div className="flex items-center mb-52">
                            <div className="w-1/6 h-[0.05rem] bg-[red] mt-1 mr-2"></div>
                            <div className="w-[1rem] h-[1rem] mt-1 border-[0.05rem] rounded-full border-solid border-red-600"></div>
                            <p className="text-xs text-[red] ml-4">The most luxurious vehicles</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/5 mt-56" data-aos="fade-up" data-aos-duration="1000">
                <img src="./benz.jpg" alt="" />
            </div>
        </div>
    )
}