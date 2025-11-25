import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, LogIn } from 'lucide-react';
import { AuthModal } from '../components/AuthModal';

export function LandingPage() {
    const [authMode, setAuthMode] = useState(null); // 'login' | 'register' | null

    return (
        <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">Reading Quest</h1>
                <p className="text-gray-400 max-w-lg mx-auto text-lg">
                    Track your reading journey, discover new worlds, and complete your quests.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center">
                {/* New Reader */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAuthMode('register')}
                    className="group flex flex-col items-center gap-6"
                >
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <div className="w-40 h-40 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors flex items-center justify-center">
                            <UserPlus size={64} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                        </div>
                    </div>
                    <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">New Reader</span>
                </motion.button>

                {/* Active Reader */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setAuthMode('login')}
                    className="group flex flex-col items-center gap-6"
                >
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <div className="w-40 h-40 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors flex items-center justify-center">
                            <LogIn size={64} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                        </div>
                    </div>
                    <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">Active Reader</span>
                </motion.button>
            </div>

            <AuthModal
                isOpen={!!authMode}
                mode={authMode}
                onClose={() => setAuthMode(null)}
            />
        </div>
    );
}
