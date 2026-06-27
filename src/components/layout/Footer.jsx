import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const companyLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const serviceLinks = [
    t('services.s1'), t('services.s2'), t('services.s3'),
    t('services.s4'), t('services.s6'), t('services.s7'),
  ]

  return (
    <footer className="bg-slate-950 dark:bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className={`font-bold text-xl ${isRTL ? 'font-arabic' : ''}`}>Synaptech</span>
            </div>
            <p className={`text-slate-400 text-sm leading-relaxed mb-6 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-600/20 flex items-center justify-center text-slate-400 hover:text-primary-400 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className={`font-semibold text-xs uppercase tracking-wider text-slate-500 mb-5 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={`text-slate-400 hover:text-white text-sm transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold text-xs uppercase tracking-wider text-slate-500 mb-5 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <Link to="/services" className={`text-slate-400 hover:text-white text-sm transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold text-xs uppercase tracking-wider text-slate-500 mb-5 ${isRTL ? 'font-arabic' : ''}`}>
              {t('contact.info')}
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Mail, val: t('contact.emailAddr') },
                { icon: Phone, val: t('contact.phone') },
                { icon: MapPin, val: t('contact.location') },
              ].map(({ icon: Icon, val }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon size={15} className="text-primary-400 mt-0.5 shrink-0" />
                  <span className={`text-slate-400 text-sm ${isRTL ? 'font-arabic' : ''}`}>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-slate-600 text-sm ${isRTL ? 'font-arabic' : ''}`}>{t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <a href="#" className={`text-slate-600 hover:text-slate-300 text-sm transition-colors ${isRTL ? 'font-arabic' : ''}`}>{t('footer.privacy')}</a>
            <a href="#" className={`text-slate-600 hover:text-slate-300 text-sm transition-colors ${isRTL ? 'font-arabic' : ''}`}>{t('footer.terms')}</a>
            <span className="text-slate-700 text-sm">{t('footer.madeWith')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
