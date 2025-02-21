import React, { useState } from 'react';
import { Button } from '../components/ui/button';

const Booking = () => {
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [classType, setClassType] = useState('Economy');
  const [passengerName, setPassengerName] = useState('');
  const [price, setPrice] = useState(0);

  // Price based on destination and class
  const calculatePrice = () => {
    let basePrice = 1000; // Base price for a flight
    if (destination === 'Mars') basePrice += 500;
    else if (destination === 'Moon') basePrice += 300;
    if (classType === 'Business') basePrice *= 1.5;
    else if (classType === 'VIP Space Pod') basePrice *= 2;

    setPrice(basePrice);
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
                
                <option className="bg-transparent text-black" value="Mars">Mars Colony</option>
                <option className="bg-transparent text-black" value="Moon">Lunar Resorts</option>
                <option className="bg-transparent text-black" value="Titan">Titan Submarine Adventures</option>
                <option className="bg-transparent text-black" value="Titan">Titan Submarine Adventures</option>
                
                <option className="bg-transparent text-black" value="Mars">Jupiter Skywalk</option>
                <option className="bg-transparent text-black" value="Moon">Asteroid Mining Expedition</option>
                <option className="bg-transparent text-black" value="Titan">Venus Sky Suites</option>
                <option className="bg-transparent text-black" value="Titan">Saturn Ring Tour</option>
                
                <option className="bg-transparent text-black" value="Mars">Europa Ice Caves Expedition</option>
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

            {/* Step 5: Price Calculation */}
            <div className="mt-6">
              <Button
                className="btn btn-primary text-white border-0 border-amber-100 bg-space2 hover:bg-success w-full"
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
