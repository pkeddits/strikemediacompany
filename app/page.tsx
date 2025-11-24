'use client';

import { useState } from 'react';
import { Menu, X, Play, Zap, Users, TrendingUp, Globe, Clock, Award, Target } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    handle: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/xwpjleoq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        handle: formData.handle,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', handle: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    } else {
      console.error('Erro ao enviar formulário');
    }
  } catch (error) {
    console.error('Erro ao enviar formulário', error);
  }
};


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#050508] text-white min-h-screen relative">
      <div className="fixed top-8 left-8 z-20 pointer-events-none opacity-10">
        <Image
          src="/images/1 -1.png"
          alt="StrikeMedia watermark"
          width={60}
          height={60}
          priority
        />
      </div>

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <MiniAbout />
      <ServicesSection />
      <CoreOffers />
      <CasesSection />
      <CreatorsNetwork />
      <WhyChooseUsSection />
      <ProcessMainSection />
      <TestimonialsSection />
      <PricingSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        formSubmitted={formSubmitted}
        scrollToSection={scrollToSection}
      />
      <Footer />
    </div>
  );
}

function Navbar({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: any) {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Cases', id: 'cases' },
    { label: 'Creators', id: 'creators' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Process', id: 'process-main' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Packages', id: 'Packages' },
    { label: 'About', id: 'about' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/1 -1.png"
                alt="StrikeMedia logo"
                width={28}
                height={28}
              />
              <span className="text-xl font-bold tracking-wider">StrikeMedia.Co</span>
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-[#B4B4C4] hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] text-sm font-medium hover:shadow-[0_0_30px_rgba(162,89,255,0.4)] transition-shadow"
              >
                Contact
              </button>
            </div>

            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050508] lg:hidden pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl text-[#B4B4C4] hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] text-lg font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function HeroSection({ scrollToSection }: any) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#0a0520] to-[#050508] opacity-90" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
       <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">

          Viral-Ready Content for <br />
          <span className="bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] bg-clip-text text-transparent">
            Artists, Creators & Labels
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#B4B4C4] max-w-2xl mx-auto mb-10 leading-relaxed">
          StrikeMedia.Co is a digital-first music content agency. We turn your audio into high-performance TikTok, Reels and Shorts content using a global network of editors and creators.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] font-medium hover:shadow-[0_0_30px_rgba(162,89,255,0.6)] transition-shadow"
          >
            Send your audio
          </button>
          <button
            onClick={() => scrollToSection('cases')}
            className="px-8 py-4 rounded-full border-2 border-[#A259FF] hover:bg-[#A259FF]/10 transition-colors"
          >
            See our work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#A259FF] to-[#00E5FF] bg-clip-text text-transparent mb-2">
              200+
            </div>
            <div className="text-[#B4B4C4] text-sm">videos delivered</div>
          </div>
          <div className="bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#FFD951] bg-clip-text text-transparent mb-2">
              5M+
            </div>
            <div className="text-[#B4B4C4] text-sm">total views</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniAbout() {
  return (
    <section id="mini-about" className="py-20 bg-[#070711]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l-4 border-[#A259FF] pl-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Transform your audio into short-form virality.
          </h2>
          <p className="text-[#B4B4C4] text-lg leading-relaxed max-w-3xl">
            We specialize in creating scroll-stopping content optimized for TikTok, Instagram Reels and YouTube Shorts. Our team understands the algorithms, trends, and editing styles that make music content go viral. From audio edits to full creator campaigns, we handle everything so you can focus on the music.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { icon: <Zap className="w-8 h-8" />, title: 'Audio edits', desc: 'Optimized cuts for max engagement' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Viral-ready sounds', desc: 'Hooks that make people stop scrolling' },
    { icon: <Play className="w-8 h-8" />, title: 'Custom remixes', desc: 'Fresh takes on your tracks' },
    { icon: <Clock className="w-8 h-8" />, title: 'Loop cuts', desc: 'Perfect for feed and story content' },
    { icon: <Target className="w-8 h-8" />, title: 'Fast delivery', desc: '24-72h turnaround available' },
    { icon: <Users className="w-8 h-8" />, title: 'Partnerships', desc: 'Influencer & creator activations' },
    { icon: <Award className="w-8 h-8" />, title: 'Training & support', desc: 'Content strategy guidance' },
    { icon: <Globe className="w-8 h-8" />, title: 'Creator network', desc: 'Global editors & influencers' },
  ];

  return (
    <section id="services" className="py-20 bg-[#050508] relative overflow-hidden">
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none">
        <Image
          src="/images/1 -1.png"
          alt="StrikeMedia accent"
          width={200}
          height={200}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">What we do</h2>
          <p className="text-[#B4B4C4] text-lg">
            End-to-end content and campaigns for music on TikTok, Reels and Shorts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:border-[#A259FF] hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-[#00E5FF] mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.6)] transition-all">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-[#B4B4C4] text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreOffers() {
  const offers = [
    {
      title: 'Video Packages',
      desc: '10, 20 or 30 short-form videos per month for TikTok, Reels and Shorts.',
      bullets: [
        'Professional editing & effects',
        'Optimized for algorithms',
        'Multiple formats & ratios',
      ],
    },
    {
      title: 'Creator Campaigns',
      desc: 'We activate a curated network of editors and influencers around your track.',
      bullets: [
        'Targeted creator outreach',
        'Performance tracking',
        'Multi-platform distribution',
      ],
    },
    {
      title: 'Artist Content Management',
      desc: 'Full content plans, scripts and edits for your next release (30 days).',
      bullets: [
        'Complete content strategy',
        'Daily posting schedule',
        'Analytics & optimization',
      ],
    },
  ];

  return (
    <section id="offers" className="py-20 bg-[#070711]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 backdrop-blur-md border border-white/8 rounded-2xl p-8 hover:border-[#00E5FF] transition-all"
            >
              <div className="absolute top-0 left-8 w-1 h-16 bg-gradient-to-b from-[#A259FF] to-transparent" />

              <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
              <p className="text-[#B4B4C4] mb-6">{offer.desc}</p>

              <ul className="space-y-3">
                {offer.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#B4B4C4]">
                    <span className="text-[#00E5FF] mt-1">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  const cases = [
    {
      artist: 'Artist Name - "Track Title"',
      goal: 'Launch new single with TikTok-first strategy',
      did: 'Created 15 viral-ready edits, activated 25 creators across 3 countries',
      results: '2.3M views, 450K+ videos using sound, charted #3 on TikTok Viral',
    },
    {
      artist: 'Independent Artist - "Summer Hit"',
      goal: 'Increase streams through short-form content',
      did: '30-day content campaign with daily posts and creator partnerships',
      results: '890K views, 120% stream increase, 15K new followers',
    },
    {
      artist: 'Label Release - "Dance Track"',
      goal: 'Build momentum pre-release with UGC content',
      did: 'Custom remix package + 40 creator activations worldwide',
      results: '5.1M views, 1.2M+ videos created, Top 10 in 4 markets',
    },
  ];

  return (
    <section id="cases" className="py-20 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-16">Selected cases</h2>

        <div className="space-y-8">
          {cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="group bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:border-[#A259FF] transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#A259FF] to-[#00E5FF] bg-clip-text text-transparent">
                {caseStudy.artist}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-[#FFD951] font-semibold mb-2">Goal</div>
                  <div className="text-[#B4B4C4] text-sm">{caseStudy.goal}</div>
                </div>
                <div>
                  <div className="text-[#FFD951] font-semibold mb-2">What we did</div>
                  <div className="text-[#B4B4C4] text-sm">{caseStudy.did}</div>
                </div>
                <div>
                  <div className="text-[#FFD951] font-semibold mb-2">Results</div>
                  <div className="text-[#B4B4C4] text-sm">{caseStudy.results}</div>
                </div>
              </div>

              <a href="#" className="text-[#00E5FF] text-sm hover:underline">
                
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreatorsNetwork() {
  const tiers = [
    {
      title: 'Tier 3 – Elite',
      color: 'border-[#A259FF]',
      shadowColor: 'shadow-[0_0_20px_rgba(162,89,255,0.3)]',
      desc: 'Consistent viral performers with 1M+ views per video average. Proven track record of launching hits.',
    },
    {
      title: 'Tier 2 – Regular Performers',
      color: 'border-[#00E5FF]',
      shadowColor: 'shadow-[0_0_20px_rgba(0,229,255,0.3)]',
      desc: '100K-1M average views. Strong engagement rates and growing audience base.',
    },
    {
      title: 'Tier 1 – New & Rising',
      color: 'border-[#FFD951]',
      shadowColor: 'shadow-[0_0_20px_rgba(255,217,81,0.3)]',
      desc: 'Emerging talent with 10K-100K views. High potential for breakout content.',
    },
  ];

  return (
    <section id="creators" className="py-20 bg-[#070711]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Creators & Editors Network</h2>
          <p className="text-[#B4B4C4] text-lg max-w-2xl mx-auto">
            Our network is tiered based on views, viral performance and consistency. We match your project with the right creators for maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white/3 backdrop-blur-sm border-2 ${tier.color} ${tier.shadowColor} rounded-2xl p-8`}
            >
              <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
              <p className="text-[#B4B4C4]">{tier.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
  <a
    href="https://discord.gg/nXGmGzzycj"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] font-medium hover:shadow-[0_0_30px_rgba(162,89,255,0.6)] transition-shadow"
  >
    Apply as creator
  </a>
</div>

      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { icon: <Target className="w-6 h-6" />, title: 'Brief & goal', desc: 'We understand your vision' },
    { icon: <Zap className="w-6 h-6" />, title: 'Strategy', desc: 'Custom content plan' },
    { icon: <Play className="w-6 h-6" />, title: 'Production', desc: 'Editing & creator activation' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Launch & optimize', desc: 'Post & monitor performance' },
    { icon: <Award className="w-6 h-6" />, title: 'Report', desc: 'Analytics & next steps' },
  ];

  return (
    <section id="process" className="py-20 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How we work</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-[#070711] border-2 border-[#A259FF] rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-4 text-[#00E5FF]">
                    {step.icon}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-[#B4B4C4] text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ scrollToSection }: any) {
  const plans = [
    {
      name: 'Starter Package',
      desc: '3–5 mid-level editors\nNo premium editors\nFast execution\nIdeal for testing a track',
      highlight: false,
    },
    {
      name: 'Artist Growth Package',
      desc: '6–10 editors\n1 strong editor\nBroader strategy\nConsistency-focused',
      highlight: true,
    },
    {
      name: 'Viral Booster Package',
      desc: '12–15 editors\n2 strong editors\nOptimized viral mix\nIndustry-standard campaign format',
      highlight: false,
    },
    {
      name: 'Premium Viral Package',
      desc: '18–25 editors\n3 strong editors\nFull viral strategy\nMass distribution',
      highlight: false,
    },
    {
      name: 'Industry Level Package',
      desc: '30–40 editors\n5 strong editors\n1 hyper-viral editor\nCustom strategy, reporting, full management',
      highlight: false,
    },
  ];

  return (
    <section id="Packages" className="py-20 bg-[#070711]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white/3 backdrop-blur-sm border-2 rounded-2xl p-6 text-center flex flex-col ${
                plan.highlight
                  ? 'border-[#A259FF] shadow-[0_0_30px_rgba(162,89,255,0.4)] md:col-span-2 lg:col-span-1'
                  : 'border-white/8'
              }`}
            >
              <h3 className="text-lg font-bold mb-4">{plan.name}</h3>
              <p className="text-[#B4B4C4] text-sm mb-6 flex-grow whitespace-pre-line leading-relaxed">{plan.desc}</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] font-medium hover:shadow-[0_0_20px_rgba(162,89,255,0.5)] transition-shadow text-sm"
              >
                Request plan
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[#B4B4C4]">
          We also offer per-video pricing, multi-creator campaigns and performance-based bonuses.
        </p>
      </div>
    </section>
  );
}

function AboutSection() {
  const points = [
    'Digital-first & TikTok-native',
    'Editor + influencer network',
    'Results-driven (views, saves, streams)',
    'Based in Brazil, working worldwide',
  ];

  return (
    <section id="about" className="py-20 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About StrikeMedia.Co</h2>
            <p className="text-[#B4B4C4] leading-relaxed mb-6">
              We're a collective of young editors with a proven track record of millions of views in music edits, series, anime and gaming content. We understand what makes content go viral because we've lived it.
            </p>
            <p className="text-[#B4B4C4] leading-relaxed">
              Our mission is simple: help artists and labels win on short-form platforms by creating content that actually performs.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white/3 backdrop-blur-sm border border-white/8 rounded-xl p-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.6)]" />
                <span className="text-[#B4B4C4]">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ formData, setFormData, handleSubmit, formSubmitted, scrollToSection }: any) {
  return (
    <section id="contact" className="py-20 bg-[#070711]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's work together</h2>
          <p className="text-[#B4B4C4] text-lg">
            Tell us about your track, campaign or artist and we'll send you a 30-day content idea.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Name / Artist or label"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-[#050508] border-white/8 focus:border-[#A259FF] text-white placeholder:text-[#B4B4C4]"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#050508] border-white/8 focus:border-[#A259FF] text-white placeholder:text-[#B4B4C4]"
            />
          </div>

          <div>
            <Input
              placeholder="Instagram / TikTok handle"
              value={formData.handle}
              onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
              className="bg-[#050508] border-white/8 focus:border-[#A259FF] text-white placeholder:text-[#B4B4C4]"
            />
          </div>

          <div>
            <Textarea
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#050508] border-white/8 focus:border-[#A259FF] text-white placeholder:text-[#B4B4C4] min-h-[120px]"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#A259FF] via-[#00E5FF] to-[#FFD951] font-medium hover:shadow-[0_0_30px_rgba(162,89,255,0.6)] transition-shadow"
          >
            Send
          </button>

          {formSubmitted && (
            <div className="text-center text-[#00E5FF] font-medium">
              Message sent! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const features = [
    {
      title: 'Fast Turnaround',
      desc: 'High-performing content delivered quickly with consistent turnaround.',
    },
    {
      title: 'Wide Creator Network',
      desc: 'Access a global network of editors and creators specialized in viral formats.',
    },
    {
      title: 'Tailored Strategies',
      desc: 'Custom creative strategies designed for each artist, track and campaign.',
    },
    {
      title: 'Real-Time Optimization',
      desc: 'Campaigns evolve based on real-time performance data.',
    },
    {
      title: 'Performance-Based Activations',
      desc: 'Creators are activated according to real results and historical performance.',
    },
    {
      title: 'Transparency & Reporting',
      desc: 'Clear workflows, dashboards and comprehensive reports.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#050508] relative overflow-hidden">
      <div className="absolute bottom-20 left-10 opacity-5 pointer-events-none">
        <Image
          src="/images/1 -1.png"
          alt="StrikeMedia accent"
          width={200}
          height={200}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose StrikeMedia.Co?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:border-[#A259FF] hover:shadow-[0_0_20px_rgba(162,89,255,0.3)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-gradient-to-b from-[#A259FF] to-[#00E5FF]" />
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#B4B4C4] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessMainSection() {
  const artistSteps = [
    { title: 'Consultation & Strategy', desc: 'We dive deep into your vision and goals' },
    { title: 'Creator Selection & Briefing', desc: 'Hand-picking the right creators for your track' },
    { title: 'Campaign Activation & Real-Time Tracking', desc: 'Content goes live with live performance monitoring' },
    { title: 'Performance Analytics & Optimization', desc: 'Data-driven tweaks for maximum impact' },
    { title: 'Final Report & Future Strategy', desc: 'Comprehensive analytics and next steps' },
  ];

  const editorSteps = [
    { title: 'Audio Distribution & Guidelines', desc: 'Receive track and creative briefs' },
    { title: 'Creation & Submission (Discord Workflow)', desc: 'Create and submit via our secure platform' },
    { title: 'Quality Review (QC Team)', desc: 'Professional review and feedback' },
    { title: 'Approval & Deployment', desc: 'Content approved and launched' },
    { title: 'Payout via PayPal / Wise', desc: 'Fast and secure payment' },
  ];

  return (
    <section id="process-main" className="py-20 bg-[#070711]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How We Work</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">For Artists & Labels</h3>
            <div className="space-y-6">
              {artistSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#A259FF] to-[#00E5FF] text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-[#B4B4C4] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">For Editors & Creators</h3>
            <div className="space-y-6">
              {editorSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#FFD951] text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-[#B4B4C4] text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Rivera',
      role: 'Independent Artist',
      quote: 'StrikeMedia transformed my sound into viral content. In 30 days, my streams went up 300%. Highly recommend!',
    },
    {
      name: 'Jordan Blake',
      role: 'Music Producer',
      quote: 'The creator network is unmatched. Real results, real professionalism, and actual communication. Best partnership ever.',
    },
    {
      name: 'Zara Khan',
      role: 'Label A&R',
      quote: 'We work with StrikeMedia on all our artist releases now. Consistent, viral-quality content. Game-changer.',
    },
    {
      name: 'Marcus Chen',
      role: 'Upcoming Artist',
      quote: 'From nobody to 2M views in 6 weeks. The team knew exactly which editors would vibe with my music.',
    },
    {
      name: 'Sofia Martinez',
      role: 'Creator Network Member',
      quote: 'Fast payments, clear briefs, amazing tracks. This is the best creator platform I\'ve worked with.',
    },
    {
      name: 'James Thompson',
      role: 'Digital Label Head',
      quote: 'Every campaign hits. Every metric matters. The transparency and results speak for themselves.',
    },
    {
      name: 'Nina Patel',
      role: 'Emerging Artist',
      quote: 'My first drop with StrikeMedia got 500K views organically. Absolutely incredible results.',
    },
    {
      name: 'Derek Santos',
      role: 'Producer & Creator',
      quote: 'Professional, reliable, and the payments are instant. This is what a real creator platform looks like.',
    },
    {
      name: 'Lisa Wong',
      role: 'Artist Manager',
      quote: 'I recommend StrikeMedia to every artist I work with. They deliver. Period.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#050508] relative overflow-hidden">
      <div className="absolute top-32 right-20 opacity-5 pointer-events-none">
        <Image
          src="/images/1 -1.png"
          alt="StrikeMedia accent"
          width={200}
          height={200}
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Artists, Creators & Labels</h2>
          <p className="text-[#B4B4C4] text-lg">Real feedback from our partners and creator network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/3 backdrop-blur-sm border border-white/8 rounded-2xl p-8 hover:border-[#00E5FF] transition-all"
            >
              <p className="text-[#B4B4C4] text-sm mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-white/8 pt-4">
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-[#FFD951] text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#020308] border-t border-[#A259FF]/20 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8 mb-8">
          <Image
            src="/images/3 -3.png"
            alt="StrikeMedia.Co"
            width={280}
            height={100}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/8 pt-8">
          <div className="text-[#B4B4C4] text-sm">
            StrikeMedia.Co — Digital-first music content agency.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#B4B4C4] text-sm">© {new Date().getFullYear()}</span>
            <div className="flex gap-4">
  <a
    href="https://www.instagram.com/strikemedia.co?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#B4B4C4] hover:text-[#A259FF] transition-colors"
  >
    IG
  </a>
  <a
    href="https://www.tiktok.com/@strikemedia.co"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#B4B4C4] hover:text-[#A259FF] transition-colors"
  >
    TikTok
  </a>
  <a
    href="https://discord.gg/nXGmGzzycj"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#B4B4C4] hover:text-[#A259FF] transition-colors"
  >
    Discord
  </a>
</div>

          </div>
        </div>
      </div>
    </footer>
  );
}
