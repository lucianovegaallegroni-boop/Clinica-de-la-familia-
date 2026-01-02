
import React, { useState } from 'react';
import LoginModal from './LoginModal';

type ViewType = 'home' | 'calendar' | 'booking';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  activeView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleScroll = (id: string) => {
    if (activeView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleStaffLoginClick = () => {
    if (isLoggedIn) {
      onNavigate('calendar');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    onNavigate('calendar');
  };

  return (
    <>
      <header className="flex items-center justify-between border-b border-[#f0f2f4] bg-white px-6 py-3 z-50 sticky top-0 backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="size-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-[32px]">local_hospital</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight text-[#111418]">Clínica de la Familia</h2>
        </div>

        <div className="flex flex-1 justify-end gap-6 items-center">
          <nav className="hidden md:flex items-center gap-8 mr-6">
            <button
              onClick={() => handleScroll('home')}
              className={`text-sm font-bold transition-colors ${activeView === 'home' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleScroll('services')}
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => handleScroll('about')}
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <button
              onClick={handleStaffLoginClick}
              className={`text-sm font-bold transition-colors ${activeView === 'calendar' ? 'text-primary' : 'text-secondary hover:text-primary'}`}
            >
              Calendario
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('booking')}
              className="flex h-10 items-center justify-center rounded-lg px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all active:scale-95"
            >
              <span className="truncate">Agendar Cita</span>
            </button>
            <button className="hidden sm:block size-10 rounded-full overflow-hidden border border-gray-200">
              <img
                alt="User"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxiwhKdEpi7DzxssVk3lwwdLEoerbnXE1LfPOpWiFyrpNXBULIIAcrm2c9mmkh5P4LQeUWGlPy2pNx_YmOfDWTNeF-GeQ29Asu5cQB5jjgUhYmlCO3uTdttOCr_XMvWZXHd_eAngpBXSB6J64QsQLrzxriRxhHP8KRTYzH82D8_RCkLJS2kEwDw8e-md4ViKKlvI9SR-Xy-QF3B1veMQICP0o0ZLVqQHy3FF-2_qq7THaUrmx1PqSxcj2tDhzqDDR-y4KykyLQZ18"
              />
            </button>
          </div>
        </div>
      </header>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLoginSuccess}
      />
    </>
  );
};

export default Navbar;
