"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AvatarDropdown from "./AvatarDropdown";
import { getUser, subscribeToUserUpdates } from "@/utils/auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Get user data from localStorage and listen for updates
  useEffect(() => {
    const loadUserData = () => {
      try {
        const userData = getUser();
        if (userData) {
          const role = userData.role || userData.userType || 'user';
          const name = userData.fullName || userData.name || '';
          const avatar = userData.avatar || userData.profileImage || '';
          
          setUserRole(role);
          setUserName(name);
          setUserAvatar(avatar);
        }
      } catch (error) {
        console.error('Error getting user data:', error);
        setUserRole('user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();

    // Subscribe to real-time user profile updates
    const unsubscribe = subscribeToUserUpdates((updatedUser) => {
      console.log('Header received user update:', updatedUser);
      if (updatedUser) {
        const role = updatedUser.role || updatedUser.userType || 'user';
        const name = updatedUser.fullName || updatedUser.name || '';
        const avatar = updatedUser.avatar || updatedUser.profileImage || '';
        
        setUserRole(role);
        setUserName(name);
        setUserAvatar(avatar);
      }
    });

    // Listen for storage events
    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        console.log('Storage changed in header, reloading user data...');
        loadUserData();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('avatar-dropdown');
      const avatarButton = document.getElementById('avatar-button');
      
      if (dropdown && avatarButton) {
        if (!dropdown.contains(event.target) && !avatarButton.contains(event.target)) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        if (isMenuOpen) setIsMenuOpen(false);
        if (isDropdownOpen) setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isMenuOpen, isDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!userName) return 'U';
    const parts = userName.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return userName.substring(0, 2).toUpperCase();
  };

  // Centralized Link Configuration based on role
  const getNavLinks = () => {
    const isAdmin = userRole === 'admin' || userRole === 'Administrator';
    
    if (isAdmin) {
      return [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Users", href: "/admin/all-users" },
        { name: "Submissions", href: "/admin/all-submissions" },
        { name: "Projects", href: "/admin/projects" },
      ];
    }
    
    return [
      { name: "Dashboard", href: "/dashboard" },
      { name: "My Projects", href: "/projects" },
      { name: "Submissions", href: "/submissions" },
      { name: "Profile", href: "/profile" },
    ];
  };

  const navLinks = getNavLinks();

  // Show loading state
  if (isLoading) {
    return (
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full max-w-7xl mx-auto">
          <Link href="/" className="max-sm:hidden" aria-label="Home">
            <Image
              src="/assets/logo-final.webp"
              alt="Company Logo"
              width={144}
              height={36}
              className="w-36"
              priority
            />
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full max-w-7xl mx-auto">

        {/* Logo Section */}
        <Link href="/" className="max-sm:hidden" aria-label="Home">
          <Image
            src="/assets/logo-final.webp"
            alt="Company Logo"
            width={144}
            height={36}
            className="w-36 hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
        <Link href="/" className="hidden max-sm:block" aria-label="Home">
          <Image
            src="/assets/logo-final.webp"
            alt="Company Logo"
            width={36}
            height={36}
            className="w-9 hover:opacity-80 transition-opacity"
            priority
          />
        </Link>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}

        {/* Navigation Menu */}
        <div
          ref={menuRef}
          className={`
            lg:static lg:block lg:w-auto lg:h-auto lg:bg-transparent lg:shadow-none lg:translate-x-0
            max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-3/4 max-lg:min-w-[280px] max-lg:max-w-[400px]
            max-lg:h-full max-lg:bg-white max-lg:z-50 max-lg:shadow-xl
            transition-transform duration-300 ease-out
            ${isMenuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
          `}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 lg:hidden">
            <Image src="/assets/logo-final.webp" alt="Logo" width={120} height={30} className="w-28" />
            <button onClick={toggleMenu} aria-label="Close menu" className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <svg className="w-5 h-5 fill-black" viewBox="0 0 320.591 320.591">
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>
          </div>

          {/* User Profile Preview for Mobile */}
          <div className="px-6 pt-4 pb-2 lg:hidden flex items-center gap-3 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold overflow-hidden shadow-md">
              {userAvatar ? (
                <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
              ) : (
                <span className="text-lg">{getUserInitials()}</span>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{userName || 'User'}</p>
              <p className="text-xs text-gray-500">{userRole === 'admin' ? 'Administrator' : 'Member'}</p>
            </div>
          </div>

          {/* Admin Badge for Mobile */}
          {(userRole === 'admin' || userRole === 'Administrator') && (
            <div className="px-6 pt-4 pb-2 lg:hidden">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Admin Mode
              </span>
            </div>
          )}

          {/* Navigation Links */}
          <ul className="lg:flex lg:gap-x-2 max-lg:p-6 max-lg:space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              const activeCheck = isActive;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      block font-semibold text-[15px] py-2.5 px-4 rounded-lg transition-all
                      ${activeCheck
                        ? "text-blue-700 bg-blue-50/80 lg:bg-blue-50"
                        : "text-slate-700 hover:text-blue-700 hover:bg-gray-50"
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Admin Quick Links for Mobile */}
          {(userRole === 'admin' || userRole === 'Administrator') && (
            <div className="border-t border-gray-100 mt-4 pt-4 px-6 lg:hidden">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Quick Admin Actions
              </p>
              <div className="space-y-2">
                <Link
                  href="/admin/all-users/create"
                  className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  + Create New User
                </Link>
                <Link
                  href="/admin/festivals/create"
                  className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  + Add Festival
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Welcome Text for Desktop */}
          {userName && (
            <div className="hidden lg:block text-sm text-gray-600">
              <span className="font-medium">Welcome,</span>{" "}
              <span className="text-gray-800">{userName.split(' ')[0]}</span>
            </div>
          )}
          
          {/* Admin Badge for Desktop */}
          {(userRole === 'admin' || userRole === 'Administrator') && (
            <div className="hidden lg:block">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                <span className="mr-1">👑</span>
                Admin
              </span>
            </div>
          )}
          
          {/* Avatar Dropdown Button - Only toggles dropdown, no navigation */}
          <div className="relative">
            <button
              id="avatar-button"
              onClick={toggleDropdown}
              className="flex items-center gap-2 focus:outline-none group"
              aria-label="Open user menu"
              aria-expanded={isDropdownOpen}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold overflow-hidden shadow-md transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
                  {userAvatar ? (
                    <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-bold">{getUserInitials()}</span>
                  )}
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              
              {/* Dropdown arrow indicator */}
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                id="avatar-dropdown"
                className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in slide-in-from-top-2 fade-in duration-200"
              >
                {/* User Info Header */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg overflow-hidden shadow-md">
                      {userAvatar ? (
                        <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                      ) : (
                        <span>{getUserInitials()}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{userName || 'User'}</p>
                      <p className="text-xs text-gray-500">{userRole === 'admin' ? 'Administrator' : 'Member'}</p>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Your Profile</span>
                  </Link>
                  
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                  
                  <Link
                    href="/projects"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    <span>My Projects</span>
                  </Link>
                  
                  <Link
                    href="/submissions"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Submissions</span>
                  </Link>
                </div>

                {/* Admin Section */}
                {(userRole === 'admin' || userRole === 'Administrator') && (
                  <div className="border-t border-gray-100 py-2">
                    <div className="px-4 py-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Admin</p>
                    </div>
                    <Link
                      href="/admin/dashboard"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>Admin Dashboard</span>
                    </Link>
                    <Link
                      href="/admin/all-users"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>Manage Users</span>
                    </Link>
                  </div>
                )}

                {/* Logout Button */}
                <div className="border-t border-gray-100 py-2">
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      // Handle logout
                      const handleLogout = async () => {
                        try {
                          const token = localStorage.getItem('token');
                          if (token) {
                            await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/logout`, {
                              method: 'POST',
                              headers: { 'Authorization': `Bearer ${token}` }
                            });
                          }
                        } catch (error) {
                          console.error('Logout error:', error);
                        } finally {
                          localStorage.removeItem('token');
                          localStorage.removeItem('user');
                          window.location.href = '/login';
                        }
                      };
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;