import { GiCarWheel } from 'react-icons/gi';

export default function Home() {
    return (
        <div className="cars flex justify-center items-center text-center">
            <div className="w-4/5 md:w-2/4">
                <h1 className="font-bold text-4xl mb-6">Discover the top luxury cars</h1>
                <h2 className="text-2xl mb-4">A Great Experience Is Waiting Four You</h2>
                <p className="text-sm">For those who love adrenaline, renting a supercar is not a question of appearance, but of passion. Don&lsquo;t limit your dream, experience the thrill of driving the best sport cars on the market with Montecarlo Luxury Cars.</p>
                <div className='flex items-center justify-center mt-10'>
                    <div className="w-[10rem] h-[4px] liner2"></div>
                    <GiCarWheel className="text-[red] text-6xl rotate" />
                    <div className="w-[10rem] h-[4px] liner1"></div>
                </div>
            </div>
        </div>
    )
}