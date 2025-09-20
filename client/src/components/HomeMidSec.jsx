import React from 'react'

const features = [
    {
        title: 'Decentralization',
        desc: 'No single entity controls the system.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-neon-blue">
                <path fill="currentColor" d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.15L19 7.1v.05L12 11 5 7.15V7.1l7-2.95Zm-7 5.2 7 3.85 7-3.85V16l-7 3.9L5 16V9.35Z"/>
            </svg>
        ),
    },
    {
        title: 'Security',
        desc: 'Encrypted and tamper-proof data.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-neon-blue">
                <path fill="currentColor" d="M12 1 4 4v6c0 5 3.4 9.74 8 11 4.6-1.26 8-6 8-11V4l-8-3Zm0 4.18 5 1.88V10c0 3.47-2.17 6.86-5 8.11C9.17 16.86 7 13.47 7 10V7.06l5-1.88ZM9.5 11A2.5 2.5 0 0 1 12 8.5 2.5 2.5 0 0 1 14.5 11v1h.5a1 1 0 0 1 1 1v2.5h-8V13a1 1 0 0 1 1-1h.5v-1Z"/>
            </svg>
        ),
    },
    {
        title: 'Transparency',
        desc: 'Public, accountable transactions.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-neon-blue">
                <path fill="currentColor" d="M10 2a8 8 0 1 0 5.29 14l4.71 4.7 1.41-1.4-4.7-4.71A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4Z"/>
            </svg>
        ),
    },
    {
        title: 'Efficiency',
        desc: 'Faster, cost‑effective processes.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-neon-blue">
                <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10h-2A8 8 0 1 1 12 4V2Zm1 3v7h6v-2h-4V5h-2Z"/>
            </svg>
        ),
    },
]

const HomeMidSec = () => {
    return (
        <section className="w-[92%] max-w-[1200px] mx-auto py-10 md:py-14">
            <div className="text-center">
                <h2 className="font-display font-extrabold text-3xl md:text-4xl">
                    Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-300">BlockCert?</span>
                </h2>
                <p className="text-slate-300/80 max-w-[720px] mx-auto mt-3">
                    A decentralized approach to certificate verification, ensuring authenticity and trust.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
                {features.map((f) => (
                    <div
                        key={f.title}
                        className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-neon-blue/40 rounded-2xl p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-cyan-900 hover:scale-105"
                    >
                        <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/10 ring-1 ring-inset ring-neon-blue/30 shadow-neon-blue">
                            {f.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{f.title}</h3>
                        <p className="text-slate-300/80 text-sm mt-1">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeMidSec