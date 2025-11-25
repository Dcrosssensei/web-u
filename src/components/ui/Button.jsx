import { cn } from '../../utils/cn';

export function Button({ children, className, variant = 'primary', ...props }) {
    const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary hover:bg-indigo-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50",
        secondary: "bg-card hover:bg-zinc-700 text-white border border-zinc-700",
        ghost: "bg-transparent hover:bg-white/10 text-white",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
