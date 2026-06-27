import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react'
import { FadeUp, SectionHeader, Card } from '../components/ui/index.jsx'

export default function Portfolio() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const projects = [
    { title: t('portfolio.p1Title'), desc: t('portfolio.p1Desc'), value: t('portfolio.p1Value'), tags: ['React.js', 'Node.js', 'PostgreSQL', 'Redis'], gradient: 'from-blue-600 via-violet-600 to-blue-700', category: 'Education', metric: '60% Cost Reduction' },
    { title: t('portfolio.p2Title'), desc: t('portfolio.p2Desc'), value: t('portfolio.p2Value'), tags: ['.NET Core', 'SQL Server', 'React', 'Azure'], gradient: 'from-emerald-600 via-teal-600 to-emerald-700', category: 'CRM / Sales', metric: '200% Pipeline Visibility' },
    { title: t('portfolio.p3Title'), desc: t('portfolio.p3Desc'), value: t('portfolio.p3Value'), tags: ['Python', 'Power BI', 'Azure', 'SQL Server'], gradient: 'from-amber-500 via-orange-500 to-rose-500', category: 'Analytics', metric: 'ROI in 4 Months' },
    { title: t('portfolio.p4Title'), desc: t('portfolio.p4Desc'), value: t('portfolio.p4Value'), tags: ['OpenAI API', 'LangChain', 'Node.js', 'AWS'], gradient: 'from-rose-600 via-pink-600 to-rose-700', category: 'AI / Automation', metric: '2,400+ Hours Saved/Month' },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-950 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/8 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />{t('portfolio.badge')}
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('portfolio.title')}</h1>
            <p className={`text-lg text-slate-400 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>{t('portfolio.subtitle')}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Card className="overflow-hidden group cursor-pointer h-full flex flex-col">
                  <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-5 left-5">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/20">
                        <TrendingUp size={12} className="text-white" />
                        <span className="text-white text-xs font-semibold">{p.metric}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-2.5 py-1 bg-white/15 text-white text-xs font-medium rounded-lg">{p.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-5 flex gap-2 flex-wrap">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-black/20 text-white text-xs font-medium rounded-lg backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className={`font-bold text-slate-900 dark:text-white text-xl mb-2 ${isRTL ? 'font-arabic' : ''}`}>{p.title}</h3>
                    <p className={`text-slate-500 dark:text-slate-400 text-sm mb-5 flex-1 ${isRTL ? 'font-arabic' : ''}`}>{p.desc}</p>
                    <div className="p-4 bg-primary-50 dark:bg-primary-950 rounded-xl border border-primary-100 dark:border-primary-900 mb-5">
                      <p className={`text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1 ${isRTL ? 'font-arabic' : ''}`}>{t('portfolio.businessValue')}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                        <p className={`text-primary-700 dark:text-primary-300 text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>{p.value}</p>
                      </div>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-sm font-semibold hover:gap-2.5 transition-all">
                      {t('portfolio.viewProject')} <ArrowRight size={14} />
                    </Link>
                  </div>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
