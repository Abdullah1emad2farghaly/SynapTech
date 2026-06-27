import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Code2, Globe, Smartphone, Server, Layers, BarChart3, Brain, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import { FadeUp, SectionHeader, Card } from '../components/ui/index.jsx'

const serviceData = (t) => [
  { icon: Code2, color: 'bg-primary-600', title: t('services.s1'), desc: t('services.s1d'), points: ['Enterprise Architecture', 'Agile Development', 'Code Reviews', 'CI/CD Pipelines'] },
  { icon: Globe, color: 'bg-violet-600', title: t('services.s2'), desc: t('services.s2d'), points: ['React.js / Next.js', 'Progressive Web Apps', 'Performance Optimization', 'SEO-Ready'] },
  { icon: Smartphone, color: 'bg-emerald-600', title: t('services.s3'), desc: t('services.s3d'), points: ['iOS & Android', 'React Native', 'App Store Deployment', 'Push Notifications'] },
  { icon: Server, color: 'bg-amber-600', title: t('services.s4'), desc: t('services.s4d'), points: ['.NET Core / C#', 'Node.js / Express', 'REST & GraphQL APIs', 'Microservices'] },
  { icon: Layers, color: 'bg-rose-600', title: t('services.s5'), desc: t('services.s5d'), points: ['Design Systems', 'Component Libraries', 'Accessibility (WCAG)', 'Animation & Motion'] },
  { icon: BarChart3, color: 'bg-cyan-600', title: t('services.s6'), desc: t('services.s6d'), points: ['Power BI Dashboards', 'Data Warehousing', 'KPI Reporting', 'Predictive Analytics'] },
  { icon: Brain, color: 'bg-indigo-600', title: t('services.s7'), desc: t('services.s7d'), points: ['OpenAI Integration', 'Custom LLM Agents', 'Document AI', 'Intelligent Search'] },
  { icon: Zap, color: 'bg-teal-600', title: t('services.s8'), desc: t('services.s8d'), points: ['Workflow Automation', 'RPA Solutions', 'API Integrations', 'Process Optimization'] },
]

export default function Services() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const services = serviceData(t)

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-950 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />{t('services.badge')}
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('services.title')}</h1>
            <p className={`text-lg text-slate-400 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>{t('services.subtitle')}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, color, title, desc, points }, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <Card className="p-8 h-full">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shrink-0`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-slate-900 dark:text-white text-xl mb-1 ${isRTL ? 'font-arabic' : ''}`}>{title}</h3>
                      <p className={`text-slate-500 dark:text-slate-400 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {points.map((pt, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        <span className={`text-xs text-slate-600 dark:text-slate-400 ${isRTL ? 'font-arabic' : ''}`}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="p-10 rounded-3xl bg-primary-600 text-white">
              <h2 className={`text-2xl font-bold mb-3 ${isRTL ? 'font-arabic' : ''}`}>{t('cta.title')}</h2>
              <p className={`text-primary-200 mb-7 ${isRTL ? 'font-arabic' : ''}`}>{t('cta.subtitle')}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all">
                {t('cta.btn1')} <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
