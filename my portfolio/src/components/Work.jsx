import React from 'react'

const Work = (imageUrl) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imageUrl}  />
      
    </div>
  );
};


const CardGrid = () => {
  const cardsData = [
    {
      
      imageUrl: 'https://placekitten.com/300/200',
    },
    {
      
      imageUrl: 'https://placekitten.com/301/200',
    },
    {
      
      imageUrl: 'https://placekitten.com/302/200',
    },
    {
      
      imageUrl: 'https://placekitten.com/303/200',
    },
    {
     
      imageUrl: 'https://placekitten.com/304/200',
    },
    {
      
      imageUrl: 'https://placekitten.com/305/200',
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {cardsData.map((card, index) => (
        <Work key={index} {...Work} />
      ))}
    </div>
  );
};

export default Work
