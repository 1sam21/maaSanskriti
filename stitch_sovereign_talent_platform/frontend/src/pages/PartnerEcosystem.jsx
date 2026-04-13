import { Link } from 'react-router-dom';

export default function PartnerEcosystem() {
  const partners = [
    {
      name: 'Identity Event Management',
      type: 'Lead Event Partner',
      desc: 'Orchestrating the on-ground logistics and Stage 1 Talent Hunt execution across Bangalore and Port Blair.',
      icon: 'star',
      status: 'Active'
    },
    {
      name: 'Treefe Application',
      type: 'Technology Partner',
      desc: 'The official platform for candidate registration, video submissions, and mentor-led verification tracking.',
      icon: 'language',
      status: 'Active'
    },
    {
      name: 'Jury Panel: Film & Fashion',
      type: 'Industry Mentors',
      desc: 'Leading experts from the Indian film and fashion industries providing direct job placements for top talent.',
      icon: 'movie_filter',
      status: 'Commissioned'
    },
    {
      name: 'Verification Hub',
      type: 'Homeopathy & Health',
      desc: 'Expert Homeopathy Doctors ensuring holistic verification and assessment during the Stage 2 onboarding process.',
      icon: 'medical_services',
      status: 'Active'
    }
  ];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-surface max-w-7xl mx-auto">
      <header className="mb-24 text-center">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Section 2.1</span>
        <h1 className="font-headline text-6xl font-bold text-primary tracking-tighter mb-6">
          Official <span className="italic text-secondary">Collaborators</span>
        </h1>
        <p className="text-primary/70 text-lg max-w-2xl mx-auto leading-relaxed font-body">
          The MaaSanskriti Talent Hunt is powered by a strategic ecosystem of event management, technology platforms, and industry veterans.
        </p>
      </header>

      {/* Partners Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        {partners.map((partner, i) => (
          <div key={i} className="group p-10 rounded-[2.5rem] bg-surface-container-low border border-primary/5 hover:border-secondary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{partner.icon}</span>
              </div>
              <span className="px-4 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-primary/40 border border-primary/5">{partner.status}</span>
            </div>
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">{partner.type}</p>
            <h3 className="font-headline text-3xl text-primary font-bold mb-4">{partner.name}</h3>
            <p className="text-primary/60 text-sm leading-relaxed mb-8 font-body">{partner.desc}</p>
            <div className="pt-6 border-t border-primary/5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30 underline decoration-secondary/30 decoration-2 underline-offset-4">Strategic Alignment</span>
              <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sponsorship Section */}
      <section className="bg-primary text-white p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-headline text-5xl italic leading-tight">CSR & Brand Sponsorship.</h2>
            <p className="text-white/70 text-lg leading-relaxed font-body">
              Join us in empowering the next generation of creative leaders. CSR partners receive premium brand integration across digital and physical touchpoints.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">Digital Mall Screens</span>
              <span className="px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">Candidate Video Tags</span>
              <span className="px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest">On-ground BTL Branding</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
            <h4 className="font-bold text-xl mb-6">Brand Impact</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase mb-2">
                  <span>Audience Reach</span>
                  <span className="text-secondary">High</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-secondary"></div>
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed italic">
                Sponsors are highlighted in candidate 'Appreciation Videos' and the Project outcome documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="mt-32 text-center p-12 border-t border-primary/5">
        <Link to="/sponsorship" className="inline-block bg-secondary text-white px-12 py-6 rounded-full font-bold hover:shadow-2xl transition-all scale-100 hover:scale-[1.05]">Inquire for Sponsorship</Link>
      </footer>
    </main>
  );
}

