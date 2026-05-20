/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  RefreshCw, 
  Instagram, 
  Users, 
  Layout, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Play,
  TrendingUp,
  FileVideo,
  MousePointerClick,
  Copy,
  Clock,
  Sparkles,
  Lock
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,76,131,0.3)]">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#e1306c" />
            <stop offset="100%" stopColor="#f77737" />
          </linearGradient>
        </defs>
        <path 
          d="M12 8V32M12 20L28 8M16 20L28 32" 
          stroke="url(#logo-gradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:stroke-[7px] transition-all duration-300"
        />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xl font-bold tracking-widest text-white">KEN</span>
      <span className="text-[10px] font-medium tracking-[0.3em] text-white/50">MARKETING</span>
    </div>
  </div>
);

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-3xl bg-[#121212] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
            >
              <X size={18} />
            </button>

            {/* Left Section: Hero */}
            <div className="flex-1 p-6 md:p-10 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent">
              <div className="mb-8">
                <Logo />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
                Let's Grow<br />
                Your OFM Business<br />
                <span className="text-gradient">Together</span>
              </h2>
              
              <p className="text-white/60 text-base mb-8 leading-relaxed">
                Message me directly on Telegram or WhatsApp for a <span className="text-pink-500 font-semibold">FREE</span> consultation.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <Zap size={16} className="text-pink-500" />
                  </div>
                  <span className="font-semibold text-sm">Fast Response</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <ShieldCheck size={16} className="text-pink-500" />
                  </div>
                  <span className="font-semibold text-sm">Private & Secure</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center">
                    <Clock size={16} className="text-pink-500" />
                  </div>
                  <span className="font-semibold text-sm">1-on-1 Consultation</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#121212] bg-gradient-to-br from-pink-500 to-orange-500" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">100+ OFM Agencies</div>
                  <div className="text-[10px] text-white/40">Trust Ken Marketing</div>
                </div>
              </div>
            </div>

            {/* Right Section: Contact Options */}
            <div className="flex-1 p-6 md:p-10 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-500/5 to-transparent -z-10" />
              
              <div className="text-center mb-8">
                 <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                    <span className="text-xl font-bold">Contact Me</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
                 </div>
                 <p className="text-white/40 text-xs">Choose your preferred way to connect</p>
              </div>

              <div className="space-y-4">
                {/* Telegram Card */}
                <a 
                  href="http://t.me/khanhkenmkt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-5 rounded-[24px] border border-blue-500/20 bg-blue-500/5 group hover:bg-blue-500/10 transition-all cursor-pointer relative overflow-hidden"
                >
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                          <path d="M11.944 0C5.352 0 0 5.352 0 11.944c0 6.592 5.352 11.944 11.944 11.944 6.592 0 11.944-5.352 11.944-11.944C23.888 5.352 18.536 0 11.944 0zm5.666 8.3c-.15 1.574-.79 5.362-1.121 7.13-.14.75-.417 1-.684 1.025-.584.054-1.025-.386-1.591-.758-.885-.582-1.385-.944-2.243-1.509-1-.652-.352-1.009.219-1.6.149-.155 2.744-2.518 2.794-2.731.006-.027.012-.127-.048-.18s-.148-.035-.213-.02c-.09.02-1.536.974-4.329 2.858-.41.282-.782.42-1.116.413-.368-.008-1.077-.208-1.605-.38-.646-.21-1.16-.322-1.115-.68.023-.186.279-.378.766-.576 3-.1.31-5.06 7.072-7.466.67-.238 1.397-.367 2.122-.387.114.004.227.025.334.06.29.09.508.315.586.608.016.033.023.07.022.107l-.002.043z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-400">Telegram</h4>
                        <p className="text-white/40 text-xs">Fastest way to reach me</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3 bg-[#050505]/50 rounded-xl p-2.5 border border-white/5">
                      <Zap size={14} className="text-blue-400" />
                      <span className="flex-1 text-[12px] font-mono text-white/80">t.me/khanhkenmkt</span>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          copyToClipboard('t.me/khanhkenmkt', 'tg');
                        }}
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/50 hover:text-white"
                      >
                        {copied === 'tg' ? <CheckCircle2 size={14} className="text-green-500" /> : <Copy size={14} />}
                      </button>
                   </div>
                   
                   <div className="mt-3 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-[9px] uppercase font-bold tracking-widest text-green-500">Online Now</span>
                   </div>
                </a>

                {/* WhatsApp Card */}
                <a 
                  href="https://wa.me/+84345932166" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block p-5 rounded-[24px] border border-green-500/20 bg-green-500/5 group hover:bg-green-500/10 transition-all cursor-pointer relative overflow-hidden"
                >
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.969c0 2.112.551 4.173 1.597 6.01L0 24l6.193-1.625c1.787.974 3.8 1.488 5.852 1.489h.005c6.605 0 11.967-5.363 11.97-11.97a11.815 11.815 0 00-3.483-8.455"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-400">WhatsApp</h4>
                        <p className="text-white/40 text-xs">Chat with me directly</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3 bg-[#050505]/50 rounded-xl p-2.5 border border-white/5">
                      <Zap size={14} className="text-green-400" />
                      <span className="flex-1 text-[12px] font-mono text-white/80">wa.me/+84345932166</span>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          copyToClipboard('wa.me/+84345932166', 'wa');
                        }}
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/50 hover:text-white"
                      >
                        {copied === 'wa' ? <CheckCircle2 size={14} className="text-green-500" /> : <Copy size={14} />}
                      </button>
                   </div>
                   
                   <div className="mt-3 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-[9px] uppercase font-bold tracking-widest text-green-500">Online Now</span>
                   </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/5 border border-pink-500/10">
                   <Lock size={10} className="text-pink-500" />
                   <span className="text-[9px] text-white/60 font-medium tracking-tight">Your information is kept private and secure.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Nav = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">FEATURES</a>
            <a href="#benefits" className="text-sm font-medium text-white/70 hover:text-white transition-colors">BENEFITS</a>
            <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">PRICING</a>
            <a href="#faq" className="text-sm font-medium text-white/70 hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">CONTACT</a>
            <button 
              onClick={onOpenModal}
              className="btn-gradient text-xs px-4 py-2"
            >
              BOOK FREE CONSULTATION
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#features" className="block text-lg font-medium">FEATURES</a>
              <a href="#benefits" className="block text-lg font-medium">BENEFITS</a>
              <a href="#pricing" className="block text-lg font-medium">PRICING</a>
              <a href="#faq" className="block text-lg font-medium">FAQ</a>
              <a href="#contact" className="block text-lg font-medium">CONTACT</a>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }} 
                className="w-full btn-gradient"
              >
                BOOK FREE CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs font-mono tracking-[0.2em] text-pink-500 mb-6 uppercase"
        >
          the future of ofm traffic
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
        >
          Scale Your OFM Revenue With<br />
          <span className="text-gradient">Instagram Automation</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-white/60 mb-10"
        >
          Turn Instagram into a predictable traffic machine using AI-powered automation that handles everything from outreach to posting while you focus on the growth.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button 
            onClick={onOpenModal}
            className="btn-gradient px-10 py-4 text-base"
          >
            Start Scaling Today
          </button>
          <button className="btn-outline px-10 py-4 text-base flex items-center gap-2">
            <Play fill="currentColor" size={16} />
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-card p-2 md:p-4 rounded-3xl relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Dashboard Preview" 
              className="rounded-2xl w-full border border-white/5"
            />
            
            {/* Overlay Dashboard Elements - Mocked with CSS/Lucide for effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-40">
               <div className="absolute top-[10%] left-[10%] glass-card p-3 scale-75 md:scale-100">
                  <BarChart3 className="text-pink-500" />
               </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3 pr-6"
          >
            <div className="bg-pink-500/20 p-2 rounded-lg">
              <TrendingUp className="text-pink-500" size={24} />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Profile Visits</div>
              <div className="text-xl font-bold text-white">+420%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Problems = () => (
  <section className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Instagram Growth Is Harder Than Ever</h2>
      <p className="text-white/50 mb-16 max-w-xl mx-auto text-sm">
        The old ways of manual scaling are dead. Don't let your agency get left behind.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: X, title: "Constant Shadowbans", desc: "Standard bots get flagged instantly. Traditional automation puts your assets at extreme risk." },
          { icon: RefreshCw, title: "Manual Fatigue", desc: "Hiring dozens of chatters is expensive and inefficient. Scale is capped by human speed." },
          { icon: ShieldCheck, title: "Restricted Outreach", desc: "Reach 0.01% of your potential audience due to strict DM limits and action blocks." }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-8 text-left glass-card-hover group">
            <div className="mb-6 w-12 h-12 glass-card flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <item.icon className="text-pink-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-[#0a0607]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">The Complete Instagram Automation System</h2>
      <p className="text-white/50 mb-16 max-w-xl mx-auto text-sm">
        Our proprietary technology bypasses limits and mimics 100% human behavior.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: MousePointerClick, title: "AI Auto Comment", desc: "Intelligent commenting on top niche accounts that feels authentic and drives high-intent clicks." },
          { icon: Zap, title: "Instagram Warm-Up", desc: "Automated account maturation process to build trust with Instagram's algorithm before scaling." },
          { icon: MessageSquare, title: "Mass DM System", desc: "Safe, targeted outreach at massive volume without triggering action blocks or spam filters." },
          { icon: FileVideo, title: "Reels Posting", desc: "Schedule and auto-post viral-ready reels across hundreds of accounts simultaneously." },
          { icon: ShieldCheck, title: "Anti-Ban Protection", desc: "Advanced residential proxies and browser fingerprint masking for total safety." },
          { icon: BarChart3, title: "Real-time Analytics", desc: "Centralized dashboard to monitor growth, conversion rates, and ROI across all accounts." }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-8 text-left glass-card-hover relative overflow-hidden group">
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-3xl -z-10" />
            
            <div className="mb-6 w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-500">
              <item.icon size={20} />
            </div>
            <h3 className="text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Implementation = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-20">Seamless Implementation</h2>

      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-white/10 -z-10" />

        {[
          { num: "1", title: "Warm Accounts", desc: "Build algo-trust safely." },
          { num: "2", title: "AI Targeting", desc: "Identify high-value leads." },
          { num: "3", title: "Automate Outreach", desc: "Scale comments & DMs." },
          { num: "4", title: "Optimize Growth", desc: "A/B test content & scripts." },
          { num: "5", title: "Convert Traffic", desc: "Drive fans to your funnel." }
        ].map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-14 h-14 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center text-lg font-bold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              {step.num}
            </div>
            <h4 className="text-lg font-bold mb-2 text-white">{step.title}</h4>
            <p className="text-[12px] text-white/40 uppercase tracking-wider text-center">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-24 bg-[#0a0607]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">What Happens When You Scale Correctly</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <span className="text-4xl font-extrabold text-pink-500 w-32">12M+</span>
              <div>
                <p className="text-sm font-medium text-white/60 pt-1">Impressions generated per month for our top agency partners.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-4xl font-extrabold text-pink-500 w-32">85%</span>
              <div>
                <p className="text-sm font-medium text-white/60 pt-1">Reduction in manual labor costs while increasing total output.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="text-4xl font-extrabold text-pink-500 w-32">3.2x</span>
              <div>
                <p className="text-sm font-medium text-white/60 pt-1">Average increase in OF subscriber conversion from IG traffic.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Live Performance</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-[10px] uppercase font-mono text-white/40">Live</span>
            </div>
          </div>

          <div className="flex items-end justify-between h-48 gap-3">
            {[40, 70, 50, 90, 75, 100].map((height, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-pink-500 to-orange-500 opacity-80"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Safety = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="glass-card p-4 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,76,131,0.1)]">
             <img 
               src="/automation_bot.png" 
               alt="Secure Engine" 
               className="rounded-2xl w-full"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
           </div>
           
           {/* Visual Shield floating elements */}
           <div className="absolute -top-4 -left-4 glass-card p-3 animate-bounce shadow-xl">
             <ShieldCheck className="text-pink-500" />
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="bg-pink-500/10 text-pink-500 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-tighter mb-4 inline-block">
            secure ai protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built Around Instagram Safety</h2>
          <p className="text-white/50 mb-10 text-lg">
            We don't just automate; we protect. Our system is engineered to look like 100% human activity, utilizing multi-layered cloaking technology.
          </p>

          <div className="space-y-4">
            {[
              "4G/5G Residential Proxy Rotating Systems",
              "Human-Simulated Typing & Browsing Patterns",
              "Strict action pacing that mimics user sleep cycles"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-5 h-5 rounded-full border border-pink-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500 group-hover:border-transparent transition-all">
                   <div className="w-2 h-2 rounded-full bg-pink-500 group-hover:bg-white transition-all" />
                </div>
                <span className="text-sm font-medium text-white/80">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="contact" className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-purple-500/5 -z-10" />
        
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
          Ready To Scale Your OFM Business?
        </h2>
        <p className="max-w-xl mx-auto text-white/50 mb-8 text-lg">
          Stop the manual grind. Join 50+ elite agencies using Ken Marketing to dominate Instagram and flood their funnels with high-paying subscribers.
        </p>

        <div className="mb-12">
          <p className="text-pink-500 font-mono text-xs uppercase tracking-[0.2em] mb-6">Message Me For A FREE Consultation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="http://wa.me/+84345932166" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 px-6 py-3 border-green-500/20 hover:bg-green-500/10">
              <span className="text-green-500 font-bold">✿</span> WhatsApp
            </a>
            <a href="http://telegram.me/khanhkenmkt" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 px-6 py-3 border-blue-500/20 hover:bg-blue-500/10">
              <span className="text-blue-400 font-bold">✿</span> Telegram
            </a>
            <a href="https://t.me/viralitybootcamp" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 px-6 py-3 border-indigo-500/20 hover:bg-indigo-500/10">
              <span className="text-indigo-400 font-bold">✿</span> Channel
            </a>
            <a href="https://t.co/ScJCjCxFHU" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2 px-6 py-3 border-purple-500/20 hover:bg-purple-500/10">
              <span className="text-purple-400 font-bold">✿</span> Discord
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="http://wa.me/+84345932166" target="_blank" rel="noopener noreferrer" className="btn-gradient px-12 py-5 text-lg flex items-center gap-2">
            Get Started Now
            <Zap size={20} fill="white" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div className="space-y-4">
        <Logo />
        <p className="text-sm text-white/30 max-w-xs">© 2024 Ken Marketing. Premium Instagram Automation for OFM.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-white/40">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        <a href="#" className="hover:text-white transition-colors">Affiliates</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Nav onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Problems />
      <Features />
      <Implementation />
      <Stats />
      <Safety />
      <CTA />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
