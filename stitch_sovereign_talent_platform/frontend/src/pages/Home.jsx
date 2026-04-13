import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden -mt-24 pt-24">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,#efeeea_0%,#faf9f5_100%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary rounded-full font-label text-sm uppercase tracking-widest font-semibold">Stage 1 Talent Hunt</span>
            <h1 className="font-headline text-6xl md:text-8xl leading-tight text-primary editorial-text">
              Art, Culture, <br /><span className="italic font-normal">Fashion & Film.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Identifying and nurturing talent across communities in Bangalore and Port Blair. A 45-day journey of youth empowerment and cultural heritage.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <Link to="/onboarding" className="bg-secondary text-white px-10 py-5 rounded-full font-semibold hover:shadow-xl transition-all scale-100 hover:scale-[1.05]">Register Now</Link>
              <button className="flex items-center gap-2 text-primary font-bold group">
                <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined">play_arrow</span>
                </span>
                Watch Project Film
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-2xl group-hover:bg-primary/10 transition-all"></div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img alt="Atmospheric forest archive" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARZHw1LzAsBEE25Or_nff7C6fBEADfoh-3Arzo_ZIcwPK8I5FuBWSXFBJnfHUuRHNAa7BQ-588mXDWF4JXTRd_U108KM8j6sk1sBb-yeb3Lez3eJWraTK5Y5N9X5v_1xjirSueZ_tY3dyTS0zl2ozmGqFPjikp8aQY8punf8s6VU1C_eYnGU896JeBD4NHqOLnvgatedCnGl7v4tXY3uw9Qh9dtrgSn-d-tHbjTlOP9gi-hkQnp0ewemDKbCoyPmApg2zkTNGDiFFz" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            {/* Overlapping Card */}
            <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl max-w-xs hidden lg:block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">location_city</span>
              <h4 className="font-headline text-xl text-primary mb-2">Bangalore & Port Blair</h4>
              <p className="text-sm text-on-surface-variant">Connecting metropolitan energy with island heritage through talent hunt programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About MaaSanskriti Society */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-6 space-y-6">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">Section 1.0</span>
              <h2 className="font-headline text-5xl text-primary">About <br /><span className="italic">MaaSanskriti Society.</span></h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                MaaSanskriti Society is a formally registered organisation based in Port Blair, Andaman & Nicobar Islands, dedicated to promoting art, culture, fashion and film. We are committed to identifying and nurturing talent across communities, with a special focus on youth empowerment and cultural heritage.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">Registered Society</h4>
                  <p className="text-sm text-on-surface-variant">Port Blair, Andaman & Nicobar Islands</p>
                </div>
                <div>
                  <h4 className="font-headline text-xl text-primary mb-2">NGO Darpan</h4>
                  <p className="text-sm text-on-surface-variant">Registered with NITI Aayog</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="bg-white/50 backdrop-blur rounded-3xl p-8 shadow-sm border border-primary/5">
                <h3 className="font-headline text-2xl text-primary mb-6">Official Registrations</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Society Registration', value: 'Registered Society — Port Blair' },
                    { label: 'Companies Act', value: 'Registered under Companies Act, India' },
                    { label: 'NGO Darpan', value: 'Registered (NITI Aayog)' },
                    { label: 'PAN', value: '[To be updated]' },
                    { label: 'Year Established', value: '[To be updated]' },
                    { label: 'Registered Address', value: 'Port Blair, Andaman & Nicobar Islands' }
                  ].map((reg, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-primary/5 last:border-0">
                      <span className="text-sm font-medium text-primary/60">{reg.label}</span>
                      <span className="text-sm font-bold text-primary">{reg.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Stage 1 */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="font-headline text-5xl text-primary mb-6">Project Overview</h2>
            <p className="text-on-surface-variant text-lg">Stage 1 Talent Hunt: A comprehensive 45-day program across key hubs of creativity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Target Audience', value: 'Young People', icon: 'groups' },
              { label: 'Cities', value: 'Bangalore & Port Blair', icon: 'location_on' },
              { label: 'Total Duration', value: '45 Days', icon: 'calendar_month' },
              { label: 'Registration Mode', value: 'Online & Physical', icon: 'app_registration' }
            ].map((param, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-2xl group hover:bg-primary transition-all duration-500">
                <span className="material-symbols-outlined text-secondary text-3xl mb-6 group-hover:text-white transition-colors">{param.icon}</span>
                <h4 className="text-sm font-label uppercase tracking-widest text-primary/40 group-hover:text-white/40 mb-2">{param.label}</h4>
                <p className="text-xl font-bold text-primary group-hover:text-white transition-colors">{param.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes for Candidates */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: 'Job Opportunities', desc: 'Top 3 winners receive direct job offers from Jury Members in Film and Fashion.' },
                  { title: 'Professional Training', desc: 'Remaining candidates receive access to paid training modules delivered by jury experts.' },
                  { title: 'Industry Exposure', desc: 'Gain exposure to a structured, professional talent ecosystem and network.' }
                ].map((outcome, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-primary/5 hover:border-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-secondary">verified</span>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{outcome.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{outcome.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary">Section 6.1</span>
              <h2 className="font-headline text-5xl text-primary leading-tight">Outcomes for <br /><span className="italic">Nurtured Talent.</span></h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Our objective is to ensure every participant leaves with a clear path forward—whether through direct employment or specialized skills development.
              </p>
              <Link to="/roadmap" className="inline-flex items-center gap-2 text-secondary font-bold group">
                See the 45-day path
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="text-center font-label text-sm uppercase tracking-widest text-on-surface-variant mb-12">Official Collaborations</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-headline text-xl text-primary font-bold">IDENTITY EVENT</span>
            <span className="font-headline text-xl text-primary font-bold tracking-tighter">TREEFE APP</span>
            <span className="font-headline text-xl text-primary italic font-bold">CSR PARTNERS</span>
            <span className="font-headline text-xl text-primary font-bold tracking-tight">FILM INDUSTRY</span>
            <span className="font-headline text-xl text-primary italic">FASHION JURY</span>
          </div>
        </div>
      </section>
    </main>
  );
}

