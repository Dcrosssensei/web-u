import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, ChevronLeft } from 'lucide-react';

export function Layout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isDashboard = location.pathname === '/dashboard';

    return (
        <div className="min-h-screen bg-dark text-white font-sans">
            {/* Header */}
            <header className="bg-primary px-6 py-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-4">
                    {!isDashboard && (
                        <button
                            onClick={() => navigate(-1)}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <ChevronLeft size={28} />
                        </button>
                    )}
                    <h1 className="text-xl font-bold tracking-wide">Reading Quest</h1>
                </div>

                <div className="flex items-center gap-4">
                    <span className="hidden md:block text-sm font-medium opacity-90">
                        {user?.displayName || user?.email}
                    </span>
                    <div className="relative">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                            <User size={20} />
                        </button>

                        {/* Dropdown */}
                        {isMenuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-zinc-700 overflow-hidden z-50">
                                <button
                                    onClick={() => {
                                        logout();
                                        navigate('/');
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full px-4 py-3 text-left text-sm hover:bg-white/5 flex items-center gap-2 text-red-400"
                                >
                                    <LogOut size={16} />
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-6 max-w-7xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
}
