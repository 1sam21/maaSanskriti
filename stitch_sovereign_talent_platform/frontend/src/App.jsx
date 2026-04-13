import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Roadmap from './pages/Roadmap';
import TalentTreasury from './pages/TalentTreasury';
import ImpactStatistics from './pages/ImpactStatistics';
import Sponsorship from './pages/Sponsorship';
import Timeline from './pages/Timeline';
import PartnerEcosystem from './pages/PartnerEcosystem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="treasury" element={<TalentTreasury />} />
          <Route path="impact" element={<ImpactStatistics />} />
          <Route path="sponsorship" element={<Sponsorship />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="partners" element={<PartnerEcosystem />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
