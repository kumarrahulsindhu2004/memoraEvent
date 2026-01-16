
import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-20 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold">Excellence in Execution</h1>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto">
          Founded in 2011, MemoraEvents has grown from a boutique agency to a nationwide leader in high-impact event production.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <AboutFeature 
          icon={<Shield className="w-10 h-10 text-rose-500" />}
          title="Reliability"
          description="Zero-failure policy. We plan for every contingency so you can enjoy the moment."
        />
        <AboutFeature 
          icon={<Zap className="w-10 h-10 text-blue-500" />}
          title="Innovation"
          description="Leading edge technology and creative concepts that push the boundaries of what's possible."
        />
        <AboutFeature 
          icon={<Target className="w-10 h-10 text-amber-500" />}
          title="Precision"
          description="Meticulous attention to detail from the initial sketch to the final breakdown."
        />
      </div>

      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-white">
            <h2 className="text-3xl font-bold">Our Philosophy</h2>
            <p className="text-slate-400">
              We believe every event is a unique narrative. Our job is to tell that story with flair and impact. 
              Whether it's a 5000-person summit or a private executive retreat, our approach remains the same: 
              client-focused and results-driven.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
                <span>Strategy-led creative thinking</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
                <span>World-class vendor network</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
                <span>End-to-end project management</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img 
              src="https://picsum.photos/id/40/800/600" 
              alt="Team Meeting" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutFeature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center space-y-4 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </div>
);
