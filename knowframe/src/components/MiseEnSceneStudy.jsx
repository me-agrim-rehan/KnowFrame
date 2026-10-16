
import './MiseEnSceneStudy.css';

const sceneElements = [
  {
    number: '05.1',
    title: 'Setting & production design',
    question: 'What does the environment tell us?',
    description:
      'Architecture, furniture, background details and the condition of a space help establish where a scene takes place. They can also provide context about the world the characters inhabit.'
  },
  {
    number: '05.2',
    title: 'Props & costume',
    question: 'What do the objects reveal?',
    description:
      'Objects and clothing can distinguish characters, suggest occupations or social settings, and become important visual motifs when they recur throughout a story.'
  },
  {
    number: '05.3',
    title: 'Blocking & spatial relationships',
    question: 'Where are the characters in relation to one another?',
    description:
      'The placement, posture and movement of characters can suggest distance, attention, authority or tension. A single still reveals their arrangement at one moment, not their full movement through the scene.'
  },
  {
    number: '05.4',
    title: 'Visual detail & meaning',
    question: 'Which details deserve a closer look?',
    description:
      'Repeated shapes, contrasting objects and unusual background details may support a scene’s visual storytelling. Their significance should be considered in context rather than assumed from appearance alone.'
  }
];

function MiseEnSceneStudy() {
  return (
    <article className="mise-study">

      <div className="mise-intro">
        <span>05 — MISE-EN-SCÈNE</span>

        <h3>Everything inside the frame.</h3>

        <p>
          A scene is shaped by more than the camera.
          The environment, objects, costumes and arrangement
          of characters all contribute to what we see.
        </p>
      </div>

      <div className="mise-overview">
        <div className="mise-overview-label">
          <span>THE SCENE AS A WHOLE</span>
          <span>FOUR AREAS OF STUDY</span>
        </div>

        {sceneElements.map(element => (
          <div className="mise-element" key={element.number}>
            <span className="mise-number">
              {element.number}
            </span>

            <div className="mise-element-content">
              <h4>{element.title}</h4>
              <span className="mise-question">
                {element.question}
              </span>
              <p>{element.description}</p>
            </div>

            <span className="mise-mark" aria-hidden="true">
              ↗
            </span>
          </div>
        ))}
      </div>

      <div className="mise-reading">
        <span>READING A SCENE</span>

        <h4>Notice first. Interpret second.</h4>

        <p>
          Start with what is visibly present: the objects,
          their positions, the environment and the characters’
          arrangement. Then consider what those details might
          contribute to the story.
        </p>

        <p>
          This distinction matters. A worn chair is an observable
          detail; deciding that it represents a character’s
          loneliness is an interpretation that needs context.
        </p>
      </div>

      <div className="mise-takeaway">
        <span>FROM ANALYSIS TO PRACTICE</span>

        <h4>Study the background.</h4>

        <p>
          Choose a film still and ignore the main character
          for a moment. Examine the background, props, costume
          and spacing. Write down three visible details and
          one possible interpretation for each.
        </p>
      </div>

    </article>
  );
}

export default MiseEnSceneStudy;
