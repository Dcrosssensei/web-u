import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { useNavigate } from 'react-router-dom';

export function AuthModal({ isOpen, onClose, mode }) { // mode: 'login' | 'register'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); // Only for register
    const [error, setError] = useState('');
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (mode === 'login') {
                await login(email, password);
            } else {
                await register(email, password);
            }
            onClose();
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to ' + mode + '. ' + err.message);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-primary p-8 rounded-3xl w-full max-w-md relative shadow-2xl shadow-primary/20"
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <h2 className="text-3xl font-bold text-white mb-2 text-center">
                        {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p className="text-white/60 text-center mb-8">
                        {mode === 'login' ? 'Enter your details to access your quests' : 'Start your reading journey today'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {mode === 'register' && (
                            <Input
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                                className="bg-white text-black"
                            />
                        )}
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="bg-white text-black"
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="bg-white text-black"
                        />

                        {error && <p className="text-red-300 text-sm text-center">{error}</p>}

                        <Button
                            type="submit"
                            className="w-full bg-indigo-900 hover:bg-indigo-950 text-white mt-4"
                        >
                            {mode === 'login' ? 'Log In' : 'Sign Up'}
                        </Button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
