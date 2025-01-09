import React from 'react';
import { Home, Search, User, Users, Bookmark } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-black border-r-2 border-slate-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-14 flex-1 px-4 space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "text-yellow-400 " : "text-white hover:bg-white/10"
                  }`
                }
              >
                <Home className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Beranda
              </NavLink>
              <NavLink
                to="/Cari"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "text-yellow-400" : "text-white hover:bg-white/10"
                  }`
                }
              >
                <Search className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Cari
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "text-yellow-400" : "text-white hover:bg-white/10"
                  }`
                }
              >
                <User className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Profil
              </NavLink>
              <NavLink
                to="/Komunitas"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "text-yellow-400" : "text-white hover:bg-white/10"
                  }`
                }
              >
                <Users className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Komunitas
              </NavLink>
              <NavLink
                to="/Favorit"
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? "text-yellow-400" : "text-white hover:bg-white/10"
                  }`
                }
              >
                <Bookmark className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Markah
              </NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom navbar for mobile and tablet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1C1C1C] shadow-lg z-50">
        <nav className="flex justify-around">
          <NavLink
            to="/"
            className="text-white hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium"
          >
            <Home className="text-white mb-1 h-6 w-6" aria-hidden="true" />
            Beranda
          </NavLink>
          <NavLink
            to="/Cari"
            className="text-white hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium"
          >
            <Search className="text-white mb-1 h-6 w-6" aria-hidden="true" />
            Cari
          </NavLink>
          <NavLink
            to="/profile"
            className="text-white hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium"
          >
            <User className="text-white mb-1 h-6 w-6" aria-hidden="true" />
            Profil
          </NavLink>
          <NavLink
            to="/Komunitas"
            className="text-white hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium"
          >
            <Users className="text-white mb-1 h-6 w-6" aria-hidden="true" />
            Komunitas
          </NavLink>
          <NavLink
            to="/Favorit"
            className="text-white hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium"
          >
            <Bookmark className="text-white mb-1 h-6 w-6" aria-hidden="true" />
            Markah
          </NavLink>
        </nav>
      </div>
    </>
  );
}
