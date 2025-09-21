import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// --- SVG Icons (for a consistent look) ---
const Icons = {
    Decentralization: ( <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-300"><path fill="currentColor" d="M4.22 13.82a.75.75 0 0 1-.5-1.32L11.5 6.22a.75.75 0 0 1 1 0l7.78 6.28a.75.75 0 0 1-.5 1.32H4.22ZM12 8.31 6.35 12.32H17.65L12 8.31ZM4 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75Zm8 0a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4c0 .41-.34.75-.75.75Zm8 0a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3c0 .41-.34.75-.75.75Z"/></svg> ),
    Security: ( <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-300"><path fill="currentColor" d="M12 22S3 17 3 10V5l9-3 9 3v5c0 7-9 7-9 7Zm0-2.5c4.78 0 7-3.32 7-5.5V6.62l-7-2.33l-7 2.33v3.26c0 2.18 2.22 5.5 7 5.5Z"/></svg> ),
    Transparency: ( <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-300"><path fill="currentColor" d="m21.92 20.5-4.94-4.94A8.5 8.5 0 1 0 10.5 19a8.46 8.46 0 0 0 5.06-1.58l4.94 4.94a.75.75 0 1 0 1.06-1.06ZM10.5 17.5a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg> ),
    Efficiency: ( <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan-300"><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18.5a8.5 8.5 0 1 1 8.5-8.5a8.51 8.51 0 0 1-8.5 8.5Zm.75-12.25v5a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75c.41 0 .75.34.75.75Zm4.16 4.16L13.5 14.59v-4.1a.75.75 0 0 1 1.5 0v5a.74.74 0 0 1-.53.71a.75.75 0 0 1-.8-.21l-4-4a.75.75 0 1 1 1.06-1.06Z"/></svg> )
};

const features = [
    { title: 'Decentralization', desc: 'No single entity controls the system, ensuring fair and unbiased verification.', icon: Icons.Decentralization },
    { title: 'Cryptographic Security', desc: 'Each certificate is hashed and tamper-proof, making forgery impossible.', icon: Icons.Security },
    { title: 'Absolute Transparency', desc: 'All transactions are public, building unparalleled trust and accountability.', icon: Icons.Transparency },
    { title: 'Unmatched Efficiency', desc: 'Verify credentials in seconds, not weeks, saving time and resources.', icon: Icons.Efficiency },
];

const HomeMidSec = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section ref={ref} className={`w-[92%] max-w-[1200px] mx-auto py-20 md:py-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
                <h2 className="font-extrabold text-3xl md:text-4xl tracking-tighter">
                    The Foundation of Modern Trust
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mt-4">
                    BlockCert is built on core principles that guarantee the integrity of every certificate issued on our platform.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {features.map((f, index) => (
                    <div
                        key={f.title}
                        className={`bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:shadow-cyan-500/10`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-900 border border-slate-700">
                            {f.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-100">{f.title}</h3>
                        <p className="text-slate-400 text-sm mt-1">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeMidSec;