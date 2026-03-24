import { LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/login');
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700 flex items-center px-4 sm:px-6 lg:px-10">
      <div className="flex-1 flex items-center gap-4 min-w-0">
        <div className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold text-white tracking-wide whitespace-nowrap">
            SiyadaTech
          </span>
          <span className="text-xs font-body text-slate-dashboard tracking-wider hidden sm:block whitespace-nowrap">
            Three Engines. One Path to IPO.
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-xs font-body font-medium text-amber-400 tracking-widest uppercase">
            Confidential — Board View
          </span>
          <span className="text-xs font-body text-slate-dashboard">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-body font-medium text-slate-dashboard hover:text-white border border-navy-600 hover:border-slate-dashboard rounded-lg transition-colors"
        >
          <LogOut size={13} />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>
    </header>
  );
}
