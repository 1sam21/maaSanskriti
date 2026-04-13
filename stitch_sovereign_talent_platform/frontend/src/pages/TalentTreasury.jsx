import { Link } from 'react-router-dom';

export default function TalentTreasury() {
  const talents = [
    {
      name: 'Aditi Rao',
      discipline: 'Film & Media',
      origin: 'Bangalore',
      desc: 'Merging traditional storytelling with modern cinematic techniques. A short-film specialist focusing on urban folklore.',
      icon: 'movie_filter'
    },
    {
      name: 'Nikita Singh',
      discipline: 'Fashion Design',
      origin: 'Port Blair',
      desc: 'Pioneering island-inspired sustainable fashion. Using indigenous textiles to create contemporary ethnic wear.',
      icon: 'styler'
    },
    {
      name: 'Vihaan Bhat',
      discipline: 'Music & Sound',
      origin: 'Bangalore',
      desc: 'Classical fusion artist blending Vedic chants with electronic ambient soundscapes. A Stage 1 top standout.',
      icon: 'music_note'
    },
    {
      name: 'Karan Mehra',
      discipline: 'Visual Arts',
      origin: 'Port Blair',
      desc: 'Documenting the soul of Andaman through mixed-media murals and digital cultural archives.',
      icon: 'palette'
    }
  ];

  return (
    <main className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-20">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block underline">Section 7.0: Portal Presence</span>
        <h1 className="font-headline text-6xl md:text-8xl text-primary tracking-tighter leading-none mb-6">
          The <span className="italic font-normal">Talent</span> Pavilion.
        </h1>
        <p className="text-xl md:text-2xl text-primary/60 font-body leading-relaxed max-w-2xl">
          Discover the creative leaders of the Stage 1 Talent Hunt. A showcase of young visionaries across Bangalore and Port Blair.
        </p>
      </header>

      {/* Simplified Filter Bar */}
      <section className="mb-16">
        <div className="bg-surface-container-low p-4 rounded-[2rem] flex flex-col lg:flex-row gap-6 items-center border border-primary/5">
          <div className="flex flex-wrap gap-2 items-center px-4">
            <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold mr-4">Disciplines:</span>
            {['All', 'Film', 'Fashion', 'Music', 'Art'].map(cat => (
              <button key={cat} className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${cat === 'All' ? 'bg-primary text-white shadow-lg' : 'bg-white text-primary/40 hover:bg-primary/5'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="h-8 w-px bg-primary/10 hidden lg:block"></div>
          <div className="flex items-center gap-4 px-4">
            <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Location:</span>
            <select className="bg-transparent border-none text-xs font-bold uppercase tracking-widest text-primary focus:ring-0 cursor-pointer">
              <option>All Regions</option>
              <option>Bangalore</option>
              <option>Port Blair</option>
            </select>
          </div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {talents.map((talent, i) => (
          <article key={i} className="group p-8 rounded-[2.5rem] bg-white border border-primary/5 hover:border-secondary/30 transition-all shadow-sm hover:shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 bg-primary/5 rounded-3xl shrink-0 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
              <span className="material-symbols-outlined text-5xl">{talent.icon}</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{talent.discipline}</span>
                <span className="w-1 h-1 rounded-full bg-primary/20"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">{talent.origin}</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary mb-4">{talent.name}</h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-6 font-body">{talent.desc}</p>
              <div className="flex justify-center md:justify-start gap-4">
                <button className="text-xs font-bold uppercase tracking-widest text-primary italic underline underline-offset-8 decoration-secondary/30 hover:text-secondary transition-colors">View Entry</button>
                <button className="text-xs font-bold uppercase tracking-widest text-primary italic underline underline-offset-8 decoration-secondary/30 hover:text-secondary transition-colors">Watch Introduction</button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Outcome Highlight */}
      <section className="bg-primary p-12 md:p-20 rounded-[3.5rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 translate-x-1/2"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline text-5xl font-bold mb-8 italic">Job Letters & <br/>Success Stories.</h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed font-body">
            Candidates who excel in Stage 3 Video tasks are selected for direct placement opportunities with our Industry Jury. Every success story is documented and showcased here.
          </p>
          <div className="flex gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="text-4xl font-headline font-bold text-secondary italic mb-1">Top 3</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Direct Job Offers</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-bold text-secondary italic mb-1">45 Days</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Program Cycle</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
