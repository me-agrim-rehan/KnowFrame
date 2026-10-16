import './LightingStudy.css';

function LightingStudy() {
  return (
    <article className="lighting-study">

      <div className="lighting-intro">
        <span>02 — THE STUDY OF LIGHT</span>

        <h3>Light shapes what we feel.</h3>

        <p>
          Lighting does more than make a subject visible.
          Its direction, intensity, quality and contrast
          influence how we understand a scene.
        </p>
      </div>

      <div className="lighting-reference">

        <div className="lighting-visual">
          <div className="light-source">
            LIGHT SOURCE
            <span>↘</span>
          </div>

          <div className="light-subject"></div>

          <span className="lighting-visual-label">
            DIRECTIONAL LIGHT / REFERENCE
          </span>
        </div>

        <div className="lighting-reference-text">
          <span>FIG. 02 / LIGHT DIRECTION</span>

          <h4>Where is the light coming from?</h4>

          <p>
            Light arriving from different directions changes
            which surfaces are illuminated and which fall
            into shadow. This can reveal texture, create
            depth, or conceal visual information.
          </p>

          <small>
            Educational illustration — not a measurement
            of the uploaded frame.
          </small>
        </div>

      </div>

      <div className="lighting-details">

        <div className="lighting-detail">
          <span>02.1</span>
          <div>
            <h4>Direction</h4>
            <p>
              Front lighting generally reveals more of a subject,
              while side lighting can emphasise form and texture.
              Backlighting may create separation or a silhouette.
            </p>
          </div>
        </div>

        <div className="lighting-detail">
          <span>02.2</span>
          <div>
            <h4>Quality</h4>
            <p>
              Hard light creates relatively defined shadows.
              Soft light produces more gradual transitions
              between illuminated and shaded areas.
            </p>
          </div>
        </div>

        <div className="lighting-detail">
          <span>02.3</span>
          <div>
            <h4>Contrast</h4>
            <p>
              The relationship between bright and dark areas
              affects the image's visual hierarchy. Strong
              contrast can draw attention to selected details,
              while lower contrast can reveal more information
              throughout the scene.
            </p>
          </div>
        </div>

      </div>

      <div className="lighting-takeaway">
        <span>FROM ANALYSIS TO PRACTICE</span>

        <p>
          Observe the same object near a window at different
          times of day. Notice how the direction and softness
          of natural light change its appearance.
        </p>
      </div>

    </article>
  );
}

export default LightingStudy;