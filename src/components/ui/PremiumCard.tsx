import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PremiumCardProps {
    title: string;
    description: string;
    imageSrc: string;
    category?: string;
    index: number;
}

export function PremiumCard({ title, description, imageSrc, category, index }: PremiumCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[450px] w-full overflow-hidden rounded-[2rem] bg-brand-sand/50 will-change-transform"
        >
            {/* Background Image Container with Parallax Zoom */}
            <motion.div
                className="absolute inset-0 w-full h-full overflow-hidden rounded-[2rem]"
            >
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-60 mix-blend-multiply"
                    loading="lazy"
                />
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/20 to-transparent transition-opacity duration-500 group-hover:from-brand-slate/95" />
            </motion.div>

            {/* Optional Category Pill */}
            {category && (
                <div className="absolute top-6 left-6 z-20">
                    <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                        {category}
                    </div>
                </div>
            )}

            {/* Content Container (Slides up on Hover) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 transition-transform duration-500 ease-[0.16,1,0.3,1] lg:translate-y-8 lg:group-hover:translate-y-0">

                <h3 className="font-sans text-3xl font-extrabold text-white leading-tight mb-3">
                    {title}
                </h3>

                <div className="overflow-hidden">
                    <p className="font-serif text-lg text-white/80 transition-all duration-500 ease-[0.16,1,0.3,1] lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                        {description}
                    </p>
                </div>

                {/* Hover Action Button */}
                <div className="mt-6 overflow-hidden hidden lg:block">
                    <motion.div
                        className="flex items-center font-sans text-sm font-bold text-brand-gold opacity-0 -translate-x-4 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:opacity-100 group-hover:translate-x-0"
                    >
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                </div>

                {/* Mobile-only visible Action Button */}
                <div className="mt-6 flex lg:hidden items-center font-sans text-sm font-bold text-brand-gold">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                </div>

            </div>
        </motion.div>
    );
}
