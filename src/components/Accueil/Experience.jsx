import React from "react";

const Experience = () => {
  const experiences = [
    {
      badge: "Stage PFE — En cours",
      badgeColor: "#065f46",
      badgeBg: "#d1fae5",
      title: "Stagiaire Développeuse Logiciel",
      company: "ASM All Soft Multimedia — Sfax, Tunisie",
      period: "01 Février 2026 – En cours",
      description:
        "Développement d'une plateforme complète de gestion des candidatures et du suivi des stages, intégrant IA, web, mobile et DevOps.",
      tasks: [
        { icon: "🌐", text: "Application web administration (RH) avec Angular" },
        { icon: "📱", text: "Application mobile stagiaires & encadrants avec Flutter" },
        { icon: "⚙️", text: "Backend avec Spring Boot et conception d'API REST" },
        { icon: "🧠", text: "Module IA (NLP) pour l'analyse des CV et score de compatibilité" },
        { icon: "🐳", text: "Approche DevOps avec Docker, CI/CD et déploiement" },
      ],
      stack: ["Angular", "Flutter", "Spring Boot", "NLP", "Docker", "CI/CD", "REST API", "MySQL"],
      accent: "#0d9488",
    },
    {
      badge: "Stage d'été",
      badgeColor: "#0369a1",
      badgeBg: "#e0f2fe",
      title: "Stagiaire Développeuse Logiciel",
      company: "ASM All Soft Multimedia — Sfax, Tunisie",
      period: "15 Juin – 15 Juillet 2025",
      description:
        "Développement d'un site web de génération automatique de résumés basé sur l'IA avec NLP (T5).",
      tasks: [
        { icon: "🎨", text: "Interface utilisateur avec Angular" },
        { icon: "⚙️", text: "Backend avec Flask (Python)" },
        { icon: "🧠", text: "Intégration du modèle NLP (T5) pour générer des résumés" },
        { icon: "🔗", text: "Conception et tests d'API REST avec Postman" },
      ],
      stack: ["Angular", "Flask", "Python", "NLP (T5)", "HTML", "CSS", "REST API"],
      accent: "#0369a1",
    },
    {
      badge: "Stage",
      badgeColor: "#6d28d9",
      badgeBg: "#ede9fe",
      title: "Stagiaire Développeuse & Analyse de Données",
      company: "Département Informatique — IIT Sfax",
      period: "15 Juin – 15 Août 2024",
      description:
        "Conception d'un système d'analyse de données académiques pour le suivi des performances des étudiants.",
      tasks: [
        { icon: "📊", text: "Collecte, nettoyage et préparation des données avec Python" },
        { icon: "📈", text: "Tableaux de bord interactifs avec Power BI" },
        { icon: "🔍", text: "Identification d'indicateurs de performance pertinents" },
        { icon: "🗄️", text: "Gestion et optimisation de la base de données MySQL" },
      ],
      stack: ["Python", "Power BI", "MySQL", "Big Data"],
      accent: "#6d28d9",
    },
  ];

  const projects = [
    {
      title: "Portfolio personnel",
      subtitle: "React Web App",
      detail: "Portfolio moderne et responsive pour présenter compétences, projets et expériences. Navigation optimisée et UX soignée.",
      stack: ["React", "Vite", "JavaScript", "HTML", "CSS"],
      color: "#0d9488",
      icon: "🌐",
    },
    {
      title: "Plateforme de gestion de stages",
      subtitle: "Full-Stack + IA (PFE en cours)",
      detail: "Plateforme complète : app web Angular (RH), app mobile Flutter (stagiaires), backend Spring Boot, module NLP d'analyse de CV.",
      stack: ["Angular", "Flutter", "Spring Boot", "NLP", "Docker"],
      color: "#0f766e",
      icon: "🏢",
    },
    {
      title: "Lifestyle Aura",
      subtitle: "Application mobile bien-être",
      detail: "App Flutter : suivi activités physiques, recettes healthy, hydratation, humeur, sommeil et notifications personnalisées.",
      stack: ["Flutter", "Hive", "fl_chart", "Dart"],
      color: "#0369a1",
      icon: "🧘",
    },
    {
      title: "Architecture Microservices",
      subtitle: "Gestion de restaurant",
      detail: "Microservices Spring Boot avec Eureka, Config Server, API Gateway, documentation Swagger et gestion des exceptions.",
      stack: ["Spring Boot", "Eureka", "Swagger", "MySQL"],
      color: "#7c3aed",
      icon: "🏗️",
    },
    {
      title: "PetCare — Clinique vétérinaire",
      subtitle: "Application .NET",
      detail: "Application CRUD complète pour gérer patients, propriétaires et consultations d'une clinique vétérinaire.",
      stack: ["C#", ".NET", "MySQL"],
      color: "#b45309",
      icon: "🐾",
    },
    {
      title: "Jeux Vidéo 2D/3D",
      subtitle: "Unity Game Dev",
      detail: "Conception de jeux avec environnements interactifs, logique de jeu, collisions et animations.",
      stack: ["Unity", "C#"],
      color: "#be185d",
      icon: "🎮",
    },
  ];

  const skillGroups = [
    { label: "Programmation", color: "#0d9488", items: ["Python", "Java", "C#", "PHP", "C++"] },
    { label: "Web & Frameworks", color: "#0369a1", items: ["Angular", "React", "Flask", "Spring Boot", ".NET", "Node.js", "HTML", "CSS"] },
    { label: "Mobile", color: "#be185d", items: ["Flutter", "Dart"] },
    { label: "IA & Data", color: "#6d28d9", items: ["NLP (T5)", "Machine Learning", "Power BI", "Big Data"] },
    { label: "Bases de données", color: "#b45309", items: ["MySQL", "SQLite"] },
    { label: "DevOps & Outils", color: "#475569", items: ["Docker", "CI/CD", "Git", "Postman", "VS Code", "IntelliJ", "PyCharm"] },
    { label: "Génie logiciel", color: "#065f46", items: ["UML", "API REST", "Microservices", "ISTQB"] },
    { label: "Réseaux & Sécu", color: "#dc2626", items: ["Réseaux informatiques", "Sécurité informatique"] },
  ];

  const softSkills = [
    "Travail en équipe", "Résolution de problèmes", "Organisation",
    "Adaptabilité", "Communication", "Autonomie", "Agile / Scrum",
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
        .exp-container { max-width: 1140px; margin: 0 auto; padding: 0 28px; }
        .section-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #0d9488; margin-bottom: 10px;
          display: flex; align-items: center; gap: 8px;
        }
        .section-eyebrow::before { content: ''; width: 24px; height: 2px; background: #0d9488; display: inline-block; border-radius: 2px; }
        .section-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(24px, 2.8vw, 36px);
          font-weight: 800; color: #0f172a; letter-spacing: -0.8px; margin-bottom: 48px;
        }
        .block-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px; font-weight: 700; color: #0f172a;
          margin-bottom: 20px; margin-top: 52px;
          display: flex; align-items: center; gap: 10px;
        }
        .block-title::after { content: ''; flex: 1; height: 1px; background: #e2e8f0; }

        /* Timeline expériences */
        .exp-timeline { display: flex; flex-direction: column; gap: 24px; }
        .exp-card {
          background: white; border-radius: 18px; padding: 28px 32px;
          border: 1px solid #e2e8f0; box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          border-left: 4px solid var(--accent);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .exp-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.09); transform: translateX(4px); }
        .exp-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; gap: 16px; }
        .exp-badge {
          display: inline-block; padding: 3px 12px; border-radius: 100px;
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.06em; margin-bottom: 8px;
        }
        .exp-title { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
        .exp-company { font-size: 13.5px; font-weight: 600; margin-bottom: 3px; }
        .exp-date { font-size: 12px; color: #94a3b8; }
        .exp-icon { font-size: 36px; flex-shrink: 0; }
        .exp-desc { font-size: 14px; color: #475569; line-height: 1.7; margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid #f1f5f9; }
        .exp-tasks { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 20px; }
        .exp-task {
          display: flex; align-items: flex-start; gap: 8px;
          padding: 10px 14px; background: #f8fafc; border: 1px solid #f1f5f9;
          border-radius: 10px; font-size: 13px; color: #374151; line-height: 1.5;
        }
        .exp-task-icon { font-size: 16px; flex-shrink: 0; }
        .stack-wrap { display: flex; flex-wrap: wrap; gap: 7px; }
        .stack-tag {
          padding: 4px 12px; border-radius: 100px;
          font-size: 11.5px; font-weight: 600;
        }

        /* Projects */
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .project-card {
          background: white; border: 1.5px solid #e2e8f0; border-radius: 14px;
          overflow: hidden; transition: transform 0.22s, box-shadow 0.22s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .project-card:hover { transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,0,0,0.1); }
        .project-header {
          padding: 16px 18px; display: flex;
          justify-content: space-between; align-items: center;
        }
        .project-icon { font-size: 26px; }
        .project-num { font-size: 20px; font-weight: 800; opacity: 0.22; }
        .project-body { padding: 0 18px 18px; }
        .project-subtitle { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; margin-bottom: 4px; }
        .project-title { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 7px; }
        .project-detail { font-size: 12.5px; color: #64748b; line-height: 1.6; margin-bottom: 12px; }
        .project-stack { display: flex; flex-wrap: wrap; gap: 5px; }
        .project-tag { padding: 2px 9px; border-radius: 100px; font-size: 10.5px; font-weight: 600; border: 1.5px solid; }

        /* Skills */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 12px; }
        .skill-group {
          background: white; border: 1px solid #e2e8f0; border-radius: 14px;
          padding: 14px 16px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .skill-group-label { font-size: 10.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 10px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .skill-tag {
          padding: 3px 10px; border-radius: 100px; font-size: 11.5px;
          font-weight: 500; background: #f1f5f9; color: #374151;
          border: 1px solid #e2e8f0; transition: all 0.15s;
        }
        .skill-tag:hover { background: #f0fdf4; color: #065f46; border-color: #bbf7d0; }
        .soft-wrap { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 8px; }
        .soft-tag {
          padding: 7px 16px; background: white; border: 1.5px solid #e9d5ff;
          color: #6d28d9; border-radius: 100px; font-size: 13px; font-weight: 500;
          transition: all 0.2s;
        }
        .soft-tag:hover { background: #faf5ff; border-color: #a78bfa; transform: translateY(-2px); }

        @media (max-width: 900px) {
          .exp-tasks { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="exp-section">
        <div className="exp-container">
          <p className="section-eyebrow">Parcours professionnel</p>
          <h2 className="section-title">Expérience & Compétences</h2>

          {/* ── Expériences ── */}
          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-card" style={{ "--accent": exp.accent }}>
                <div className="exp-top">
                  <div>
                    <span className="exp-badge" style={{ color: exp.badgeColor, background: exp.badgeBg }}>
                      {exp.badge}
                    </span>
                    <p className="exp-title">{exp.title}</p>
                    <p className="exp-company" style={{ color: exp.accent }}>{exp.company}</p>
                    <p className="exp-date">{exp.period}</p>
                  </div>
                  <span className="exp-icon">
                    {i === 0 ? "🏢" : i === 1 ? "🤖" : "📊"}
                  </span>
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
                    <span key={s} className="stack-tag" style={{ background: exp.accent + "15", color: exp.accent }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Projets ── */}
          <p className="block-title">Mes projets</p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-header" style={{ background: p.color + "12", borderBottom: `2px solid ${p.color}` }}>
                  <span className="project-icon">{p.icon}</span>
                  <span className="project-num" style={{ color: p.color }}>0{i + 1}</span>
                </div>
                <div className="project-body">
                  <p className="project-subtitle">{p.subtitle}</p>
                  <h4 className="project-title">{p.title}</h4>
                  <p className="project-detail">{p.detail}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="project-tag" style={{ color: p.color, borderColor: p.color + "50", background: p.color + "0e" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Compétences techniques ── */}
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

          {/* ── Soft skills ── */}
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