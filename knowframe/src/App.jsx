import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx'
import CinemaLanguage from './components/CinemaLanguage.jsx';
import AnalysisPreview from './components/AnalysisPreview.jsx';
import DirectorsDiary from './components/DirectorsDiary.jsx';
import FrameArchive from './components/FrameArchive.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnalysisPage from './components/AnalysisPage';


function HomePage() {
  return (
    <main>
      <Navbar />

<Hero />
<CinemaLanguage />
<AnalysisPreview />
<DirectorsDiary />
<FrameArchive />
<Footer />
    </main>
  );
  
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analyze" element={<AnalysisPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
