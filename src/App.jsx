import { useState, useEffect, useRef } from 'react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const testimonialImages = Array.from({ length: 26 }, (_, i) => `/images/testimonials/testimonial-${i + 1}.png`)
const chartImages = Array.from({ length: 4 }, (_, i) => `/images/charts/chart-${i + 1}.png`)

const propFirms = [
  { name: 'Lucid Trading', discount: '50% OFF', url: 'https://lucidtrading.com/ref/g2strades', color: '#1A9B9B' },
  { name: 'Tradeify', discount: '40% OFF', url: 'https://tradeify.co/?ref=57ZJS4SH', color: '#C9A227' },
  { name: 'MyFundedFutures', discount: '20% OFF', url: 'https://myfundedfutures.com/challenge?ref=5173', color: '#1A9B9B' },
  { name: 'Alpha Futures', discount: '20% OFF', url: 'https://app.alpha-futures.com/signup/G2S', color: '#C9A227' },
  { name: 'Apex Trader Funding', discount: '90% OFF', url: 'https://apextraderfunding.com/member/aff/go/salvadorg7895', color: '#1A9B9B' },
]

const benefits = [
  {
    icon: '📈',
    title: 'Live NY Session Trading',
    desc: 'Trade side-by-side with Gabe every morning at 6:30 AM PST / 9:30 AM EST. Watch real-time entries, exits, and live narration using proven ICT concepts on NQ & ES.',
  },
  {
    icon: '🎓',
    title: 'Premium Education Library',
    desc: 'Full ICT strategy breakdowns, entry model guides, my complete trading checklist, chart drills, and detailed trade reviews built for clarity and repetition.',
  },
  {
    icon: '🧠',
    title: 'Psychology & Risk Management',
    desc: 'Master the mental edge: eliminate overtrading, build funded-trader discipline, and approach prop firm evaluations with a proven framework that delivers payouts.',
  },
  {
    icon: '🤝',
    title: 'Direct Access to Gabe',
    desc: 'Get personalized feedback, chart markups, journaling guidance, and coaching directly from Gabe not a support team.',
  },
  {
    icon: '🏆',
    title: 'Prop Firm Guidance',
    desc: 'Learn exactly how to pass evaluations, scale funded accounts, and build toward 7-figure funding and consistent monthly payouts.',
  },
  {
    icon: '🎁',
    title: 'Exclusive Giveaways & Challenges',
    desc: 'Member-only trading challenges, cash giveaways, and bonuses to keep you disciplined, engaged, and growing your account.',
  },
]

const steps = [
  { num: '01', title: 'Learn the Market', desc: 'Understand how financial markets move using a systematic, ICT-based approach to price action and narrative.' },
  { num: '02', title: 'Practice on Sim', desc: 'Apply your knowledge on simulated accounts gathering data, tracking results, and refining your edge.' },
  { num: '03', title: 'Pass the Evaluation', desc: 'Transfer your skills to live prop firm evaluations with Gabe\'s exact framework, rules, and risk model.' },
  { num: '04', title: 'Get Funded & Get Paid', desc: 'Acquire 7-figure funded accounts, start collecting payouts, and build toward trading independently without relying on signals.' },
]

const stats = [
  { value: '6+', label: 'Years Trading Futures' },
  { value: '$2M+', label: 'Student Funding Acquired' },
  { value: '$1M+', label: 'Verified Student Payouts' },
  { value: '90+', label: 'Active Members' },
]

const links = [
  { label: 'Instagram', url: 'https://www.instagram.com/g2strades', icon: InstagramIcon },
  { label: 'TikTok', url: 'https://www.tiktok.com/@g2strades', icon: TikTokIcon },
  { label: 'Discord', url: 'https://discord.gg/n8Z5qQPumc', icon: DiscordIcon },
]

// ─── ICONS ───────────────────────────────────────────────────────────────────

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.27 8.27 0 0 0 4.83 1.55V6.76a4.85 4.85 0 0 1-1.06-.07z"/>
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.114 18.1.132 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  )
}

function ChevronLeft() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M15 18l-6-6 6-6"/></svg>
}

function ChevronRight() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M9 18l6-6-6-6"/></svg>
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Navbar({ onJoin }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Results', href: '#results' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Right For Me?', href: '#rightforyou' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Prop Firms', href: '#propfirms' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-[#1E1E1E]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo/logo.png" alt="G2S Trades" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium tracking-wide">
                {item.label}
              </a>
            ))}
            <button onClick={onJoin} className="ml-2 gold-gradient text-black text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/98 border-t border-[#1E1E1E] px-4 py-4 space-y-3">
          {navItems.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              {item.label}
            </a>
          ))}
          <button onClick={() => { onJoin(); setMenuOpen(false) }} className="w-full gold-gradient text-black font-bold py-3 rounded-full mt-2">
            Start Free Trial
          </button>
        </div>
      )}
    </nav>
  )
}

function Ticker() {
  const items = ['NQ Futures', 'ES Futures', 'ICT Concepts', 'Live Trading', 'Get Funded', 'Prop Firm Mastery', 'Real Payouts', 'NY Session', 'ICT Concepts', 'Funded Trader', 'Risk Management', 'Psychology Training']
  const doubled = [...items, ...items]
  return (
    <div className="bg-[#111111] border-y border-[#1E1E1E] py-3 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 pr-10 text-sm font-medium tracking-widest uppercase">
            <span className="gold-text">{item}</span>
            <span className="text-[#C9A227] opacity-40">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Hero({ onJoin }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1A9B9B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#C9A227]/30 bg-[#C9A227]/5 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-[#1A9B9B] rounded-full animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A227]">✝️ God First — Live Daily 6:30 AM PST</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
          <span className="block text-white">Serious Traders.</span>
          <span className="block gold-text">Real Results.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
          Trade live every morning with Gabe while learning the exact system responsible for <span className="text-white font-semibold">$2M+ in student funding</span> and <span className="text-white font-semibold">$1M+ verified payouts</span>.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black gold-text font-display">{s.value}</div>
              <div className="text-xs text-gray-500 tracking-wide uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={onJoin} className="gold-gradient text-black text-base font-black px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 gold-glow">
            Start 3-Day Free Trial →
          </button>
          <a href="https://linktr.ee/G2strades" target="_blank" rel="noopener noreferrer"
            className="border border-[#1E1E1E] bg-white/5 text-white text-base font-semibold px-8 py-4 rounded-full hover:border-[#C9A227]/50 hover:bg-white/10 transition-all">
            View All Links ↗
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-600">No commitment required. Cancel anytime before the trial ends.</p>
      </div>

      {/* Hero image (Gabe's photo) */}
      <div className="relative z-10 mt-16 max-w-3xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden border border-[#1E1E1E]">
          <img src="/images/photo/gabe.jpg" alt="Gabe — G2S Trades founder and lead mentor" className="w-full object-cover max-h-[500px] object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3">
              <img src="/images/logo/logo.png" alt="G2S Trades" className="h-10 w-auto" />
              <div>
                <p className="font-bold text-white">Gabe — Lead Mentor</p>
                <p className="text-xs text-[#C9A227]">5yr Funded Futures Trader | MFF & TPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">About G2S Trades</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Built for Traders Who Want <span className="gold-text">Real Skill</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              G2S Trades was created with one mission: teach traders the actual skill needed to pass evaluations, get funded by top prop firms, and secure consistent monthly payouts not just watch signals.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Gabe is a 6-year futures day trader actively funded across multiple prop firms including MyFundedFutures and Tradeify. He trades the NY session live every morning so members can watch the entire process real entries, real risk management, real results.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              The curriculum is built around ICT concepts, structured psychology training, and prop firm guidance everything most traders skip, and the reason most traders fail.
            </p>
            <div className="flex flex-wrap gap-3">
              {['ICT Concepts', 'NQ & ES Futures', 'Prop Firm Mastery', 'Psychology Training', 'Live Trading Daily'].map(tag => (
                <span key={tag} className="text-xs font-semibold border border-[#1E1E1E] bg-[#111] text-gray-300 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: '✝️', text: 'Faith-first community with real values and transparency' },
              { icon: '📈', text: 'Live NY session Monday–Friday, every trading day' },
              { icon: '🎯', text: 'Focused on prop firm evaluations and consistent payouts' },
              { icon: '🔍', text: 'Full transparency — wins and losses shared openly' },
              { icon: '🤝', text: 'Tight-knit community of serious, growth-focused traders' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 card-dark rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IsItRightForYou({ onJoin }) {
  return (
    <section id="rightforyou" className="py-24 px-4 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">Honest Fit Check</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Is G2S Trades <span className="gold-text">Right For You?</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            This community is built for serious traders. Before joining, be honest with yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Good fit */}
          <div className="card-dark rounded-2xl p-8 border border-[#1E1E1E] hover:border-[#1A9B9B]/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1A9B9B]/15 flex items-center justify-center text-[#1A9B9B] text-lg font-black">✓</div>
              <h3 className="font-bold text-white text-xl">This Is For You If…</h3>
            </div>
            <ul className="space-y-4">
              {[
                'New traders wanting real structure and a clear path',
                'Traders stuck in the evaluation phase who need a proven system',
                'Traders struggling with psychology and discipline',
                'Traders who want accountability and a community that pushes them',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="text-[#1A9B9B] text-base mt-0.5 flex-shrink-0">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div className="card-dark rounded-2xl p-8 border border-[#1E1E1E] hover:border-red-900/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center text-red-400 text-lg font-black">✕</div>
              <h3 className="font-bold text-white text-xl">Not For You If…</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Looking for signals only — we teach skill, not shortcuts',
                'Expecting overnight success without putting in the work',
                'Refuse to journal or follow structured rules',
                'Looking for gambling, not disciplined trading',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="text-red-400 text-base mt-0.5 flex-shrink-0">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-5">If the left column sounds like you — you're in the right place.</p>
          <button onClick={onJoin} className="gold-gradient text-black font-black px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105">
            Start Your Free Trial →
          </button>
        </div>
      </div>
    </section>
  )
}


function Results() {
  const [activeChart, setActiveChart] = useState(0)

  return (
    <section id="results" className="py-24 px-4 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">Proven Track Record</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Real Trades. <span className="gold-text">Verified Results.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            These are actual trading charts from live sessions — the same models taught inside the community.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-[#1E1E1E] bg-[#111]">
            <img
              src={chartImages[activeChart]}
              alt={`Live trading chart ${activeChart + 1}`}
              className="w-full object-contain max-h-[500px]"
            />
          </div>
          <div className="flex gap-2 justify-center mt-4">
            {chartImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveChart(i)}
                className={`h-1.5 rounded-full transition-all ${i === activeChart ? 'w-8 bg-[#C9A227]' : 'w-4 bg-[#333]'}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-3 max-w-sm mx-auto">
            <button onClick={() => setActiveChart(p => (p - 1 + chartImages.length) % chartImages.length)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-white transition-colors">
              <ChevronLeft /> Prev
            </button>
            <button onClick={() => setActiveChart(p => (p + 1) % chartImages.length)}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-white transition-colors">
              Next <ChevronRight />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map(s => (
            <div key={s.label} className="card-dark rounded-2xl p-6 text-center">
              <div className="font-display text-4xl font-black gold-text mb-1">{s.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits({ onJoin }) {
  return (
    <section id="benefits" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">What You Get</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Everything You Need to <span className="gold-text">Get Funded</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="card-dark rounded-2xl p-6 hover:border-[#C9A227]/30 transition-colors group">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#C9A227] transition-colors">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onJoin} className="gold-gradient text-black font-black px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105">
            Access All Benefits — Start Free →
          </button>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">The Roadmap</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            4 Steps to <span className="gold-text">Consistent Payouts</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A227]/30 via-[#1A9B9B]/30 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Number bubble */}
                <div className="relative z-10 flex-shrink-0 ml-0 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center font-display font-black text-black text-lg">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 card-dark rounded-2xl p-6 md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <h3 className="font-bold text-white text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = 6
  const totalPages = Math.ceil(testimonialImages.length / perPage)
  const visible = testimonialImages.slice(page * perPage, page * perPage + perPage)

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">Student Wins</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Members Getting <span className="gold-text">Funded & Paid</span>
          </h2>
          <p className="text-gray-500 mt-4">Real screenshots. Real results. No actors, no fabrication.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {visible.map((src, i) => (
            <div key={`${page}-${i}`} className="card-dark rounded-xl overflow-hidden border border-[#1E1E1E] hover:border-[#C9A227]/30 transition-colors cursor-pointer group">
              <img src={src} alt={`Student result ${page * perPage + i + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
            className="p-2 rounded-full border border-[#1E1E1E] text-gray-400 hover:text-white hover:border-[#C9A227]/50 disabled:opacity-30 transition-all">
            <ChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === page ? 'bg-[#C9A227] scale-125' : 'bg-[#333]'}`}
            />
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}
            className="p-2 rounded-full border border-[#1E1E1E] text-gray-400 hover:text-white hover:border-[#C9A227]/50 disabled:opacity-30 transition-all">
            <ChevronRight />
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-3">Showing {page * perPage + 1}–{Math.min((page + 1) * perPage, testimonialImages.length)} of {testimonialImages.length} results</p>

        {/* Discord CTA */}
        <div className="mt-14 rounded-2xl border border-[#5865F2]/30 bg-[#5865F2]/5 p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <DiscordIcon />
            <p className="text-[#7289DA] font-bold text-sm uppercase tracking-widest">Free Discord Community</p>
          </div>
          <h3 className="font-display text-2xl font-black text-white mb-3">
            Even More Wins Inside the Discord
          </h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-6">
            These are just a sample. Hundreds more student results, testimonials, and success stories live inside the free Discord server open to everyone, no membership required.
            <br /><span className="text-white font-semibold">Have questions? Jump in and ask.</span>
          </p>
          <a href="https://discord.gg/n8Z5qQPumc" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-black px-8 py-3.5 rounded-full transition-all hover:scale-105">
            <DiscordIcon />
            Join the Free Discord →
          </a>
          <p className="text-xs text-gray-600 mt-3">100% free to join — no credit card, no catch</p>
        </div>
      </div>
    </section>
  )
}

function Pricing({ onJoin }) {
  const plans = [
    {
      name: 'Monthly',
      price: '$149.99',
      period: '/month',
      trial: '3-day free trial',
      url: 'https://www.launchpass.com/g2s-trades',
      highlight: false,
      code: null,
    },
    {
      name: 'Quarterly',
      price: '$399.00',
      period: '/quarter',
      trial: '3-day free trial',
      url: 'https://www.launchpass.com/g2s-trades',
      highlight: true,
      badge: 'Best Value',
      code: null,
      codeLabel: null,
    },
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">Simple Pricing</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Start <span className="gold-text">Risk-Free</span> Today
          </h2>
          <p className="text-gray-500 mt-4">3-day free trial on all plans. No charge until after your trial ends.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl p-8 flex flex-col ${plan.highlight
              ? 'border border-[#C9A227]/50 bg-gradient-to-b from-[#C9A227]/5 to-transparent gold-glow'
              : 'card-dark'
            }`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-black text-xs font-black px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 mb-1">{plan.period}</span>
                </div>
                <p className="text-xs text-[#1A9B9B] mt-1">✓ {plan.trial}</p>
                {plan.codeLabel && (
                  <div className="mt-2 inline-flex items-center gap-2 border border-[#C9A227]/30 bg-[#C9A227]/5 rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-[#C9A227]">🎉 {plan.codeLabel}</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Live NY Session Trading (Daily)',
                  'Full ICT Strategy & Education Library',
                  'Trading Checklist & Chart Drills',
                  'Psychology & Risk Management',
                  'Prop Firm Evaluation Guidance',
                  'Direct Access to Gabe',
                  'Private Community & Journaling',
                  'Weekly & Monthly Recaps',
                  'Exclusive Giveaways & Challenges',
                ].map(feature => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <span className="text-[#C9A227] mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={plan.url} target="_blank" rel="noopener noreferrer"
                className={`w-full text-center font-black py-4 rounded-full transition-all hover:opacity-90 hover:scale-105 ${plan.highlight
                  ? 'gold-gradient text-black'
                  : 'border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10'
                }`}>
                Start {plan.name} Trial →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-8 max-w-lg mx-auto">
          By starting your free trial, you acknowledge that your subscription converts to paid at the end of the trial unless cancelled. No refunds for missed cancellations.
        </p>
      </div>
    </section>
  )
}

function PropFirms() {
  return (
    <section id="propfirms" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">Partner Prop Firms</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Exclusive Discounts for <span className="gold-text">G2S Members</span>
          </h2>
          <p className="text-gray-500 mt-4">Gabe personally uses and recommends these firms. Save big before your first evaluation.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {propFirms.map((firm) => (
            <a key={firm.name} href={firm.url} target="_blank" rel="noopener noreferrer"
              className="card-dark rounded-2xl p-6 hover:border-[#C9A227]/30 transition-all hover:scale-[1.02] group block">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-white group-hover:text-[#C9A227] transition-colors">{firm.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Prop Trading Firm</p>
                </div>
                <span className="text-xs font-black px-3 py-1.5 rounded-full gold-gradient text-black">
                  {firm.discount}
                </span>
              </div>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                Click to get your exclusive G2S Trades discount →
              </p>
            </a>
          ))}

          {/* Trade Syncer */}
          <a href="https://app.tradesyncer.com/?ref=TS8869D033" target="_blank" rel="noopener noreferrer"
            className="card-dark rounded-2xl p-6 hover:border-[#1A9B9B]/30 transition-all hover:scale-[1.02] group block">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-white group-hover:text-[#1A9B9B] transition-colors">Trade Syncer</h3>
                <p className="text-xs text-gray-500 mt-0.5">Trading Analytics</p>
              </div>
              <span className="text-xs font-black px-3 py-1.5 rounded-full border border-[#1A9B9B] text-[#1A9B9B]">
                Referral
              </span>
            </div>
            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              Track, analyze & improve your trading performance →
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

function LinktreeSection() {
  return (
    <section className="py-24 px-4 bg-[#080808]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[#1A9B9B] mb-3">All Links</p>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-4">
          Find G2S Trades <span className="gold-text">Everywhere</span>
        </h2>
        <p className="text-gray-500 mb-10">
          Follow along on social media, join the free Discord, and access all exclusive partner links in one place.
        </p>

        {/* Free Discord highlight */}
        <div className="mb-8 rounded-2xl border border-[#5865F2]/30 bg-[#5865F2]/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-bold text-white flex items-center gap-2"><span className="text-[#7289DA]"><DiscordIcon /></span> G2S Trades Discord</p>
            <p className="text-sm text-gray-400 mt-0.5">Free for everyone to join. Ask questions, see results, connect with traders.</p>
          </div>
          <a href="https://discord.gg/n8Z5qQPumc" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#5865F2] hover:bg-[#4752C4] text-white font-black px-6 py-3 rounded-full transition-all hover:scale-105 text-sm whitespace-nowrap">
            Join Free →
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {links.map(link => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 card-dark rounded-full px-5 py-3 hover:border-[#C9A227]/40 hover:text-[#C9A227] transition-all text-gray-400 text-sm font-semibold">
              <link.icon />
              {link.label}
            </a>
          ))}
        </div>

        <a href="https://linktr.ee/G2strades" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gold-gradient text-black font-black px-10 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 text-base">
          <span>View Full Linktree</span>
          <span>↗</span>
        </a>
        <p className="text-xs text-gray-600 mt-3">Discord, prop firm discounts, socials & more</p>
      </div>
    </section>
  )
}

function FinalCTA({ onJoin }) {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/8 rounded-full blur-[150px]" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <img src="/images/logo/logo.png" alt="G2S Trades" className="h-20 w-auto mx-auto mb-8" />
        <h2 className="font-display text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Trade Like <span className="gold-text">a Funded Pro?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          No signals. No shortcuts. Just proven skill, live sessions, and a community that's committed to your success.
        </p>
        <button onClick={onJoin}
          className="gold-gradient text-black font-black text-xl px-14 py-5 rounded-full hover:opacity-90 transition-all hover:scale-105 gold-glow">
          Start Your Free Trial Today →
        </button>
        <p className="mt-4 text-sm text-gray-600">3-day free trial · Cancel anytime before the trial ends</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo/logo.png" alt="G2S Trades" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-white text-sm">G2S Trades</p>
              <p className="text-xs text-gray-600">Serious Traders. Real Results.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
            {['#about', '#results', '#benefits', '#testimonials', '#pricing', '#propfirms'].map(href => (
              <a key={href} href={href} className="hover:text-gray-400 capitalize transition-colors">
                {href.replace('#', '')}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {links.map(link => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-gray-500 hover:text-[#C9A227] hover:border-[#C9A227]/40 transition-all">
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#111] text-center text-xs text-gray-700">
          <p>© {new Date().getFullYear()} G2S Trades. All rights reserved. Trading involves significant risk of loss. Past results do not guarantee future performance.</p>
        </div>
      </div>
    </footer>
  )
}

function JoinModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="card-dark rounded-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">✕</button>
        <img src="/images/logo/logo.png" alt="G2S Trades" className="h-14 w-auto mb-5" />
        <h3 className="font-display text-2xl font-black text-white mb-2">Choose Your Plan</h3>
        <p className="text-gray-500 text-sm mb-6">Start with a 3-day free trial. No charge until the trial ends.</p>

        <div className="space-y-3">
          <a href="https://www.launchpass.com/g2s-trades" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center border border-[#C9A227] text-[#C9A227] font-bold py-3.5 rounded-xl hover:bg-[#C9A227]/10 transition-all">
            Monthly — $149.99/mo
          </a>
          <a href="https://www.launchpass.com/g2s-trades" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center gold-gradient text-black font-black py-3.5 rounded-xl hover:opacity-90 transition-all">
            Quarterly — $399.00/qtr ⭐ Best Value
          </a>
        </div>

        <p className="text-xs text-gray-600 text-center mt-4">3-day free trial on all plans. Cancel anytime before the trial ends.</p>
      </div>
    </div>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Navbar onJoin={() => setModalOpen(true)} />
      <Ticker />
      <Hero onJoin={() => setModalOpen(true)} />
      <About />
      <Results />
      <Benefits onJoin={() => setModalOpen(true)} />
      <Process />
      <IsItRightForYou onJoin={() => setModalOpen(true)} />
      <Testimonials />
      <Pricing onJoin={() => setModalOpen(true)} />
      <PropFirms />
      <LinktreeSection />
      <FinalCTA onJoin={() => setModalOpen(true)} />
      <Footer />
      <JoinModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}