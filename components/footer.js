import { footer } from "./datas/footer"

export default function Footer () {
    return (
        <div className="py-10 md:py-28 bg-[#000]">
            <div className="flex justify-around w-3/5 mx-auto">
                {footer.map((item) => (
                    <div>
                        <h1 className="text-[#A39C9C] font-extrabold text-xl">{item.title}</h1>
                        <div className="w-2/6 h-[0.1rem] bg-[red] mb-4 mt-2"></div>
                        <ul>
                            {item.sub.map((list) => (
                                <li className="mb-1">{list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}