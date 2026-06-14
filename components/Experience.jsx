export default function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Experience</h2>

        <div className="experience-timeline">
          {items.map((item) => (
            <div
              key={item.id}
              className={`experience-item${item.current ? ' current' : ''}`}
            >
              {/* Timeline dot */}
              <div className="experience-dot-col">
                <div className="experience-dot" />
              </div>

              {/* Card */}
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{item.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                    {item.current && (
                      <span className="experience-current-badge">
                        <span className="experience-current-badge-dot" />
                        Current
                      </span>
                    )}
                    <span className="experience-period">{item.period}</span>
                  </div>
                </div>

                <div className="experience-company">
                  {item.company}
                  <span className="experience-company-sep">·</span>
                  <span className="experience-location">{item.location}</span>
                </div>

                <ul className="experience-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="experience-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
