import React from 'react';
import { Home, Search, User, Users, Bookmark, LogOut, Star, ChartArea } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import logo from '../../../public/logo.png';

export default function Sidebar() {
  const currentPath = window.location.pathname; // Get current path

  const isActive = (path) =>
    path === '/' ? (currentPath === '/' ? 'text-yellow-400' : 'text-white')
      : (currentPath.startsWith(path) ? 'text-yellow-400' : 'text-white');

  // get current logged users
  const currentUser = usePage().props.auth.user;


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
              {currentUser ? (
                <Link
                  href={`/profile/${currentUser.id}/${currentUser.username}`}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/profile')}`}
                >
                  <User className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/profile')}`} />
                  Profil
                </Link>
              ) : (
                <Link
                  href={`/login`}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/profile')}`}
                >
                  <User className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/profile')}`} />
                  Profil
                </Link>
              )}
              <Link
                href="/komunitas/all"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/komunitas')}`}
              >
                <Users className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/komunitas')}`} aria-hidden="true" />
                Komunitas
              </Link>
              {currentUser ? (
                <Link
                  href={`/markah/${currentUser.id}/all`}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/markah')}`}
                >
                  <Bookmark className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/markah')}`} aria-hidden="true" />
                  Markah
                </Link>

              ) : (
                <Link
                  href="/login"
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/markah')}`}
                >
                  <Bookmark className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/markah')}`} aria-hidden="true" />
                  Markah
                </Link>
              )}
              <Link
                href="/Review"
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/Review')}`}
              >
                <Star className={`mr-3 flex-shrink-0 h-6 w-6  ${isActive('/Review')}`} aria-hidden="true" />
                Review dan Saran
              </Link>

              {currentUser ? (
                currentUser.role_id == 2 ? (
                  <Link
                    href="/admin/dashboard"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-white/10 ${isActive('/Admin')}`}
                  >
                    <ChartArea
                      className={`mr-3 flex-shrink-0 h-6 w-6 ${isActive('/Review')}`}
                      aria-hidden="true"
                    />
                    Dashboard Admin
                  </Link>
                ) : null
              ) : (
                <div></div>
              )}

            </nav>

            {/* profile */}
            <div className="flex justify-between items-center px-6 py-2 text-sm font-medium rounded-md">
              {currentUser ? (
                <>
                  <span>{currentUser.username}</span>

                  <Link
                    href="/logout"
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="hover:text-yellow-200 text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>


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
          {currentUser ? (
            <Link
              href={`/profile/${currentUser.id}/${currentUser.username}`}
              className={`hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium ${isActive('/profile')}`}
            >
              <User className={`mb-1 h-6 w-6 ${isActive('/profile')}`} aria-hidden="true" />
              Profil
            </Link>
          ) : (
            <Link
              href="/login"
              className="hover:bg-white/10 group flex flex-col items-center px-2 py-2 text-xs font-medium"
            >
              <User className="mb-1 h-6 w-6" aria-hidden="true" />
              Profle
            </Link>
          )}

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
