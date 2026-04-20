/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen pt-32 pb-20 px-8 md:px-24"
  >
    {children}
  </motion.div>
);

const Navbar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-8 md:p-12 bg-transparent pointer-events-none">
      <div className="pointer-events-auto invisible">
        {/* Logo area hidden as requested */}
      </div>
      
      <button 
        onClick={onOpenMenu}
        className="pointer-events-auto flex items-center gap-4 px-6 py-3 bg-natural-bg/50 backdrop-blur-sm rounded-full border border-natural-border/20 text-[10px] font-bold tracking-[0.3em] uppercase text-natural-accent hover:text-natural-ink hover:border-natural-accent transition-all group"
      >
        <span>Menu</span>
        <div className="w-10 h-[1px] bg-natural-accent group-hover:w-14 transition-all" />
        <Menu size={16} />
      </button>
    </nav>
  );
};

const MenuOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const menuItems = [
    { name: 'About Me', path: '/about', count: '01', sub: '자기소개' },
    { name: 'Projects', path: '/projects', count: '02', sub: '프로젝트' },
    { name: 'Personality', path: '/personality', count: '03', sub: '성향' },
    { name: 'Contact', path: '/contact', count: '04', sub: '연락처' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-natural-bg/98 backdrop-blur-xl flex flex-col p-8 md:p-12 overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full">
            <div className="invisible">
              {/* Header label hidden as requested */}
            </div>
            
            <button 
              onClick={onClose}
              className="flex items-center gap-4 px-6 py-3 bg-white/50 rounded-full border border-natural-border/20 text-[10px] font-bold tracking-[0.3em] uppercase text-natural-accent hover:text-natural-ink transition-all"
            >
              <span>Close</span>
              <X size={16} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
            <div className="space-y-4 md:space-y-8">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  <Link 
                    to={item.path} 
                    onClick={onClose}
                    className="group flex items-baseline gap-8"
                  >
                    <div className="flex flex-col items-end min-w-[32px]">
                      <span className="text-[9px] font-bold font-sans text-natural-accent/30 group-hover:text-natural-accent transition-colors">{item.count}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                      <h2 className="font-serif text-5xl md:text-8xl text-natural-ink group-hover:italic group-hover:pl-4 transition-all duration-500 font-normal">
                        {item.name}
                      </h2>
                      <span className="text-lg md:text-2xl font-sans font-light text-natural-accent/40 group-hover:text-natural-accent transition-colors">
                        ({item.sub})
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer inside menu */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-full gap-8 border-t border-natural-border/10 pt-12">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-natural-accent/40 block">Location</span>
              <p className="font-serif italic text-natural-ink">Seoul, South Korea</p>
            </div>
            <div className="flex gap-12 text-natural-accent/40">
              <Instagram size={18} className="hover:text-natural-ink cursor-pointer transition-colors" />
              <Linkedin size={18} className="hover:text-natural-ink cursor-pointer transition-colors" />
              <Mail size={18} className="hover:text-natural-ink cursor-pointer transition-colors" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  const emotions = [
    { label: '공감', path: '/about', sub: 'About Me' },
    { label: '호기심', path: '/personality', sub: 'Personality' },
    { label: '신뢰', path: '/projects', sub: 'Projects' },
    { label: '확신', path: '/contact', sub: 'Contact' }
  ];

  return (
    <PageWrapper>
      <section className="relative flex flex-col items-center justify-center pt-20 text-center">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none -translate-y-20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[1px] border-natural-accent rounded-full animate-[spin_60s_linear_infinite]" />
        </div>

        <div className="max-w-7xl w-full flex flex-col items-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-natural-accent/60 block">Intentional Planning</span>
              <h2 className="font-serif text-4xl md:text-7xl leading-[1.2] text-natural-ink font-normal max-w-4xl mx-auto">
                지금 어떤 감정의 기획을<br />
                <span className="italic opacity-80 font-light">경험하고 싶으신가요?</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 max-w-2xl mx-auto w-full">
              {emotions.map((e, idx) => (
                <motion.button
                  key={e.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  onClick={() => navigate(e.path)}
                  className="group flex flex-col items-center justify-center py-10 md:py-12 bg-white/40 hover:bg-natural-accent transition-all duration-500 rounded-sm border border-natural-border/20 hover:border-natural-accent shadow-sm"
                >
                  <span className="text-3xl md:text-4xl font-serif text-natural-ink group-hover:text-white transition-colors">
                    {e.label}
                  </span>
                </motion.button>
              ))}
            </div>
            
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 text-natural-accent pt-12">
              Select an emotion to begin exploration
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

const AboutSection = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <motion.div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-natural-accent/50 block">About Me & Empathy</span>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
              <span className="font-serif text-xl text-natural-ink font-bold italic">권아진 </span>
              <span className="text-[10px] uppercase tracking-widest text-natural-accent/60 font-bold font-sans">한성대학교 문학문화콘텐츠학과(심리학MD)</span>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl font-normal leading-snug text-natural-ink">
              콘텐츠의 끝에서 <br />타인의 감정을 만납니다.
            </h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-12 text-natural-ink/70 leading-loose text-lg font-light italic font-serif">
             <div className="md:col-span-2 text-2xl text-natural-ink not-italic font-sans font-bold border-r border-natural-border/20 pr-8">
               "저는 콘텐츠가 사람의 감정을 변화시키는 과정을 관찰합니다."
             </div>
             <div className="md:col-span-3 space-y-8">
                <p>
                  같은 사람이라도 감정 상태에 따라 선택하는 콘텐츠가 달라지고, 또 콘텐츠를 통해 감정이 변화하는 모습을 보며 그 실마리를 찾게 되었습니다.
                </p>
                <p>
                  현재는 심리학을 바탕으로 사용자의 내면을 분석하고, 감정의 흐름을 고려한 최적의 기획을 고민하고 있습니다.
                </p>
                <p>
                  단순히 보여주는 것이 아니라, 마음을 움직이고 오래 기억에 남는 '경험'을 설계하는 것이 저의 목표입니다.
                </p>
             </div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

const ProjectSection = () => {
  const projectFlow = [
    { label: '목표 감정', value: '새로움 (Novelty)' },
    { label: '문제 상황', value: '전통적인 아르누보 스타일의 현대적 이질감' },
    { label: '사고 과정', value: '유기적 곡선(Art Nouveau) + 기능적 단순함(Bauhaus)의 융합' },
    { label: '해결 방법', value: '바우하우스의 구조적 미니멀리즘으로 아르누보 재해석' },
    { label: '결과 및 배운 점', value: '서로 다른 철학의 결합을 통한 새로운 미적 가능성 확인' }
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-20 space-y-4 text-left">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-natural-accent/50">Case Study & Trust</span>
          <h3 className="font-serif text-3xl md:text-6xl text-natural-ink font-normal leading-tight">
            전략적 융합을 통한 <br />감각의 확장
          </h3>
        </div>

        <div className="bg-white border border-natural-border/20 rounded-sm overflow-hidden shadow-sm flex flex-col">
          <div className="p-12 md:p-20 bg-natural-bg/30">
            <h4 className="font-serif text-2xl md:text-3xl mb-12 text-natural-ink border-b border-natural-border/20 pb-4">
              아르누보와 바우하우스를 결합한 조명 광고
            </h4>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                {projectFlow.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-natural-accent/60">{item.label}</span>
                    <p className="text-lg text-natural-ink/80 font-light leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-10">
                {projectFlow.slice(3).map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-natural-accent/60">{item.label}</span>
                    <p className="text-lg text-natural-ink/80 font-light leading-relaxed">{item.value}</p>
                  </div>
                ))}
                <div className="pt-8 flex items-center gap-4 text-[10px] font-bold tracking-widest uppercase text-natural-accent border-t border-natural-border/20">
                   <div className="w-10 h-[10px] bg-natural-accent" />
                   <span>Project Verification Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const PersonalitySection = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto text-center space-y-20">
        <div className="space-y-6">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-natural-accent/50 block">Characteristics</span>
          <h3 className="font-serif text-3xl md:text-6xl text-natural-ink font-normal leading-tight italic">
            "사람의 감정을 세밀하게 관찰하는 사람"
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-natural-border/20 border border-natural-border/20 rounded-sm">
          <div className="bg-natural-bg/50 p-12 text-left space-y-6 backdrop-blur-sm shadow-sm border border-natural-border/10">
            <h4 className="font-serif text-2xl font-normal text-natural-ink">Meticulous Observer</h4>
            <p className="text-natural-ink/70 font-light leading-relaxed">
              타인의 반응과 감정 변화를 살피는 과정에서 가장 높은 몰입을 느낍니다. 세밀한 관찰은 기획의 가장 중요한 데이터가 됩니다.
            </p>
          </div>
          <div className="bg-natural-bg/50 p-12 text-left space-y-6 backdrop-blur-sm shadow-sm border border-natural-border/10">
            <h4 className="font-serif text-2xl font-normal text-natural-ink">Strategic Empathy</h4>
            <p className="text-natural-ink/70 font-light leading-relaxed">
              상황과 맥락에 맞는 감정을 이해하고 공감하며, 그것을 콘텐츠적 해결책으로 변환하는 것이 저의 핵심 강점입니다.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const ContactSection = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="space-y-12 mb-20">
          <div className="space-y-4">
             <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-natural-accent/40 block">Final Message & Confidence</span>
             <h3 className="font-serif text-4xl md:text-7xl font-normal text-natural-ink leading-[1.1]">
               사람의 감정을 <br />
               <span className="italic opacity-60">확신으로 만듭니다.</span>
             </h3>
          </div>
          <p className="max-w-lg mx-auto text-lg text-natural-accent font-light leading-relaxed">
            함께 감동을 설계할 준비가 되셨나요? <br />
            생각의 결이 닿는 곳에서 기다리고 있겠습니다.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a href="tel:010-8497-5776" className="text-3xl md:text-4xl font-serif text-natural-ink hover:text-natural-accent transition-colors">
              010-8497-5776
            </a>
          </div>
        </div>

        <div className="flex gap-12 text-natural-accent/40 hover:text-natural-accent transition-colors">
          <a href="#" className="hover:text-natural-ink hover:scale-110 transition-all"><Instagram size={20} /></a>
          <a href="#" className="hover:text-natural-ink hover:scale-110 transition-all"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-natural-ink hover:scale-110 transition-all"><Mail size={20} /></a>
        </div>

        <div className="w-full mt-24 pt-12 border-t border-natural-border/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[9px] font-bold tracking-[0.4em] uppercase text-natural-accent">
          <p>© 2026 Emotion Designer. Planning with Psychology.</p>
        </div>
      </div>
    </PageWrapper>
  );
};

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/personality" element={<PersonalitySection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <main className="selection:bg-natural-accent/30 selection:text-white bg-natural-bg min-h-screen">
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <RoutesWithAnimation />
      </main>
    </BrowserRouter>
  );
}
