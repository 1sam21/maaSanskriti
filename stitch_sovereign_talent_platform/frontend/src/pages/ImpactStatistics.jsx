import { Link } from 'react-router-dom';

export default function ImpactStatistics() {
  return (
    <main className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      {/* Impact Pulse: Top Section */}
      <section className="space-y-12">
        <div className="max-w-3xl">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Section 3.0: Target Metrics</span>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter leading-tight">
            The <span className="italic font-normal">Pulse</span> of Progress.
          </h1>
          <p className="mt-6 text-xl text-primary/60 font-body leading-relaxed max-w-2xl">
            A transparent ledger of the Stage 1 Talent Hunt program, tracking engagement across Bangalore and Port Blair.
          </p>
        </div>

        {/* Bento-style Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low p-10 rounded-[2.5rem] border border-primary/5 group hover:bg-primary transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-4xl group-hover:text-white mb-8 block transition-colors">campaign</span>
            <div>
              <div className="text-5xl font-headline font-bold text-primary group-hover:text-white transition-colors">50,000+</div>
              <div className="text-primary/40 group-hover:text-white/40 font-bold tracking-widest text-[10px] uppercase mt-2">Digital Impressions (Ads)</div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-10 rounded-[2.5rem] border border-primary/5 group hover:bg-primary transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-4xl group-hover:text-white mb-8 block transition-colors">verified</span>
            <div>
              <div className="text-5xl font-headline font-bold text-primary group-hover:text-white transition-colors">150+</div>
              <div className="text-primary/40 group-hover:text-white/40 font-bold tracking-widest text-[10px] uppercase mt-2">Verified Candidates</div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-10 rounded-[2.5rem] border border-primary/5 group hover:bg-primary transition-all duration-500">
            <span className="material-symbols-outlined text-secondary text-4xl group-hover:text-white mb-8 block transition-colors">hail</span>
            <div>
              <div className="text-5xl font-headline font-bold text-primary group-hover:text-white transition-colors">12 Sessions</div>
              <div className="text-primary/40 group-hover:text-white/40 font-bold tracking-widest text-[10px] uppercase mt-2">Jury Mentorships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body: Data Visualization & Map */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Hub Allocation */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">Regional Hub Focus</h2>
            <p className="text-primary/60 font-body">Strategic focus on metropolitan energy and island heritage.</p>
          </div>
          <div className="relative bg-surface-container-low p-12 rounded-[2.5rem] border border-primary/5 min-h-[400px]">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-primary">Bangalore (Tech & Fashion)</span>
                  <span className="text-xs font-bold text-secondary">60%</span>
                </div>
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[60%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase text-primary">Port Blair (Film & Heritage)</span>
                  <span className="text-xs font-bold text-secondary">40%</span>
                </div>
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[40%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 p-6 bg-white rounded-2xl border border-primary/5 shadow-sm text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-2 block">Stage 1 Target Reach</span>
              <p className="text-lg font-headline font-bold text-primary italic">"Bridging cities through culture"</p>
            </div>
          </div>
        </div>

        {/* Ecosystem Growth Map */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary tracking-tight">Deployment Map</h2>
            <p className="text-primary/60 font-body">Current verification hubs active in Bangalore and Port Blair.</p>
          </div>
          <div className="relative w-full aspect-[16/10] bg-primary/5 rounded-[2.5rem] border border-primary/5 overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="material-symbols-outlined text-[200px]">map</span>
            </div>
            {/* Active Pins */}
            <div className="absolute top-[40%] left-[45%] group/pin cursor-pointer">
              <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white animate-bounce shadow-lg"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white rounded-lg opacity-0 group-hover/pin:opacity-100 transition-opacity shadow-xl border border-primary/5 w-32 text-center">
                <p className="text-[10px] font-bold uppercase text-primary">Bangalore Hub</p>
                <p className="text-[10px] text-secondary">85 Candidates</p>
              </div>
            </div>
            <div className="absolute bottom-[20%] right-[30%] group/pin cursor-pointer">
              <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white animate-bounce shadow-lg delay-700"></div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white rounded-lg opacity-0 group-hover/pin:opacity-100 transition-opacity shadow-xl border border-primary/5 w-32 text-center">
                <p className="text-[10px] font-bold uppercase text-primary">Port Blair Hub</p>
                <p className="text-[10px] text-secondary">65 Candidates</p>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl border border-primary/5 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-1">Active Stage</div>
              <div className="text-sm font-bold text-primary">Stage 2: Verification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Spotlight */}
      <section className="space-y-16">
        <h2 className="text-4xl font-headline font-bold text-primary text-center">Outcome Showcase</h2>
        <div className="relative flex flex-col md:flex-row items-center bg-white rounded-[3rem] border border-primary/5 overflow-hidden shadow-sm min-h-[500px]">
          <div className="md:w-1/2 h-full min-h-[400px] bg-primary/5">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdjWXh-wWq3nTkeCGDmkWb_6vnmjGFrCDMLhXWO9qI05bLVrw1mjG-ruGDa-LEk3qMI5NnDop0eYNdaYHkzyIis3_ZYmuwArTwP3FLZBrD1nhUjzmzf6nPayA4V167PIB56vT1h8ryaItenlPqfpGQQ5Wqw1XjvrPlErhEf2EV8-eXraWbh7fRCJlGgS8xcTIs1YmbMTuMPF2vykTgpekUdGo6rgQmWUXUe95J8q1gNU5tpfls0SLbMxz6_bsqmoCUKqARPAfZSrem" alt="Talent Graduate" />
          </div>
          <div className="md:w-1/2 p-12 lg:p-20 space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">The Stage 1 Graduate</span>
            <h3 className="text-4xl lg:text-5xl font-headline font-bold text-primary leading-tight italic">
              "The 45-day path led me directly to my <span className="not-italic">first film role.</span>"
            </h3>
            <p className="text-lg text-primary/60 leading-relaxed font-body">
              Through the Stage 3 video submissions and Stage 4 Finale, Ravi was selected by our industry jury for a lead supporting role in an upcoming regional feature film.
            </p>
            <div className="pt-6 border-t border-primary/5">
              <span className="font-headline italic text-primary text-xl">Ravi Kumar, Film Talent</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
