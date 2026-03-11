import React from "react";

const Skills = () => {
  const skillGroups = [
    { label: "Programmation", icon: "💻", color: "#0d9488", items: ["Python", "Java", "C#", "PHP", "C++", "JavaScript"] },
    { label: "Développement Web", icon: "🌐", color: "#0369a1", items: ["Angular", "React", "Flask", "Spring Boot", ".NET", "HTML", "CSS", "REST API"] },
    { label: "Mobile", icon: "📱", color: "#be185d", items: ["Flutter", "Dart"] },
    { label: "IA & Data", icon: "🧠", color: "#6d28d9", items: ["NLP (T5)", "Machine Learning", "Power BI", "Big Data"] },
    { label: "Bases de données", icon: "🗄️", color: "#b45309", items: ["MySQL", "SQLite"] },
    { label: "DevOps & Outils", icon: "🐳", color: "#0f766e", items: ["Docker", "CI/CD", "Git", "Postman", "VS Code", "IntelliJ", "PyCharm"] },
    { label: "Génie logiciel", icon: "📐", color: "#4f46e5", items: ["UML", "Microservices", "ISTQB", "Swagger"] },
    { label: "Réseaux & Sécurité", icon: "🔐", color: "#dc2626", items: ["Réseaux informatiques", "Sécurité informatique"] },
  ];

  const softSkills = [
    { label: "Travail en équipe", icon: "🤝" },
    { label: "Résolution de problèmes", icon: "🧩" },
    { label: "Organisation", icon: "📋" },
    { label: "Adaptabilité", icon: "🔄" },
    { label: "Communication", icon: "💬" },
    { label: "Autonomie", icon: "🎯" },
    { label: "Agile / Scrum", icon: "⚡" },
    { label: "Curiosité", icon: "🔍" },
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", percent: 100, color: "#0d9488", flag: "🇹🇳" },
    { name: "Français", level: "B2 — Courant", percent: 80, color: "#0369a1", flag: "🇫🇷" },
    { name: "Anglais", level: "B2 — Courant", percent: 80, color: "#6366f1", flag: "🇬🇧" },
    { name: "Espagnol", level: "A2 — Notions", percent: 35, color: "#f59e0b", flag: "🇪🇸" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .skills-section { padding: 88px 0; background: #f8fafc; font-family: 'Plus Jakarta Sans', sans-serif; }
        .skills-container { max-width: 1140px; margin: 0 auto; padding: 0 28px; }
        .section-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #0d9488; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .section-eyebrow::before { content: ''; width: 24px; height: 2px; background: #0d9488; display: inline-block; border-radius: 2px; }
        .section-title { font-size: clamp(24px, 2.8vw, 36px); font-weight: 800; color: #0f172a; letter-spacing: -0.8px; margin-bottom: 48px; }
        .block-title { font-size: 15px; font-weight: 700; color: #0f172a; margin: 48px 0 20px; display: flex; align-items: center; gap: 8px; }
        .block-title::after { content: ''; flex: 1; height: 1px; background: #e2e8f0; }

        /* Skills grid */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
        .skill-group {
          background: white; border: 1px solid #e2e8f0; border-radius: 16px;
          padding: 18px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .skill-group:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .skill-group-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .skill-group-icon { font-size: 20px; }
        .skill-group-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-tag {
          padding: 4px 11px; border-radius: 100px; font-size: 12px; font-weight: 500;
          background: #f1f5f9; color: #374151; border: 1px solid #e2e8f0;
          transition: all 0.15s;
        }
        .skill-tag:hover { background: #f0fdf4; color: #065f46; border-color: #bbf7d0; }

        /* Soft skills */
        .soft-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; }
        .soft-card {
          background: white; border: 1.5px solid #e9d5ff; border-radius: 14px;
          padding: 14px 16px; display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 500; color: #6d28d9;
          transition: all 0.2s;
        }
        .soft-card:hover { background: #faf5ff; border-color: #a78bfa; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(109,40,217,0.1); }
        .soft-card-icon { font-size: 20px; flex-shrink: 0; }

        /* Languages */
        .lang-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .lang-card {
          background: white; border: 1px solid #e2e8f0; border-radius: 16px;
          padding: 18px 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .lang-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .lang-name-wrap { display: flex; align-items: center; gap: 10px; }
        .lang-flag { font-size: 22px; }
        .lang-name { font-size: 15px; font-weight: 700; color: #0f172a; }
        .lang-level { font-size: 12px; color: #64748b; font-weight: 500; }
        .bar-track { height: 7px; background: #e2e8f0; border-radius: 10px; overflow: hidden; }
        .bar-fill { height: 100%; border-radius: 10px; }

        @media (max-width: 768px) {
          .lang-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-container">
          <p className="section-eyebrow">Expertise</p>
          <h2 className="section-title">Compétences</h2>

          {/* Compétences techniques */}
          <p className="block-title">Compétences techniques</p>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div key={g.label} className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-group-icon">{g.icon}</span>
                  <span className="skill-group-label" style={{ color: g.color }}>{g.label}</span>
                </div>
                <div className="skill-tags">
                  {g.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <p className="block-title">Compétences transversales</p>
          <div className="soft-grid">
            {softSkills.map(s => (
              <div key={s.label} className="soft-card">
                <span className="soft-card-icon">{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Langues */}
          <p className="block-title">Langues</p>
          <div className="lang-grid">
            {languages.map(l => (
              <div key={l.name} className="lang-card">
                <div className="lang-top">
                  <div className="lang-name-wrap">
                    <span className="lang-flag">{l.flag}</span>
                    <span className="lang-name">{l.name}</span>
                  </div>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${l.percent}%`, background: `linear-gradient(90deg, ${l.color}, ${l.color}99)` }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Skills;