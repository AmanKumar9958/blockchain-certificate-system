import React from 'react'
import { useState } from 'react';

const Hero = () => {
    const [showImage, setShowImage] = useState(true);
    return (
        <section className="relative w-[92%] max-w-[1200px] mx-auto py-12 md:py-20">
            {/* Accent background glows */}
            <div aria-hidden className="pointer-events-none absolute -z-10 inset-0">
                <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-neon-purple/15 blur-3xl" />
                <div className="absolute top-10 right-0 w-[420px] h-[420px] rounded-full bg-neon-blue/10 blur-3xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Headline & CTAs */}
                <div>
                    <h1 className="font-display font-extrabold leading-tight text-4xl md:text-6xl">
                        Verify & Upload <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-300 drop-shadow-[0_0_22px_rgba(56,189,248,.45)]">Certificates</span> on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-300 drop-shadow-[0_0_22px_rgba(56,189,248,.45)]">Blockchain</span>
                        <br />
                    </h1>
                    <p className="text-slate-300/80 text-base md:text-lg max-w-[560px] mt-4">
                        Revolutionizing certificate verification with transparency, security, and efficiency.
                    </p>
                </div>

                {/* Right: Illustration */}
                <div className="relative">
                    {showImage && (
                        <img
                            src="/bg_image_1.jpg"
                            alt="Blockchain illustration"
                            className="w-full h-auto rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                            onError={() => setShowImage(false)}
                        />
                    )}

                    {/* Fallback neon illustration if image missing */}
                    {!showImage && (
                        <div className="relative overflow-hidden rounded-xl border border-neon-purple/30 bg-white/5 backdrop-blur-md p-6 aspect-[16/10]">
                            {/* chain link */}
                            <svg viewBox="0 0 512 512" className="absolute -top-10 right-2 w-60 text-neon-blue/70">
                                <path fill="currentColor" d="M326.6 185.4c-12.5-12.5-12.5-32.8 0-45.3l56-56c37.5-37.5 98.3-37.5 135.8 0s37.5 98.3 0 135.8l-56 56c-37.5 37.5-98.3 37.5-135.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c12.5 12.5 32.8 12.5 45.3 0l56-56c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-56 56c-12.5 12.5-32.8 12.5-45.3 0zM185.4 326.6c12.5 12.5 12.5 32.8 0 45.3l-56 56c-37.5 37.5-98.3 37.5-135.8 0s-37.5-98.3 0-135.8l56-56c37.5-37.5 98.3-37.5 135.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0c-12.5-12.5-32.8-12.5-45.3 0l-56 56c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l56-56c12.5-12.5 32.8-12.5 45.3 0zM187.3 324.7c-12.5-12.5-12.5-32.8 0-45.3l137.9-137.9c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L232.7 324.7c-12.5 12.5-32.8 12.5-45.3 0z"/>
                            </svg>
                            {/* hand-like blob */}
                            <div className="absolute -bottom-6 left-0 w-[420px] h-[220px] bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-2xl rounded-[100px] rotate-[-8deg]" />
                            {/* particles */}
                            <div className="absolute top-6 right-10 w-2 h-2 bg-neon-blue rounded-full blur-[1px] animate-pulse" />
                            <div className="absolute top-16 right-24 w-1.5 h-1.5 bg-neon-purple rounded-full blur-[1px] animate-pulse" />
                            <div className="absolute top-8 right-40 w-1 h-1 bg-white/70 rounded-full animate-pulse" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Hero