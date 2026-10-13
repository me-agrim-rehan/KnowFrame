
function LanguageCard({ number, title, description }) {
  return (
    <div className="language-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default LanguageCard;
