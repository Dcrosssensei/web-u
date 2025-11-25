import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuests } from '../context/QuestContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export function NewQuestPage() {
    const navigate = useNavigate();
    const { addQuest } = useQuests();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
        imageUrl: '',
        status: 'reading',
        pages: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addQuest(formData);
        navigate('/dashboard');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center">
                        <Plus size={32} className="text-gray-400" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white">Start a New Quest</h2>
            </div>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl shadow-xl text-gray-900"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Book's Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        labelClassName="text-gray-700"
                    />
                    <Input
                        label="Book's Author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        labelClassName="text-gray-700"
                    />

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        />
                    </div>

                    <Input
                        label="Book's url Image"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        placeholder="https://..."
                        labelClassName="text-gray-700"
                    />

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none"
                        >
                            <option value="reading">Reading</option>
                            <option value="completed">Completed</option>
                            <option value="wishlist">Wishlist</option>
                        </select>
                    </div>

                    <Input
                        label="Book's Pages"
                        name="pages"
                        type="number"
                        value={formData.pages}
                        onChange={handleChange}
                        labelClassName="text-gray-700"
                    />
                </div>

                <div className="mt-8">
                    <Button type="submit" className="w-full py-4 text-lg bg-primary hover:bg-indigo-700">
                        ADD NEW QUEST
                    </Button>
                </div>
            </motion.form>
        </div>
    );
}
