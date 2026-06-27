import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { FadeUp, Card } from '../components/ui/index.jsx'

export default function Contact() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const services = [t('services.s1'), t('services.s2'), t('services.s3'), t('services.s4'), t('services.s5'), t('services.s6'), t('services.s7'), t('services.s8')]

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${isRTL ? 'font-arabic text-right' : ''}`

  return (
    <div className="pt-20">
      <section className="py-20 bg-slate-950 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />{t('contact.badge')}
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>{t('contact.title')}</h1>
            <p className={`text-lg text-slate-400 max-w-xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>{t('contact.subtitle')}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <FadeUp>
                <Card className="p-8">
                  {sent ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-emerald-500" />
                      </div>
                      <h3 className={`font-bold text-slate-900 dark:text-white text-xl mb-2 ${isRTL ? 'font-arabic' : ''}`}>{t('contact.successMsg')}</h3>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={`block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ${isRTL ? 'font-arabic text-right' : ''}`}>{t('contact.name')}</label>
                          <input type="text" className={inputClass} placeholder={t('contact.name')} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div>
                          <label className={`block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ${isRTL ? 'font-arabic text-right' : ''}`}>{t('contact.email')}</label>
                          <input type="email" className={inputClass} placeholder={t('contact.email')} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                        </div>
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ${isRTL ? 'font-arabic text-right' : ''}`}>{t('contact.company')}</label>
                        <input type="text" className={inputClass} placeholder={t('contact.company')} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ${isRTL ? 'font-arabic text-right' : ''}`}>{t('contact.service')}</label>
                        <select className={inputClass} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                          <option value="">{t('contact.selectService')}</option>
                          {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ${isRTL ? 'font-arabic text-right' : ''}`}>{t('contact.message')}</label>
                        <textarea rows={5} className={inputClass} placeholder={t('contact.message')} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                      </div>
                      <button onClick={handleSubmit} className={`w-full py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-primary-600/25 ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                        <Send size={16} />{t('contact.send')}
                      </button>
                    </div>
                  )}
                </Card>
              </FadeUp>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <FadeUp delay={0.1}>
                <Card className="p-6">
                  <h3 className={`font-bold text-slate-900 dark:text-white mb-5 ${isRTL ? 'font-arabic' : ''}`}>{t('contact.info')}</h3>
                  <div className="space-y-4">
                    {[{ icon: Mail, val: t('contact.emailAddr') }, { icon: Phone, val: t('contact.phone') }, { icon: MapPin, val: t('contact.location') }].map(({ icon: Icon, val }, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-primary-50 dark:bg-primary-950 rounded-lg flex items-center justify-center shrink-0">
                          <Icon size={15} className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className={`text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>{val}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeUp>

              <FadeUp delay={0.2}>
                <a href="https://wa.me/201141122158" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-5 bg-emerald-600 hover:bg-emerald-700 rounded-2xl text-white transition-all">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isRTL ? 'font-arabic' : ''}`}>{t('contact.whatsapp')}</div>
                    <div className={`text-emerald-200 text-xs ${isRTL ? 'font-arabic' : ''}`}>{t('contact.phone')}</div>
                  </div>
                </a>
              </FadeUp>

              <FadeUp delay={0.3}>
                <Card className="p-5">
                  <p className={`text-xs text-slate-400 dark:text-slate-500 mb-1 ${isRTL ? 'font-arabic text-right' : ''}`}>{t('contact.orEmail')}</p>
                  <a href={`mailto:${t('contact.emailAddr')}`} className="text-primary-600 dark:text-primary-400 font-semibold text-sm hover:underline">{t('contact.emailAddr')}</a>
                </Card>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
