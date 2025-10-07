'use client';

import { useState } from 'react';
import { Logs, X } from 'lucide-react';
import { NavLinks } from './NavLinks';

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn btn-ghost lg:hidden transition-all duration-700 ease-in-out"
        aria-label="Open menu"
      >
        {open ? <X className="text-red-600" /> : <Logs />}
      </button>

      {open && (
        <div className="fixed inset-0 z-50" onClick={() => setOpen(false)}>
          <div
            className="absolute -right-5 top-14 p-5 animate-slide-in animate-slide-out"
            onClick={e => e.stopPropagation()}
          >
            <ul className="w-32 h-full text-center space-y-3 font-semibold text-gray-700 backdrop-blur-3xl bg-white/50 rounded-bl-2xl py-5">
              <NavLinks />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
