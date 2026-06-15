'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">davinci.fyi</div>
          <div className="flex gap-8 text-sm">
            <button onClick={() => scrollToSection('services')} className="hover:text-[#00ff9f] transition-colors">Services</button>
            <button onClick={() => scrollToSection('infra')} className="hover:text-[#00ff9f] transition-colors">Infra</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#00ff9f] transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            davinci<br />fyi
          </motion.h1>
          <p className="text-2xl md:text-3xl text-zinc-400 mb-12 max-w-2xl mx-auto">Building resilient AI SaaS infrastructure. Operator capital for technical founders.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-[#00ff9f] text-black font-semibold rounded-full hover:bg-white transition-all">Get in touch</button>
            <a href="https://github.com/cftcai/davinci-fyi" target="_blank" className="px-10 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all">View GitHub</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl">
              <div className="text-[#00ff9f] text-4xl mb-6">01</div>
              <h3 className="text-3xl font-semibold mb-4">AI SaaS Infra</h3>
              <p className="text-zinc-400">FastAPI + Next.js + PostgreSQL + Redis stacks. Production-grade, self-hosted where needed.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl">
              <div className="text-[#00ff9f] text-4xl mb-6">02</div>
              <h3 className="text-3xl font-semibold mb-4">n8n Automation</h3>
              <p className="text-zinc-400">Workflow orchestration. Integrate tools, self-hosted on Hetzner/Oracle.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl">
              <div className="text-[#00ff9f] text-4xl mb-6">03</div>
              <h3 className="text-3xl font-semibold mb-4">Operator Capital</h3>
              <p className="text-zinc-400">Hands-on technical partnership. Infra expertise meets founder execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infra */}
      <section id="infra" className="py-24 bg-zinc-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Cloud Stack</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><span className="text-[#00ff9f]">•</span> Hetzner CCX13 (dedicated)</li>
                <li className="flex items-center gap-3"><span className="text-[#00ff9f]">•</span> Oracle Cloud Always Free + PAYG</li>
                <li className="flex items-center gap-3"><span className="text-[#00ff9f]">•</span> Self-hosted: n8n, Grafana, Prometheus, PostgreSQL, Redis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl mb-6">Monitoring</h3>
              <p className="text-zinc-400">Real-time observability with Prometheus + Grafana. High uptime, cost-optimized.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-8">Let's Build</h2>
          <p className="text-xl text-zinc-400 mb-12">Reach out for infrastructure consulting or operator partnerships.</p>
          <form className="space-y-6" action="https://your-n8n-webhook.example.com" method="POST">
            <input type="text" placeholder="Name" className="w-full bg-zinc-900 border border-white/20 p-4 rounded-2xl focus:outline-none focus:border-[#00ff9f]" />
            <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-white/20 p-4 rounded-2xl focus:outline-none focus:border-[#00ff9f]" />
            <textarea placeholder="Message" rows={5} className="w-full bg-zinc-900 border border-white/20 p-4 rounded-2xl focus:outline-none focus:border-[#00ff9f]"></textarea>
            <button type="submit" className="w-full py-4 bg-[#00ff9f] text-black font-semibold rounded-2xl hover:bg-white">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-zinc-500">
        © 2026 LarimarLabs LLC. All rights reserved.
      </footer>
    </div>
  );
}
