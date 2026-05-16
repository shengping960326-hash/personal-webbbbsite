import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Presentation as PresentationIcon, Box, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const routes = [
    { name: '首頁', path: '/', icon: Home },
    { name: '旅遊規劃', path: '/travel-plan', icon: Map },
    { name: '企劃簡報', path: '/presentation', icon: PresentationIcon },
    { name: '3D 模型', path: '/model-3d', icon: Box },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl text-slate-900">
          Andrew.
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-sm p-4">
          <div className="flex flex-col gap-2">
            {routes.map((route) => {
              const Icon = route.icon;
              const isActive = location.pathname === route.path;
              return (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl font-medium transition-all ${
                    isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={20} />
                  {route.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 h-screen sticky top-0 p-8 border-r border-slate-200 bg-white/50 backdrop-blur-xl">
        <div className="mb-12">
          <Link to="/" className="font-display font-bold text-3xl tracking-tight text-slate-900">
            Andrew<span className="text-orange-500">.</span>
          </Link>
          <p className="text-slate-500 mt-2 text-sm font-medium">Portfolio & Projects</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = location.pathname === route.path;
            return (
              <Link
                key={route.path}
                to={route.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isActive 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10 translate-x-1' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-orange-400' : ''} />
                {route.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <div className="p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors">
            <p className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-1">Contact</p>
            <a href="mailto:shengping960326@gmail.com" className="text-sm font-medium text-orange-600 hover:text-orange-700 break-all">
              shengping960326@gmail.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
