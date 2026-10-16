
import { useEffect, useState } from 'react';
import { extractPalette } from '../utils/extractPalette.js';
import './ColourStudy.css';

function ColourStudy({ image }) {
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    let cancelled = false;

    if (!image) {
      setPalette([]);
      return;
    }

    extractPalette(image)
      .then(colours => {
        if (!cancelled) {
          setPalette(colours);
        }
      })
      .catch(error => {
        console.error(error);

        if (!cancelled) {
          setPalette([]);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [image]);

  return (
    <article className="colour-study">

      <div className="colour-study-intro">
        <span>03 — COLOUR STUDY</span>

        <h3>The palette of a frame.</h3>

        <p>
          Colour influences visual relationships, atmosphere
          and the way different elements attract attention.
        </p>
      </div>

      <div className="colour-palette">
        <div className="colour-palette-top">
          <span>EXTRACTED PALETTE</span>
          <span>PIXEL SAMPLING / LOCAL</span>
        </div>

        {image && palette.length > 0 ? (
          <div className="colour-swatches">
            {palette.map(colour => (
              <div className="colour-swatch" key={colour}>
                <div
                  className="swatch-colour"
                  style={{ backgroundColor: colour }}
                />

                <span>{colour.toUpperCase()}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="palette-empty">
            {image
              ? 'Preparing colour samples...'
              : 'Import a frame to reveal its colour palette.'}
          </div>
        )}

        <p className="palette-note">
          Colours are sampled from the uploaded image.
          This is not an AI interpretation of its grading
          or emotional meaning.
        </p>
      </div>
              <div className="colour-observations">

        <div className="colour-observation">
          <span className="observation-index">03.1</span>

          <div>
            <h4>Colour temperature</h4>

            <p>
              Colours are often described as warm or cool.
              Reds, oranges and yellows tend to feel warmer,
              while blues and blue-greens tend to feel cooler.
            </p>

            <p>
              Filmmakers can use temperature differences to
              separate spaces, create visual contrast, or
              establish relationships between subjects and
              their surroundings.
            </p>
          </div>
        </div>

        <div className="colour-observation">
          <span className="observation-index">03.2</span>

          <div>
            <h4>Saturation & contrast</h4>

            <p>
              Saturation describes the intensity of a colour.
              Highly saturated colours can attract attention,
              while muted colours can create a more restrained
              visual atmosphere.
            </p>

            <p>
              Colour contrast concerns differences between
              colours, while tonal contrast concerns differences
              in brightness. Both influence visual hierarchy.
            </p>
          </div>
        </div>

        <div className="colour-observation">
          <span className="observation-index">03.3</span>

          <div>
            <h4>Palette relationships</h4>

            <p>
              A frame's colours do not work independently.
              Their relationships can create harmony,
              separation, emphasis or visual tension.
            </p>

            <p>
              Look at your extracted palette above. Notice
              whether the colours are closely related or
              whether certain colours stand apart.
            </p>
          </div>
        </div>

      </div>

      <div className="colour-interpretation">

        <div className="interpretation-heading">
          <span>03.4 / VISUAL STORYTELLING</span>
          <h4>Colour is part of the narrative.</h4>
        </div>

        <div className="interpretation-content">
          <p>
            A colour palette can help establish atmosphere,
            distinguish locations, direct attention, and
            reinforce relationships within a scene.
          </p>

          <p>
            However, colours do not have fixed emotional
            meanings. Their interpretation depends on the
            story, cultural context, lighting and the other
            elements visible in the frame.
          </p>

          <span>
            The AI-powered version will examine these
            relationships in the context of your uploaded image.
          </span>
        </div>

      </div>

      <div className="colour-takeaway">

        <span>FROM ANALYSIS TO PRACTICE</span>

        <h4>Try building a palette deliberately.</h4>

        <p>
          Choose three colours and photograph a simple scene
          using objects or backgrounds that follow that palette.
          Then introduce one contrasting colour and observe
          how your attention shifts.
        </p>

      </div>
    </article>
  );
}

export default ColourStudy;
