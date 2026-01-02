
import React from 'react';
import { SPECIALISTS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 bg-white border-r border-[#f0f2f4] flex flex-col overflow-y-auto no-scrollbar hidden lg:flex">
      {/* Mini Calendar */}
      <div className="p-6 border-b border-[#f0f2f4]">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg">Octubre 2023</span>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 text-center text-[10px] font-bold text-secondary mb-3">
          <div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div><div>D</div>
        </div>
        
        <div className="grid grid-cols-7 text-center text-sm gap-y-3 font-medium">
          <div className="text-gray-300">25</div><div className="text-gray-300">26</div><div className="text-gray-300">27</div>
          <div className="text-gray-300">28</div><div className="text-gray-300">29</div><div className="text-gray-300">30</div>
          <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
          <div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
          <div className="bg-primary text-white rounded-full size-7 flex items-center justify-center mx-auto shadow-sm">16</div>
          <div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div>
          <div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div>
          <div>30</div><div>31</div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 flex flex-col gap-8">
        <div>
          <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">Especialistas</h3>
          <div className="flex flex-col gap-4">
            {SPECIALISTS.map(spec => (
              <label key={spec.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={spec.checked}
                    className="peer size-4 appearance-none rounded border border-gray-300 bg-white checked:bg-primary checked:border-primary transition-all cursor-pointer"
                  />
                  <span className="material-symbols-outlined absolute text-white opacity-0 peer-checked:opacity-100 text-[14px] pointer-events-none left-0">check</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">{spec.name}</span>
                <span className={`ml-auto w-2 h-2 rounded-full ${spec.color}`}></span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">Estados</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1.5 rounded-md bg-green-100 text-green-700 text-[10px] font-bold">Confirmada</span>
            <span className="px-2 py-1.5 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-bold">Pendiente</span>
            <span className="px-2 py-1.5 rounded-md bg-red-100 text-red-700 text-[10px] font-bold">Cancelada</span>
          </div>
        </div>

        {/* Next Appointment Promo Card */}
        <div className="mt-8 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-2xl p-5 border border-blue-50 shadow-sm">
          <p className="text-[10px] text-primary font-black uppercase tracking-wider mb-2">Próxima Cita</p>
          <p className="font-bold text-[#111418] text-base mb-3">Consulta General</p>
          <div className="flex items-center gap-2 mb-4">
            <img 
              className="size-7 rounded-full object-cover border border-white" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZRlc2m0XrRd5c66EJC_4V3qhD5HopVmAbJz86hPHJyiWEWi3Ie4iMTspn713c6zQYVMjwNwChJ_c3WBHAz5LPqiW2SF0oU-ffO2Bd9ggw0cqMYvmYqsGAQM27z5izYIXOWxA3q-BJRw3ZR1_vo_kAEJ4wUxEgOAadFz_1wnL94qwsImMqu8AanS1Ytgb7dJxsTU5aTG3-eyEcvWtOutKITWkLRAjzLdpOuTo_M6hJKSOSgClzUtIxJ8FRyJnCG65NmrUl7Zp0vZY" 
              alt="Maria"
            />
            <span className="text-sm font-medium text-gray-800">Maria Gonzalez</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span className="text-xs font-bold">10:30 AM</span>
            </div>
            <button className="text-xs font-bold text-primary hover:underline">Detalles</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
