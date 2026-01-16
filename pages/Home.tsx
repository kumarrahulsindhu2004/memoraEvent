
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Trophy, Users } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/445/1920/1080" 
            alt="Event Background" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-200 text-sm font-medium border border-rose-500/30">
              <Sparkles className="w-4 h-4" />
              Premier Event Management
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Creating <span className="text-rose-500">Unforgettable</span> Moments
            </h1>
            <p className="text-lg text-slate-300">
              We turn your corporate summits and social gatherings into legends. 
              Precision, passion, and unparalleled professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/mypage" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rose-600 text-white rounded-full font-bold text-lg hover:bg-rose-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-rose-500/20"
              >
                Access Your Memories
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Trophy className="w-6 h-6 text-rose-500" />} label="Events Managed" value="1,200+" />
          <StatCard icon={<Users className="w-6 h-6 text-blue-500" />} label="Happy Clients" value="500+" />
          <StatCard icon={<Sparkles className="w-6 h-6 text-amber-500" />} label="Years Experience" value="15+" />
          <StatCard icon={<ArrowRight className="w-6 h-6 text-green-500" />} label="Countries Served" value="25+" />
        </div>
      </section>

      {/* Featured Event Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Recent Successes</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            From Mumbai to New York, we've hosted the biggest names in the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EventCard 
            image="https://picsum.photos/id/20/800/600"
            title="Tech Vision 2026"
            category="Corporate Summit"
          />
          <EventCard 
            image="https://picsum.photos/id/42/800/600"
            title="Luxe Gala Nights"
            category="Social Event"
          />
          <EventCard 
            image="https://picsum.photos/id/30/800/600"
            title="Great Place to Work"
            category="Award Ceremony"
          />
        </div>
      </section>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-2">
    <div className="flex justify-center">{icon}</div>
    <div className="text-3xl font-bold text-slate-800">{value}</div>
    <div className="text-sm text-slate-500 uppercase tracking-wider">{label}</div>
  </div>
);

const EventCard: React.FC<{ image: string; title: string; category: string }> = ({ image, title, category }) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
      <span className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-1">{category}</span>
      <h3 className="text-white text-xl font-bold">{title}</h3>
    </div>
  </div>
);
