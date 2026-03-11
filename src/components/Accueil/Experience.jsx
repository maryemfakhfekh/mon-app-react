import React from "react";

const Experience = () => {
  const experiences = [
    {
      badge: "Stage PFE — En cours",
      badgeColor: "#065f46",
      badgeBg: "#d1fae5",
      title: "Stagiaire Développeuse Logiciel",
      company: "ASM All Soft Multimedia",
      location: "Sfax, Tunisie",
      period: "01 Février 2026 – En cours",
      icon: "🏢",
      accent: "#0d9488",
      github: "https://github.com/maryemfakhfekh/pfe-project",
      description:
        "Développement d’une plateforme intelligente de gestion des Stagiaires et du suivi des stages, avec applications web et mobile, backend Spring Boot et module IA d’analyse de CV.",
      tasks: [
        { icon: "🌐", text: "Application web administration (RH) avec Angular" },
        { icon: "📱", text: "Application mobile stagiaires & encadrants avec Flutter" },
        { icon: "⚙️", text: "Backend Spring Boot et conception d'API REST" },
        { icon: "🧠", text: "Module IA (NLP) pour l'analyse des CV et score de compatibilité" },
        { icon: "🐳", text: "Approche DevOps avec Docker, CI/CD et déploiement" },
      ],
      stack: ["Angular", "Flutter", "Spring Boot", "NLP", "Docker", "CI/CD", "REST API", "MySQL"],
    },
    {
      badge: "Stage d'été",
      badgeColor: "#0369a1",
      badgeBg: "#e0f2fe",
      title: "Stagiaire Développeuse Logiciel",
      company: "ASM All Soft Multimedia",
      location: "Sfax, Tunisie",
      period: "15 Juin – 15 Juillet 2025",
      icon: "🤖",
      accent: "#0369a1",
      github: "https://github.com/maryemfakhfekh/pfa-project",
      description:
        "Développement d'un site web de génération automatique de résumés basé sur l'IA avec le modèle NLP T5.",
      tasks: [
        { icon: "🎨", text: "Interface utilisateur avec Angular" },
        { icon: "⚙️", text: "Backend avec Flask (Python)" },
        { icon: "🧠", text: "Intégration du modèle NLP T5 pour générer des résumés" },
        { icon: "🔗", text: "Tests d'API REST avec Postman" },
      ],
      stack: ["Angular", "Flask", "Python", "NLP (T5)", "REST API", "Postman"],
    },
    {
      badge: "Stage",
      badgeColor: "#6d28d9",
      badgeBg: "#ede9fe",
      title: "Stagiaire Développeuse & Analyse de Données",
      company: "Département Informatique — IIT Sfax",
      location: "Sfax, Tunisie",
      period: "15 Juin – 15 Août 2024",
      icon: "📊",
      accent: "#6d28d9",
      github: "https://github.com/ton-lien-data-project",
      description:
        "Conception d'un système d'analyse de données académiques pour le suivi des performances des étudiants.",
      tasks: [
        { icon: "🐍", text: "Collecte, nettoyage et préparation des données avec Python" },
        { icon: "📈", text: "Tableaux de bord interactifs avec Power BI" },
        { icon: "🔍", text: "Identification d'indicateurs de performance pertinents" },
        { icon: "🗄️", text: "Gestion et optimisation de la base de données MySQL" },
      ],
      stack: ["Python", "Power BI", "MySQL", "Big Data"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .exp-section {
          padding: 88px 0;
          background: #f8fafc;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .exp-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 28px;
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
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.8px;
          margin-bottom: 48px;
        }

        .exp-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .exp-card {
          background: white;
          border-radius: 18px;
          padding: 28px 32px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          border-left: 4px solid var(--accent);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .exp-card:hover {
          box-shadow: 0 8px 28px rgba(0,0,0,0.09);
          transform: translateX(4px);
        }

        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 16px;
        }

        .exp-badge {
          display: inline-block;
          padding: 3px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .exp-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .exp-company {
          font-size: 13.5px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .exp-location {
          font-size: 12px;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .exp-date {
          font-size: 12px;
          color: #94a3b8;
        }

        .exp-icon {
          font-size: 36px;
          flex-shrink: 0;
        }

        .exp-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
        }

        .exp-tasks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 20px;
        }

        .exp-task {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 10px;
          font-size: 13px;
          color: #374151;
          line-height: 1.5;
        }

        .exp-task-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .stack-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 18px;
        }

        .stack-tag {
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 600;
        }

        .exp-links {
          display: flex;
          justify-content: flex-end;
        }

        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.2s ease;
          border: 1px solid var(--accent);
          color: var(--accent);
          background: transparent;
        }

        .github-btn:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .exp-tasks {
            grid-template-columns: 1fr;
          }

          .exp-card {
            padding: 20px;
          }

          .exp-links {
            justify-content: stretch;
          }

          .github-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="exp-section" id="experience">
        <div className="exp-container">
          <p className="section-eyebrow">Parcours professionnel</p>
          <h2 className="section-title">Expériences & Stages</h2>

          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card" style={{ "--accent": exp.accent }}>
                <div className="exp-top">
                  <div>
                    <span
                      className="exp-badge"
                      style={{ color: exp.badgeColor, background: exp.badgeBg }}
                    >
                      {exp.badge}
                    </span>
                    <p className="exp-title">{exp.title}</p>
                    <p className="exp-company" style={{ color: exp.accent }}>
                      {exp.company}
                    </p>
                    <p className="exp-location">📍 {exp.location}</p>
                    <p className="exp-date">🗓️ {exp.period}</p>
                  </div>
                  <span className="exp-icon">{exp.icon}</span>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-tasks">
                  {exp.tasks.map((t, j) => (
                    <div key={j} className="exp-task">
                      <span className="exp-task-icon">{t.icon}</span>
                      <span>{t.text}</span>
                    </div>
                  ))}
                </div>

                <div className="stack-wrap">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="stack-tag"
                      style={{ background: exp.accent + "15", color: exp.accent }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {exp.github && (
                  <div className="exp-links">
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      <span>💻</span>
                      <span>Voir sur GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;