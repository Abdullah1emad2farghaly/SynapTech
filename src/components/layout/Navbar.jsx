import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../lib/ThemeContext'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isRTL = i18n.language === 'ar'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('synaptech_lang', next)
  }

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/solutions', label: t('nav.solutions') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/about', label: t('nav.about') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const scrolledClass = scrolled
    ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-sm border-b border-slate-100 dark:border-slate-800'
    : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: '72px' }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/30 group-hover:shadow-primary-600/50 transition-shadow">
            <span className="text-white font-bold text-sm tracking-tight">S</span>
          </div>
          <span className={`font-bold text-xl text-slate-900 dark:text-white ${isRTL ? 'font-arabic' : ''}`}>
            Synaptech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                pathname === to
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            <Globe size={16} />
            <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <Link
            to="/contact"
            className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-md shadow-primary-600/25 hover:shadow-primary-600/40"
          >
            {t('nav.startProject')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Globe size={18} />
          </button>
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 shadow-xl"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    pathname === to
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-primary-600 text-white text-sm font-semibold rounded-xl"
                >
                  {t('nav.startProject')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
