import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

        const baseLink =
            'inline-flex items-center font-semibold px-4 py-2 rounded-xl transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60';
        const outlineLink = 'hover:text-cyan-300';
    const activeLink = 'text-cyan-300';

    return (
        <header className="sticky top-0 z-50 bg-black/90 border-b border-neon-purple/30">
            <nav className="w-[92%] max-w-[100%] mx-auto">
                <div className="flex items-center justify-between py-2">
                    {/* Brand */}
                    <Link to="/" className="font-display font-extrabold tracking-wide text-xl md:text-2xl">
                        Block<span className='text-cyan-300'>Cert</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-2">
                        <NavLink
                            to="/verify"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : outlineLink}`}
                        >
                            Verify Certificate
                        </NavLink>
                        <NavLink
                            to="/university"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : outlineLink}`}
                        >
                            Upload Certificate
                        </NavLink>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        aria-label="Toggle menu"
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 hover:border-neon-blue text-white/80"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"><path fill="currentColor" d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
                        )}
                    </button>
                </div>

                {/* Mobile panel */}
                {open && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col gap-2">
                            <NavLink
                                to="/verify"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) => `${baseLink} ${isActive ? activeLink : outlineLink}`}
                            >
                                Verify Certificate
                            </NavLink>
                            <NavLink
                                to="/university"
                                onClick={() => setOpen(false)}
                                className={({ isActive }) => `${baseLink} ${isActive ? activeLink : outlineLink}`}
                            >
                                Upload Certificate
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar