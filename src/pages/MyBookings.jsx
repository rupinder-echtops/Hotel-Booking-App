import React, { useState } from "react";
import Title from '../components/Title'
import { assets, userBookingsDummyData } from "../assets/assets";


const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData)
    return (
        <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
            <Title title='My Bookings' subTitle='Easily manage your post, current, and upcoming hotel reservation in one place. Plan your trips seamlessly with just a few click' align='left'/>
        <div className="max-w-6xl mt-8 w-full text-gray-800">
            <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
                <div className="px-2">Hotels</div>
                <div className="px-2">Date & Timings</div>
                <div className="px-2">Payment</div>
            </div>
            {bookings.map((booking)=>(
                <div key={booking._id} className="grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 py-6">
                    {/*---Hotel Details--- */}
                    <div className="flex flex-col md:flex-row">
                        <img src={booking.room.images[0]} alt="hotel-img" className="w-full md:w-44 h-32 md:h-28 rounded shadow object-cover" />
                        <div className="flex flex-col gap-1.5 mt-3 md:mt-0 md:ml-4">
                            <p className="font-playfair text-xl md:text-2xl">
                                {booking.hotel.name}
                                <span className="text-gray-600 font-normal"> ({booking.room.roomType})</span>
                            </p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                              <span>{booking.hotel.address}</span>  
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <img src={assets.guestsIcon} alt="guest-icon" className="w-4 h-4" />
                              <span>Guests: {booking.guests}</span>  
                            </div>
                            <p className="text-base font-medium">Total: ${booking.totalPrice}</p>
                        </div>
                    </div>
                     {/*---Date & Timing--- */}
                     <div className="flex flex-col gap-2 mt-4 md:mt-0">
                        <div className="flex items-center gap-2 text-sm">
                            <img src={assets.calenderIcon} alt="calendar-icon" className="w-4 h-4" />
                            <span className="font-medium">Check-in:</span>
                        </div>
                        <p className="text-gray-700">{new Date(booking.checkInDate).toLocaleDateString()}</p>
                        
                        <div className="flex items-center gap-2 text-sm mt-2">
                            <img src={assets.calenderIcon} alt="calendar-icon" className="w-4 h-4" />
                            <span className="font-medium">Check-out:</span>
                        </div>
                        <p className="text-gray-700">{new Date(booking.checkOutDate).toLocaleDateString()}</p>
                     </div>
                      {/*---Payment Status--- */}
                      <div className="flex flex-col gap-2 mt-4 md:mt-0">
                        <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                            }`}>
                                {booking.status}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600">{booking.paymentMethod}</p>
                        <p className={`text-sm font-medium ${
                            booking.isPaid ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {booking.isPaid ? 'Paid' : 'Pending Payment'}
                        </p>
                      </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default MyBookings