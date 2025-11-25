import { createContext, useContext, useState, useEffect } from 'react';

const QuestContext = createContext(null);

const STORAGE_KEY = 'reading_quest_data';

export function QuestProvider({ children }) {
    const [quests, setQuests] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(quests));
    }, [quests]);

    const addQuest = (quest) => {
        const newQuest = { ...quest, id: Date.now().toString(), status: quest.status || 'reading' };
        setQuests(prev => [...prev, newQuest]);
    };

    const updateQuest = (id, updates) => {
        setQuests(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q));
    };

    const deleteQuest = (id) => {
        setQuests(prev => prev.filter(q => q.id !== id));
    };

    const getQuestsByStatus = (status) => {
        return quests.filter(q => q.status === status);
    };

    return (
        <QuestContext.Provider value={{ quests, addQuest, updateQuest, deleteQuest, getQuestsByStatus }}>
            {children}
        </QuestContext.Provider>
    );
}

export const useQuests = () => {
    const context = useContext(QuestContext);
    if (!context) {
        throw new Error('useQuests must be used within a QuestProvider');
    }
    return context;
};
