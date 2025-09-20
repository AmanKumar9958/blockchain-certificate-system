import React from 'react'
import { Link } from 'react-router-dom'

const HomeBotSec = () => {
    return (
        <section className="w-[92%] max-w-[1200px] mx-auto py-10 md:py-14">
            <div className="text-center">
                <h2 className="font-display font-extrabold text-3xl md:text-4xl">
                    Let's<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-cyan-300">Try</span>
                </h2>
                <div className='mt-4 flex flex-col md:flex-row justify-center gap-4'>
                    <Link to="/verify" className="inline-block mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold shadow-[0_8px_24px_rgba(124,58,237,.35)] hover:scale-105 transition">
                        Verify a Certificate
                    </Link>
                    <Link to="/university" className="inline-block mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold shadow-[0_8px_24px_rgba(124,58,237,.35)] hover:scale-105 transition">
                        University Login
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeBotSec