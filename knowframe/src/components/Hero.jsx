
import heroImg from '../assets/hero.png';

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">
                <span className="hero-label">
                    CINEMA ANALYSIS TOOL
                </span>

                <h1>
                    Look closer.<br />
                    See more.
                </h1>

                <p>
                    Upload a frame, get an AI-powered breakdown
                    of the visual language, and explore the story
                    behind the moment.
                </p>


                <div className="hero-actions">
                    <a href="#analyze" className="btn-primary">
                        Analyze a Frame <span>↗</span>
                    </a>

                    <a href="#explore" className="btn-secondary">
                        Explore Archive →
                    </a>
                </div>

            </div>

            
<div className="hero-visual">
  <img
    src={heroImg}
    alt="Cinematic architectural composition"
  />

  <span className="frame-label">
    FIG. 001 — VISUAL STUDY
  </span>

  <span className="frame-corner top-left"></span>
  <span className="frame-corner bottom-right"></span>
</div>


        </section>
    );
}

export default Hero;
