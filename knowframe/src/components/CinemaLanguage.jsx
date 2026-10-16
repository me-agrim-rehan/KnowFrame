
import LanguageCard from './LanguageCard.jsx';

function CinemaLanguage() {
  return (
    <section className="cinema-language" id="language">

      <div className="language-top">
        <span>KNOWFRAME / FIELD GUIDE</span>
        <span>VOL. 01</span>
      </div>

      <div className="language-intro">
        <h2>Start with what you notice.</h2>

        <p>
          Before learning the terminology, look at the frame.
          Where does your eye go first? What's hidden?
          Why does the space feel the way it does?
        </p>
      </div>

      <div className="language-list">

        <article className="language-row">
          <span>01</span>
          <h3>Composition</h3>
          <p>
            Placement, distance, balance and the space
            around a subject.
          </p>
        </article>

        <article className="language-row">
          <span>02</span>
          <h3>Lighting</h3>
          <p>
            Direction, shadow and the parts of a scene
            left unseen.
          </p>
        </article>

        <article className="language-row">
          <span>03</span>
          <h3>Colour</h3>
          <p>
            The relationship between colours, contrast
            and atmosphere.
          </p>
        </article>

      </div>

      <div className="language-end">
        <span>THREE WAYS OF LOOKING</span>
        <span>KF — 001</span>
      </div>

    </section>
  );
}

export default CinemaLanguage;
