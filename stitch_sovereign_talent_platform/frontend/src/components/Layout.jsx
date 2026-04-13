import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f5]/80 backdrop-blur-xl shadow-[0_40px_60px_rgba(25,51,36,0.06)] flex justify-between items-center px-6 md:px-12 py-6">
        <Link to="/" className="font-serif text-2xl italic font-bold text-[#193324] dark:text-emerald-100">
          MaaSanskriti
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/roadmap" className="text-[#193324]/70 font-serif tracking-tight text-lg hover:text-[#9f4035] transition-colors duration-300">Roadmap</Link>
          <Link to="/treasury" className="text-[#193324]/70 font-serif tracking-tight text-lg hover:text-[#9f4035] transition-colors duration-300">Treasury</Link>
          <Link to="/impact" className="text-[#193324]/70 font-serif tracking-tight text-lg hover:text-[#9f4035] transition-colors duration-300">Impact</Link>
          <Link to="/sponsorship" className="text-[#193324]/70 font-serif tracking-tight text-lg hover:text-[#9f4035] transition-colors duration-300">Sponsorship</Link>
          <Link to="/timeline" className="text-[#193324]/70 font-serif tracking-tight text-lg hover:text-[#9f4035] transition-colors duration-300">Timeline</Link>
          <Link to="/partners" className="text-[#193324]/70 font-serif tracking-tight text-lg hover:text-[#9f4035] transition-colors duration-300">Partners</Link>
        </div>
        <Link to="/onboarding" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-medium scale-102 hover:scale-[1.02] transition-transform duration-300 shadow-lg">
          Connect Identity
        </Link>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow pt-24">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-[#faf9f5] border-t border-[#193324]/5">
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="space-y-4">
            <div className="font-serif text-2xl italic font-bold text-[#193324]">MaaSanskriti</div>
            <p className="text-[#193324]/50 max-w-sm font-sans text-sm tracking-wide">
              © MaaSanskriti Sovereign Archive. All Rights Reserved. <br/>
              Preserving wisdom, empowering sovereignty.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <Link to="#" className="text-[#193324]/50 font-sans text-sm tracking-wide hover:text-[#193324] transition-opacity duration-200">Ethical Charters</Link>
            <Link to="#" className="text-[#193324]/50 font-sans text-sm tracking-wide hover:text-[#193324] transition-opacity duration-200">Privacy Policy</Link>
            <Link to="#" className="text-[#193324]/50 font-sans text-sm tracking-wide hover:text-[#193324] transition-opacity duration-200">NGO Registration</Link>
            <Link to="#" className="text-[#193324]/50 font-sans text-sm tracking-wide hover:text-[#193324] transition-opacity duration-200">Guardian Terms</Link>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
