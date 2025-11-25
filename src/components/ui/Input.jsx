import { cn } from '../../utils/cn';

export function Input({ label, className, labelClassName, ...props }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && <label className={cn("text-sm font-medium ml-1", labelClassName || "text-gray-300")}>{label}</label>}
            <input
                className={cn(
                    "w-full px-4 py-3 rounded-xl bg-white text-black placeholder-gray-400 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300",
                    className
                )}
                {...props}
            />
        </div>
    );
}
