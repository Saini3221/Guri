import React from 'react';

function Card({ img, phoneName,price, brand }) {
  return (
    <div className='flex justify-center m-2 border-[1px]'>
      <div className='flex w-screen h-[60vh] max-sm:h-[40vh]'>
        <div className='flex items-center'>
        <img src={img} alt={phoneName}  className='w-[50vh] overflow-hidden max-sm:w-[25vh]'/>
        </div>
        <div className='flex flex-col justify-center '>
        <p className=' font-bold text-2xl max-sm:text-base'>{phoneName}</p>
        <p className=''>{price}</p>
        <p className=''>{brand}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;