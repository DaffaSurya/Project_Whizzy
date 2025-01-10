import React from 'react';
import { Home, Search, User, Users, Bookmark } from 'lucide-react';

export default function Sidebar() {
  const currentPath = window.location.pathname; // Get current path

  return (
    <>
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-black border-r-2 border-slate-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-14 flex-1 px-4 space-y-3">
              <a
                href="/"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${currentPath === "/" ? "text-yellow-400" : "text-white hover:bg-white/10"}`}
              >
                <Home className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Beranda
              </a>
              <a
                href="/Cari"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${currentPath === "/Cari" ? "text-yellow-400" : "text-white hover:bg-white/10"}`}
              >
                <Search className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Cari
              </a>
              <a
                href="/profile"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${currentPath === "/profile" ? "text-yellow-400" : "text-white hover:bg-white/10"}`}
              >
                <User className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Profil
              </a>
              <a
                href="/Komunitas"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${currentPath === "/Komunitas" ? "text-yellow-400" : "text-white hover:bg-white/10"}`}
              >
                <Users className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Komunitas
              </a>
              <a
                href="/Favorit"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${currentPath === "/Favorit" ? "text-yellow-400" : "text-white hover:bg-white/10"}`}
              >
                <Bookmark className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                Markah
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
