
import React from 'react';
import { Room } from '../types';

interface Props {
  room: Room;
}

const RoomCard: React.FC<Props> = ({ room }) => {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
          {room.type}
        </div>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-ocean-dark group-hover:text-primary transition-colors">{room.name}</h3>
          <span className="text-primary font-bold">{room.price.split(' ')[1]}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {room.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {room.features.map(f => (
            <span key={f} className="bg-gray-50 text-[11px] font-medium text-gray-600 px-3 py-1 rounded-lg">
              {f}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-50">
          <button className="text-sm font-bold text-ocean-dark hover:text-primary transition-colors flex items-center gap-1 group/btn">
            View Details
            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">chevron_right</span>
          </button>
          <button className="bg-ocean-dark text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-primary transition-all">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
