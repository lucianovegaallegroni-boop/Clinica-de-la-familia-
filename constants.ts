
import { Appointment, AppointmentStatus, Specialist } from './types';

export const SPECIALISTS: Specialist[] = [
  { id: '1', name: 'Dr. Ramírez', color: 'bg-blue-500', checked: true },
  { id: '2', name: 'Dra. Torres', color: 'bg-purple-500', checked: true },
  { id: '3', name: 'Enf. López', color: 'bg-green-500', checked: false },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'a1',
    day: 0,
    startTime: '08:15',
    endTime: '09:00',
    title: 'Carlos Mendez',
    subtitle: 'Primera Visita',
    status: AppointmentStatus.CONFIRMED,
    type: 'visit'
  },
  {
    id: 'a2',
    day: 0,
    startTime: '10:15',
    endTime: '11:30',
    title: 'Sofia Rodriguez',
    subtitle: 'Revisión Pediátrica',
    specialist: 'Dra. Torres',
    status: AppointmentStatus.CONFIRMED,
    type: 'visit'
  },
  {
    id: 'a3',
    day: 1,
    startTime: '11:00',
    endTime: '11:45',
    title: 'Jorge Perez',
    subtitle: 'Vacunación',
    status: AppointmentStatus.CONFIRMED,
    type: 'visit'
  },
  {
    id: 'a4',
    day: 2,
    startTime: '09:00',
    endTime: '11:00',
    title: 'Reunión de Personal',
    subtitle: 'Sala de conferencias 1',
    status: AppointmentStatus.PENDING,
    type: 'meeting',
    avatars: [
      'https://picsum.photos/id/1011/32/32',
      'https://picsum.photos/id/1012/32/32',
      'https://picsum.photos/id/1013/32/32'
    ]
  },
  {
    id: 'a5',
    day: 3,
    startTime: '12:00',
    endTime: '12:45',
    title: 'Ana Lopez',
    subtitle: 'Consulta General',
    status: AppointmentStatus.CONFIRMED,
    type: 'visit'
  },
  {
    id: 'a6',
    day: 4,
    startTime: '13:00',
    endTime: '14:00',
    title: 'Almuerzo',
    subtitle: 'No disponible',
    status: AppointmentStatus.CANCELLED,
    type: 'break'
  }
];

export const DAYS = [
  { label: 'Lun', date: 16, current: true },
  { label: 'Mar', date: 17, current: false },
  { label: 'Mié', date: 18, current: false },
  { label: 'Jue', date: 19, current: false },
  { label: 'Vie', date: 20, current: false },
  { label: 'Sáb', date: 21, current: false, weekend: true },
  { label: 'Dom', date: 22, current: false, weekend: true }
];

export const HOURS = Array.from({ length: 9 }, (_, i) => `${(i + 8).toString().padStart(2, '0')}:00`);
