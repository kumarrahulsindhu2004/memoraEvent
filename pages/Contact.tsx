
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold">Get In Touch</h1>
          <p className="text-slate-500 text-lg">
            Ready to plan your next masterpiece? Drop us a line and our event consultants will get back to you within 24 hours.
          </p>
        </div>

        <div className="space-y-6">
          <ContactInfo 
            icon={<MapPin className="w-6 h-6 text-rose-500" />} 
            title="Our HQ" 
            text="123 Event Avenue, Mumbai, MH 400001, India" 
          />
          <ContactInfo 
            icon={<Phone className="w-6 h-6 text-rose-500" />} 
            title="Call Us" 
            text="+91 (22) 5550-1234" 
          />
          <ContactInfo 
            icon={<Mail className="w-6 h-6 text-rose-500" />} 
            title="Email" 
            text="hello@memoraevents.com" 
          />
        </div>

        <div className="pt-8 space-y-4">
          <h3 className="font-bold">Follow Our Journey</h3>
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram className="w-5 h-5" />} />
            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
          </div>
        </div>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-100">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Send className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold">Message Sent!</h2>
            <p className="text-slate-500">Thank you for reaching out. We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-400">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-400">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20" />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-400">Event Type</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20">
                <option>Corporate Summit</option>
                <option>Social Gala</option>
                <option>Product Launch</option>
                <option>Exhibition</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-slate-400">Message</label>
              <textarea required rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-all flex items-center justify-center gap-2">
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center">{icon}</div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-slate-500">{text}</p>
    </div>
  </div>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all">
    {icon}
  </a>
);
