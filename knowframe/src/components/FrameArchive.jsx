
import archiveOne from '../assets/archive-1.png';
import archiveTwo from '../assets/archive-2.png';

function FrameArchive() {
  return (
    <section className="archive-section" id="explore">
      <div className="archive-heading">
        <div>
          <span className="archive-label">
            04 — THE ARCHIVE
          </span>

          <h2>Frames worth keeping.</h2>
        </div>

        <p>A collection of observations ↗</p>
      </div>

      <div className="archive-grid">
        <article className="archive-item">
          <img
            src={archiveOne}
            alt="First cinematic frame study"
          />

          <h3>The space between.</h3>
          <span>STUDY 001 / COMPOSITION</span>
        </article>

        <article className="archive-item">
          <img
            src={archiveTwo}
            alt="Second cinematic frame study"
          />

          <h3>After the light fades.</h3>
          <span>STUDY 002 / COLOUR</span>
        </article>
      </div>
    </section>
  );
}

export default FrameArchive;
