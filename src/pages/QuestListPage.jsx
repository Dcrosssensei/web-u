import { useParams } from 'react-router-dom';
import { useQuests } from '../context/QuestContext';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, Check } from 'lucide-react';

export function QuestListPage() {
    const { status } = useParams(); // 'completed' or 'reading'
    const { getQuestsByStatus, updateQuest } = useQuests();

    const quests = getQuestsByStatus(status);

    const title = status === 'completed' ? 'Completed Quests' : 'Quests in Motion';
    const Icon = status === 'completed' ? CheckCircle : BookOpen;
    const colorGradient = status === 'completed' ? 'from-green-500/20 to-green-600/20' : 'from-orange-500/20 to-red-600/20';

    const handleCompleteQuest = (questId) => {
        updateQuest(questId, { status: 'completed', date: new Date().toISOString().split('T')[0] });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorGradient} border border-white/10 flex items-center justify-center`}>
                    <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                        <Icon size={32} className="text-gray-400" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white">{title}</h2>
            </div>

            <div className="space-y-4">
                {quests.length === 0 ? (
                    <div className="text-center text-gray-400 py-12 bg-card rounded-2xl border border-zinc-700">
                        <p>No quests found in this category.</p>
                    </div>
                ) : (
                    quests.map((quest, index) => (
                        <motion.div
                            key={quest.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-lg"
                        >
                            <div className="w-20 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                                {quest.imageUrl ? (
                                    <img src={quest.imageUrl} alt={quest.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Cover</div>
                                )}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-900">{quest.title}</h3>
                                <p className="text-gray-600 text-sm">{quest.author}</p>
                                <p className="text-gray-400 text-xs mt-2">
                                    {status === 'completed' ? `Finished: ${quest.date}` : `Started: ${quest.date}`}
                                </p>
                            </div>

                            {status === 'reading' && (
                                <button
                                    onClick={() => handleCompleteQuest(quest.id)}
                                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center gap-2 transition-colors font-medium text-sm"
                                >
                                    <Check size={18} />
                                    Complete
                                </button>
                            )}
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
}
