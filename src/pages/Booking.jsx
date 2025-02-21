import React, { useState } from 'react';
import { Button } from '../components/ui/button';

import "../style.css"

const Booking = () => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [classType, setClassType] = useState('Economy');
  const [passengerName, setPassengerName] = useState('');
  const [spaceCraft, setSpaceCraft] = useState('The Neubla Voyager');  
  

  const [price, setPrice] = useState(0);

  // Price based on destination and class
  const calculatePrice = () => {
    let basePrice = 10000; // Base price for a flight
    if (destination === 'Moon') basePrice += 3000;
    else if (destination === 'Mars') basePrice += 5000;
    else if (destination === 'Titan') basePrice += 7000;
    
    if (classType === 'Economy') basePrice *= 1.5;
    else if (classType === 'Business') basePrice *= 4;
    else if (classType === 'VIP Space Pod') basePrice *= 4;
    
    if(spaceCraft === 'class1') basePrice *= 1.5;
    else if(spaceCraft === 'class2') basePrice *= 2;
    else if(spaceCraft === 'class3') basePrice *= 3;
    else if(spaceCraft === 'class4') basePrice *= 4;
    

    setPrice(basePrice.toFixed(2));
  };

  return (
    <div className="bg-space min-h-screen w-full">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-center mb-6 text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white via-blue-500 to-red-500">Book Your Galactic Journey</h1>

        <div className="bg-transparant p-6 rounded-lg shadow-white border-amber-200 border-2 shadow-xl">
          <div className="space-y-4">
            {/* Step 1: Choose Destination */}
            <div>
              <label className="text-white">Destination</label>
              <select
                className="select bg-transparent select-bordered text-white w-full mt-2"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              >
                <option className="bg-transparent text-black" value="">Select Destination</option>

                <option className="bg-transparent text-black" value="Moon">Mars Colony</option>
                <option className="bg-transparent text-black" value="Moon">Lunar Resorts</option>
                <option className="bg-transparent text-black" value="Mars">Titan Submarine Adventures</option>
                <option className="bg-transparent text-black" value="Mars">Titan Submarine Adventures</option>

                <option className="bg-transparent text-black" value="Mars">Jupiter Skywalk</option>
                <option className="bg-transparent text-black" value="Moon">Asteroid Mining Expedition</option>
                <option className="bg-transparent text-black" value="Mars">Venus Sky Suites</option>
                <option className="bg-transparent text-black" value="Titan">Saturn Ring Tour</option>

                <option className="bg-transparent text-black" value="Moon">Europa Ice Caves Expedition</option>
                <option className="bg-transparent text-black" value="Moon">Mars Rally</option>
                <option className="bg-transparent text-black" value="Titan">Nebula Stargazing</option>
                <option className="bg-transparent text-black" value="Titan">Black Hole Horizon space trek</option>

              </select>
            </div>

            {/* Step 2: Select Travel Date */}
            <div>
              <label className="bg-transparent text-white">Travel Date</label>
              <input
                type="date"
                className="input input-bordered bg-transparent w-full mt-2 text-white"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
              />
            </div>

            {/* Step 3: Select Class */}
            <div>
              <label className="text-white">Class</label>
              <select
                className="select bg-transparent select-bordered text-white w-full mt-2"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
              >
                <option className='text-black' value="Economy">Economy</option>
                <option className='text-black' value="Business">Business</option>
                <option className='text-black' value="VIP Space Pod">VIP Space Pod</option>
              </select>
            </div>

            {/* Step 4: Passenger Details */}
            <div>
              <label className="text-white">Passenger Name</label>
              <input
                type="text"
                className="input input-bordered w-full mt-2 bg-transparent text-white"
                placeholder="Enter Name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
              />
            </div>

            {/* Step 5: space craft Details */}
            <div>
              <label className="text-white">Select SpaceCraft</label>
              <select
                className="select bg-transparent select-bordered text-white w-full mt-2"
                value={classType}
                onChange={(e) => setSpaceCraft(e.target.value)}
              >
                <option className='text-black' value="class1">The Neubla Voyager</option>
                <option className='text-black' value="class2">The Titan Exployer</option>
                <option className='text-black' value="class3">The Hyper Vortex</option>
                <option className='text-black' value="class4">The Nebula Glider</option>
              </select>
            </div>

            {/* Step 5: Price Calculation */}
            <div className="mt-6">
              <Button
                className="btn btn-primary text-white border-0 border-amber-100 bg-newspace hover:bg-success w-full"
                onClick={calculatePrice}
              >
                Calculate Price
              </Button>
              {price > 0 && (
                <div className="mt-4 text-white">
                  <h3 className="text-xl font-semibold">Total Price: ${price}</h3>
                </div>
              )}
            </div>

            {/* Step 6: Payment Section */}
            <div className="mt-6">
              <h2 className="text-white text-xl">Payment</h2>
              <select className="select bg-transparent text-white select-bordered w-full mt-2">
                <option className='text-black' value="credit">Credit Card</option>
                <option className='text-black' value="crypto">Cryptocurrency</option>
              </select>
            </div>

            {/* Step 7: Confirmation */}
            <div className="mt-6">
              <button
                className="btn btn-success w-full"
                disabled={!destination || !travelDate || !passengerName}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
