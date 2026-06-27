import { useTranslation } from 'react-i18next'
import { ArrowRight, Clock } from 'lucide-react'
import { FadeUp, SectionHeader, Card } from '../components/ui/index.jsx'

export default function Blog() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const posts = [
    { key: 'b1', gradient: 'from-blue-600 to-violet-600', category: 'Automation', readTime: 7 },
    { key: 'b2', gradient: 'from-emerald-600 to-teal-600', category: 'Strategy', readTime: 9 },
    { key: 'b3', gradient: 'from-amber-500 to-orange-600', category: 'AI', readTime: 6 },
    { key: 'b4', gradient: 'from-rose-600 to-pink-600', category: 'Data', readTime: 8 },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-950 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />{t('blog.badge')}
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('blog.title')}</h1>
            <p className={`text-lg text-slate-400 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>{t('blog.subtitle')}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map(({ key, gradient, category, readTime }, i) => (
              <FadeUp key={key} delay={i * 0.1}>
                <Card className="overflow-hidden cursor-pointer group h-full flex flex-col">
                  <div className={`h-44 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-noise opacity-20" />
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-4 left-5">
                      <span className="px-2.5 py-1 bg-white/20 text-white text-xs font-medium rounded-lg backdrop-blur-sm">{category}</span>
                    </div>
                    <div className="absolute bottom-4 right-5 flex items-center gap-1.5 text-white/70 text-xs">
                      <Clock size={11} /><span>{readTime} {t('blog.minRead')}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className={`font-bold text-slate-900 dark:text-white text-lg mb-3 leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                      {t(`blog.${key}Title`)}
                    </h3>
                    <p className={`text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1 ${isRTL ? 'font-arabic' : ''}`}>
                      {t(`blog.${key}Excerpt`)}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-sm font-semibold group-hover:gap-2.5 transition-all ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                      {t('blog.readMore')} <ArrowRight size={13} />
                    </div>
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
