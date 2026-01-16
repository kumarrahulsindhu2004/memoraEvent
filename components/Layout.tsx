
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Home, Info, Mail, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 text-rose-600 font-bold text-xl">
                <Camera className="w-8 h-8" />
                <span className="hidden sm:inline">MemoraEvents</span>
              </Link>
            </div>
            <div className="flex items-center gap-1 sm:gap-4">
              <NavLink to="/" active={isActive('/')} icon={<Home className="w-4 h-4" />} label="Home" />
              <NavLink to="/about" active={isActive('/about')} icon={<Info className="w-4 h-4" />} label="About" />
              <NavLink to="/contact" active={isActive('/contact')} icon={<Mail className="w-4 h-4" />} label="Contact" />
              <NavLink to="/mypage" active={isActive('/mypage')} icon={<User className="w-4 h-4" />} label="MyPhoto" variant="primary" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-rose-600 font-bold text-lg mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5" /> MemoraEvents
              </h3>
              <p className="text-slate-500 text-sm">
                Capturing moments, creating memories. We specialize in corporate and luxury event management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/" className="hover:text-rose-500 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-rose-500 transition-colors">About Us</Link></li>
                <li><Link to="/mypage" className="hover:text-rose-500 transition-colors">Access Memories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-rose-500/20"
                />
                <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 text-center text-slate-400 text-xs">
            © 2026 MemoraEvents Organization Co. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  label: string;
  icon: React.ReactNode;
  variant?: 'default' | 'primary';
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, label, icon, variant = 'default' }) => {
  if (variant === 'primary') {
    return (
      <Link 
        to={to} 
        className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
          active 
            ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' 
            : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <Link 
      to={to} 
      className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
        active 
          ? 'text-rose-600 bg-rose-50' 
          : 'text-slate-600 hover:text-rose-500 hover:bg-slate-50'
      }`}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
};
