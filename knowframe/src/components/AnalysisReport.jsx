import CompositionStudy from './CompositionStudy.jsx';

const reportSections = [
  {
    id: '01',
    title: 'Composition & Framing',
    description: 'How the elements of a frame guide our attention.'
  },
  {
    id: '02',
    title: 'Lighting',
    description: 'How light and shadow create visual depth.'
  },
  {
    id: '03',
    title: 'Colour & Grading',
    description: 'How colour relationships influence atmosphere.'
  },
  {
    id: '04',
    title: 'Camera & Perspective',
    description: 'How viewpoint changes the way we experience a scene.'
  },
  {
    id: '05',
    title: 'Mise-en-scène',
    description: 'How everything placed within the frame contributes to its meaning.'
  },
  {
    id: '06',
    title: 'Visual Storytelling',
    description: 'How visual choices communicate narrative information.'
  },
  {
    id: '07',
    title: 'Filmmaking Techniques',
    description: 'What practical filmmaking lessons we can take from an image.'
  },
  {
    id: '08',
    title: 'Final Interpretation',
    description: 'How individual visual decisions work together.'
  }
];

function AnalysisReport({ activeStudy }) {
  const section = reportSections[activeStudy];

  return (
    <section className="analysis-report">

      <div className="report-header">
        <span>KNOWFRAME / STUDY REPORT</span>
        <span>SAMPLE CONTENT — AI NOT CONNECTED</span>
      </div>

      <div className="report-content">

        <div className="report-index">
          <span>{section.id} / 08</span>
          <span>SELECTED STUDY</span>
        </div>

        <h2>{section.title}</h2>

        <p>{section.description}</p>

        {activeStudy === 0 ? (
  <CompositionStudy />
) : (
  <div className="report-placeholder">
    <span>ANALYSIS CONTENT</span>
    <p>
      Detailed content for this study is coming next.
    </p>
  </div>
)}

      </div>

    </section>
  );
}

export default AnalysisReport;