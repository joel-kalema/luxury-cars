import HomePage from '../components/home';
import About from '../components/about';
import Cars from '../components/cars';
import News from '../components/news';
import Contacts from '../components/contact';
import Caracteristic from '../components/caracteristic';

export default function Home() {
    return (
        <div>
            <HomePage />
            <Caracteristic />
            <About />
            <Cars />
            <News />
            <Contacts />
        </div>
    )
}
