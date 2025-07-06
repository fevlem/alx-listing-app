import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
    </div>
  );
};

export default Card;
