import { useEffect } from "react";
import AOS from "aos";
export default function Text() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='relative flex mb-52'>
            <div className="w-3/6 py-16 px-5 my-20 mx-auto flex relative z-50 exp backdrop-blur-xl bg-[rgba(0, 0, 0, 0.060)] shadow" data-aos="fade-up" data-aos-duration="1000">
                <h1 className=" absolute rotate-90 text-[red] text-3xl top-[17rem] font-semibold left-[-6rem]">The most luxurious vehicles</h1>
                <div className="ml-40 w-4/6">
                    <div>
                        <p className="mb-6 text-[0.9rem]">Welcome to our website dedicated to luxury cars! We are passionate about all things high-end and our goal is to provide you with the latest news, reviews, and information on the most luxurious vehicles on the market.</p>
                        <p className="mb-6 text-[0.9rem]">Our site is designed to be the ultimate resource for luxury car enthusiasts. Whether you're interested in the latest models from top brands like Mercedes-Benz, BMW, or Audi, or you're looking for tips on how to care for your luxury car, we've got you covered.</p>
                        <p className="mb-6 text-[0.9rem]">We offer in-depth reviews of the newest luxury cars, including detailed information on their features, performance, and price. You'll also find information on the latest trends in luxury car design and technology, as well as news on upcoming models and concept cars.</p>
                        <p className="mb-6 text-[0.9rem]">If you're in the market for a luxury car, we can help you make an informed decision. Our buying guides provide information on everything from the best luxury sedans to the top SUVs and sports cars. We also offer tips on how to finance your luxury car and how to get the best deal when you're ready to buy.</p>
                        <div className="flex items-center" data-aos="fade-right">
                            <div className="w-1/6 h-[0.05rem] bg-[red] mt-1 mr-2"></div>
                            <div className="w-[1rem] h-[1rem] mt-1 border-[0.05rem] rounded-full border-solid border-red-600"></div>
                            <p className="text-xs text-[red] ml-4">The most luxurious vehicles</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[25rem] absolute" data-aos="fade-up" data-aos-duration="1000">
                <img src="./car1.jpg" alt="" />
            </div>
            <div className="w-[25rem] absolute right-0 bottom-0" data-aos="fade-up" data-aos-duration="1000">
                <img src="./car2.jpg" alt="" />
            </div>
        </div>
    )
}