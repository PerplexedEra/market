export function MarkerUnderline({ className = "", color = "#1E40AF" }: { className?: string; color?: string }) {
    return (
        <svg
            className={`absolute bottom-0 left-0 w-full h-auto translate-y-1/2 pointer-events-none ${className}`}
            viewBox="0 0 100 20"
            fill="none"
            preserveAspectRatio="none"
        >
            <path
                d="M2,15 Q50,5 98,12"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                style={{ animation: "draw 1s ease-out forwards", strokeDasharray: 100, strokeDashoffset: 100 }}
            />
            <style>{`@keyframes draw { to { stroke-dashoffset: 0; } }`}</style>
        </svg>
    );
}

export function HandArrow({ className = "", color = "#1E40AF" }: { className?: string; color?: string }) {
    return (
        <svg
            className={`w-12 h-12 pointer-events-none ${className}`}
            viewBox="0 0 100 100"
            fill="none"
        >
            <path
                d="M20,20 Q60,10 80,60 M70,50 L80,60 L90,40"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ animation: "draw 1s ease-out forwards", strokeDasharray: 200, strokeDashoffset: 200 }}
            />
        </svg>
    );
}
