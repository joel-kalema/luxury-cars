import Header from '../components/header'
import HomePage from '../components/home'
import About from '../components/about'
import Cars from '../components/cars'
import News from '../components/news'
import Contacts from '../components/contact'

export default function Home() {
    return (
        <div>
            <Header />
            <HomePage />
            <About />
            <Cars />
            <News />
            <Contacts />
        </div>
    )
}
