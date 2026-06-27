import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, Building2, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeUp, Card } from '../components/ui/index.jsx'

export default function Solutions() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const solutions = [
    { icon: GraduationCap, gradient: 'from-blue-600 to-violet-600', badge: 'Education', title: t('solutions.sol1'), desc: t('solutions.sol1d'), features: ['Student Lifecycle Management', 'Parent Portal & Comms', 'Teacher Dashboards', 'Academic Analytics', 'Digital Attendance', 'Fee Management'] },
    { icon: Users, gradient: 'from-emerald-600 to-teal-600', badge: 'Sales & Growth', title: t('solutions.sol2'), desc: t('solutions.sol2d'), features: ['Lead Pipeline Tracking', 'AI-Powered Scoring', 'Email Automation', 'Revenue Forecasting', 'Activity Logging', 'Custom Workflows'] },
    { icon: Building2, gradient: 'from-amber-500 to-orange-600', badge: 'Operations', title: t('solutions.sol3'), desc: t('solutions.sol3d'), features: ['Finance & Accounting', 'HR & Payroll', 'Inventory Control', 'Supply Chain', 'Purchase Orders', 'Real-Time Reporting'] },
    { icon: LineChart, gradient: 'from-rose-600 to-pink-600', badge: 'Intelligence', title: t('solutions.sol4'), desc: t('solutions.sol4d'), features: ['KPI Monitoring', 'Custom Visualizations', 'Drill-Down Analysis', 'Data Export', 'Scheduled Reports', 'Role-Based Access'] },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-950 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />{t('solutions.badge')}
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('solutions.title')}</h1>
            <p className={`text-lg text-slate-400 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>{t('solutions.subtitle')}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {solutions.map(({ icon: Icon, gradient, badge, title, desc, features }, i) => (
            <FadeUp key={i} delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className={`bg-gradient-to-br ${gradient} p-12 flex items-center justify-center relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="relative text-center">
                    <div className="w-24 h-24 bg-white/15 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                      <Icon size={40} className="text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-lg">{badge}</span>
                  </div>
                </div>
                <div className={`p-10 bg-white dark:bg-slate-900 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className={`font-bold text-slate-900 dark:text-white text-2xl mb-3 ${isRTL ? 'font-arabic' : ''}`}>{title}</h3>
                  <p className={`text-slate-500 dark:text-slate-400 leading-relaxed mb-7 ${isRTL ? 'font-arabic' : ''}`}>{desc}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span className={`text-sm text-slate-600 dark:text-slate-300 ${isRTL ? 'font-arabic' : ''}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-xl hover:bg-slate-700 dark:hover:bg-slate-100 transition-all">
                    {t('solutions.viewDetails')} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  )
}
