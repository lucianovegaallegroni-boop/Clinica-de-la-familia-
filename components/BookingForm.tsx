
import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark no-scrollbar pb-20">
      <div className="max-w-[960px] mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* Page Heading & Subtitle */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Solicitar Cita</h1>
          <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">Complete el formulario a continuación para programar su visita en La clinica de la familia. Nos aseguraremos de atenderlo lo antes posible.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-6 justify-between items-end">
            <p className="text-[#111418] dark:text-white text-base font-medium leading-normal">Paso 1 de 3: Datos del paciente</p>
            <span className="text-sm text-[#617589] dark:text-gray-400">33% completado</span>
          </div>
          <div className="rounded-full bg-[#dbe0e6] dark:bg-gray-700 h-2 w-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300 ease-out" style={{ width: '33%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Section: Personal Info */}
            <section className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6 border-b border-[#f0f2f4] dark:border-gray-700 pb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Información Personal</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col flex-1">
                  <p className="text-[#111418] dark:text-gray-200 text-base font-medium leading-normal pb-2">Nombre</p>
                  <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-[#617589] px-4 text-base font-normal leading-normal transition-all" placeholder="Ej: Juan" />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-[#111418] dark:text-gray-200 text-base font-medium leading-normal pb-2">Apellidos</p>
                  <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-[#617589] px-4 text-base font-normal leading-normal transition-all" placeholder="Ej: Pérez García" />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-[#111418] dark:text-gray-200 text-base font-medium leading-normal pb-2">Teléfono</p>
                  <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-[#617589] px-4 text-base font-normal leading-normal transition-all" placeholder="+34 600 000 000" type="tel" />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-[#111418] dark:text-gray-200 text-base font-medium leading-normal pb-2">Correo electrónico</p>
                  <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary h-12 placeholder:text-[#617589] px-4 text-base font-normal leading-normal transition-all" placeholder="juan.perez@email.com" type="email" />
                </label>
              </div>
            </section>

            {/* Section: Service Selection */}
            <section className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6 border-b border-[#f0f2f4] dark:border-gray-700 pb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Seleccione el Servicio</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <ServiceCard icon="stethoscope" label="Medicina General" active />
                <ServiceCard icon="child_care" label="Pediatría" />
                <ServiceCard icon="dentistry" label="Odontología" />
                <ServiceCard icon="cardiology" label="Cardiología" />
                <ServiceCard icon="psychology" label="Psicología" />
                <ServiceCard icon="vaccines" label="Laboratorio" />
              </div>
            </section>

            {/* Section: Date & Time */}
            <section className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6 border-b border-[#f0f2f4] dark:border-gray-700 pb-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Fecha y Hora</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Mini Calendar (Mockup) */}
                <div className="flex-1 min-w-[300px]">
                  <div className="pb-4 flex justify-between items-center">
                    <span className="font-bold text-lg dark:text-white">Octubre 2023</span>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                    {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => (
                      <span key={d} className="text-[#617589] dark:text-gray-500 font-medium py-2">{d}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    <span className="py-2"></span><span className="py-2"></span>
                    {[1, 2, 3, 4, 5].map(d => <button key={d} className="py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400">{d}</button>)}
                    <button className="py-2 rounded bg-primary text-white font-bold shadow-md transform scale-105">6</button>
                    {[7, 8, 9, 10].map(d => <button key={d} className="py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-[#111418] dark:text-white font-medium">{d}</button>)}
                  </div>
                </div>
                {/* Time Slots */}
                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-sm font-medium text-[#617589] dark:text-gray-400">Horarios disponibles para el <span className="text-[#111418] dark:text-white font-bold">6 de Octubre</span>:</p>
                  <div className="grid grid-cols-2 gap-3">
                    <TimeSlot label="09:00 AM" />
                    <TimeSlot label="09:30 AM" disabled />
                    <TimeSlot label="10:00 AM" />
                    <TimeSlot label="10:30 AM" selected />
                    <TimeSlot label="11:00 AM" />
                    <TimeSlot label="11:30 AM" />
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Additional Notes */}
            <section className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-sm border border-[#e5e7eb] dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#617589] dark:text-gray-400">edit_note</span>
                <label className="text-[#111418] dark:text-white text-lg font-bold" htmlFor="notes">Notas adicionales (Opcional)</label>
              </div>
              <textarea className="w-full min-h-[100px] resize-none rounded-lg text-[#111418] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary p-4 text-base font-normal leading-normal transition-all" id="notes" placeholder="Describa brevemente el motivo de su visita o cualquier síntoma..."></textarea>
            </section>
          </div>

          {/* Right Column: Summary & Sticky Action */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="bg-white dark:bg-[#1A2633] rounded-xl p-6 shadow-md border border-[#e5e7eb] dark:border-gray-700">
                <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4 border-b border-[#f0f2f4] dark:border-gray-700 pb-3">Resumen de la Cita</h3>
                <div className="flex flex-col gap-4">
                  <SummaryItem icon="stethoscope" label="Especialidad" value="Medicina General" />
                  <SummaryItem icon="event" label="Fecha" value="Viernes, 6 Octubre" />
                  <SummaryItem icon="schedule" label="Hora" value="10:30 AM" />
                  <div className="mt-2 pt-4 border-t border-[#f0f2f4] dark:border-gray-700">
                    <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">info</span>
                      <p className="text-xs text-[#617589] dark:text-gray-300 leading-relaxed">
                        Recibirá un correo de confirmación inmediatamente después de solicitar su cita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary hover:bg-blue-600 text-white text-base font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
                <span>Confirmar Cita</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-[#1A2633] py-8 mt-12 rounded-xl">
          <div className="text-center">
            <p className="text-[#617589] dark:text-gray-400 text-sm mb-2">© 2023 La clinica de la familia. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-4 text-sm text-primary font-medium">
              <a className="hover:underline" href="#">Privacidad</a>
              <a className="hover:underline" href="#">Términos</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) => (
  <div className={`cursor-pointer border-2 rounded-lg p-4 flex flex-col items-center gap-3 transition-all ${active ? 'border-primary bg-primary/5 dark:bg-primary/20' : 'border-[#dbe0e6] dark:border-gray-600 hover:border-primary dark:hover:border-primary bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
    <div className={`p-3 rounded-full shadow-sm ${active ? 'bg-white dark:bg-gray-800 text-primary' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:text-primary'}`}>
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <span className={`text-sm text-center ${active ? 'font-bold text-primary' : 'font-medium text-[#111418] dark:text-white'}`}>{label}</span>
  </div>
);

const TimeSlot = ({ label, selected = false, disabled = false }: { label: string; selected?: boolean; disabled?: boolean }) => (
  <button 
    disabled={disabled}
    className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${
      selected 
      ? 'border-primary bg-primary text-white shadow-md ring-2 ring-primary/30' 
      : disabled 
        ? 'border-[#dbe0e6] dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-400 cursor-not-allowed line-through' 
        : 'border-[#dbe0e6] dark:border-gray-600 hover:border-primary hover:text-primary dark:text-gray-200 dark:hover:text-primary bg-white dark:bg-gray-800'
    }`}
  >
    {label}
  </button>
);

const SummaryItem = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <span className="material-symbols-outlined text-primary mt-0.5">{icon}</span>
    <div>
      <p className="text-xs text-[#617589] dark:text-gray-400 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-[#111418] dark:text-white font-semibold">{value}</p>
    </div>
  </div>
);

export default BookingForm;
