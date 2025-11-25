import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Plus, BookOpen } from 'lucide-react';

export function Dashboard() {
    const navigate = useNavigate();

    const menuItems = [
        { title: 'Completed Quests', path: '/quests/completed', color: 'from-green-500/20 to-green-600/20', icon: CheckCircle },
        { title: 'Start a New Quest', path: '/new-quest', color: 'from-primary/20 to-indigo-600/20', icon: Plus },
        { title: 'Quests in Motion', path: '/quests/reading', color: 'from-orange-500/20 to-red-600/20', icon: BookOpen },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
                {menuItems.map((item, index) => (
                    <motion.button
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(item.path)}
                        className="flex flex-col items-center gap-6 group"
                    >
                        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm`}>
                            <div className="w-40 h-40 rounded-full bg-card group-hover:bg-zinc-800 transition-colors flex items-center justify-center">
                                <item.icon size={64} className="text-gray-400 group-hover:text-white transition-colors opacity-80" />
                            </div>
                        </div>
                        <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors text-center">
                            {item.title}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
