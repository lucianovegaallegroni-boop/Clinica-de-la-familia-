
import React from 'react';

interface HomepageProps {
  onBookNow: () => void;
}

const Homepage: React.FC<HomepageProps> = ({ onBookNow }) => {
  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900 no-scrollbar">
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEOHf8MmSKLdh8yt782EHoNS8Tp_ukd_LsuyApHMpojHGN5uqdPt1sggl-qwBprV7OYY6C8-IqSb_WHYup546rrez-YAztgHtPNd8MRRVX7YN60_cT-Mt2dad9IpDhOL5n5twqMpJGADx17w8MzfF3Nr9QgocJhnOzZuCe8tsLH1asVOgK41KwrEaPUQ8D5xRcOLIFhfld46QSt8ZAg5UQqkoRAlaEPiJv-a3NCqYd4610g_Y3JkrS0nJhi9sIOyh3cus620s7vKw")`
        }}
      >
        <div className="max-w-[850px] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Caring for your family's health, every step of the way.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Professional medical care with a personal touch. Open 7 days a week for your convenience and peace of mind.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row mt-8 justify-center">
            <button 
              onClick={onBookNow}
              className="min-w-[200px] rounded-xl h-14 bg-primary hover:bg-blue-600 text-white text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              Book Appointment
            </button>
            <a 
              href="#services"
              className="min-w-[200px] rounded-xl h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-lg font-bold border border-white/30 flex items-center justify-center transition-all"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111418] dark:text-white mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
            <p className="text-secondary dark:text-gray-400 text-lg max-w-2xl">
              We offer a comprehensive range of medical services to ensure the well-being of every family member, characterized by professional excellence and human warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceFeature icon="stethoscope" title="General Medicine" desc="Comprehensive care, annual check-ups, and preventative treatments for adults." />
            <ServiceFeature icon="child_care" title="Pediatrics" desc="Specialized, gentle attention and monitoring for your little ones' development." />
            <ServiceFeature icon="biotech" title="Lab Services" desc="Fast, accurate diagnostics and blood work processed right here on-site." />
            <ServiceFeature icon="cardiology" title="Cardiology" desc="Expert heart health monitoring, EKGs, and preventative cardiac care." />
            <ServiceFeature icon="dentistry" title="Dental Care" desc="Routine check-ups, cleanings, and comprehensive dental procedures." />
            <ServiceFeature icon="pregnant_woman" title="Women's Health" desc="Specialized care including obstetrics, gynecology, and reproductive health." />
            <ServiceFeature icon="visibility" title="Ophthalmology" desc="Complete eye exams and vision care for adults and children." />
            <ServiceFeature icon="psychology" title="Mental Health" desc="Compassionate therapy and counseling services for mental wellness." />
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-12 bg-white dark:bg-slate-900">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <div 
              className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHBKJ6tCe_vHF7oYvVNZAAFI5g_uf3hjzPriSYuDn4RtoAPgd3ZPxaDKAhfv8BJ4w6H3MqEL3gOFpwK93T6EEuKQjGjBFW9iuWphbJMK_6cUqX7HeUZZ90mxZomIMM6gAowCegw1iF1iKnBE_MXkv31wh2_cnzHmZal9uX9nGpPQ70nlJFlhnNbB0vHo1bRN3RDcvYd4BphvUuY8augIES7UG-5cRHvxWTC3p6XoJgXXUgKZ3ju2l9Mx14srxW-x_UPIn9vF-eWg4")` }}
            ></div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
              <span className="w-12 h-0.5 bg-primary"></span>
              About Our Clinic
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111418] dark:text-white leading-tight">
              Why Choose Us?
            </h2>
            <p className="text-lg text-secondary dark:text-gray-300 leading-relaxed">
              We build our practice on values of trust, compassionate care, and years of medical experience. Your health is our priority, and we strive to create an environment where you feel heard and cared for.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-200 font-medium">
                <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                Experienced and certified medical staff
              </li>
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-200 font-medium">
                <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                State-of-the-art medical technology
              </li>
              <li className="flex items-center gap-4 text-gray-700 dark:text-gray-200 font-medium">
                <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
                Easy online booking and prescription management
              </li>
            </ul>
            <button className="mt-4 px-8 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all w-fit">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">Ready to prioritize your health?</h2>
          <p className="text-blue-100 text-xl max-w-2xl">Book an appointment today and experience the difference of patient-centered care at Clínica de la Familia.</p>
          <button 
            onClick={onBookNow}
            className="bg-white text-primary hover:bg-blue-50 px-10 py-4 rounded-xl font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            Book Appointment Now
          </button>
        </div>
      </section>

      {/* Expanded Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-[#f0f2f4] dark:border-slate-800 pt-20 pb-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined">local_hospital</span>
                </div>
                <h3 className="text-xl font-bold dark:text-white">Clínica de la Familia</h3>
              </div>
              <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed">
                Committed to providing high-quality healthcare services for your entire family in a comfortable and safe environment.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[#111418] dark:text-white font-bold text-base uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                <button className="text-secondary dark:text-gray-400 hover:text-primary transition-colors text-sm text-left">Home</button>
                <button className="text-secondary dark:text-gray-400 hover:text-primary transition-colors text-sm text-left">Services</button>
                <button className="text-secondary dark:text-gray-400 hover:text-primary transition-colors text-sm text-left">Doctors</button>
                <button onClick={onBookNow} className="text-secondary dark:text-gray-400 hover:text-primary transition-colors text-sm text-left">Book Appointment</button>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[#111418] dark:text-white font-bold text-base uppercase tracking-wider">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="text-secondary dark:text-gray-400 text-sm">123 Health Blvd, Suite 100<br/>Medical District, NY 10001</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-secondary dark:text-gray-400 text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-secondary dark:text-gray-400 text-sm">contact@clinicafamilia.com</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-[#111418] dark:text-white font-bold text-base uppercase tracking-wider">Opening Hours</h4>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary dark:text-gray-400 font-medium">Mon - Fri:</span>
                  <span className="text-gray-900 dark:text-white font-bold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary dark:text-gray-400 font-medium">Saturday:</span>
                  <span className="text-gray-900 dark:text-white font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary dark:text-gray-400 font-medium">Sunday:</span>
                  <span className="text-gray-900 dark:text-white font-bold">10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2023 Clínica de la Familia. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">language</span></button>
              <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceFeature = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group hover:-translate-y-1">
    <div className="size-14 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
    <p className="text-secondary dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Homepage;
