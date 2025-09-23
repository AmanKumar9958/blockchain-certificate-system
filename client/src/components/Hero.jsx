import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
    const [ref, isVisible] = useScrollAnimation();
    
    return (
        <section ref={ref} className={`relative w-[92%] max-w-[1200px] mx-auto py-20 md:py-28 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Background Glows and Grids */}
            <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.1)_0%,_transparent_50%)]" />
                <div className="absolute -top-40 -left-60 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute -bottom-40 -right-60 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Headline & CTAs */}
                <div className="text-center lg:text-left">
                    <h1 className="font-extrabold text-4xl md:text-6xl tracking-tighter">
                        Secure & Verify Certificates on the
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                            Blockchain
                        </span>
                    </h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mt-6">
                        Revolutionizing academic and professional credentials with unparalleled transparency, security, and efficiency.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start gap-4">
                            <Link to="/verify" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/30 transform hover:scale-105 transition-transform">
                                Verify Certificate
                            </Link>
                            <Link to="/university" className="inline-block px-8 py-3 rounded-full bg-slate-700/50 text-white font-semibold transform hover:bg-slate-700 hover:scale-105 transition-all">
                                Upload Certificate
                            </Link>
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="relative">
                    <div className="relative aspect-square p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 shadow-2xl shadow-slate-900/50">
                        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                            <div className="absolute top-0 left-1/2 w-16 h-16 bg-cyan-400/50 rounded-full blur-xl"></div>
                        </div>
                            <div className="absolute inset-0 animate-[spin_30s_linear_infinite_reverse]">
                            <div className="absolute bottom-1/4 right-0 w-24 h-24 bg-blue-500/50 rounded-full blur-2xl"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-40 h-40 text-slate-600/50 opacity-50">
                                <path fill="currentColor" d="M12 22S3 17 3 10V5l9-3 9 3v5c0 7-9 7-9 7Z"/>
                            </svg>
                        </div>
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center bg-slate-900/30 backdrop-blur-md rounded-xl border border-slate-700">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Immutable Ledger</h3>
                            <p className="text-slate-400 mt-2 text-sm max-w-xs">
                                Every certificate is cryptographically signed and recorded forever.
                            </p>
                            <div className="mt-4 text-green-400 font-mono text-xs flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                System Operational
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
