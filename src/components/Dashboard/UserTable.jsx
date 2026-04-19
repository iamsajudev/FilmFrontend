"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const UserTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedRole, setSelectedRole] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [currentUser, setCurrentUser] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const [updatingStatus, setUpdatingStatus] = useState(null);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://server.nybff.us';

    // Fetch users from API
    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError("");

            const token = localStorage.getItem('token');

            if (!token) {
                throw new Error("No authentication token found. Please login again.");
            }

            const response = await fetch(`${API_URL}/api/admin/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Session expired. Please login again.");
                }
                if (response.status === 403) {
                    throw new Error("Access denied. Admin only.");
                }
                throw new Error(`Failed to fetch users: ${response.status}`);
            }

            const data = await response.json();

            // Handle different response structures
            let usersArray = [];
            if (Array.isArray(data)) {
                usersArray = data;
            } else if (data.users && Array.isArray(data.users)) {
                usersArray = data.users;
            } else if (data.data && Array.isArray(data.data)) {
                usersArray = data.data;
            } else {
                throw new Error("Invalid data format received from server");
            }

            setUsers(usersArray);

        } catch (error) {
            console.error("Error fetching users:", error);
            setError(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();

        // Get current logged-in user
        const token = localStorage.getItem('token');
        if (token) {
            try {
                // Decode token to get user info
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const decoded = JSON.parse(atob(base64));
                setCurrentUser(decoded);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, []);

    const handleDeleteUser = async (userId) => {
        if (!userId) {
            toast.error("User ID is missing");
            return;
        }

        if (!confirm(`Are you sure you want to delete this user? This action cannot be undone.`)) {
            return;
        }

        try {
            setDeletingId(userId);

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("No authentication token found. Please login again.");
            }

            const response = await fetch(`${API_URL}/api/admin/users/${userId}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `Failed to delete user: ${response.status}`);
            }

            // Remove user from state
            setUsers(prevUsers => prevUsers.filter(user => {
                const userIdField = user._id || user.id;
                return userIdField !== userId;
            }));

            toast.success(data.message || "User deleted successfully");

        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error(error.message || "Failed to delete user. Please try again.");
        } finally {
            setDeletingId(null);
        }
    };

    const handleUpdateStatus = async (userId, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        
        if (!confirm(`Are you sure you want to ${newStatus} this user?`)) {
            return;
        }

        try {
            setUpdatingStatus(userId);

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("No authentication token found.");
            }

            const response = await fetch(`${API_URL}/api/admin/users/${userId}/status`, {
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isActive: newStatus === 'active' })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to update status");
            }

            // Update user in state
            setUsers(prevUsers => prevUsers.map(user => {
                const userIdField = user._id || user.id;
                if (userIdField === userId) {
                    return { ...user, isActive: newStatus === 'active', status: newStatus };
                }
                return user;
            }));

            toast.success(`User ${newStatus}d successfully`);

        } catch (error) {
            console.error("Error updating status:", error);
            toast.error(error.message || "Failed to update user status");
        } finally {
            setUpdatingStatus(null);
        }
    };

    const handleUpdateRole = async (userId, newRole) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("No authentication token found.");
            }

            const response = await fetch(`${API_URL}/api/admin/users/${userId}/role`, {
                method: "PATCH",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role: newRole })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to update role");
            }

            // Update user in state
            setUsers(prevUsers => prevUsers.map(user => {
                const userIdField = user._id || user.id;
                if (userIdField === userId) {
                    return { ...user, role: newRole };
                }
                return user;
            }));

            toast.success(`User role updated to ${newRole}`);

        } catch (error) {
            console.error("Error updating role:", error);
            toast.error(error.message || "Failed to update user role");
        }
    };

    // Filter users based on search, role, and status
    const getFilteredUsers = () => {
        if (!Array.isArray(users)) {
            return [];
        }

        return users.filter(user => {
            const userName = user.name || user.fullName || user.username || '';
            const userEmail = user.email || '';

            const matchesSearch =
                userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                userEmail.toLowerCase().includes(searchTerm.toLowerCase());

            const userRole = user.role || 'user';
            const matchesRole = selectedRole === "all" || userRole === selectedRole;

            const userStatus = user.isActive !== undefined ? (user.isActive ? 'active' : 'inactive') : 'active';
            const matchesStatus = selectedStatus === "all" || userStatus === selectedStatus;

            return matchesSearch && matchesRole && matchesStatus;
        });
    };

    // Get user ID from different possible field names
    const getUserId = (user) => {
        return user._id || user.id;
    };

    // Get profile image
    const getProfileImage = (user) => {
        if (user.profileImage) {
            if (user.profileImage.startsWith('data:image') || user.profileImage.startsWith('http')) {
                return user.profileImage;
            }
        }
        if (user.avatar) {
            if (user.avatar.startsWith('data:image') || user.avatar.startsWith('http')) {
                return user.avatar;
            }
        }
        return null;
    };

    // Get user initials for avatar fallback
    const getInitials = (name) => {
        if (!name) return 'U';
        const parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-6 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading users...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-6 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <svg className="w-12 h-12 text-red-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Users</h3>
                        <p className="text-red-600 mb-4">{error}</p>
                        <button
                            onClick={fetchUsers}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const displayedUsers = getFilteredUsers();

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
                        <p className="text-gray-600 mt-1">View, edit, and manage all registered users</p>
                    </div>
                    <Link
                        href="/admin/all-users/create"
                        className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Create New User
                    </Link>
                </div>

                {/* Search and Filter */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search users by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                            />
                        </div>
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                        >
                            <option value="all">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="moderator">Moderator</option>
                        </select>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <button
                            onClick={fetchUsers}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                            title="Refresh users"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                                    <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {displayedUsers.map((user) => {
                                    const userId = getUserId(user);
                                    const userName = user.name || user.fullName || user.username || 'Unknown';
                                    const userEmail = user.email || '';
                                    const userRole = user.role || 'user';
                                    const userStatus = user.isActive !== undefined ? (user.isActive ? 'active' : 'inactive') : 'active';
                                    const joinDate = user.createdAt || user.joinDate;
                                    const isCurrentUser = currentUser && (currentUser.id === userId || currentUser._id === userId);
                                    const profileImage = getProfileImage(user);

                                    return (
                                        <tr key={userId} className="hover:bg-gray-50 transition">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {profileImage ? (
                                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                                                            <img
                                                                src={profileImage}
                                                                alt={userName}
                                                                className="w-full h-full object-cover"
                                                                onError={(e) => {
                                                                    e.target.style.display = 'none';
                                                                    e.target.parentElement.innerHTML = `<div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">${getInitials(userName)}</div>`;
                                                                }}
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                                                            {getInitials(userName)}
                                                        </div>
                                                    )}
                                                    <span className="font-medium text-gray-900">{userName}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{userEmail}</td>
                                            <td className="px-6 py-4">
                                                {isCurrentUser ? (
                                                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
                                                        {userRole} (You)
                                                    </span>
                                                ) : (
                                                    <select
                                                        value={userRole}
                                                        onChange={(e) => handleUpdateRole(userId, e.target.value)}
                                                        className="px-2 py-1 text-xs text-black font-medium rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                                    >
                                                        <option value="user">User</option>
                                                        <option value="moderator">Moderator</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                )}
                                            </td>
                                            <td className="px-6 py-4">
                                                {isCurrentUser ? (
                                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${userStatus === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                                        {userStatus}
                                                    </span>
                                                ) : (
                                                    <button
                                                        onClick={() => handleUpdateStatus(userId, userStatus)}
                                                        disabled={updatingStatus === userId}
                                                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full transition ${userStatus === "active"
                                                                ? "bg-green-100 text-green-700 hover:bg-green-200"
                                                                : "bg-red-100 text-red-700 hover:bg-red-200"
                                                            } ${updatingStatus === userId ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                                    >
                                                        {updatingStatus === userId ? (
                                                            <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                        ) : (
                                                            userStatus
                                                        )}
                                                    </button>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                {joinDate ? new Date(joinDate).toLocaleDateString() : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        href={`/admin/all-users/edit/${userId}`}
                                                        className="text-blue-600 hover:text-blue-700 p-1 transition"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteUser(userId)}
                                                        disabled={isCurrentUser || deletingId === userId}
                                                        className={`text-red-600 p-1 transition ${isCurrentUser || deletingId === userId ? "opacity-50 cursor-not-allowed" : "hover:text-red-700"}`}
                                                        title={isCurrentUser ? "You cannot delete your own account" : "Delete user"}
                                                    >
                                                        {deletingId === userId ? (
                                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                        ) : (
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {displayedUsers.length === 0 && (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <p className="text-gray-500">No users found</p>
                            {(searchTerm || selectedRole !== "all" || selectedStatus !== "all") && (
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedRole("all");
                                        setSelectedStatus("all");
                                    }}
                                    className="mt-2 text-blue-600 hover:text-blue-700 text-sm"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Stats Footer */}
                {users.length > 0 && (
                    <div className="mt-4 text-sm text-gray-500">
                        Showing {displayedUsers.length} of {users.length} users
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserTable;