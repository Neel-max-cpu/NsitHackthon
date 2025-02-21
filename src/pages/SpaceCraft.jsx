import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

import space1 from "../assets/spacecraft/space1.jpg";
import space4 from "../assets/spacecraft/space4.jpg";
import space3 from "../assets/spacecraft/space3.jpg";
import space2 from "../assets/spacecraft/space2.jpg";
import Accordion from '../components/Accordion';


const spacecrafts = [
  { name: "The Neubla Voyager", description: "Our most affordable carrier! Journey through the stars with comfort and convenience.", image: space1 },
  { name: "The Titan Exployer", description: "A majestic, state-of-the-art spacecraft designed for long, luxurious journeys across the cosmos. Experience the beauty of space with spacious interiors, advanced amenities, and stunning views of Titan and beyond.", image: space4 },
  { name: "The Hyper Vortex", description: "The fastest spacecraft in our fleet! Zip across the galaxy at unimaginable speeds and explore distant worlds in record time.", image: space3 },
  {
    name: "The Nebula Glider",
    description: "A sleek, futuristic spacecraft designed for those who seek both speed and elegance. Glide through nebulae and star systems with cutting-edge technology and breathtaking views.",
    image: space2
  }
];


const SpaceCraft = () => {
  return (
    <div className='bg-space w-full min-h-screen p-12 flex-col items-center justify-center space-y-20'>
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {spacecrafts.map((spacecraft, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="card w-full shadow-white bg-tranparant shadow-xl hover:shadow-2xl rounded-lg"
          >
            <figure>
              <img src={spacecraft.image} alt={spacecraft.name} className="w-full h-48 object-cover rounded-t-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-blue-500 ">{spacecraft.name}</h2>
              <p className='text-white'>{spacecraft.description}</p>
            </div>
          </motion.div>
        ))}
      </div>      
      
        <Accordion />      
      


    </div>
  )
}

export default SpaceCraft
