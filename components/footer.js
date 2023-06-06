import { footer } from "./datas/footer"

export default function Footer() {
    return (
        <div className="py-10 md:py-28 bg-[#000]">
            <div className="md:flex justify-around w-3/5 mx-auto hidden ">
                {footer.map((item) => (
                    <div key={item.title}>
                        <h1 className="text-[#A39C9C] font-extrabold text-xl">{item.title}</h1>
                        <div className="w-2/6 h-[0.1rem] bg-[red] mb-4 mt-2"></div>
                        <ul>
                            {item.sub.map((list) => (
                                <li className="mb-1" key={list}>{list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div>
                <div className='py-10 text-center'>
                    <p className="text-xs">© 2020 <a href="https://www.linkedin.com/in/joel-kalema/">Joel Kalema</a>, All right reserved</p>
                </div>
            </div>
        </div>
    )
}