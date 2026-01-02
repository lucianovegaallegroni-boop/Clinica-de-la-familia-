
import React from 'react';
import { Appointment } from '../types';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const parseTime = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  };

  const startMinutes = parseTime(appointment.startTime);
  const endMinutes = parseTime(appointment.endTime);
  const duration = endMinutes - startMinutes;
  
  // Base time is 08:00 (480 minutes)
  const baseMinutes = 8 * 60;
  const topPosition = ((startMinutes - baseMinutes) / 60) * 80; // 80px per hour
  const height = (duration / 60) * 80;

  let bgClass = "bg-blue-100 border-blue-500 text-blue-700";
  if (appointment.type === 'meeting') bgClass = "bg-blue-100 border-blue-500 text-blue-700";
  if (appointment.specialist === 'Dra. Torres') bgClass = "bg-purple-100 border-purple-500 text-purple-700";
  if (appointment.title === 'Jorge Perez') bgClass = "bg-green-100 border-green-500 text-green-700";
  if (appointment.type === 'break') bgClass = "bg-red-100 border-red-500 text-red-700 opacity-70";

  return (
    <div 
      className={`absolute left-1 right-1 rounded border-l-4 p-2 shadow-sm cursor-pointer hover:shadow-md transition-all group overflow-hidden ${bgClass}`}
      style={{ top: `${topPosition}px`, height: `${height}px` }}
    >
      <div className="flex justify-between items-start mb-0.5">
        <span className="text-[10px] font-bold">{appointment.startTime} - {appointment.endTime}</span>
        {appointment.type !== 'break' && (
          <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">edit</span>
        )}
      </div>
      <p className="text-xs font-bold text-gray-900 truncate">{appointment.title}</p>
      <p className="text-[10px] text-gray-500 truncate">{appointment.subtitle}</p>
      
      {appointment.specialist && (
        <div className="mt-1 flex items-center">
          <span className="px-1.5 py-0.5 rounded bg-white/60 text-[8px] font-bold uppercase">{appointment.specialist}</span>
        </div>
      )}

      {appointment.avatars && (
        <div className="mt-auto flex -space-x-1.5 pt-2 border-t border-blue-200">
          {appointment.avatars.map((url, i) => (
            <img key={i} src={url} className="size-5 rounded-full border border-white bg-gray-200" alt="Avatar" />
          ))}
          <div className="size-5 rounded-full bg-gray-400 border border-white flex items-center justify-center text-[7px] text-white font-bold">+3</div>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
