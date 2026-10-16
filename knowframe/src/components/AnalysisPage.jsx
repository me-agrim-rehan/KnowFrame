import { useState } from 'react';
import './AnalysisPage.css';
import AnalysisReport from './AnalysisReport.jsx';
import './AnalysisReport.css';


const studyAreas = [
  'Composition & Framing',
  'Lighting',
  'Colour & Grading',
  'Camera & Perspective',
  'Mise-en-scène',
  'Visual Storytelling',
  'Filmmaking Techniques',
  'Final Interpretation'
];

function AnalysisPage() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [activeStudy, setActiveStudy] = useState(0);

  function handleImageChange(event) {
  const file = event.target.files[0];

  if (!file) return;

  if (image) {
    URL.revokeObjectURL(image);
  }

  const imageURL = URL.createObjectURL(file);

  setImage(imageURL);
  setFileName(file.name);

  event.target.value = '';
}
function handleRemoveImage() {
  if (image) {
    URL.revokeObjectURL(image);
  }

  setImage(null);
  setFileName('');
}

  return (
    <div className="studio">

      <header className="studio-header">
        <a href="/">KNOWFRAME</a>
        <span>ANALYSIS STUDIO</span>
        <span>FRAME STUDY / 001</span>
      </header>

      <div className="studio-workspace">

        <aside className="studio-sidebar">
          <p>PROJECT MEDIA</p>

          <label className="studio-upload">
            + IMPORT FRAME
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              hidden
            />
          </label>

          <span>SUPPORTED: JPG / PNG / WEBP</span>
          {image && (
  <div className="studio-file">
    <span>{fileName}</span>

    <button onClick={handleRemoveImage}>
      REMOVE FRAME ×
    </button>
  </div>
)}
        </aside>

        <section className="studio-monitor">
          <div className="monitor-top">
            <span>SOURCE MONITOR</span>
            <span>STILL IMAGE</span>
          </div>

          <div className="monitor-screen">
            {image ? (
              <div className="frame-viewer">
  <img src={image} alt="Uploaded cinematic frame" />

  {activeStudy === 0 && (
    <div className="frame-grid" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )}
</div>
            ) : (
              <div className="monitor-empty">
                <span>+</span>
                <p>NO FRAME LOADED</p>
                <small>Import an image to begin</small>
              </div>
            )}
          </div>

          <div className="monitor-bottom">
            <span>FRAME / 001</span>
            <span>{image ? 'SOURCE LOADED' : 'AWAITING SOURCE'}</span>
          </div>
        </section>

        <aside className="studio-inspector">

  <div className="inspector-heading">
    <h2>Inspector</h2>
    <span>FRAME PROPERTIES</span>
  </div>

  <div className="inspector-studies">
    {studyAreas.map((area, index) => (
      <button
        key={area}
        className={
          activeStudy === index
            ? 'inspector-item active'
            : 'inspector-item'
        }
        onClick={() => setActiveStudy(index)}
      >
        <span className="inspector-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span>{area}</span>

        <span className="inspector-arrow">↗</span>
      </button>
    ))}
  </div>

  <div className="inspector-status">
    <span>CURRENT SELECTION</span>
    <p>{studyAreas[activeStudy]}</p>
    <small>
      {image
        ? 'Frame ready for examination'
        : 'Import a frame to begin'}
    </small>
  </div>

</aside>

      </div>

            <AnalysisReport
  activeStudy={activeStudy}
  image={image}
/>
    </div>
  );
}

export default AnalysisPage;