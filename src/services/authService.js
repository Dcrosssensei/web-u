// Mock Auth Service mimicking Firebase Auth

const STORAGE_KEY = 'reading_quest_user';

export const authService = {
    async signInWithEmailAndPassword(email, password) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (email === 'fail@test.com') {
            throw new Error('Invalid credentials');
        }

        const user = {
            uid: 'mock-user-123',
            email,
            displayName: email.split('@')[0],
            photoURL: null
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        return user;
    },

    async createUserWithEmailAndPassword(email, password) {
        await new Promise(resolve => setTimeout(resolve, 800));

        const user = {
            uid: 'mock-user-' + Date.now(),
            email,
            displayName: email.split('@')[0],
            photoURL: null
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        return user;
    },

    async signOut() {
        await new Promise(resolve => setTimeout(resolve, 400));
        localStorage.removeItem(STORAGE_KEY);
    },

    // Mocking onAuthStateChanged
    onAuthStateChanged(callback) {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        if (storedUser) {
            callback(JSON.parse(storedUser));
        } else {
            callback(null);
        }
        // Return unsubscribe function
        return () => { };
    }
};
