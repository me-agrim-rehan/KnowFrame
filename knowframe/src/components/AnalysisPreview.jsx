
import analysisImg from '../assets/analysis.png';


function AnalysisPreview() {
  return (
    <section className="analysis-preview">
      <div className="analysis-heading">
        <span className="section-label">
          02 / FRAME ANALYSIS
        </span>

        <span className="analysis-eyebrow">
          THE ART OF OBSERVATION
        </span>
      </div>

      <h2>Anatomy of a frame.</h2>

      <p>
        Look beyond what happens in a scene.
        Understand how it's visually constructed.
      </p>

      <div className="analysis-layout">

        <div className="analysis-image">
          <img
            src={analysisImg}
            alt="Sample cinematic frame for visual analysis"
          />

          <div className="analysis-image-caption">
            <span>FIG. 001</span>
            <span>FRAME STUDY</span>
          </div>
        </div>

        <div className="analysis-details">
          <div className="analysis-panel-header">
            <span className="section-label">
              VISUAL BREAKDOWN
            </span>
            <span>◎</span>
          </div>

          <div className="analysis-item">
            <span>01 / COMPOSITION</span>
            <h3>The weight of empty space.</h3>
            <p>
              Symmetrical framing and negative space
              draw attention to the isolated subject.
            </p>
          </div>

          <div className="analysis-item">
            <span>02 / LIGHTING</span>
            <h3>Light as a visual guide.</h3>
            <p>
              Directional illumination separates the
              figure from the surrounding darkness.
            </p>
          </div>

          <div className="analysis-item">
            <span>03 / COLOUR</span>
            <h3>A restrained atmosphere.</h3>
            <p>
              Muted tones and warm highlights establish
              contrast and visual focus.
            </p>
          </div>

          <span className="analysis-footer">
            SAMPLE OBSERVATIONS / KNOWFRAME
          </span>
        </div>

      </div>
    </section>
  );
}

export default AnalysisPreview;


