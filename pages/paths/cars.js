import Import from '../import';
import Home from './home';
import AllCars from './AllCars'

export default function Cars() {
    return (
        <div className='bg-[#1B1A1C]'>
            <Import.Header />
            <Home />
            <AllCars />
        </div>
    )
}