import './App.css'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx'
import CinemaLanguage from './components/CinemaLanguage.jsx';
import AnalysisPreview from './components/AnalysisPreview.jsx';
import DirectorsDiary from './components/DirectorsDiary.jsx';
import FrameArchive from './components/FrameArchive.jsx';
import Footer from './components/Footer.jsx';


function App() {
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

export default App;
