
import React from 'react';
import Header from './components/Header';
import BookingWidget from './components/BookingWidget';
import RoomCard from './components/RoomCard';
import AIChatConcierge from './components/AIChatConcierge';
import { ROOMS, CULINARY, EXPERIENCES } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-sand overflow-x-hidden">
      <Header />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[750px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLyj0NdLMO3UpwKkUIxbLjVgz0SbezYFV4ehC7tfwlm3Wsoe2ks8Gi2lCzK1NRvLM6KQMUK1LqZ_44E5j2osXj10Q_Kx_OfJ-EDsHqbPWXdShBTswcSiTYTQIK0x2DSJ9qL3HfVag7y1fdNg0Ba_GUuRWY965q-FEPJ8yh8BifZ3n3fCyAd45HOCbPi_-CKVN1Sl1F_JD2B3Ykx0uWAmXmS7kUO-t58OlGtq2I-eUVtxtfXrgPBNtasbQzd0CUAam6UsPE6Vl1QcY" 
            alt="Havhotellet facade overlooking the ocean" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/60 via-ocean-dark/20 to-sand"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 animate-fade-in">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest">Southernmost Escape in Norway</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 tracking-tight drop-shadow-2xl text-white">
            Where Sea Meets <br/><span className="text-primary italic">Comfort</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
            An oasis of tranquility built directly on the pier, inviting the wild North Sea into your morning routine.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#stay" className="min-w-[180px] bg-primary hover:bg-blue-600 text-white font-bold h-16 rounded-2xl flex items-center justify-center gap-2 shadow-2xl shadow-primary/40 transition-all hover:-translate-y-1">
              Explore Our Rooms
            </a>
            <a href="#experiences" className="min-w-[180px] bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/30 font-bold h-16 rounded-2xl flex items-center justify-center transition-all">
              Discover Activities
            </a>
          </div>
        </div>

        <div className="absolute bottom-32 left-0 right-0 z-40">
           <BookingWidget floating />
        </div>
      </section>

      {/* 2. ACCOMMODATION SECTION */}
      <section id="stay" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Refined Living</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ocean-dark leading-tight">
                Rooms & Apartments <br/>Designed for <span className="italic text-gray-400">Hygge</span>
              </h2>
            </div>
            <p className="max-w-md text-gray-500 leading-relaxed">
              From intimate double rooms with horizon views to spacious family apartments with pier-side kitchens, every stay is tailored to the rhythm of the ocean.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ROOMS.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CULINARY EXPERIENCE */}
      <section id="dine" className="py-32 bg-ocean-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Taste of the Sea</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Culinary Storytelling</h2>
            <p className="max-w-2xl mx-auto text-white/60 leading-relaxed">
              Experience the fresh catch of the day at our À la Carte restaurant or dive into a private workshop at The Laboratory.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {CULINARY.map((item, idx) => (
              <div key={item.id} className={`group flex flex-col ${idx % 2 === 0 ? 'lg:translate-y-12' : ''}`}>
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">{item.subtitle}</span>
                    <h3 className="text-3xl font-serif font-bold mt-2">{item.title}</h3>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6 px-4">{item.description}</p>
                <a href={item.link} className="inline-flex items-center gap-2 text-primary font-bold px-4 group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCES */}
      <section id="experiences" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-dark mb-4">Life on the Edge</h2>
            <p className="text-gray-500">Every stay includes complimentary access to the historic Lindesnes Lighthouse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EXPERIENCES.map(exp => (
              <div key={exp.id} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-white/70 text-sm mb-6 line-clamp-2">{exp.description}</p>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold py-2.5 px-6 rounded-full hover:bg-white hover:text-ocean-dark transition-all">
                    View Activity
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EVENTS & PRACTICAL INFO */}
      <section id="events" className="py-32 bg-warm-neutral/30 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Events & Gatherings</span>
            <h2 className="text-4xl font-serif font-bold text-ocean-dark mb-8 leading-tight">Tailored Occasions at the Coast</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Host your dream coastal wedding or a conference that sparks inspiration. Our facilities adapt to your needs, from cozy lounges to grand halls.
            </p>
            <div className="space-y-4">
               {['Custom tailored conferences', 'Oceanfront wedding ceremonies', 'Interactive group cooking events', 'Outdoor BBQ catering'].map((text, i) => (
                 <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                   <span className="material-symbols-outlined text-primary">check_circle</span>
                   <span className="text-sm font-semibold text-ocean-dark">{text}</span>
                 </div>
               ))}
            </div>
            <button className="mt-12 w-full sm:w-auto bg-ocean-dark text-white font-bold h-14 px-10 rounded-2xl hover:bg-primary transition-all shadow-xl">
              Inquire About Events
            </button>
          </div>
          
          <div id="info" className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-gray-50">
            <h3 className="text-2xl font-bold text-ocean-dark mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">info</span>
              Practical Info
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: 'schedule', title: 'Check-in/out', desc: 'From 15:00 / Until 11:00' },
                { icon: 'wifi', title: 'Complimentary WiFi', desc: 'High-speed across property' },
                { icon: 'ev_station', title: 'EV Charging', desc: 'Available for guests' },
                { icon: 'pets', title: 'Pet Friendly', desc: 'Designated rooms only' },
                { icon: 'fitness_center', title: 'Gym Access', desc: 'Open daily 24/7' },
                { icon: 'local_parking', title: 'Free Parking', desc: 'Ample space on-site' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ocean-dark">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
               <p className="text-sm text-gray-500 leading-relaxed italic">
                 "Our goal is to make your stay as effortless as the sea breeze. Reach out if you have specific requirements."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ocean-dark text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                  <span className="material-symbols-outlined text-2xl">water_lux</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Havhotellet</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                A premier coastal destination at the southernmost tip of Norway. Experience nature, comfort, and culinary excellence.
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'linkedin'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary transition-colors flex items-center justify-center">
                    <img src={`https://cdn.simpleicons.org/${social}/white`} className="w-4 h-4" alt={social} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#stay" className="hover:text-primary transition-colors">Accommodations</a></li>
                <li><a href="#dine" className="hover:text-primary transition-colors">Dining & Cuisine</a></li>
                <li><a href="#experiences" className="hover:text-primary transition-colors">Activities</a></li>
                <li><a href="#events" className="hover:text-primary transition-colors">Conferences & Weddings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">call</span>
                  +47 38 25 21 00
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">mail</span>
                  post@havhotellet.no
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                  Spangereid, 4521 Lindesnes
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
              <p className="text-sm text-white/50 mb-6">Join our circle for seasonal offers and coastal inspiration.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border-white/10 rounded-xl px-4 py-2 text-sm focus:ring-primary focus:border-primary flex-1"
                />
                <button className="bg-primary hover:bg-blue-600 px-4 rounded-xl text-sm font-bold transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-white/30">© 2024 Havhotellet. All rights reserved. Designed for the adventurous heart.</p>
            <div className="flex gap-8 text-xs text-white/30">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <AIChatConcierge />
    </div>
  );
};

export default App;
