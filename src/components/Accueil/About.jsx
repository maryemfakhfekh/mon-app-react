import React from "react";

const About = () => {
  const education = [
    {
      title: "Licence en Génie Logiciel et Systèmes d'Information",
      school: "Institut International de Technologie (IIT), Sfax",
      years: "2023 – Présent",
      detail: "3ᵉ année — préparation du projet de fin d'études (PFE)",
      color: "#0d9488",
      icon: "🎓",
    },
    {
      title: "Baccalauréat – Sciences Expérimentales",
      school: "Lycée 9 Avril 1938, Sfax",
      years: "2023",
      detail: "",
      color: "#6366f1",
      icon: "📜",
    },
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", percent: 100, color: "#0d9488" },
    { name: "Français", level: "B2 — Courant", percent: 80, color: "#0369a1" },
    { name: "Anglais", level: "B2 — Courant", percent: 80, color: "#6366f1" },
    { name: "Espagnol", level: "A2 — Notions", percent: 35, color: "#f59e0b" },
  ];

  const interests = [
    { emoji: "💻", label: "Technologie & Innovation" },
    { emoji: "🏃", label: "Sport" },
    { emoji: "✈️", label: "Voyage" },
    { emoji: "🎮", label: "Jeux vidéo" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .about-section {
          padding: 88px 0;
          background: #ffffff;
          font-family: 'Outfit', sans-serif;
        }
        .about-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
        }
        .section-header {
          margin-bottom: 56px;
        }
        .section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0d9488;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-eyebrow::before {
          content: '';
          width: 24px;
          height: 2px;
          background: #0d9488;
          display: inline-block;
          border-radius: 2px;
        }
        .section-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.8px;
          line-height: 1.05;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .block-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .block-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        /* Timeline */
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 19px;
          top: 28px;
          bottom: 28px;
          width: 1px;
          background: linear-gradient(to bottom, #0d9488, #e2e8f0);
        }
        .timeline-card {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }
        .timeline-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          border: 2px solid white;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          position: relative;
          z-index: 1;
          background: white;
        }
        .timeline-body {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          flex: 1;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .timeline-body:hover {
          border-color: #0d9488;
          box-shadow: 0 4px 16px rgba(13,148,136,0.1);
        }
        .timeline-year {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .timeline-edu-title {
          font-weight: 600;
          font-size: 14.5px;
          color: #1e293b;
          margin-bottom: 3px;
          line-height: 1.4;
        }
        .timeline-school {
          font-size: 13px;
          color: #64748b;
        }
        .timeline-note {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 5px;
          font-style: italic;
        }

        /* IEEE */
        .ieee-card {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: linear-gradient(135deg, #f0fdf4, #e0f2fe);
          border: 1px solid #bbf7d0;
          border-radius: 14px;
          padding: 18px;
          margin-top: 28px;
        }
        .ieee-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #0d9488;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .ieee-title {
          font-weight: 700;
          font-size: 14px;
          color: #065f46;
          margin-bottom: 4px;
        }
        .ieee-desc {
          font-size: 13px;
          color: #374151;
          line-height: 1.6;
        }

        /* Languages */
        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .lang-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 7px;
        }
        .lang-name {
          font-weight: 600;
          font-size: 14px;
          color: #1e293b;
        }
        .lang-level {
          font-size: 12px;
          color: #64748b;
        }
        .bar-track {
          height: 6px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Interests */
        .interests-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 24px;
        }
        .interest-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          background: #fafaf8;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 13.5px;
          font-weight: 500;
          color: #374151;
          transition: all 0.2s;
          cursor: default;
        }
        .interest-chip:hover {
          background: #f0fdf4;
          border-color: #0d9488;
          color: #065f46;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(13,148,136,0.12);
        }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .interests-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="about-section">
        <div className="about-container">
          <div className="section-header">
            <p className="section-eyebrow">Parcours</p>
            <h2 className="section-title">À propos de moi</h2>
          </div>

          <div className="about-grid">
            {/* Left — Education */}
            <div>
              <p className="block-title">Formation</p>
              <div className="timeline">
                {education.map((e, i) => (
                  <div key={i} className="timeline-card">
                    <div className="timeline-icon">{e.icon}</div>
                    <div className="timeline-body">
                      <p className="timeline-year" style={{ color: e.color }}>{e.years}</p>
                      <p className="timeline-edu-title">{e.title}</p>
                      <p className="timeline-school">{e.school}</p>
                      {e.detail && <p className="timeline-note">{e.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="ieee-card">
                <div className="ieee-icon-box">⚡</div>
                <div>
                  <p className="ieee-title">IEEE Student Branch — IIT Sfax</p>
                  <p className="ieee-desc">
                    Membre actif depuis 2023. Participation aux événements technologiques,
                    ateliers et conférences liés à l'ingénierie et l'informatique.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Languages + Interests */}
            <div>
              <p className="block-title">Langues</p>
              <div className="lang-list">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="lang-row">
                      <span className="lang-name">{l.name}</span>
                      <span className="lang-level">{l.level}</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{
                          width: `${l.percent}%`,
                          background: `linear-gradient(90deg, ${l.color}, ${l.color}99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="block-title" style={{ marginTop: 36 }}>Centres d'intérêt</p>
              <div className="interests-grid">
                {interests.map((x) => (
                  <div key={x.label} className="interest-chip">
                    <span style={{ fontSize: 20 }}>{x.emoji}</span>
                    <span>{x.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;