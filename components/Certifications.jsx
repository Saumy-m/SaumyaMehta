export default function Certifications({ items, activities }) {
  return (
    <>
      {/* Certifications */}
      <section className="section" id="certifications">
        <div className="container">
          <p className="section-label">Credentials</p>
          <h2 className="section-title">Certifications</h2>

          <div className="certs-list">
            {items.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className={`cert-icon${cert.status === 'in-progress' ? ' in-progress' : ''}`}>
                  {cert.status === 'in-progress' ? '⚡' : '✓'}
                </div>
                <div className="cert-body">
                  <p className="cert-name">{cert.name}</p>
                  <div className="cert-meta">
                    <span>{cert.issuer}</span>
                    <span>·</span>
                    <span>{cert.date}</span>
                  </div>
                  {cert.details && (
                    <p className="cert-details">{cert.details}</p>
                  )}
                </div>
                <span className={`cert-badge ${cert.status}`}>
                  {cert.status === 'in-progress' ? 'In Progress' : 'Done'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      {activities && activities.length > 0 && (
        <section className="section" id="activities" style={{ paddingTop: 0 }}>
          <div className="container">
            <p className="section-label">Community</p>
            <h2 className="section-title">Co-Curricular</h2>

            <div className="activities-grid">
              {activities.map((act) => (
                <div key={act.id} className="activity-card">
                  <h3 className="activity-name">{act.name}</h3>
                  <p className="activity-meta">{act.date} · {act.location}</p>
                  <p className="activity-description">{act.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
