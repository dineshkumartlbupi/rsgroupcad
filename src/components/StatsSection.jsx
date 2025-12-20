import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { Handshake, FileCog, Layers, Globe } from 'lucide-react';

const stats = [
    { icon: <Handshake className="w-8 h-8" />, value: "200+", label: "Success Stories" },
    { icon: <FileCog className="w-8 h-8" />, value: "150k+", label: "Project Delivered" },
    { icon: <Layers className="w-8 h-8" />, value: "10x", label: "Multiple Services" },
    { icon: <Globe className="w-8 h-8" />, value: "24/7", label: "Global Operations" },
];

const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse the value
    const match = value.match(/(\d+(?:\.\d+)?)/);
    const numericValue = match ? parseFloat(match[0]) : 0;
    const prefix = match ? value.slice(0, match.index) : "";
    const suffix = match ? value.slice(match.index + match[0].length) : value;

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (Number.isInteger(numericValue)) {
            return Math.floor(latest);
        } else {
            return latest.toFixed(1);
        }
    });

    useEffect(() => {
        if (isInView && match) {
            const controls = animate(count, numericValue, { duration: 2.5, ease: "circOut" });
            return controls.stop;
        }
    }, [isInView, numericValue, count, match]);

    if (!match) return <span>{value}</span>;

    return (
        <span ref={ref} className="inline-flex">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border-2 border-[#E6A93E] flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="text-[#001528] mb-2 md:mb-3 p-2 md:p-3 bg-gray-50 rounded-full">
                            {React.cloneElement(stat.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
                        </div>
                        <h3 className="text-xl md:text-3xl font-extrabold text-[#001528] mb-1">
                            <Counter value={stat.value} />
                        </h3>
                        <p className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide uppercase">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection; 
