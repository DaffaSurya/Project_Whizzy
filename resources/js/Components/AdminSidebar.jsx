import React from "react"
import { Link, usePage } from "@inertiajs/react"
import { Home, BookOpen, FolderTree, Users, Palette, Settings, ChartBarStacked  } from "lucide-react"

const AdminSidebar = () => {
  // Get Inertia's current page data (URL)
  const { url } = usePage().props || {} // Safely handle when url is undefined

  // Sample categories and navItems for the sidebar
  const categories = [
    { id: "analytics", label: "Analytics" },
    { id: "content", label: "Content" },
    { id: "customization", label: "Customization" },
  ]

  const navItems = [
    { href: "/admin/dashboard", icon: Home, label: "Dashboard", category: "analytics" },
    { href: "/admin/audiobook", icon: BookOpen, label: "Audiobook", category: "content" },
    { href: "/admin/category", icon: ChartBarStacked, label: "Categories", category: "content" },
    { href: "/admin/chapter", icon: FolderTree, label: "Chapter", category: "content" },
    { href: "/admin/users", icon: Users, label: "Users", category: "content" },
    { href: "/admin/themes", icon: Palette, label: "Themes", category: "customization" },
    { href: "/admin/settings", icon: Settings, label: "Setting", category: "customization" },
  ]

  const currentPath = window.location.pathname; 
  const isActive = (path) => currentPath === path ? 'text-yellow-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-300 hover:text-gray-700';

  return (
    <aside className="flex flex-col w-60 min-h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-gray-700">
      <Link href="/admin">
        <img src="https://placehold.co/400" alt="Admin Logo" className="w-auto h-12" />
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
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg ${isActive(item.href)}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="mx-2 text-sm font-medium">{item.label}</span>
                    </Link>
                  )
                })}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default AdminSidebar

