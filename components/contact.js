export default function Contacts () {
    return (
        <div className="py-10 md:py-20 bg-[#0004] flex">
            <div className="w-full md:w-2/6 lg:w-2/6 bg-[#000] p-12 mb-[-10rem] shadow-xl mt-20 md:mt-0 ml-28">
                <form>
                    <input type="text" name="userName" id="name" placeholder="Name" maxlength="30" required /><br />
                    <input type="email" name="email" id="email" placeholder="Email" required className="mt-8"/><br />
                    <textarea id="message" name="message" placeholder="Message" className="mt-8"></textarea><br />
                    <button className="mt-5 float-right">Hire me</button>
                </form>
            </div>
            <div>
                <div className="mx-auto w-4/6 mb-10">
                    <h1 className="text-2xl">Contact Directly</h1>
                    <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
                    <h1 className="text-[#fff2] text-8xl font-bold mt-[-4rem]">CONTACT</h1>
                </div>
                <div className="mx-auto w-2/6 text-xs">
                    <p>Kigali, Rwanda</p>
                    <p>+243 972 355 737</p>
                    <p>joelkalema63@gmail.com</p>
                </div>
           </div>
            
        </div>
    )
}