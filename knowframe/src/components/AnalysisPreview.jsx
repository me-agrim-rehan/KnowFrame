
import analysisImg from '../assets/analysis.png';

function AnalysisPreview() {
  return (
    <section className="frame-anatomy" id="analyze">

      <div className="anatomy-meta">
        <span>KNOWFRAME / VISUAL STUDIES</span>
        <span>STUDY 001</span>
      </div>

      <div className="anatomy-intro">
        <h2>
          Dissecting <br />
          <em>the image.</em>
        </h2>

        <p>
          An image is a collection of decisions.
          Here's what happens when we examine
          them individually.
        </p>
      </div>

      <div className="source-frame">

        <div className="source-top">
          <span>01 / SOURCE FRAME</span>
          <span>VISUAL EXAMINATION</span>
        </div>

        <img
          src={analysisImg}
          alt="Example cinematic frame for visual analysis"
        />

        <div className="source-bottom">
          <span>FIG. 001 / ORIGINAL IMAGE</span>
          <span>OBSERVE BEFORE INTERPRETING</span>
        </div>

      </div>

    </section>
  );
}

export default AnalysisPreview;
