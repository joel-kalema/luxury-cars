import { SiFerrari,SiLamborghini } from 'react-icons/si';

export const  CarsData = [
    {
        id: 1,
        name: 'lamborghini',
        image: ["/images/cars/lamborghini.jpg", "/images/home/lambourghi.jpg", "/images/galery/lamborghini01.jpg", "/images/galery/lamborghini02.jpg"],
        extract:'There are various elements such as automatic climate control, premium leather materials...',
        detail: 'There are various elements such as automatic climate control, premium leather materials, power seating, air filtration, power features, performance speakers, and LCD monitors. On the exterior, you will find things like light tinted glass, auto dimming side mirrors, LED brake lights, and specialty headlights.',
        link:'https://www.lamborghini.com/en-en',
        logo: <SiLamborghini />   
    },
    {
        id: 2,
        name: 'aston Martin',
        image: ["/images/cars/Aston-Martin.jpg", "/images/home/aston-martin.jpg"],
        extract: 'Most Aston Martins have a top speed beyond 200 mph. Their speedometers reach to 220...',
        detail: 'Most Aston Martins have a top speed beyond 200 mph. Their speedometers reach to 220 mph or even 240 mph and most have an estimated top speed of beyond 200mph, with the exception of the V8 Vantage models which have a top speed of 190 mph',
        link:'https://www.astonmartin.com/en/',

    },
    {
        id: 3,
        name: 'ferrari',
        image: ["/images/cars/Ferrari.jpg", "/images/home/ferrari.jpg"],
        extract:'As such, one of the major items of what makes a Ferrari special is their utilization of race...',
        detail: 'As such, one of the major items of what makes a Ferrari special is their utilization of race technology in their street cars. Often, in the old days this was merely using race engines as the platform for street car motors, whether it was the vintage V12s or the turbo era F1 cars of the 1980s.',
        link:'https://www.ferrari.com/en-RW',
        logo: <SiFerrari /> 
    },
    {
        id: 4,
        name: 'bugatti',
        image: ["/images/cars/bugatti.jpg", "/images/home/bugatti.jpg"],
        extract:'The CHIRON is the fastest, most powerful, and exclusive production super sports car...',
        detail: "The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI's history. Its sophisticated design, innovative technology, and iconic, performance-oriented form make it a unique masterpiece of art, form and technique, that pushes boundaries beyond imagination.",
        link:'https://www.bugatti.com/',
        
    },
    {
        id: 5,
        name: 'maserati',
        image: ["/images/cars/maseratti.jpg", "/images/home/maserati.jpg"],
        extract:'Maserati, in full Maserati SpA, former name Officine Alfieri Maserati SA, Italian au...',
        detail: 'Maserati, in full Maserati SpA, former name Officine Alfieri Maserati SA, Italian automobile manufacturer known for racing, sports, and GT (Grand Touring) cars. It is a subsidiary of Stellantis NV and is based in Modena, Italy.',
        link:'https://www.maserati.com/global/en',
        
    },
    {
        id: 6,
        name: 'porsche',
        image: ["/images/cars/Porsche.jpg", "/images/home/porsche.jpg"],
        extract:'Most obvious is its rear-engine layout. Putting the motor in the back was a decision ma...',
        detail: "Most obvious is its rear-engine layout. Putting the motor in the back was a decision made by Porsche so they could advertise their new sports car as one that “oversteers.” Back in the early '60s, your average family car and even sports cars were prone to understeer and overall atrocious handling.",
        link:'https://www.porsche.com/middle-east/',
        
    },
    {
        id: 7,
        name: 'bentley',
        image: ["/images/cars/Bentley.jpg", "/images/home/bentley.jpg"],
        extract:'Bentley makes ultra-luxury cars with prices that can reach millions of dollars. If you wa...',
        detail: 'Bentley makes ultra-luxury cars with prices that can reach millions of dollars. If you want a massive 5,000 or 6,000-pound vehicle with a 12-cylinder engine that can top 200 miles per hour and accelerate as fast as many Porsches, Bentley might be the car for you.',
        link:'https://www.bentleymotors.com/en.html',
        
    } 
]

const getCar = (name) => {
    const formattedName = name.split('_').join(' ');
    const car = CarsData.find(car => car.name === formattedName);
    return car;
};

export default getCar;