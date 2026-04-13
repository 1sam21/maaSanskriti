import { Link } from 'react-router-dom';

export default function Timeline() {
  return (
    <main className="pt-32 pb-24 px-12 bg-surface max-w-screen-2xl mx-auto">
      <header className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="font-headline text-6xl font-bold text-primary tracking-tighter mb-4">
          Project <span className="italic text-secondary">Timeline</span>
        </h1>
        <p className="text-primary/70 text-lg max-w-2xl mx-auto leading-relaxed">
          The MaaSanskriti Talent Hunt — Stage 1 follows a rigorous 45-day stage-wise project breakdown across Bangalore and Port Blair.
        </p>
      </header>

      {/* Timeline Section */}
      <section className="max-w-6xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/10 -translate-x-1/2 hidden lg:block"></div>
        <div className="space-y-32">
          
          {/* Stage 1: Ads & Registration */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 group">
            <div className="lg:w-1/2 lg:text-right">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-2 block">Day 1 – 10 (Stage 1)</span>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">Advertisement & Jury Setup</h3>
              <p className="text-primary/70 leading-relaxed font-body">Spreading awareness across Bangalore and Port Blair. Establishing the jury panel with experts from Film, Fashion, and Medicine.</p>
              <ul className="mt-4 text-sm text-primary/60 space-y-1">
                <li>• Social Media Applications</li>
                <li>• Treefe App Integration</li>
                <li>• On-ground Standies (Malls & Colleges)</li>
              </ul>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-surface border-4 border-primary-container flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-xl shadow-primary/10">
              <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: '"FILL" 1'}}>campaign</span>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700 group-hover:translate-x-4">
                <img className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANi9eZdx6p2tVf2LIXZjPFG7R407wimciOleoDAUeDeFGDLoH7Jlyx5UPGDy1U12-eW5hCfWV_Nm6GWQh2nqnTaHtVY9p94RL1L9fmuf4jhWqSTrL2kTY0QVZ9rNfOIqT9Hhg7h97hFWKJ5C7qE03htfhaMu0GPv8StO6sraSrNpxdjp-PcFJJwHsMGcKAXO8A8q2B-gjB3qBN5zPaPT0MWZyRLx4Rbajj3EKlDBZjXJfK1lRlgt-4i7Ulv7tqBb8jXFVZOjlar4Wr" alt="Stage 1" />
              </div>
            </div>
          </div>

          {/* Stage 2: Verification */}
          <div className="relative flex flex-col lg:flex-row-reverse items-center justify-center gap-12 group">
            <div className="lg:w-1/2 lg:text-left">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-2 block">Day 11 – 25 (Stage 2)</span>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">Verification & Onboarding</h3>
              <p className="text-primary/70 leading-relaxed font-body">Personal verification of registered candidates. Mentor-led family briefings and official platform onboarding via Treefe App.</p>
              <ul className="mt-4 text-sm text-primary/60 space-y-1">
                <li>• In-person Home Visits</li>
                <li>• Family Ecosystem Briefing</li>
                <li>• Platform Access Granted</li>
              </ul>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-surface border-4 border-secondary flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-xl shadow-secondary/10">
              <span className="material-symbols-outlined text-secondary text-2xl" style={{fontVariationSettings: '"FILL" 1'}}>verified_user</span>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700 group-hover:-translate-x-4">
                <img className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_oh5SMUQ_HMRKj_vzfSh0l4Irs9CMNot7C1IJ1S8XCa8bXCxD91kDkr0zYhwSvVlJLQ1DPl6IxkxET_zt_Wc5ni9cF5B-F8I-hqII5pAWjmaYPU87IIyfa703ZwIpbKeG0o2imi8id-ybFTBAFR8PuQUgmT76d1GD-IqtF3vN009TG9KdjXOai6d8G6m75Ty7mKW-Uc1LZkFBKF5qE87Lgrnj2_CD_deUDYCxffiyXTJPTlxSOQ6iT4pvWGCR0QZAaHQjNXDT43e2" alt="Stage 2" />
              </div>
            </div>
          </div>

          {/* Stage 3: Video Creation */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 group">
            <div className="lg:w-1/2 lg:text-right">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-2 block">Day 26 – 35 (Stage 3)</span>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">Candidate Video Creation</h3>
              <p className="text-primary/70 leading-relaxed font-body">Structured video task cycle (7 tasks per candidate). Assessment of personality, leadership, and supported talent as per jury guidelines.</p>
              <ul className="mt-4 text-sm text-primary/60 space-y-1">
                <li>• Self Introduction (3m)</li>
                <li>• Talent Showcase (5m)</li>
                <li>• Family Support (4m)</li>
              </ul>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-xl shadow-primary/10">
              <span className="material-symbols-outlined text-primary text-2xl">movie</span>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700 group-hover:translate-x-4">
                <img className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjX5xcIZdNNlQVZFmxumhD8521e-y-c43oj59wVVOEvY9KLRrELhXXQrpNI4YHJdqQpdRmghVGkCLyGeWyby_dQQI9S_6K7f0FCWz9up6Y8-4eU9UCZ1PkrZZM8S3JE58lTpp7jc5KChUTDsaAb7zuDNQu-YNHDE60GCI-wO23cJWK3-UxrIly94ZzqsIVyAXcY3f4Irj9sympd8gWiW_LY0ZZdn2BE5jm8XAm0Nu_6TjDGIc3oB-yG-24KdOPItpVQ7JCrawe0_y-" alt="Stage 3" />
              </div>
            </div>
          </div>

          {/* Stage 4: Finale */}
          <div className="relative flex flex-col lg:flex-row-reverse items-center justify-center gap-12 group">
            <div className="lg:w-1/2 lg:text-left">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-2 block">Day 36 – 45 (Stage 4)</span>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">Jury Review & Grand Finale</h3>
              <p className="text-primary/70 leading-relaxed font-body">Final jury interaction, BTL marketing activities, CSR integration, and the Grand Finale award ceremony.</p>
              <ul className="mt-4 text-sm text-primary/60 space-y-1">
                <li>• Scoring & Top 3 Selection</li>
                <li>• Full Production Setup</li>
                <li>• Winner Announcements</li>
              </ul>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full bg-surface border-4 border-secondary flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-xl shadow-secondary/10">
              <span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 transition-all duration-700 group-hover:-translate-x-4">
                <img className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_nFivcJyxGE1NUfr96LpBktx_CpcwlirMwRFjqzfKDcQswj4sr-nWUOyEQEunlKjh0k4qqrGaehIQFWJw4UKZphEsxpSRJoEw8MsyRKV8ZwP1yfixawREb5ftzU7ysolc0Kznn4YwjwhRbSvBW4eOwsLpBpKv-SIInKD4Jb_rfL3J1BIOmjL_OGXiHinwGgH9bZTVx293oAVORBHUFgHvjfFNqzIEGX6gOc81NzBLnik0iB9ZZDyPNNHuUuXOTPIORMJIhls3JDM" alt="Stage 4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Statistics Bento Grid */}
      <section className="mt-48 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline text-4xl font-bold text-primary mb-2">Project Outcomes</h2>
            <p className="text-primary/60 font-label uppercase tracking-widest text-xs">A 45-day journey summary</p>
          </div>
          <button className="text-secondary font-label text-xs uppercase tracking-widest border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all">View Outcome Report</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 relative h-96 rounded-3xl overflow-hidden group cursor-pointer bg-primary">
            <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_J2sUu5b-4QjpdpMKT1QZ3Xmcxo6TxTC7lKMixFVQ7IdWPPk-GLlYjZuZrJmlG33ixViTbOUrwLYvMdybxw0VduRxW0UqIMBZB_cSNXP18ipK64jBjxyoYsMMsMhhfDDmBLT4hSmSfurkpJCgiH4kXaUWsOeb5InrLSPo0XUNRsRxRMTFOVLIVJvNmKLpnBYBPHB7ONgg3BRx7i1u1S8YrtMU5GDbqDMbwuuQ2Fn0_gh95VrHv1LvXBc5qVYa-CIa2e7IEe2yOttx" alt="Candidates" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <h4 className="text-on-primary font-headline text-3xl mb-2">100+ Candidate Videos</h4>
              <p className="text-on-primary/70 max-w-md font-body">Showcasing diverse talent across Bangalore and Port Blair, featuring CSR partner appreciation.</p>
            </div>
          </div>
          
          <div className="bg-surface-container-high rounded-3xl p-10 flex flex-col justify-between hover:bg-surface-container highest transition-colors cursor-pointer group">
            <div>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform">work</span>
              <h4 className="font-headline text-2xl font-bold text-primary mb-4">Direct Job Offers</h4>
              <p className="text-primary/60 text-sm leading-relaxed">Top 3 winners receive placement opportunities in Film, Fashion, and other creative industries.</p>
            </div>
            <div className="pt-6 border-t border-primary/10 flex items-center justify-between">
              <span className="text-xs font-label uppercase tracking-widest text-primary/40">Prize Level</span>
              <span className="material-symbols-outlined text-primary/40">arrow_forward</span>
            </div>
          </div>
          
          <div className="bg-primary-container rounded-3xl p-10 flex flex-col justify-between cursor-pointer group">
            <div className="mb-8">
              <h4 className="font-headline text-2xl font-bold text-on-primary-container mb-4">Training Modules</h4>
              <p className="text-on-primary-container/60 text-sm leading-relaxed">Structured professional training for non-finalist candidates delivered by jury experts.</p>
            </div>
            <div className="h-32 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsedE2nfvaYKULOQhxvyQdEh8AToAgG-xPomroylvjJwNyivFAFNpMd9JbPhKU5TYFihWZji8sioiUV5yDyzEK-JD_ZvRedRiywdfg1RIGxB5AXdYojskfca7Ta-x2Q0G2gKY8GLaQJ_aY2E4VEoeOnyoWjlkvwZw0h0KV6EaejzsUy_8qMkW0pIXUMp8lDRm6TewdDzfAZ9hEKMYdQEABWbzplh8HBvivYHPY_WYUt6ETWU9QtPCt6oikRW8AkyU8CDj9uE0BDIdj" alt="Training" />
            </div>
          </div>
          
          <div className="md:col-span-2 relative h-[22rem] rounded-3xl overflow-hidden group cursor-pointer">
            <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_nFivcJyxGE1NUfr96LpBktx_CpcwlirMwRFjqzfKDcQswj4sr-nWUOyEQEunlKjh0k4qqrGaehIQFWJw4UKZphEsxpSRJoEw8MsyRKV8ZwP1yfixawREb5ftzU7ysolc0Kznn4YwjwhRbSvBW4eOwsLpBpKv-SIInKD4Jb_rfL3J1BIOmjL_OGXiHinwGgH9bZTVx293oAVORBHUFgHvjfFNqzIEGX6gOc81NzBLnik0iB9ZZDyPNNHuUuXOTPIORMJIhls3JDM" alt="Digital Reach" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-12 flex flex-col justify-end">
              <h4 className="text-on-primary font-headline text-3xl mb-2">City-Wide Brand Reach</h4>
              <p className="text-on-primary/70 max-w-md font-body">Candidate videos feature CSR partners, displayed on digital screens across target cities.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

