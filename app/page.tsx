import React from 'react';
import { ArrowRight, Linkedin, Send, FileText, Mail } from 'lucide-react';

export default function PersonalHomepage() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1a1a1a] selection:bg-black selection:text-white font-sans antialiased">
      <main className="max-w-screen-md mx-auto px-6 py-24 md:py-40">
        
        {/* Intro Section */}
        <section className="mb-24">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            [YOUR NAME]
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-black/70">
            Bridging finance and technology. <br />
            Currently exploring automated systems and <br />
            digital assets in Singapore.
          </p>
        </section>

        {/* Links Section: Clean & Non-Codey */}
        <div className="grid grid-cols-1 gap-px bg-black/10 border-y border-black/10">
          <LinkRow label="Detailed CV" sub="Standard Resume" url="#" icon={<FileText size={20} />} />
          <LinkRow label="LinkedIn" sub="Professional Network" url="#" icon={<Linkedin size={20} />} />
          <LinkRow label="Telegram" sub="Direct Message" url="#" icon={<Send size={18} />} />
          <LinkRow label="Email" sub="Get in touch" url="#" icon={<Mail size={20} />} />
        </div>

        {/* Minimalist Footer */}
        <footer className="mt-24 flex justify-between items-center text-[11px] uppercase tracking-[0.2em] font-medium text-black/40">
          <span>Singapore</span>
          <div className="flex gap-4">
            <span>© 2026</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Sub-component for clean, consistent link rows
function LinkRow({ label, sub, url, icon }) {
  return (
    <a
      href={url}
      className="group flex items-center justify-between py-8 px-2 bg-[#F9F9F9] hover:bg-white transition-all duration-300"
    >
      <div className="flex items-center gap-6">
        <span className="text-black/30 group-hover:text-black transition-colors">
          {icon}
        </span>
        <div>
          <h2 className="text-lg font-medium">{label}</h2>
          <p className="text-sm text-black/40">{sub}</p>
        </div>
      </div>
      <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  );
}
