import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ id, title, description, imageUrl, price, reviews }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const { rating, numberOfReviews } = reviews || { rating: 0, numberOfReviews: 0 };

  return (
    <div onClick={handleClick} className="relative w-full bg-white border border-gray-200 rounded-lg shadow-md flex flex-col md:flex-row hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full h-48 rounded-t-lg md:w-64 md:h-64 md:rounded-none md:rounded-l-lg"
        src={imageUrl}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal flex-1">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 text-gray-700 dark:text-gray-400">
          {description.length > 100 ? `${description.substring(0, 200)}...` : description}
        </p>
    
        <div className="flex items-center justify-start mt-4 space-x-2 rtl:space-x-reverse">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} dark:text-gray-600`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">{rating} ({numberOfReviews})</span>
          
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-bold text-blue-900 dark:text-white">$599</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
