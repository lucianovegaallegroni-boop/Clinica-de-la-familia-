
import React, { useState } from 'react';
import { DAYS, HOURS, MOCK_APPOINTMENTS } from '../constants';
import { ViewType } from '../types';
import AppointmentCard from './AppointmentCard';

const Calendar: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('Semana');

  return (
    <main className="flex-1 flex flex-col h-full bg-white overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-[#f0f2f4]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-[#111418]">Octubre 2023</h1>
          <p className="text-secondary text-sm font-semibold">Semana 42</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-[#f0f2f4] p-1 rounded-xl flex">
            {(['Día', 'Semana', 'Mes'] as ViewType[]).map((view) => (
              <button
                key={view}
                onClick={() => setCurrentView(view)}
                className={`px-5 py-1.5 rounded-lg text-sm transition-all ${
                  currentView === view 
                  ? 'bg-white shadow-sm text-[#111418] font-bold' 
                  : 'text-secondary font-semibold hover:text-[#111418]'
                }`}
              >
                {view}
              </button>
            ))}
          </div>

          <div className="h-8 w-px bg-gray-200 mx-1"></div>

          <div className="flex items-center gap-2">
            <button className="h-10 px-5 bg-[#f0f2f4] text-[#111418] text-sm font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Hoy
            </button>
            <div className="flex gap-1">
              <button className="size-10 flex items-center justify-center rounded-lg hover:bg-[#f0f2f4] text-[#111418] transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-10 flex items-center justify-center rounded-lg hover:bg-[#f0f2f4] text-[#111418] transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar View Container */}
      <div className="flex-1 overflow-auto bg-white relative flex flex-col no-scrollbar">
        {/* Days Header */}
        <div className="grid grid-cols-[60px_repeat(7,_1fr)] border-b border-[#f0f2f4] sticky top-0 bg-white z-20 shadow-sm">
          <div className="p-4 border-r border-[#f0f2f4]"></div>
          {DAYS.map((day, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center p-4 border-r border-[#f0f2f4] last:border-r-0 ${day.weekend ? 'bg-[#f8f9fa]' : ''}`}
            >
              <span className={`text-[10px] font-black uppercase mb-2 ${day.current ? 'text-primary' : 'text-secondary'}`}>
                {day.label}
              </span>
              <span className={`text-xl font-bold size-9 flex items-center justify-center rounded-full transition-all ${
                day.current ? 'bg-primary text-white shadow-md' : 'text-[#111418]'
              } ${day.weekend && !day.current ? 'text-gray-400' : ''}`}>
                {day.date}
              </span>
            </div>
          ))}
        </div>

        {/* Grid Body */}
        <div className="grid grid-cols-[60px_repeat(7,_1fr)] relative min-w-[900px]">
          {/* Time column */}
          <div className="flex flex-col">
            {HOURS.map((hour) => (
              <div key={hour} className="h-20 border-b border-r border-[#f0f2f4] pr-3 pt-1 text-right">
                <span className="text-[11px] font-bold text-secondary -mt-2.5 block">{hour}</span>
              </div>
            ))}
          </div>

          {/* Day columns */}
          {Array.from({ length: 7 }).map((_, dayIdx) => (
            <div 
              key={dayIdx} 
              className={`relative border-r border-[#f0f2f4] bg-[linear-gradient(to_bottom,#f0f2f4_1px,transparent_1px)] bg-[size:100%_80px] ${
                dayIdx >= 5 ? 'bg-[#f8f9fa]/50' : ''
              }`}
            >
              {/* Appointments for this day */}
              {MOCK_APPOINTMENTS.filter(app => app.day === dayIdx).map(app => (
                <AppointmentCard key={app.id} appointment={app} />
              ))}

              {/* Current time indicator line - Only on current day (Monday/0 here) */}
              {dayIdx === 1 && (
                <div className="absolute top-[340px] left-0 right-0 border-t-2 border-red-500 z-10 flex items-center">
                  <div className="size-2.5 bg-red-500 rounded-full -ml-1.5 shadow-sm"></div>
                </div>
              )}

              {/* Hover placeholder for empty slot */}
              <div className="absolute top-[400px] left-1 right-1 h-20 hover:bg-gray-50/80 rounded-lg border border-dashed border-transparent hover:border-gray-200 flex items-center justify-center group cursor-pointer transition-all">
                <button className="hidden group-hover:flex bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg items-center gap-1.5 scale-95 hover:scale-100 transition-transform">
                  <span className="material-symbols-outlined text-[16px]">add</span> AGENDAR
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer padding */}
        <div className="h-10 w-full flex-shrink-0"></div>
      </div>
    </main>
  );
};

export default Calendar;
