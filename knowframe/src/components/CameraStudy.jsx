
import './CameraStudy.css';

const cameraAngles = [
  {
    number: '01',
    symbol: '↗',
    title: 'Low angle',
    description:
      'The camera looks upward toward the subject. This can emphasise scale, presence or height.'
  },
  {
    number: '02',
    symbol: '→',
    title: 'Eye level',
    description:
      'The camera sits approximately at the subject’s eye level, offering a relatively neutral viewing position.'
  },
  {
    number: '03',
    symbol: '↘',
    title: 'High angle',
    description:
      'The camera looks downward toward the subject, changing how we perceive their relationship with the surrounding space.'
  }
];

function CameraStudy() {
  return (
    <article className="camera-study">

      <div className="camera-intro">
        <span>04 — CAMERA & PERSPECTIVE</span>

        <h3>Where we place the viewer.</h3>

        <p>
          The position of a camera determines what the audience
          can see and how different elements relate within
          the image.
        </p>
      </div>

      <div className="camera-angle-section">

        <div className="camera-section-label">
          <span>FIG. 04 / CAMERA POSITION</span>
          <span>REFERENCE STUDY</span>
        </div>

        <div className="camera-angle-grid">
          {cameraAngles.map(angle => (
            <div className="camera-angle-card" key={angle.number}>

              <div className="camera-angle-visual">
                <span className="angle-symbol">
                  {angle.symbol}
                </span>

                <span className="angle-reference">
                  CAMERA DIRECTION
                </span>
              </div>

              <div className="camera-angle-info">
                <span>{angle.number} / 03</span>
                <h4>{angle.title}</h4>
                <p>{angle.description}</p>
              </div>

            </div>
          ))}
        </div>

        <p className="camera-reference-note">
          These diagrams illustrate general camera positions.
          They do not identify the actual camera placement
          used in your uploaded frame.
        </p>

      </div>

      <div className="camera-details">

        <div className="camera-detail">
          <span>04.1</span>
          <div>
            <h4>Shot size</h4>
            <p>
              A wide shot reveals more of the environment,
              while a close-up concentrates attention on a
              smaller area. Shot size changes the amount of
              visual context available to the audience.
            </p>
          </div>
        </div>

        <div className="camera-detail">
          <span>04.2</span>
          <div>
            <h4>Perspective</h4>
            <p>
              Perspective describes how objects appear in
              relation to the camera and one another.
              Camera position and viewing distance influence
              apparent size and spatial relationships.
            </p>
          </div>
        </div>

        <div className="camera-detail">
          <span>04.3</span>
          <div>
            <h4>Depth of field</h4>
            <p>
              Depth of field refers to the range of distances
              that appear acceptably sharp. A shallow depth
              of field can visually separate a subject from
              its surroundings, while a deeper one can keep
              more of the scene in focus.
            </p>
          </div>
        </div>

      </div>

      <div className="camera-limitation">
        <span>WHAT A SINGLE FRAME CANNOT CONFIRM</span>

        <p>
          A still image may provide visual clues about
          perspective and focus, but exact lens specifications,
          aperture settings and camera equipment should not
          be presented as verified facts without supporting
          production information.
        </p>
      </div>

      <div className="camera-takeaway">
        <span>FROM ANALYSIS TO PRACTICE</span>

        <h4>Change the camera, not the subject.</h4>

        <p>
          Photograph the same everyday object from a low angle,
          eye level and a high angle. Keep the object in place
          and observe how its relationship with the background
          changes.
        </p>
      </div>

    </article>
  );
}

export default CameraStudy;
