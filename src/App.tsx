/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import kenMarketingTeam from './assets/images/ken_marketing_team_1779291345910.png';
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
  Lock,
  FileText
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-4 group cursor-pointer">
    <div className="relative w-14 h-14 flex items-center justify-center">
      {/* Intense pulsing glow backdrop */}
      <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/30 transition-all duration-500" />
      <svg viewBox="0 0 40 40" className="relative w-full h-full drop-shadow-[0_0_15px_rgba(255,76,131,0.6)] transform group-hover:scale-110 transition-transform duration-300">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#e1306c" />
            <stop offset="100%" stopColor="#f77737" />
          </linearGradient>
        </defs>
        <path 
          d="M8 4V36M8 20L32 4M13 20L32 36" 
          stroke="url(#logo-gradient)" 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:stroke-[8.5px] transition-all duration-300"
        />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-3xl font-black tracking-widest text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">KEN</span>
      <span className="text-xs font-black tracking-[0.35em] text-pink-500 uppercase mt-1">MARKETING</span>
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

const YouTubeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0e0c0d] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all shadow-md"
            >
              <X size={20} />
            </button>

            {/* Header Content */}
            <div className="p-6 md:p-8 pb-3 border-b border-white/5 bg-gradient-to-r from-pink-500/5 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono tracking-[0.2em] text-pink-500 uppercase">Virality Bootcamp & Demo Playlist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-none">
                Automation Video Guides
              </h3>
            </div>

            {/* Content Body */}
            <div className="p-4 md:p-8 flex flex-col lg:flex-row gap-6">
              {/* Left Column: Embed Player */}
              <div className="flex-[2] aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-inner min-h-[200px] md:min-h-[340px] relative">
                <iframe 
                  src="https://www.youtube.com/embed/videoseries?list=PLlSkSqxh69lrgJmzvqKXSMdS0wtTeAOzB" 
                  title="YouTube Playlist player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Right Column: Dynamic details & lists */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-pink-500" /> What's in this series:
                  </h4>
                  <ul className="space-y-3 text-sm text-white/60 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" />
                      <span><strong>OFM Scaling Secrets:</strong> Setup guidelines & strategy overviews.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" />
                      <span><strong>Instagram Automation Demo:</strong> Watch how our AI accounts comment & DM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-pink-500 shrink-0 mt-0.5" />
                      <span><strong>Virality Bootcamp:</strong> Practical workshops to increase organic reach.</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <a 
                    href="https://youtube.com/playlist?list=PLlSkSqxh69lrgJmzvqKXSMdS0wtTeAOzB&si=kN-LD8b64riDSVZC" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-gradient w-full py-3.5 text-center text-sm font-semibold flex items-center justify-center gap-2 rounded-xl"
                  >
                    Open Playlist on YouTube
                    <ArrowRight size={16} />
                  </a>
                  <p className="text-[10px] text-white/40 text-center">
                    Subscribe to Virality Bootcamp channel for more updates!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FeaturesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const modules = [
    {
      title: "ACCOUNT MANAGEMENT",
      icon: <Users size={18} className="text-blue-400" />,
      color: "from-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-500/40",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.1)]",
      list: [
        "Manage multiple Instagram & Threads accounts in bulk",
        "Group, name, and categorize accounts by campaign dynamically",
        "Auto-login support with dedicated residential proxy assignment to bypass checkpoints"
      ]
    },
    {
      title: "POST SCHEDULING & PUBLISHING",
      icon: <Clock size={18} className="text-purple-400" />,
      color: "from-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-500/40",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.1)]",
      list: [
        "Post images and videos to Feed or Story on a scheduled or random basis",
        "Reels Posting: Auto-select content from media library or downloaded Reels",
        "Schedule posts: Set specific timezone-aware times for individual or mass posting queues"
      ]
    },
    {
      title: "SEEDING - ENGAGEMENT BOOST",
      icon: <TrendingUp size={18} className="text-pink-400" />,
      color: "from-pink-500/5 to-transparent border-pink-500/20 hover:border-pink-500/40",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.1)]",
      list: [
        "Plike Seeding: Auto-like target posts dynamically from secondary accounts",
        "Comment Seeding: Auto-comment with custom spinning content for high conversion",
        "Reels Seeding: Increase interaction weights using auxiliary accounts safely",
        "Auto-share posts/stories to boost cross-platform visibility and velocity"
      ]
    },
    {
      title: "FOLLOW / UNFOLLOW AUTOMATION",
      icon: <Users size={18} className="text-yellow-400" />,
      color: "from-yellow-500/5 to-transparent border-yellow-500/20 hover:border-yellow-500/40",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.1)]",
      list: [
        "Follow by target UID, niche keyword, or specific hashtag lists based on user behavior",
        "Auto-unfollow after a customized period or if users don't interact back",
        "Smart auto-follow back new followers to deepen page interaction values"
      ]
    },
    {
      title: "COMMENTING FEATURES",
      icon: <MessageSquare size={18} className="text-cyan-400" />,
      color: "from-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      list: [
        "Comment on target niche posts by custom post ID list or target hashtags",
        "Reply to comments on your main account's threads and posts seamlessly",
        "Boost algorithm engagement by auto-reacting and replying to all incoming comments"
      ]
    },
    {
      title: "MASS DMS FEATURE",
      icon: <MessageSquare size={18} className="text-emerald-400" />,
      color: "from-emerald-500/5 to-transparent border-emerald-500/20 hover:border-emerald-500/40",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      list: [
        "Send automated messages to new followers, active post engagers, or tailored UID lists",
        "Support message personalization using variables (name, username, timezone, etc.)",
        "Filter targets by active range, follower count, or engagement parameters beforehand",
        "Advanced randomized delay engine to avoid rate limits and action blocks"
      ]
    }
  ];

  const badges = [
    { title: "FIND TARGETED USERS", icon: <Users size={14} className="text-pink-500" /> },
    { title: "FAST AUTOMATION", icon: <Zap size={14} className="text-pink-500" /> },
    { title: "SAFE & SECURE", icon: <ShieldCheck size={14} className="text-pink-500" /> },
    { title: "BOOST ENGAGEMENT", icon: <TrendingUp size={14} className="text-pink-500" /> },
    { title: "SCALE YOUR BUSINESS", icon: <Sparkles size={14} className="text-pink-500" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-5xl bg-[#090708] rounded-[28px] overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10 cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Header Content with the identical brand logo feel */}
            <div className="p-5 md:p-6 border-b border-white/5 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex items-center gap-6">
                <Logo />
                <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-500 flex items-center justify-center text-white font-bold text-xs select-none">
                    IG
                  </div>
                  <span className="text-xs font-mono tracking-wider text-pink-500 uppercase font-medium">System Matrix</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-pink-400">VITE SECURE AUTOMATION</span>
              </div>
            </div>

            {/* Content Body: Recreating the high-tech matrix layout using rich interactive code elements */}
            <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-[#070506] custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                {modules.map((m, idx) => (
                  <div 
                    key={idx} 
                    className={`p-5 rounded-2xl border bg-gradient-to-br ${m.color} ${m.glow} transition-all duration-300 hover:scale-[1.01]`}
                  >
                    <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-2">
                      <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                        {m.icon}
                      </div>
                      <h4 className="text-sm font-extrabold text-[#f43f5e] tracking-wider uppercase">
                        {m.title}
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {m.list.map((item, idy) => (
                        <li key={idy} className="flex items-start gap-2.5 text-xs text-white/70 leading-relaxed">
                          <CheckCircle2 size={13} className="text-pink-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Row identical to the banner list */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                {badges.map((b, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 py-2 px-1 text-center sm:text-left border-r border-white/5 last:border-r-0"
                  >
                    {b.icon}
                    <span className="text-[9px] uppercase font-mono tracking-tight font-extrabold text-white/80">
                      {b.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/5 bg-[#0b090a] flex justify-between items-center">
              <p className="text-[10px] text-white/40 hidden sm:block">
                Fully safe from Instagram checkpoints. Standard rotative proxies & fingerprinters enabled.
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button 
                  onClick={onClose}
                  className="btn-outline px-6 py-2 text-xs rounded-xl text-center cursor-pointer font-medium"
                >
                  Close System Matrix
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const BenefitsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const benefits = [
    {
      title: "Scale Traffic Without Hiring More VAs",
      icon: <Users size={18} className="text-pink-400" />,
      color: "from-pink-500/5 to-transparent border-pink-500/20 hover:border-pink-500/40",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.1)]",
      bold: "1 person can manage hundreds of accounts using automation.",
      desc: "Less payroll. More output. Higher profit margins."
    },
    {
      title: "Hijack Viral Traffic Automatically",
      icon: <TrendingUp size={18} className="text-purple-400" />,
      color: "from-purple-500/5 to-transparent border-purple-500/20 hover:border-purple-500/40",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.1)]",
      bold: "The bot turns viral posts into traffic funnels through:",
      list: [
        "auto comments",
        "engagement boosts",
        "reply chains",
        "AI interactions"
      ],
      desc: "Instead of creating attention... you redirect it."
    },
    {
      title: "24/7 Subscriber Generation",
      icon: <Clock size={18} className="text-blue-400" />,
      color: "from-blue-500/5 to-transparent border-blue-500/20 hover:border-blue-500/40",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.1)]",
      bold: "Humans sleep. Bots farm traffic nonstop.",
      desc: "Your system continuously drives profile visits, DMs, curiosity, and OF conversions."
    },
    {
      title: "Reduce Bans & Scale Safely",
      icon: <ShieldCheck size={18} className="text-emerald-400" />,
      color: "from-emerald-500/5 to-transparent border-emerald-500/20 hover:border-emerald-500/40",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
      bold: "Most agencies lose accounts from bad scaling methods.",
      list: [
        "account warmup",
        "human-like behavior",
        "proxy support",
        "account rotation",
        "anti-detection actions"
      ]
    },
    {
      title: "Cheaper Than Paid Ads",
      icon: <BarChart3 size={18} className="text-cyan-400" />,
      color: "from-cyan-500/5 to-transparent border-cyan-500/20 hover:border-cyan-500/40",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
      bold: "Running Meta ads for OF traffic is expensive and risky.",
      desc: "Automation creates organic traffic at scale with a much higher ROI."
    },
    {
      title: "Scale Multiple Models At Once",
      icon: <Layout size={18} className="text-yellow-400" />,
      color: "from-yellow-500/5 to-transparent border-yellow-500/20 hover:border-yellow-500/40",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.1)]",
      bold: "OFM agencies manage many girls simultaneously.",
      list: [
        "posting",
        "engagement",
        "DMs",
        "growth systems"
      ],
      desc: "across dozens or hundreds of accounts easily."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-5xl bg-[#090708] rounded-[28px] overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10 cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-pink-500/10 via-transparent to-transparent flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex items-center gap-6">
                <Logo />
                <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono tracking-wider text-pink-500 uppercase font-bold">Benefits Matrix</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-xs uppercase font-black tracking-widest text-pink-400">UNSURPASSED GROWTH</span>
              </div>
            </div>

            {/* Grid Body */}
            <div className="flex-1 p-5 md:p-8 overflow-y-auto bg-[#070506] custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                {benefits.map((b, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-2xl border bg-gradient-to-br ${b.color} ${b.glow} transition-all duration-300 hover:scale-[1.015] flex flex-col justify-between`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-pink-400">
                          {b.icon}
                        </div>
                        <h4 className="text-sm sm:text-base font-black text-[#f43f5e] tracking-wide uppercase">
                          {b.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-base font-extrabold text-white leading-normal">
                          {b.bold}
                        </p>
                        
                        {b.list && (
                          <ul className="space-y-2 pl-1">
                            {b.list.map((item, idy) => (
                              <li key={idy} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                                <span className="text-pink-400 font-extrabold shrink-0 mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    
                    {b.desc && (
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed italic border-t border-white/5 pt-3 mt-4">
                        {b.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/5 bg-[#0b090a] flex justify-between items-center">
              <p className="text-[10px] text-white/40 hidden sm:block">
                Automated traffic routing at massive margins. Reclaim your team's bandwidth.
              </p>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button 
                  onClick={onClose}
                  className="btn-outline px-6 py-2 text-xs rounded-xl text-center cursor-pointer font-medium"
                >
                  Close Benefits Matrix
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PricingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const privileges = [
    {
      title: "1-1 SUPPORT (DURING SOFTWARE USAGE & INSTALLATION)",
      desc: "Direct, dedicated technical assistance for hardware setup, proxy configurations, and system operation walkthroughs."
    },
    {
      title: "WARRANTY & FREE SOFTWARE UPDATES",
      desc: "Comprehensive warranty support with completely free, seamless feature releases and security updates during your license term."
    },
    {
      title: "HAND-HELD STEP-BY-STEP GUIDANCE",
      desc: "Personalized onboarding and structured coaching until you are fully proficient at launching your dynamic automation flow."
    },
    {
      title: "FREE MULTI-CHANNEL CHANNEL CONSULTATION",
      desc: "Complimentary expert marketing strategy session to construct high-velocity, scalable multi-channel sales frameworks."
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-4xl bg-[#090708] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,76,131,0.2)] flex flex-col md:grid md:grid-cols-12 max-h-[92vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10 cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Left Box: Pricing Matrix */}
            <div className="p-6 md:p-8 col-span-12 md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-t md:bg-gradient-to-r from-pink-500/5 to-transparent">
              {/* Glowing Decorative Line for title */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex items-center gap-1.5 flex-1 justify-end">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#ff33a1]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff33a1] shadow-[0_0_8px_#ff33a1]" />
                </div>
                
                <h3 className="text-xl font-black text-white tracking-[0.15em] uppercase text-center select-none font-sans">
                  PRICING
                </h3>

                <div className="flex items-center gap-1.5 flex-1 justify-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]" />
                  <div className="h-[2px] w-8 bg-gradient-to-r from-[#00f3ff] to-transparent" />
                </div>
              </div>

              {/* Pricing Options */}
              <div className="space-y-8 py-2">
                {/* Option 1: 1 Year License */}
                <div className="text-center group">
                  <div className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#ff0a54] to-[#ff477e] border border-white/10 shadow-lg text-white font-extrabold text-[11px] tracking-widest uppercase select-none">
                    1 YEAR LICENSE
                  </div>

                  <div className="mt-3 flex flex-col items-center">
                    <div className="text-5xl font-black tracking-tight bg-gradient-to-r from-[#ff2a85] via-[#a333ff] to-[#00f3ff] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(255,42,133,0.3)] select-none">
                      $150
                    </div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase mt-1">
                      ONE TIME PAYMENT
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                {/* Option 2: Lifetime License */}
                <div className="text-center group">
                  <div className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#00f3ff] via-[#477eff] to-[#ff0a54] border border-white/10 shadow-lg text-white font-extrabold text-[11px] tracking-widest uppercase select-none">
                    LIFETIME LICENSE
                  </div>

                  <div className="mt-3 flex flex-col items-center">
                    <div className="text-5xl font-black tracking-tight bg-gradient-to-r from-[#0099ff] via-[#ff007f] to-[#00f3ff] bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(0,153,255,0.3)] select-none">
                      $500
                    </div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase mt-1">
                      ONE TIME PAYMENT
                    </div>
                    <div className="mt-3.5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/25 to-emerald-400/10 border-2 border-emerald-400/80 text-emerald-300 font-extrabold text-xs sm:text-[13px] tracking-wide uppercase shadow-[0_0_25px_rgba(52,211,153,0.35)] select-none">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="text-white font-black drop-shadow-[0_2px_8px_rgba(16,185,129,0.6)]">+ Proven OFM Scaling Strategy Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Premium Hand-Selected Benefits */}
            <div className="p-6 md:p-8 col-span-12 md:col-span-7 flex flex-col justify-between overflow-y-auto bg-[#070506]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-pink-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-mono font-extrabold tracking-widest text-pink-500">
                    EXCLUSIVES & INDEMNITIES
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-white tracking-wide border-b border-white/5 pb-3">
                  POST-PURCHASE LICENSE PRIVILEGES
                </h4>

                <div className="mt-5 space-y-4">
                  {privileges.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#ff3c82] shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-xs font-black text-rose-500 tracking-wide uppercase">
                            {item.title}
                          </h5>
                          <p className="text-[11px] text-white/70 leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons & footer inside the right container */}
              <div className="mt-6 border-t border-white/5 pt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <span className="text-[9px] text-white/40 tracking-wide font-mono uppercase text-center sm:text-left">
                  Secured key delivery • Live technical staff available
                </span>
                <a 
                  href="http://wa.me/+84345932166" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto text-center btn-gradient px-6 py-2.5 text-xs font-black tracking-wider rounded-xl cursor-pointer hover:scale-[1.02] active:scale-95 transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>GET KEY VIA WHATSAPP</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Nav = ({ onOpenModal, onOpenFeatures, onOpenBenefits, onOpenPricing }: { onOpenModal: () => void; onOpenFeatures: () => void; onOpenBenefits: () => void; onOpenPricing: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                onOpenFeatures();
              }}
              className="text-base font-extrabold tracking-widest text-white/80 hover:text-pink-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              FEATURES
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => {
                e.preventDefault();
                onOpenBenefits();
              }}
              className="text-base font-extrabold tracking-widest text-white/80 hover:text-pink-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              BENEFITS
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                onOpenPricing();
              }}
              className="text-base font-extrabold tracking-widest text-white/80 hover:text-pink-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              PRICING
            </a>
            <a 
              href="#faq" 
              className="text-base font-extrabold tracking-widest text-white/80 hover:text-pink-500 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="text-base font-extrabold tracking-widest text-white/80 hover:text-pink-500 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              CONTACT
            </a>
            <button 
              onClick={onOpenModal}
              className="btn-gradient text-xs sm:text-sm font-black tracking-wider px-6 py-3.5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,76,131,0.3)]"
            >
              BOOK FREE CONSULTATION
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-pink-500 transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="md:hidden bg-[#050505] border-b border-white/10"
          >
            <div className="px-6 pt-4 pb-8 space-y-6">
              <a 
                href="#features" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onOpenFeatures();
                }}
                className="block text-xl font-black tracking-widest text-white hover:text-pink-500 transition-colors"
              >
                FEATURES
              </a>
              <a 
                href="#benefits" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onOpenBenefits();
                }}
                className="block text-xl font-black tracking-widest text-white hover:text-pink-500 transition-colors cursor-pointer"
              >
                BENEFITS
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  onOpenPricing();
                }}
                className="block text-xl font-black tracking-widest text-white hover:text-pink-500 transition-colors cursor-pointer"
              >
                PRICING
              </a>
              <a 
                href="#faq" 
                onClick={() => setIsOpen(false)}
                className="block text-xl font-black tracking-widest text-white hover:text-pink-500 transition-colors"
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block text-xl font-black tracking-widest text-white hover:text-pink-500 transition-colors"
              >
                CONTACT
              </a>
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }} 
                className="w-full btn-gradient py-4 text-sm font-black tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,76,131,0.3)]"
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

const Hero = ({ onOpenModal, onOpenYoutube }: { onOpenModal: () => void; onOpenYoutube: () => void }) => {
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
          <span className="text-gradient">Threads+Instagram Automation</span>
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
            className="w-full sm:w-72 px-10 py-4 text-base font-black tracking-wider rounded-xl text-white bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.65)] border border-emerald-400/50 cursor-pointer flex items-center justify-center"
          >
            Start Scaling Today
          </button>
          <button 
            onClick={onOpenYoutube}
            className="w-full sm:w-72 px-10 py-4 text-base flex items-center justify-center gap-2 font-black tracking-wider rounded-xl text-white border-2 border-red-500/80 bg-red-600/15 hover:bg-red-600 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_35px_rgba(239,68,68,0.55)] cursor-pointer"
          >
            <Play fill="currentColor" size={16} className="text-red-400 group-hover:text-white" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-7xl mx-auto w-full"
        >
          <div className="glass-card p-2 md:p-4 rounded-3xl relative">
            <img 
              src={kenMarketingTeam} 
              alt="KEN Marketing Team Dashboard Preview" 
              className="rounded-2xl w-full border border-white/5"
              referrerPolicy="no-referrer"
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

const Problems = () => {
  const problemsList = [
    {
      icon: X,
      title: "Constant Shadowbans",
      desc: "Standard bots get flagged instantly. Traditional automation puts your assets at extreme risk.",
      badge: "ALGORITHM RISK",
      badgeClass: "bg-red-500/20 border-red-500/40 text-red-300",
      gradient: "from-red-950/50 via-[#070505] to-[#070505]",
      borderClass: "border-red-500/30 hover:border-red-500/80",
      glowClass: "shadow-[0_0_30px_rgba(239,68,68,0.12)] hover:shadow-[0_0_50px_rgba(239,68,68,0.40)]",
      iconClass: "bg-red-500/20 border-red-500/40 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]",
      accentLine: "bg-gradient-to-r from-red-600 to-red-400",
      titleColor: "text-red-400"
    },
    {
      icon: RefreshCw,
      title: "Manual Fatigue",
      desc: "Hiring dozens of chatters is expensive and inefficient. Scale is capped by human speed.",
      badge: "SCALING LIMIT",
      badgeClass: "bg-amber-500/20 border-amber-500/40 text-amber-300",
      gradient: "from-amber-950/50 via-[#070505] to-[#070505]",
      borderClass: "border-amber-500/30 hover:border-amber-500/80",
      glowClass: "shadow-[0_0_30px_rgba(245,158,11,0.12)] hover:shadow-[0_0_50px_rgba(245,158,11,0.40)]",
      iconClass: "bg-amber-500/20 border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]",
      accentLine: "bg-gradient-to-r from-amber-600 to-amber-400",
      titleColor: "text-amber-400"
    },
    {
      icon: ShieldCheck,
      title: "Restricted Outreach",
      desc: "Reach 0.01% of your potential audience due to strict DM limits and action blocks.",
      badge: "REVENUE CAP",
      badgeClass: "bg-purple-500/20 border-purple-500/40 text-purple-300",
      gradient: "from-purple-950/50 via-[#070505] to-[#070505]",
      borderClass: "border-purple-500/30 hover:border-purple-500/80",
      glowClass: "shadow-[0_0_30px_rgba(168,85,247,0.12)] hover:shadow-[0_0_50px_rgba(168,85,247,0.40)]",
      iconClass: "bg-purple-500/20 border-purple-500/40 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
      accentLine: "bg-gradient-to-r from-purple-600 to-purple-400",
      titleColor: "text-purple-400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          Instagram Growth Is <span className="text-gradient">Harder Than Ever</span>
        </h2>
        <p className="text-white/60 mb-16 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          The old ways of manual scaling are dead. Don't let your agency get left behind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemsList.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[24px] border ${item.borderClass} ${item.glowClass} bg-gradient-to-b ${item.gradient} p-8 md:p-10 text-left transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 group`}
            >
              {/* Highlight accent line at the top */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.accentLine} opacity-90`} />
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 ${item.iconClass}`}>
                  <item.icon size={26} className="animate-pulse" />
                </div>
                <span className={`px-3.5 py-1.5 rounded-full border text-[10px] font-black tracking-widest uppercase ${item.badgeClass}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-black mb-4 tracking-wide ${item.titleColor}`}>
                {item.title}
              </h3>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const featuresList = [
    {
      icon: MousePointerClick,
      title: "AI Auto Comment",
      desc: "Intelligent commenting on top niche accounts that feels authentic and drives high-intent clicks.",
      colorClass: "text-blue-400 font-extrabold",
      bgGradient: "from-blue-950/40 via-[#0a0607] to-[#0a0607]",
      borderColor: "border-blue-500/30 hover:border-blue-400/80",
      glowColor: "shadow-[0_0_25px_rgba(59,130,246,0.06)] hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]",
      iconBg: "bg-blue-500/15 text-blue-400 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300",
      accentBg: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Instagram Warm-Up",
      desc: "Automated account maturation process to build trust with Instagram's algorithm before scaling.",
      colorClass: "text-amber-400 font-extrabold",
      bgGradient: "from-amber-950/40 via-[#0a0607] to-[#0a0607]",
      borderColor: "border-amber-500/30 hover:border-amber-400/80",
      glowColor: "shadow-[0_0_25px_rgba(245,158,11,0.06)] hover:shadow-[0_0_45px_rgba(245,158,11,0.35)]",
      iconBg: "bg-amber-500/15 text-amber-400 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300",
      accentBg: "bg-amber-500"
    },
    {
      icon: MessageSquare,
      title: "Mass DM System",
      desc: "Safe, targeted outreach at massive volume without triggering action blocks or spam filters.",
      colorClass: "text-purple-400 font-extrabold",
      bgGradient: "from-purple-950/40 via-[#0a0607] to-[#0a0607]",
      borderColor: "border-purple-500/30 hover:border-purple-400/80",
      glowColor: "shadow-[0_0_25px_rgba(168,85,247,0.06)] hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]",
      iconBg: "bg-purple-500/15 text-purple-400 border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300",
      accentBg: "bg-purple-500"
    },
    {
      icon: FileVideo,
      title: "Reels Posting",
      desc: "Schedule and auto-post viral-ready reels across hundreds of accounts simultaneously.",
      colorClass: "text-pink-400 font-extrabold",
      bgGradient: "from-pink-950/40 via-[#0a0607] to-[#0a0607]",
      borderColor: "border-pink-500/30 hover:border-pink-400/80",
      glowColor: "shadow-[0_0_25px_rgba(236,72,153,0.06)] hover:shadow-[0_0_45px_rgba(236,72,153,0.35)]",
      iconBg: "bg-pink-500/15 text-pink-400 border border-pink-500/30 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300",
      accentBg: "bg-pink-500"
    },
    {
      icon: ShieldCheck,
      title: "Anti-Ban Protection",
      desc: "Advanced residential proxies and browser fingerprint masking for total safety.",
      colorClass: "text-emerald-400 font-extrabold",
      bgGradient: "from-emerald-950/40 via-[#0a0607] to-[#0a0607]",
      borderColor: "border-emerald-500/30 hover:border-emerald-400/80",
      glowColor: "shadow-[0_0_25px_rgba(16,185,129,0.06)] hover:shadow-[0_0_45px_rgba(16,185,129,0.35)]",
      iconBg: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300",
      accentBg: "bg-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      desc: "Centralized dashboard to monitor growth, conversion rates, and ROI across all accounts.",
      colorClass: "text-cyan-400 font-extrabold",
      bgGradient: "from-cyan-950/40 via-[#0a0607] to-[#0a0607]",
      borderColor: "border-cyan-500/30 hover:border-cyan-400/80",
      glowColor: "shadow-[0_0_25px_rgba(6,182,212,0.06)] hover:shadow-[0_0_45px_rgba(6,182,212,0.35)]",
      iconBg: "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300",
      accentBg: "bg-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0607] relative overflow-hidden">
      {/* Dynamic background atmospheric lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
          The Complete <span className="text-gradient">Instagram Automation</span> System
        </h2>
        <p className="text-white/60 mb-16 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Our proprietary technology bypasses limits and mimics 100% human behavior safely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden p-8 sm:p-10 text-left rounded-[24px] border ${item.borderColor} ${item.glowColor} bg-gradient-to-b ${item.bgGradient} transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 group`}
            >
              {/* Highlight accent strip on the left margin */}
              <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${item.accentBg} opacity-80`} />
              
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                  <item.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style={{ backgroundColor: 'currentColor' }} />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 tracking-wide group-hover:translate-x-1 transition-transform duration-300 ${item.colorClass}`}>
                {item.title}
              </h3>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Implementation = () => {
  const steps = [
    {
      num: "1",
      title: "Warm Accounts",
      desc: "Build algo-trust safely.",
      glowColor: "shadow-[0_0_25px_rgba(59,130,246,0.08)] hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]",
      borderColor: "border-blue-500/30 hover:border-blue-400/80",
      numClass: "bg-blue-500/20 text-blue-300 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
      titleColor: "text-blue-400",
      bgGradient: "from-blue-950/30 via-[#050505] to-[#050505]",
      accentBg: "bg-blue-500"
    },
    {
      num: "2",
      title: "AI Targeting",
      desc: "Identify high-value leads.",
      glowColor: "shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:shadow-[0_0_45px_rgba(6,182,212,0.35)]",
      borderColor: "border-cyan-500/30 hover:border-cyan-400/80",
      numClass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]",
      titleColor: "text-cyan-400",
      bgGradient: "from-cyan-950/30 via-[#050505] to-[#050505]",
      accentBg: "bg-cyan-500"
    },
    {
      num: "3",
      title: "Automate Outreach",
      desc: "Scale comments & DMs.",
      glowColor: "shadow-[0_0_25px_rgba(168,85,247,0.08)] hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]",
      borderColor: "border-purple-500/30 hover:border-purple-400/80",
      numClass: "bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
      titleColor: "text-purple-400",
      bgGradient: "from-purple-950/30 via-[#050505] to-[#050505]",
      accentBg: "bg-purple-500"
    },
    {
      num: "4",
      title: "Optimize Growth",
      desc: "A/B test content & scripts.",
      glowColor: "shadow-[0_0_25px_rgba(236,72,153,0.08)] hover:shadow-[0_0_45px_rgba(236,72,153,0.35)]",
      borderColor: "border-pink-500/30 hover:border-pink-400/80",
      numClass: "bg-pink-500/20 text-pink-300 border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]",
      titleColor: "text-pink-400",
      bgGradient: "from-pink-950/30 via-[#050505] to-[#050505]",
      accentBg: "bg-pink-500"
    },
    {
      num: "5",
      title: "Convert Traffic",
      desc: "Drive fans to your funnel.",
      glowColor: "shadow-[0_0_25px_rgba(16,185,129,0.08)] hover:shadow-[0_0_45px_rgba(16,185,129,0.35)]",
      borderColor: "border-emerald-500/30 hover:border-emerald-400/80",
      numClass: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
      titleColor: "text-emerald-400",
      bgGradient: "from-emerald-950/30 via-[#050505] to-[#050505]",
      accentBg: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background soft ambient flow glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">
          Seamless <span className="text-gradient">Implementation</span>
        </h2>
        <p className="text-white/60 mb-20 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          How we systematically deploy our systems to scale your agency and content traffic.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30 rounded-full -z-10 shadow-[0_0_15px_rgba(168,85,247,0.2)]" />

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[24px] border p-6 md:p-8 flex flex-col items-center text-center bg-gradient-to-b ${step.bgGradient} ${step.borderColor} ${step.glowColor} transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1.5 group`}
            >
              {/* Top accent visual strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${step.accentBg} opacity-80`} />
              
              <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl font-black mb-6 transition-transform duration-500 group-hover:scale-110 ${step.numClass}`}>
                {step.num}
              </div>
              
              <h4 className={`text-lg sm:text-xl font-black mb-3 tracking-wide transition-all duration-300 ${step.titleColor}`}>
                {step.title}
              </h4>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-semibold">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
               alt="OFM Creator Success Dashboard" 
               className="rounded-2xl w-full"
               referrerPolicy="no-referrer"
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

const CTA = ({ onOpenModal, onOpenPricing }: { onOpenModal: () => void; onOpenPricing: () => void }) => (
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
          <a 
            href="http://wa.me/+84345932166" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gradient w-full sm:w-72 px-6 py-4 text-base flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl font-black tracking-wider shadow-[0_0_25px_rgba(255,76,131,0.25)] hover:shadow-[0_0_40px_rgba(255,76,131,0.45)] whitespace-nowrap"
          >
            Get Started Now
            <Zap size={18} fill="white" />
          </a>
          <button 
            onClick={onOpenPricing}
            className="w-full sm:w-72 px-6 py-4 text-base flex items-center justify-center gap-2 font-black tracking-wider text-pink-500 bg-[#0d0708] border-2 border-pink-500/80 rounded-xl hover:bg-pink-500 hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(255,76,131,0.2)] hover:shadow-[0_0_40px_rgba(255,76,131,0.5)] cursor-pointer whitespace-nowrap"
          >
            GET A QUOTE
            <FileText size={18} />
          </button>
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
  const [isYoutubeOpen, setIsYoutubeOpen] = React.useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = React.useState(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = React.useState(false);
  const [isPricingOpen, setIsPricingOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <Nav 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenFeatures={() => setIsFeaturesOpen(true)} 
        onOpenBenefits={() => setIsBenefitsOpen(true)} 
        onOpenPricing={() => setIsPricingOpen(true)} 
      />
      <Hero 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenYoutube={() => setIsYoutubeOpen(true)}
      />
      <Problems />
      <Features />
      <Implementation />
      <Stats />
      <Safety />
      <CTA 
        onOpenModal={() => setIsModalOpen(true)} 
        onOpenPricing={() => setIsPricingOpen(true)} 
      />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <YouTubeModal isOpen={isYoutubeOpen} onClose={() => setIsYoutubeOpen(false)} />
      <FeaturesModal isOpen={isFeaturesOpen} onClose={() => setIsFeaturesOpen(false)} />
      <BenefitsModal isOpen={isBenefitsOpen} onClose={() => setIsBenefitsOpen(false)} />
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </div>
  );
}
