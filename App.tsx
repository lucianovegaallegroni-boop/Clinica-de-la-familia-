
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Calendar from './components/Calendar';
import BookingForm from './components/BookingForm';
import Homepage from './components/Homepage';

type ActiveView = 'home' | 'calendar' | 'booking';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('home');

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <Homepage onBookNow={() => setActiveView('booking')} />;
      case 'booking':
        return <BookingForm />;
      case 'calendar':
        return (
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <Calendar />
          </div>
        );
      default:
        return <Homepage onBookNow={() => setActiveView('booking')} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background-light overflow-hidden">
      <Navbar onNavigate={setActiveView} activeView={activeView} />
      <div className="flex flex-1 overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
