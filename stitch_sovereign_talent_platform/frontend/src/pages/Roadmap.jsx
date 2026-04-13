import { Link } from 'react-router-dom';

export default function Roadmap() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 bg-surface max-w-7xl mx-auto text-primary">
      <header className="mb-20 text-center">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Section 7.0</span>
        <h1 className="font-headline text-6xl font-bold tracking-tighter mb-6">
          The 45-Day <span className="italic text-secondary">Talent Journey</span>
        </h1>
        <p className="opacity-70 text-lg max-w-2xl mx-auto leading-relaxed">
          A structured roadmap designed to transition raw talent into professional industry pillars through rigorous assessment and expert mentorship.
        </p>
      </header>

      {/* Main Roadmap Path */}
      <div className="relative space-y-12 mb-32">
        <div className="absolute left-8 top-12 bottom-12 w-[2px] bg-primary/10 hidden md:block"></div>
        
        {[
          {
            day: 'Day 1-10',
            title: 'Discovery & Registration',
            desc: 'Online and physical applications across Bangalore and Port Blair. Setting up the official jury panel.',
            icon: 'explore',
            color: 'bg-primary/5 text-primary'
          },
          {
            day: 'Day 11-25',
            title: 'Verification & Onboarding',
            desc: 'Personal home visits to verify registration. Family briefings held by mentors to ensure ecosystem support.',
            icon: 'person_check',
            color: 'bg-secondary/10 text-secondary'
          },
          {
            day: 'Day 26-35',
            title: 'Candidate Video Creation',
            desc: 'Intensive 10-day period where candidates complete 7 specific video tasks reflecting their talent and personality.',
            icon: 'video_call',
            color: 'bg-primary text-white'
          },
          {
            day: 'Day 36-45',
            title: 'Finale & Professional Placement',
            desc: 'Jury review, BTL marketing exhibitions, and Grand Finale with direct job offers and prize distribution.',
            icon: 'workspace_premium',
            color: 'bg-secondary text-white'
          }
        ].map((step, i) => (
          <div key={i} className="relative flex items-start gap-12 group">
            <div className={`hidden md:flex w-16 h-16 rounded-full items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110 shadow-lg ${step.color}`}>
              <span className="material-symbols-outlined">{step.icon}</span>
            </div>
            <div className="bg-surface-container-low p-8 rounded-3xl flex-1 border border-primary/5 hover:border-secondary/20 transition-all">
              <span className="font-label text-xs font-bold text-secondary mb-2 block uppercase tracking-widest">{step.day}</span>
              <h3 className="font-headline text-2xl font-bold mb-4">{step.title}</h3>
              <p className="opacity-70 leading-relaxed font-body">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Tasks Detail */}
      <section className="bg-primary text-white p-12 md:p-20 rounded-[3rem] mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10">
          <header className="mb-16">
            <h2 className="font-headline text-4xl mb-6 italic">7 Specific Video Tasks</h2>
            <p className="text-white/70 max-w-xl font-body">Candidates undergo a professional assessment through a series of structured video deliverables.</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Self Introduction', time: '3 Minutes', detail: 'Articulating personal journey, family background, and creative aspirations.' },
              { id: '02', title: 'Talent Showcase', time: '5 Minutes', detail: 'Core performance or portfolio presentation reviewed by specialized jury members.' },
              { id: '03', title: 'Family Support Vision', time: '4 Minutes', detail: 'A collaborative recording featuring family members and their vision for the candidate.' },
              { id: '04', title: 'Social Responsibility', time: '3 Minutes', detail: 'Candidate vision on community development and cultural heritage preservation.' },
              { id: '05', title: 'Professional Readiness', time: 'Various', detail: 'Interview-style responses to industry-led questions from the jury.' },
              { id: '06-07', title: 'Outcome Appreciations', time: 'Various', detail: 'Videos acknowledging CSR partners and sharing project participation experience.' }
            ].map((task, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/10 hover:bg-white/20 transition-all">
                <span className="text-xs font-label opacity-40 block mb-2 tracking-widest">TASK {task.id}</span>
                <h4 className="text-xl font-bold mb-2">{task.title}</h4>
                <p className="text-secondary font-bold text-sm mb-4">{task.time}</p>
                <p className="text-white/60 text-sm leading-relaxed font-body">{task.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-surface-container-high p-12 rounded-[2.5rem] border border-primary/5">
          <h3 className="font-headline text-3xl text-primary mb-6">Winner Placements</h3>
          <p className="opacity-70 mb-8 font-body">The top 3 winners receive immediate job opportunities provided by the Jury members in Film and Fashion.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="font-medium text-sm">Direct Entry to Industry Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <span className="font-medium text-sm">Official Platform Endorsements</span>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/5 p-12 rounded-[2.5rem] border border-secondary/10">
          <h3 className="font-headline text-3xl text-secondary mb-6">Candidate Training</h3>
          <p className="opacity-70 mb-8 font-body">Every non-finalist candidate is offered access to high-value training modules delivered by industry experts.</p>
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <div>
              <p className="font-bold text-sm">Paid Industry Training</p>
              <p className="text-xs opacity-60">Professional certification upon completion</p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-32 text-center p-12 border-t border-primary/5">
        <Link to="/onboarding" className="inline-block bg-secondary text-white px-12 py-6 rounded-full font-bold hover:shadow-2xl transition-all scale-100 hover:scale-[1.1]">Register for Stage 1</Link>
      </footer>
    </main>
  );
}

