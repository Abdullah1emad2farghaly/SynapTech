import { motion } from 'framer-motion'

// Fade-in-up animation wrapper
export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Section badge
export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-900 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
      {children}
    </span>
  )
}

// Section header
export function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {badge && (
        <FadeUp>
          <div className={center ? 'flex justify-center mb-4' : 'mb-4'}>
            {light ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-500/15 text-primary-300 border border-primary-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {badge}
              </span>
            ) : (
              <Badge>{badge}</Badge>
            )}
          </div>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}>
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p className={`text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${
            light ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
          }`}>
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  )
}

// Card
export function Card({ children, className = '', hover = true }) {
  return (
    <div className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  )
}
