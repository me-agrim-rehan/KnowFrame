import './CompositionStudy.css';

function CompositionStudy() {
  return (
    <article className="composition-study">

      <div className="composition-heading">
        <span>01 — VISUAL STRUCTURE</span>
        <h3>Where does the eye go first?</h3>
        <p>
          Composition is the arrangement of visual elements within
          a frame. It influences what we notice, how our eyes move,
          and how different parts of an image relate to each other.
        </p>
      </div>

      <div className="composition-diagram">
        <div className="composition-grid">
          <span className="grid-point"></span>
        </div>

        <div className="diagram-caption">
          <span>FIG. 01 / RULE OF THIRDS</span>
          <span>REFERENCE DIAGRAM</span>
        </div>
      </div>

      <div className="composition-details">

        <div className="composition-detail">
          <span>01.1</span>
          <div>
            <h4>Subject placement</h4>
            <p>
              Where a subject sits within the frame affects how we
              experience it. Central placement can create a sense
              of stability or confrontation, while off-centre
              placement can introduce tension or draw attention
              towards the surrounding environment.
            </p>
          </div>
        </div>

        <div className="composition-detail">
          <span>01.2</span>
          <div>
            <h4>Visual balance</h4>
            <p>
              Balance is not simply about placing equal objects on
              both sides. Brightness, colour, size, contrast and
              positioning can all affect how much visual attention
              an element attracts.
            </p>
          </div>
        </div>

        <div className="composition-detail">
          <span>01.3</span>
          <div>
            <h4>Negative space</h4>
            <p>
              The seemingly empty areas surrounding a subject can
              be just as important as the subject itself. They can
              establish scale, suggest isolation, or create room
              for the viewer's attention to travel.
            </p>
          </div>
        </div>

      </div>

      <div className="composition-takeaway">
        <span>FROM ANALYSIS TO PRACTICE</span>

        <p>
          Try photographing the same subject three times: once
          centrally, once near a third of the frame, and once
          surrounded by substantial empty space. Observe how
          the relationship between the subject and environment
          changes.
        </p>
      </div>

    </article>
  );
}

export default CompositionStudy;