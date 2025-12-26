
import React from 'react';

const BookingWidget: React.FC<{ floating?: boolean }> = ({ floating = false }) => {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 ${floating ? 'absolute bottom-8 left-0 right-0 z-40' : 'relative -mt-12 mb-12'}`}>
      <div className="bg-white rounded-[2rem] shadow-2xl p-4 lg:p-6 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 border border-gray-100">
        
        {/* Check In */}
        <div className="flex-1">
          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-2 ml-2">Check-in</label>
          <div className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-4 cursor-pointer">
            <span className="material-symbols-outlined text-primary">calendar_month</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-ocean-dark">Oct 24, 2024</span>
              <span className="text-[10px] text-gray-500">Thursday</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-12 bg-gray-100 self-center mt-6"></div>

        {/* Check Out */}
        <div className="flex-1">
          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-2 ml-2">Check-out</label>
          <div className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-4 cursor-pointer">
            <span className="material-symbols-outlined text-primary">calendar_today</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-ocean-dark">Oct 27, 2024</span>
              <span className="text-[10px] text-gray-500">Sunday</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-12 bg-gray-100 self-center mt-6"></div>

        {/* Guests */}
        <div className="flex-1">
          <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-2 ml-2">Guests</label>
          <div className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-4 cursor-pointer">
            <span className="material-symbols-outlined text-primary">group</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-ocean-dark">2 Adults</span>
              <span className="text-[10px] text-gray-500">0 Children</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="lg:pt-6">
          <button className="w-full lg:w-auto min-w-[180px] bg-primary hover:bg-blue-600 text-white font-bold h-16 rounded-2xl shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2 group">
            <span>Check Availability</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingWidget;
