
import React from 'react';
import { Terminal, Users, ScanLine, Library } from 'lucide-react';
import { View } from '../types';

interface NavigationProps {
  active: View;
  onChange: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ active, onChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full max-w-lg mx-auto ios-blur border-t border-magenta/20 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] flex justify-between items-center z-[70]">
      <button
        id="nav-operacao"
        onClick={() => onChange('operacao')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'operacao' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'operacao' ? 'bg-magenta/10' : ''}`}>
          <Terminal size={22} strokeWidth={active === 'operacao' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Receita</span>
      </button>

      <button
        id="nav-agentes"
        onClick={() => onChange('agentes')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'agentes' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'agentes' ? 'bg-magenta/10' : ''}`}>
          <Users size={22} strokeWidth={active === 'agentes' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Escala</span>
      </button>

      <button
        id="nav-protocols"
        onClick={() => onChange('protocols')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'protocols' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'protocols' ? 'bg-magenta/10' : ''}`}>
          <Library size={22} strokeWidth={active === 'protocols' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Playbook</span>
      </button>

      <button
        id="nav-raiox"
        onClick={() => onChange('raiox')}
        className={`flex flex-col items-center gap-1.5 transition-all active:scale-90 flex-1 ${active === 'raiox' ? 'text-magenta' : 'text-gray-500'}`}
      >
        <div className={`p-1.5 rounded-xl transition-all ${active === 'raiox' ? 'bg-magenta/10' : ''}`}>
          <ScanLine size={22} strokeWidth={active === 'raiox' ? 2.5 : 2} />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest leading-none">Board</span>
      </button>
    </nav>
  );
};

export default Navigation;
