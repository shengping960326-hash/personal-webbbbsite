import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import TravelPlan from './pages/TravelPlan';
import Presentation from './pages/Presentation';
import Model3D from './pages/Model3D';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-12 md:pl-8 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel-plan" element={<TravelPlan />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/model-3d" element={<Model3D />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
