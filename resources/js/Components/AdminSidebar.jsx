import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
  Home,
  BookOpen,
  FolderTree,
  Users,
  Settings,
  ChartBarStacked,
  Users2,
  Trash2,
  Menu,
  X,
  CornerDownLeft,
} from "lucide-react";
import logo from '../../../public/logo.png';


const AdminSidebar = () => {
  // State to handle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Get Inertia's current page data (URL)
  const { url } = usePage().props || {}; // Safely handle when url is undefined

  // Sample categories and navItems for the sidebar
  const categories = [
    { id: "analytics", label: "Analytics" },
    { id: "content", label: "Content" },
    // { id: "komunitas", label: "Komunitas" },
    { id: "tools", label: "Tools" },
  ];

  const navItems = [
    { href: "/admin/dashboard", icon: Home, label: "Dashboard", category: "analytics" },
    { href: "/admin/audiobook", icon: BookOpen, label: "Audiobook", category: "content" },
    { href: "/admin/category", icon: ChartBarStacked, label: "Categories", category: "content" },
    { href: "/admin/chapter", icon: FolderTree, label: "Chapter", category: "content" },
    { href: "/admin/users", icon: Users, label: "Users", category: "content" },
    // { href: "#", icon: Users2, label: "Forum", category: "komunitas" },
    { href: "/admin/trash", icon: Trash2, label: "Trash", category: "tools" },
    { href: "/admin/homepage-settings", icon: Settings, label: "Homepage Settings", category: "tools" },
    { href: "/", icon: CornerDownLeft, label: "Back to Home", category: "tools" },
  ];

  const currentPath = window.location.pathname;
  const isActive = (path) =>
    currentPath.startsWith(path)
      ? "text-yellow-400"
      : "text-gray-600 dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-300 hover:text-gray-700";

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed z-20 p-2 text-white bg-blue-600 rounded-md lg:hidden top-4 left-4 dark:bg-gray-800"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-10 flex flex-col w-60 min-h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-gray-700 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0`}
      >
        <Link href="/admin">
          <img src={logo} alt="Admin Logo" className="w-auto h-12" />
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6">
            {categories.map((category) => (
              <div key={category.id} className="space-y-3">
                <label className="px-3 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
                  {category.label}
                </label>
                {navItems
                  .filter((item) => item.category === category.id)
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg ${isActive(
                          item.href
                        )}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="mx-2 text-sm font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay (for closing sidebar on click outside) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-0 bg-black opacity-50 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
