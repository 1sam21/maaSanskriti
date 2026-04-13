import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Talent'
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining! We will notify you with the next steps.');
        setFormData({ name: '', email: '', phone: '', role: 'Talent' });
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      setStatus('error');
      setMessage('Failed to connect to the server. Please check if the backend is running.');
    }
  };

  return (
    <main className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
      {/* Waitlist Registration Form (Left Column) */}
      <div className="lg:col-span-8">
        
        {/* Content Header - SEO Optimized */}
        <div className="mb-12">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">Stage 1 Access</span>
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tighter mb-6 leading-tight">
            Join the MaaSanskriti <br className="hidden md:block" />
            <span className="italic">Talent Waitlist.</span>
          </h1>
          <p className="text-lg text-primary/60 max-w-2xl leading-relaxed font-body">
            Register below to receive critical updates regarding the 45-day cycle, audition dates, and mentorship opportunities in Bangalore and Port Blair.
          </p>
        </div>

        {/* Waitlist Form */}
        <section aria-labelledby="form-heading" className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-primary/5 shadow-xl shadow-primary/5">
          <h2 id="form-heading" className="sr-only">Waitlist Registration Form</h2>
          
          {status === 'success' ? (
             <div className="text-center py-12">
               <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                 <span className="material-symbols-outlined text-4xl">check_circle</span>
               </div>
               <h3 className="font-headline text-3xl text-primary font-bold mb-4">Registration Successful!</h3>
               <p className="text-primary/60 font-body mb-8">{message}</p>
               <button onClick={() => setStatus('idle')} className="text-xs font-bold uppercase tracking-widest text-primary italic underline underline-offset-8 decoration-secondary/30 hover:text-secondary transition-colors">Submit Another</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Status Message */}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-sm font-medium border border-red-100 flex items-start gap-3">
                  <span className="material-symbols-outlined text-red-500 text-lg">error</span>
                  <p>{message}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-primary/70">Full Name *</label>
                  <input 
                    id="name"
                    name="name"
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-primary/10 rounded-2xl py-4 flex px-5 text-primary focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-body outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/70">Email Address *</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-primary/10 rounded-2xl py-4 flex px-5 text-primary focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-body outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-primary/70">Phone Number (Optional)</label>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-primary/10 rounded-2xl py-4 flex px-5 text-primary focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-body outline-none"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-xs font-bold uppercase tracking-widest text-primary/70">I am joining as a...</label>
                  <select 
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border border-primary/10 rounded-2xl py-4 flex px-5 text-primary focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all font-body outline-none appearance-none"
                  >
                    <option value="Talent">Talent (Artist, Filmmaker, etc.)</option>
                    <option value="Mentor">Mentor / Industry Expert</option>
                    <option value="Partner">Corporate / CSR Partner</option>
                    <option value="Investor">Investor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-primary/5">
                <Link to="/" className="flex items-center gap-2 text-primary/40 font-bold uppercase tracking-widest text-xs hover:text-secondary transition-colors italic">
                  Back to Home
                </Link>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-2xl shadow-primary/20 hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
                >
                  {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-4 lg:pl-8 border-l border-primary/5">
        <div className="sticky top-32 space-y-12">
          
          {/* Timeline Context */}
          <div className="p-8 bg-surface-container-low rounded-[2rem] border border-primary/5">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">edit_calendar</span>
            <h4 className="font-headline text-2xl font-bold text-primary mb-4 italic">Next Steps</h4>
            <p className="text-sm text-primary/70 font-body mb-6 leading-relaxed">
              Once registered on the waitlist, you will receive our preliminary audition toolkit directly via email. Keep an eye out for updates on physical verification schedules.
            </p>
            <Link to="/timeline" className="text-xs font-bold uppercase tracking-widest text-primary italic underline underline-offset-8 decoration-secondary/30 hover:text-secondary transition-colors">
              View Stage Timeline
            </Link>
          </div>

          {/* Secure Note */}
          <div className="p-8 text-center bg-primary text-white rounded-[2rem] shadow-xl">
            <span className="material-symbols-outlined text-4xl mb-4 text-secondary">verified_user</span>
            <h4 className="font-bold text-lg mb-2">Secure Registration</h4>
            <p className="text-xs text-white/60 leading-relaxed font-body">
              Your data is encrypted and securely processed. By joining the waitlist, you agree to our heritage protection guidelines.
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
}


