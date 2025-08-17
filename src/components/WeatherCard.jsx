import React from 'react';
import SearchBar from './SearchBar';

function WeatherCard() {
  return (
    <div className='h-screen w-screen flex flex-col justify-between bg-gray-100'>
        <div className='relative flex-grow'>
            <div 
            className='absolute inset-0 bg-cover bg-center'
             style={{ backgroundImage: "url('/assets/weather4.jpg')" }}
        />
        <div className='absolute inset-0 bg-black/50' />

        <div className='relative z0-10 flex justify-center items-center h-full'>
            <div className='bg-gray-700/70 p-6 rounded-lg shadow-lg'>
            <SearchBar />
            </div>
            </div>
        </div>

        
    </div>
  );
}

export default WeatherCard;
