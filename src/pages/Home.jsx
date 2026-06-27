import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, TrendingUp, Layers, Bot, Handshake,
  Code2, Globe, Smartphone, Server, BarChart3, Zap, Brain,
  CheckCircle2, ChevronRight
} from 'lucide-react'
import { FadeUp, SectionHeader, Badge, Card } from '../components/ui/index.jsx'

function HeroSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const stats = [
    { value: '150+', label: t('hero.stat1') },
    { value: '98%', label: t('hero.stat2') },
    { value: '5+', label: t('hero.stat3') },
    { value: '12+', label: t('hero.stat4') },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 dark:bg-black">
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />

      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-12 w-72 h-72 opacity-20 hidden xl:block"
      >
        <div className="w-full h-full rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-600/10 to-violet-600/10 backdrop-blur-sm" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex mb-6">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20 ${isRTL ? 'font-arabic' : ''}`}>
                  <Sparkles size={12} />
                  {t('hero.badge')}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('hero.headline').split(' ').map((word, i) =>
                ['Intelligent', 'الذكية', 'الرقمية'].includes(word)
                  ? <span key={i} className="text-gradient"> {word} </span>
                  : <span key={i}> {word} </span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg text-slate-400 leading-relaxed mb-10 max-w-lg ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('hero.subheadline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className={`inline-flex items-center gap-2 px-7 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                {t('hero.cta1')} <ArrowRight size={16} />
              </Link>
              <Link to="/services" className={`inline-flex items-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all ${isRTL ? 'font-arabic' : ''}`}>
                {t('hero.cta2')}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-14 grid grid-cols-4 gap-6"
            >
              {stats.map(({ value, label }, i) => (
                <div key={i} className="border-l border-white/10 pl-4 first:border-none first:pl-0">
                  <div className={`text-2xl font-bold text-white mb-0.5 ${isRTL ? 'font-arabic' : ''}`}>{value}</div>
                  <div className={`text-xs text-slate-500 leading-tight ${isRTL ? 'font-arabic' : ''}`}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <EcosystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EcosystemVisual() {
  const nodes = [
    { icon: Globe, label: 'Web Apps', color: 'bg-blue-500', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' },
    { icon: Smartphone, label: 'Mobile', color: 'bg-violet-500', pos: 'top-1/4 right-0 translate-x-1/3' },
    { icon: BarChart3, label: 'Analytics', color: 'bg-emerald-500', pos: 'bottom-1/4 right-0 translate-x-1/3' },
    { icon: Brain, label: 'AI', color: 'bg-rose-500', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
    { icon: Server, label: 'Backend', color: 'bg-amber-500', pos: 'bottom-1/4 left-0 -translate-x-1/3' },
    { icon: Zap, label: 'Automation', color: 'bg-cyan-500', pos: 'top-1/4 left-0 -translate-x-1/3' },
  ]
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-8 rounded-full border border-white/5" />
      <div className="absolute inset-16 rounded-full border border-white/8" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-600 to-violet-600 flex items-center justify-center shadow-2xl shadow-primary-600/40"
        >
          <span className="text-white text-3xl font-bold">S</span>
        </motion.div>
      </div>
      {nodes.map(({ icon: Icon, label, color, pos }, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos}`}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
              <Icon size={22} className="text-white" />
            </div>
            <span className="text-xs text-slate-400 font-medium">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function WhySection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const cards = [
    { icon: TrendingUp, color: 'text-primary-600 bg-primary-50 dark:bg-primary-950', title: t('why.card1Title'), desc: t('why.card1Desc') },
    { icon: Layers, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950', title: t('why.card2Title'), desc: t('why.card2Desc') },
    { icon: Bot, color: 'text-violet-600 bg-violet-50 dark:bg-violet-950', title: t('why.card3Title'), desc: t('why.card3Desc') },
    { icon: Handshake, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950', title: t('why.card4Title'), desc: t('why.card4Desc') },
  ]
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge={t('why.badge')} title={t('why.title')} subtitle={t('why.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, color, title, desc }, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <Card className="p-7 h-full">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>
                <h3 className={`font-bold text-slate-900 dark:text-white text-lg mb-3 ${isRTL ? 'font-arabic' : ''}`}>{title}</h3>
                <p className={`text-slate-500 dark:text-slate-400 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{desc}</p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const services = [
    { icon: Code2, color: 'bg-primary-600', title: t('services.s1'), desc: t('services.s1d') },
    { icon: Globe, color: 'bg-violet-600', title: t('services.s2'), desc: t('services.s2d') },
    { icon: Smartphone, color: 'bg-emerald-600', title: t('services.s3'), desc: t('services.s3d') },
    { icon: Server, color: 'bg-amber-600', title: t('services.s4'), desc: t('services.s4d') },
    { icon: BarChart3, color: 'bg-rose-600', title: t('services.s6'), desc: t('services.s6d') },
    { icon: Brain, color: 'bg-cyan-600', title: t('services.s7'), desc: t('services.s7d') },
    { icon: Zap, color: 'bg-indigo-600', title: t('services.s8'), desc: t('services.s8d') },
    { icon: Layers, color: 'bg-teal-600', title: t('services.s5'), desc: t('services.s5d') },
  ]
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge={t('services.badge')} title={t('services.title')} subtitle={t('services.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, color, title, desc }, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-100 dark:hover:border-primary-900 hover:shadow-lg hover:shadow-primary-600/5 dark:hover:shadow-primary-600/10 transition-all duration-300 cursor-pointer h-full bg-white dark:bg-slate-900">
                <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className={`font-semibold text-slate-900 dark:text-white mb-2 text-sm ${isRTL ? 'font-arabic' : ''}`}>{title}</h3>
                <p className={`text-slate-500 dark:text-slate-400 text-xs leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-primary-600 dark:text-primary-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('services.learnMore')} <ChevronRight size={12} />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.4}>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function ProcessSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const steps = [
    { key: 'p1', num: '01' }, { key: 'p2', num: '02' }, { key: 'p3', num: '03' },
    { key: 'p4', num: '04' }, { key: 'p5', num: '05' }, { key: 'p6', num: '06' },
    { key: 'p7', num: '07' },
  ]
  return (
    <section className="py-24 bg-slate-950 dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader badge={t('process.badge')} title={t('process.title')} subtitle={t('process.subtitle')} light />
        <div className="relative">
          <div className="absolute top-8 left-8 right-8 h-px bg-white/10 hidden lg:block" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map(({ key, num }, i) => (
              <FadeUp key={key} delay={i * 0.08}>
                <div className="relative text-center flex flex-col items-center">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 hover:bg-primary-600/20 hover:border-primary-500/30 transition-all group">
                    <span className="text-primary-400 font-bold text-sm group-hover:text-primary-300">{num}</span>
                  </div>
                  <h4 className={`font-semibold text-white text-sm mb-2 ${isRTL ? 'font-arabic' : ''}`}>{t(`process.${key}`)}</h4>
                  <p className={`text-slate-500 text-xs leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{t(`process.${key}d`)}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const projects = [
    { title: t('portfolio.p1Title'), desc: t('portfolio.p1Desc'), value: t('portfolio.p1Value'), tags: ['React.js', 'Node.js', 'PostgreSQL'], gradient: 'from-blue-600 to-violet-600' },
    { title: t('portfolio.p2Title'), desc: t('portfolio.p2Desc'), value: t('portfolio.p2Value'), tags: ['.NET', 'SQL Server', 'React'], gradient: 'from-emerald-600 to-teal-600' },
    { title: t('portfolio.p3Title'), desc: t('portfolio.p3Desc'), value: t('portfolio.p3Value'), tags: ['Python', 'Power BI', 'Azure'], gradient: 'from-amber-500 to-orange-600' },
    { title: t('portfolio.p4Title'), desc: t('portfolio.p4Desc'), value: t('portfolio.p4Value'), tags: ['OpenAI', 'Node.js', 'AWS'], gradient: 'from-rose-600 to-pink-600' },
  ]
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge={t('portfolio.badge')} title={t('portfolio.title')} subtitle={t('portfolio.subtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <Card className="overflow-hidden group cursor-pointer">
                <div className={`h-40 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-noise opacity-20" />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute bottom-4 left-5 flex gap-2 flex-wrap">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/20 text-white text-xs font-medium rounded-lg backdrop-blur-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`font-bold text-slate-900 dark:text-white text-lg mb-2 ${isRTL ? 'font-arabic' : ''}`}>{p.title}</h3>
                  <p className={`text-slate-500 dark:text-slate-400 text-sm mb-4 ${isRTL ? 'font-arabic' : ''}`}>{p.desc}</p>
                  <div className="p-3 bg-primary-50 dark:bg-primary-950 rounded-xl border border-primary-100 dark:border-primary-900">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
                      <p className={`text-primary-700 dark:text-primary-300 text-xs font-medium ${isRTL ? 'font-arabic' : ''}`}>{p.value}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.3}>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function TechSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const stack = [
    { label: t('tech.frontend'), techs: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { label: t('tech.backend'), techs: ['.NET Core', 'Node.js', 'REST APIs', 'GraphQL'] },
    { label: t('tech.databases'), techs: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
    { label: t('tech.data'), techs: ['Python', 'Pandas', 'Power BI', 'NumPy'] },
    { label: t('tech.ai'), techs: ['OpenAI', 'LLMs', 'LangChain', 'Automation'] },
    { label: t('tech.cloud'), techs: ['Azure', 'AWS', 'Docker', 'CI/CD'] },
  ]
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader badge={t('tech.badge')} title={t('tech.title')} subtitle={t('tech.subtitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map(({ label, techs }, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-100 dark:hover:border-primary-900 transition-all bg-white dark:bg-slate-900">
                <h4 className={`text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 ${isRTL ? 'font-arabic' : ''}`}>{label}</h4>
                <div className="flex flex-wrap gap-2">
                  {techs.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-100 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-violet-700 p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-noise opacity-30" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
            <div className="relative">
              <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : ''}`}>{t('cta.title')}</h2>
              <p className={`text-primary-200 text-lg mb-10 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>{t('cta.subtitle')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all shadow-lg ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                  {t('cta.btn1')} <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className={`inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-all ${isRTL ? 'font-arabic' : ''}`}>
                  {t('cta.btn2')}
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <TechSection />
      <CTASection />
    </>
  )
}
