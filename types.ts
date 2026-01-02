
export enum AppointmentStatus {
  CONFIRMED = 'CONFIRMED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED'
}

export interface Specialist {
  id: string;
  name: string;
  color: string;
  checked: boolean;
}

export interface Appointment {
  id: string;
  day: number; // 0 (Mon) to 6 (Sun)
  startTime: string; // "HH:MM"
  endTime: string; // "HH:MM"
  title: string;
  subtitle?: string;
  specialist?: string;
  status: AppointmentStatus;
  type: 'visit' | 'meeting' | 'break';
  avatars?: string[];
}

export type ViewType = 'Día' | 'Semana' | 'Mes';
