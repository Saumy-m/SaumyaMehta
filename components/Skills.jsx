export default function Skills({ data }) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">Toolkit</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {data.categories.map((cat) => (
            <div key={cat.label} className="skills-category">
              <div className="skills-category-label">{cat.label}</div>
              <div className="skills-chips">
                {cat.items.map((item) => (
                  <span key={item} className="skill-chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
