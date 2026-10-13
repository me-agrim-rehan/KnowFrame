
import LanguageCard from './LanguageCard.jsx';

function CinemaLanguage() {
  return (
    <section className="cinema-language">
      <span className="section-label">
        01 / THE VISUAL LANGUAGE
      </span>

      <h2>Every frame tells a story.</h2>

      <p>
        Explore the visual decisions that shape
        how we experience cinema.
      </p>

      <div className="language-grid">
        <LanguageCard
          number="01"
          title="Composition"
          description="How subjects and objects are arranged within a frame."
        />

        <LanguageCard
          number="02"
          title="Lighting"
          description="How light and shadow guide our attention."
        />

        <LanguageCard
          number="03"
          title="Colour"
          description="How colour choices influence the atmosphere of a scene."
        />
      </div>
    </section>
  );
}

export default CinemaLanguage;
