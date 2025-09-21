import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- Custom Hook for Scroll Animations ---
// Yeh hook batata hai ki koi component screen par dikh raha hai ya nahi.
const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Agar element screen par hai, toh isVisible ko true set karein
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Animation ko har baar scroll karne par trigger karne ke liye, isse false set karein
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Jab 10% element dikhe tab trigger ho
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isVisible];
};


const HomeBotSec = () => {
    const [ref, isVisible] = useScrollAnimation();
    
    return (
        <section ref={ref} className={`w-[92%] max-w-[1200px] mx-auto py-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-2xl bg-gradient-to-r from-cyan-500/10 via-slate-800/10 to-blue-500/10 border border-slate-700 p-10 md:p-16 overflow-hidden">
                <div aria-hidden className="absolute inset-0 -z-10">
                   <div className="absolute top-0 left-0 w-60 h-60 bg-cyan-500/20 blur-3xl"></div>
                   <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500/20 blur-3xl"></div>
                </div>
                <div className="text-center">
                    <h2 className="font-extrabold text-3xl md:text-4xl tracking-tighter">
                        Join the Future of Verification
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mt-4">
                        Ready to issue secure credentials or verify a certificate? Get started now and become part of the trust revolution.
                    </p>
                    <Link to="/verify" className="inline-block mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-lg shadow-2xl shadow-cyan-500/30 transform hover:scale-105 transition-transform">
                        Get Started Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeBotSec;

