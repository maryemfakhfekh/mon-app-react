import React from "react";

const Experience = () => {
  const experience = {
    company: "ASM All Soft Multimedia — Sfax, Tunisie",
    period: "15 Juin – 15 Juillet 2025",
    title: "Stagiaire Développeuse Logiciel",
    badge: "Stage professionnel",
    description:
      "Développement d'un site web de génération automatique de résumés à partir de texte en utilisant un modèle NLP (T5), avec interface Angular et backend Flask.",
    tasks: [
      { icon: "🎨", text: "Conception du frontend de l'application (structure, navigation, composants Angular)" },
      { icon: "⚙️", text: "Développement de l'API backend avec Flask (Python)" },
      { icon: "🧠", text: "Intégration d'un modèle NLP (T5) pour la génération automatique de résumés" },
      { icon: "🔗", text: "Mise en place d'une API REST et tests avec Postman" },
    ],
    stack: ["Angular", "Flask", "Python", "NLP (T5)", "HTML", "CSS", "JavaScript", "REST API"],
  };

  const projects = [
    {
      title: "Lifestyle Aura",
      subtitle: "Application mobile bien-être",
      detail: "Application Flutter complète : suivi activités physiques, recettes healthy, hydratation, humeur et sommeil avec vidéos d'entraînement.",
      stack: ["Flutter", "Hive", "fl_chart", "Dart"],
      color: "#0d9488",
      icon: "🧘",
    },
    {
      title: "Architecture Microservices",
      subtitle: "Gestion de restaurant",
      detail: "Microservices Spring Boot avec Eureka, Config Server, API Gateway, documentation Swagger et base MySQL.",
      stack: ["Spring Boot", "Eureka", "Swagger", "MySQL"],
      color: "#0369a1",
      icon: "🏗️",
    },
    {
      title: "Application CRUD .NET",
      subtitle: "Gestion de données",
      detail: "Application complète avec opérations CRUD, interface C#/.NET, base de données MySQL et formulaires validés.",
      stack: ["C#", ".NET", "MySQL"],
      color: "#6366f1",
      icon: "🗄️",
    },
    {
      title: "Jeux Vidéo 2D/3D",
      subtitle: "Unity Game Dev",
      detail: "Création de jeux avec environnements interactifs, logique de jeu, collisions et animations avec Unity.",
      stack: ["Unity", "C#"],
      color: "#f59e0b",
      icon: "🎮",
    },
  ];

  const skillGroups = [
    { label: "Programmation", color: "#0d9488", items: ["Python", "Java", "C#", "PHP"] },
    { label: "Web & Frameworks", color: "#0369a1", items: ["Angular", "React", "Flask", "Spring Boot", ".NET", "Node.js"] },
    { label: "IA & Data", color: "#6366f1", items: ["NLP (T5)", "Machine Learning", "Power BI", "Big Data"] },
    { label: "Bases de données", color: "#f59e0b", items: ["MySQL", "SQLite", "Oracle"] },
    { label: "Outils & DevOps", color: "#64748b", items: ["Git", "Docker", "Postman", "VS Code", "UML"] },
  ];

  const softSkills = [
    "Travail d'équipe", "Organisation", "Esprit d'analyse",
    "Créativité", "Autonomie", "ISTQB (Software Testing)", "Agile / Scrum",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .exp-section {
          padding: 88px 0;
          background: #f8fafc;
          font-family: 'Outfit', sans-serif;
        }
        .exp-container {
          max-width: 1140px;
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
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.8px;
          margin-bottom: 52px;
        }
        .block-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
          margin-top: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .block-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        /* ── Experience Card ── */
        .exp-card {
          background: white;
          border-radius: 20px;
          padding: 36px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 16px;
        }
        .exp-badge {
          display: inline-block;
          padding: 3px 12px;
          background: #d1fae5;
          color: #065f46;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }
        .exp-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.5px;
        }
        .exp-company {
          font-size: 14.5px;
          color: #0d9488;
          font-weight: 600;
          margin-top: 5px;
        }
        .exp-date {
          font-size: 13px;
          color: #94a3b8;
          margin-top: 3px;
        }
        .exp-icon {
          font-size: 44px;
          line-height: 1;
          flex-shrink: 0;
        }
        .exp-desc {
          font-size: 15px;
          color: #475569;
          line-height: 1.75;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f1f5f9;
        }
        .exp-tasks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }
        .exp-task {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 16px;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          font-size: 13.5px;
          color: #374151;
          line-height: 1.5;
          transition: border-color 0.2s;
        }
        .exp-task:hover { border-color: #0d9488; }
        .exp-task-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
        .stack-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
        .stack-tag {
          padding: 5px 13px;
          background: #e0f2fe;
          color: #0369a1;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        /* ── Projects ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .project-card {
          background: white;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          border-color: var(--project-color);
        }
        .project-header {
          padding: 18px 20px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-icon { font-size: 28px; }
        .project-num {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 22px;
          font-weight: 800;
          opacity: 0.25;
        }
        .project-body { padding: 0 20px 20px; }
        .project-subtitle {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
          margin-bottom: 4px;
        }
        .project-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .project-detail {
          font-size: 13px;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .project-stack { display: flex; flex-wrap: wrap; gap: 6px; }
        .project-tag {
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          border: 1.5px solid;
        }

        /* ── Skills ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 14px;
        }
        .skill-group {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          box-shadow: 0 1px 6px rgba(0,0,0,0.04);
          transition: box-shadow 0.2s;
        }
        .skill-group:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .skill-group-label {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 12px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag {
          padding: 4px 11px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          background: #f1f5f9;
          color: #374151;
          border: 1px solid #e2e8f0;
          transition: all 0.15s;
        }
        .skill-tag:hover {
          background: #f0fdf4;
          color: #065f46;
          border-color: #bbf7d0;
        }
        .soft-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }
        .soft-tag {
          padding: 8px 18px;
          background: white;
          border: 1.5px solid #e9d5ff;
          color: #6d28d9;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .soft-tag:hover {
          background: #faf5ff;
          border-color: #a78bfa;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .exp-tasks { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="exp-section">
        <div className="exp-container">
          <p className="section-eyebrow">Parcours professionnel</p>
          <h2 className="section-title">Expérience & Compétences</h2>

          {/* ── Stage ── */}
          <div className="exp-card">
            <div className="exp-top">
              <div>
                <span className="exp-badge">{experience.badge}</span>
                <h3 className="exp-title">{experience.title}</h3>
                <p className="exp-company">{experience.company}</p>
                <p className="exp-date">{experience.period}</p>
              </div>
              <span className="exp-icon">🤖</span>
            </div>

            <p className="exp-desc">{experience.description}</p>

            <div className="exp-tasks">
              {experience.tasks.map((t, i) => (
                <div key={i} className="exp-task">
                  <span className="exp-task-icon">{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>

            <div className="stack-wrap">
              {experience.stack.map((s) => (
                <span key={s} className="stack-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* ── Projects ── */}
          <p className="block-title">Mes projets</p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div
                key={i}
                className="project-card"
                style={{ "--project-color": p.color }}
              >
                <div
                  className="project-header"
                  style={{ background: p.color + "12", borderBottom: `2px solid ${p.color}` }}
                >
                  <span className="project-icon">{p.icon}</span>
                  <span className="project-num" style={{ color: p.color }}>0{i + 1}</span>
                </div>
                <div className="project-body">
                  <p className="project-subtitle">{p.subtitle}</p>
                  <h4 className="project-title">{p.title}</h4>
                  <p className="project-detail">{p.detail}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="project-tag"
                        style={{
                          color: p.color,
                          borderColor: p.color + "50",
                          background: p.color + "0e",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Skills ── */}
          <p className="block-title">Compétences techniques</p>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-group">
                <p className="skill-group-label" style={{ color: g.color }}>{g.label}</p>
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <p className="block-title">Compétences transversales</p>
          <div className="soft-wrap">
            {softSkills.map((s) => (
              <span key={s} className="soft-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;