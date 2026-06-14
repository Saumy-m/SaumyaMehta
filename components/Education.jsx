const EDU_ICONS = ['🎓', '🏫'];

export default function Education({ items }) {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-label">Academic</p>
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {items.map((edu, i) => (
            <div key={edu.id} className="education-card">
              <div className="education-icon">{EDU_ICONS[i] || '🎓'}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <div className="education-meta">
                <span>{edu.period}</span>
                <span>·</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
