import React from 'react';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-48 h-48">
        <div className="absolute w-0 h-0 border-b-24 border-transparent border-l-24 border-r-24 z-10"></div>
        <div className="absolute w-48 h-48 border-transparent z-20"></div>
      </div>
    </div>
  );
};

export default HomePage;
