export default function Header (){
    return (
        <div className="flex justify-between fixed w-5/6 exp backdrop-blur-md p-4 left-24 bg-[#fff1]">
            <div>LOGO</div>
            <ul className="flex w-2/6 justify-between text-sm">
                <li className='cursor-pointer hover:text-[red]'>Home</li>
                <li className='cursor-pointer hover:text-[red]'>cars</li>
                <li className='cursor-pointer hover:text-[red]'>About</li>
                <li className='cursor-pointer hover:text-[red]'>Infos</li>
                <li className='cursor-pointer hover:text-[red]'>Contacts</li>
            </ul>
        </div>
    )
}