import { motion } from 'framer-motion';

// one
import marsImg from "../assets/destination/marsimg.jpeg"
import moonImg from "../assets/destination/moonimg.jpeg"
import titanImg from "../assets/destination/titanimg.jpg"
import starImg from "../assets/destination/starsimg.jpg"

// two
import jupImg from "../assets/destination/jup.jpg"
import astImg from "../assets/destination/asteroid.jpg"
import venusHotel from "../assets/destination/venusHotel.jpg"
import saturnRing from "../assets/destination/saturnRing.jpg"

// three
import Europaimg from "../assets/destination/Europa.jpg"
import marsRally from "../assets/destination/marsRally.jpeg"
import nebula from "../assets/destination/nebula.jpg"
import blackholeImg from "../assets/destination/blackhole.jpg"


import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';



const destinations = [
  { name: "Mars Colony", description: "Experience life on Mars.", image: marsImg },
  { name: "Lunar Resorts", description: "Relax in luxury on the Moon.", image: moonImg },
  { name: "Titan Submarine Adventures", description: "Explore the oceans of Titan.", image: titanImg },
  { name: "Space Cruises", description: "Cruise through the stars.", image: starImg },
  
  { name: "Jupiter Skywalk", description: "Walk through the clouds of Jupiter and explore the gas giant's atmosphere.", image: jupImg },
  { name: "Asteroid Mining Expedition", description: "Unearth precious resources from asteroids in the outer solar system.", image: astImg },
  { name: "Venus Sky Suites", description: "Stay in floating luxury suites in the skies of Venus.", image: venusHotel },
  { name: "Saturn Ring Tour", description: "Glide through Saturn's stunning rings on a high-tech hovercraft.", image: saturnRing },
  
  { name: "Europa Ice Caves Expedition", description: "Venture beneath Europa's icy surface to discover alien life.", image: Europaimg },
  { name: "Mars Rally", description: "Take part in a thrilling race across the Martian plains.", image: marsRally },
  { name: "Nebula Stargazing", description: "Travel to the heart of a nebula and witness stellar formations.", image: nebula },
  { name: "Black Hole Horizon space trek", description: "Embark on a thrilling journey to the edge of a black hole and witness the mysteries of spacetime.", image: blackholeImg },
];

const Destinations = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/booking')
    }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {destinations.map((destination, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="card w-full shadow-white bg-tranparant shadow-xl hover:shadow-2xl rounded-lg"
        >
          <figure>
            <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-t-lg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-blue-500 ">{destination.name}</h2>
            <p className='text-white'>{destination.description}</p>
            <div className="card-actions justify-end">
              <Button onClick={handleClick} className=" border-none btn btn-primary hover:cursor-pointer">Book Now</Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Destinations;
