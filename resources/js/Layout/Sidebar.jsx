import React from 'react';
import { Home, Search, User, Users, Bookmark } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Sidebar() {
  const currentPath = window.location.pathname; // Get current path

  const isActive = (path) => currentPath === path ? 'text-yellow-200' : 'text-white'; // Check if the path is active

  return (
    <>
      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-black border-r-2 border-slate-800">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-14 flex-1 px-4 space-y-3">
              <Link
                href="/"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/')}`}
              >
                <Home className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/')}`} aria-hidden="true" />
                Beranda
              </Link>
              <Link
                href="/Cari"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/Cari')}`}
              >
                <Search className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/Cari')}`} aria-hidden="true" />
                Cari
              </Link>
              <Link
                href="/profile"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/profile')}`}
              >
                <User className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/profile')}`} aria-hidden="true" />
                Profil
              </Link>
              <Link
                href="/Komunitas"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/Komunitas')}`}
              >
                <Users className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/Komunitas')}`} aria-hidden="true" />
                Komunitas
              </Link>
              <Link
                href="/Favorit"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/Favorit')}`}
              >
                <Bookmark className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/Favorit')}`} aria-hidden="true" />
                Markah
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom navbar for mobile and tablet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1C1C1C] shadow-lg z-50">
        <nav className="flex justify-around">
          <Link
            href="/"
            className={`hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium ${isActive('/')}`}
          >
            <Home className={`mb-1 h-6 w-6 ${isActive('/')}`} aria-hidden="true" />
            Beranda
          </Link>
          <Link
            href="/Cari"
            className={`hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium ${isActive('/Cari')}`}
          >
            <Search className={`mb-1 h-6 w-6 ${isActive('/Cari')}`} aria-hidden="true" />
            Cari
          </Link>
          <Link
            href="/profile"
            className={`hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium ${isActive('/profile')}`}
          >
            <User className={`mb-1 h-6 w-6 ${isActive('/profile')}`} aria-hidden="true" />
            Profil
          </Link>
          <Link
            href="/Komunitas"
            className={`hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium ${isActive('/Komunitas')}`}
          >
            <Users className={`mb-1 h-6 w-6 ${isActive('/Komunitas')}`} aria-hidden="true" />
            Komunitas
          </Link>
          <a
            href="/Favorit"
            className={`hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium ${isActive('/Favorit')}`}
          >
            <Bookmark className={`mb-1 h-6 w-6 ${isActive('/Favorit')}`} aria-hidden="true" />
            Markah
          </a>
        </nav>
      </div>
    </>
  );
}
