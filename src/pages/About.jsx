import { useTranslation } from 'react-i18next'
import { Target, Eye, TrendingUp, Shield, Clock, Star } from 'lucide-react'
import { FadeUp, SectionHeader, Card } from '../components/ui/index.jsx'

export default function About() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const values = [
    { icon: TrendingUp, color: 'text-primary-600 bg-primary-50 dark:bg-primary-950', title: t('about.v1'), desc: t('about.v1d') },
    { icon: Shield, color: 'text-violet-600 bg-violet-50 dark:bg-violet-950', title: t('about.v2'), desc: t('about.v2d') },
    { icon: Clock, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950', title: t('about.v3'), desc: t('about.v3d') },
    { icon: Star, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950', title: t('about.v4'), desc: t('about.v4d') },
  ]

  const team = [
    { name: 'Ahmed Hassan', role: 'Founder & CEO', color: 'from-blue-600 to-violet-600' },
    { name: 'Sarah Mohamed', role: 'CTO', color: 'from-emerald-600 to-teal-600' },
    { name: 'Omar Khalil', role: 'Head of Design', color: 'from-amber-500 to-orange-600' },
    { name: 'Nour Abdelrahman', role: 'Head of AI & Data', color: 'from-rose-600 to-pink-600' },
  ]

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-950 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="flex mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />{t('about.badge')}
                </span>
              </div>
              <h1 className={`text-4xl md:text-5xl font-bold text-white mb-6 leading-tight ${isRTL ? 'font-arabic' : ''}`}>{t('about.title')}</h1>
              <p className={`text-slate-400 text-lg leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{t('about.story')}</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[{ val: '150+', label: 'Projects Delivered' }, { val: '98%', label: 'Client Satisfaction' }, { val: '5+', label: 'Years in Business' }, { val: '30+', label: 'Team Members' }].map(({ val, label }, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <div className={`text-3xl font-bold text-white mb-1 ${isRTL ? 'font-arabic' : ''}`}>{val}</div>
                    <div className={`text-xs text-slate-500 ${isRTL ? 'font-arabic' : ''}`}>{label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              { icon: Target, title: t('about.mission'), text: t('about.missionText'), color: 'text-primary-600 bg-primary-50 dark:bg-primary-950' },
              { icon: Eye, title: t('about.vision'), text: t('about.visionText'), color: 'text-violet-600 bg-violet-50 dark:bg-violet-950' },
            ].map(({ icon: Icon, title, text, color }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="p-8 h-full">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon size={22} />
                  </div>
                  <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-3 ${isRTL ? 'font-arabic' : ''}`}>{title}</h3>
                  <p className={`text-slate-500 dark:text-slate-400 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{text}</p>
                </Card>
              </FadeUp>
            ))}
          </div>

          <SectionHeader badge={t('about.values')} title={t('about.values')} center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, color, title, desc }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="p-6 h-full">
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={18} />
                  </div>
                  <h4 className={`font-bold text-slate-900 dark:text-white mb-2 ${isRTL ? 'font-arabic' : ''}`}>{title}</h4>
                  <p className={`text-slate-500 dark:text-slate-400 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{desc}</p>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader badge={t('about.team')} title={t('about.team')} subtitle={t('about.teamSubtitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, color }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="p-6 text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <span className="text-white text-2xl font-bold">{name[0]}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{role}</p>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
