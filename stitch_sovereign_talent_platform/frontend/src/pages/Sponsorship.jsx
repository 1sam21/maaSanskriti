import { Link } from 'react-router-dom';

export default function Sponsorship() {
  const tiers = [
    {
      name: 'Visionary Patron',
      impact: 'Support 10+ Candidates',
      exposure: 'Lead Brand Integration on all Digital Screens in Bangalore & Port Blair Malls.',
      benefits: ['Project Documentary Credit', 'VIP Finale Access', 'Exclusive Appreciation Videos']
    },
    {
      name: 'Growth Catalyst',
      impact: 'Support 5 Candidates',
      exposure: 'High-frequency rotation on Treefe App & Social Media campaigns.',
      benefits: ['Success Story Branding', 'Certificate of Impact', 'Category Exclusivity']
    },
    {
      name: 'Talent Champion',
      impact: 'Support 1 Candidate',
      exposure: 'Direct brand tagging in the candidate\'s professional intro video.',
      benefits: ['Social Media Shoutout', 'Impact Report', 'Placement Recognition']
    }
  ];

  return (
    <main className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-20">
          <img className="w-full h-full object-cover mix-blend-overlay" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Corporate Partnership" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-6 block">Section 6.3</span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-tight tracking-tight mb-8">
            CSR <span className="italic">Excellence</span> <br/>& Brand Legacy.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-body leading-relaxed max-w-2xl mx-auto">
            Integrate your corporate identity with a transformative talent hunt. From prime digital screens to candidate-led appreciation, your brand fuels the future.
          </p>
        </div>
      </section>

      {/* Exposure Channels */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="font-headline text-5xl font-bold text-primary mb-8 leading-tight underline decoration-secondary decoration-4 underline-offset-8">High Impact <br />Visibility Channels.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">tv</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-2">Prime Digital Screens</h4>
                  <p className="text-primary/60 font-body">Your brand displayed on large-format digital screens in high-traffic city malls across Bangalore and Port Blair.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">video_camera_front</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-2">Appreciation Videos</h4>
                  <p className="text-primary/60 font-body">Candidates create dedicated videos tagging and thanking sponsor brands, building authentic community rapport.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined">campaign</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-2">BTL Marketing</h4>
                  <p className="text-primary/60 font-body">On-ground branding during registration drives and the final Talent Hunt gala event.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-12 rounded-[3.5rem] border border-primary/5 shadow-2xl">
            <h3 className="font-headline text-3xl font-bold text-primary mb-8 italic">The Outcome Ledger</h3>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">Deliverable</span>
                <p className="font-bold text-primary">Job Offer Letters for Top 3 Talent</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">Deliverable</span>
                <p className="font-bold text-primary">Success Stories Published on Portals</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-primary/5 shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">Deliverable</span>
                <p className="font-bold text-primary">Verified Social Media Engagement Tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-primary/5 hover:border-secondary/30 transition-all shadow-sm hover:shadow-xl group">
              <h3 className="font-headline text-3xl font-bold text-primary mb-2">{tier.name}</h3>
              <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-6">{tier.impact}</p>
              <p className="text-primary/60 text-sm mb-8 leading-relaxed font-body">{tier.exposure}</p>
              <ul className="space-y-3 mb-10">
                {tier.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-primary/40 uppercase tracking-tighter">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full border border-primary/10 font-bold text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-all">Select Tier</button>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-24 text-center">
        <h2 className="font-headline text-5xl mb-8 italic">Ready to make an <br/>impact?</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:partners@maasanskriti.org" className="bg-secondary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-2xl transition-all">Email Us</a>
          <Link to="/partner-ecosystem" className="border border-white/20 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">View Partners</Link>
        </div>
      </section>
    </main>
  );
}

