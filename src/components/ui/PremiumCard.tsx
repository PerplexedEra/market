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
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group card-outseta overflow-hidden"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl bg-brand-sand/30">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                />
                {/* Category Pill */}
                {category && (
                    <div className="absolute top-5 left-5 z-10">
                        <div className="pill">
                            {category}
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-7 sm:p-8">
                <h3 className="font-sans text-xl font-extrabold text-brand-navy leading-tight tracking-tight">
                    {title}
                </h3>

                <p className="mt-3 font-serif text-base text-brand-navy/60 leading-relaxed italic">
                    {description}
                </p>

                <div className="mt-6 flex items-center font-sans text-sm font-bold text-brand-blue opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </div>
        </motion.div>
    );
}
