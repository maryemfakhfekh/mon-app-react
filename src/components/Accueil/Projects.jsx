import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const projects = [
    {
      title: "Plateforme de gestion de stages",
      subtitle: "Full-Stack + IA — PFE en cours",
      detail: "Plateforme complète : app web Angular (RH), app mobile Flutter (stagiaires), backend Spring Boot, module NLP pour l'analyse des CV et calcul de score de compatibilité.",
      stack: ["Angular", "Flutter", "Spring Boot", "NLP", "Docker", "MySQL"],
      color: "#0d9488", icon: "🏢", category: "Full-Stack",
    },
    {
      title: "Générateur de Résumés IA",
      subtitle: "Web App — Stage ASM 2025",
      detail: "Site web de génération automatique de résumés avec le modèle NLP T5. Interface Angular, backend Flask, intégration d'un pipeline NLP complet.",
      stack: ["Angular", "Flask", "Python", "NLP (T5)", "REST API"],
      color: "#0369a1", icon: "🤖", category: "IA",
    },
    {
      title: "Portfolio personnel",
      subtitle: "React Web App",
      detail: "Portfolio moderne et responsive pour présenter compétences, projets et expériences. Navigation optimisée et UX soignée.",
      stack: ["React", "Vite", "JavaScript", "HTML", "CSS"],
      color: "#7c3aed", icon: "🌐", category: "Front-end",
    },
    {
      title: "Lifestyle Aura",
      subtitle: "Application mobile bien-être",
      detail: "App Flutter de bien-être : suivi activités physiques, recettes healthy, hydratation, humeur, sommeil et notifications personnalisées.",
      stack: ["Flutter", "Hive", "fl_chart", "Dart"],
      color: "#be185d", icon: "🧘", category: "Mobile",
    },
    {
      title: "Architecture Microservices",
      subtitle: "Gestion de restaurant",
      detail: "Architecture microservices Spring Boot avec Eureka, Config Server, API Gateway, documentation Swagger et gestion des exceptions.",
      stack: ["Spring Boot", "Eureka", "Swagger", "MySQL", "REST API"],
      color: "#b45309", icon: "🏗️", category: "Back-end",
    },
    {
      title: "PetCare — Clinique vétérinaire",
      subtitle: "Application .NET",
      detail: "Application CRUD complète pour gérer patients, propriétaires et consultations d'une clinique vétérinaire.",
      stack: ["C#", ".NET", "MySQL"],
      color: "#065f46", icon: "🐾", category: "Full-Stack",
    },
    {
      title: "Site E-commerce — Bougies",
      subtitle: "Web Front-end",
      detail: "Site e-commerce de bougies artisanales : pages produits, navigation entre catégories, interface responsive.",
      stack: ["HTML", "CSS", "JavaScript"],
      color: "#dc2626", icon: "🕯️", category: "Front-end",
    },
    {
      title: "Jeux Vidéo 2D/3D",
      subtitle: "Unity Game Dev",
      detail: "Conception de jeux avec environnements interactifs, logique de jeu, collisions et animations 2D/3D.",
      stack: ["Unity", "C#"],
      color: "#4f46e5", icon: "🎮", category: "Autre",
    },
  ];

  const categories = ["Tous", "Full-Stack", "IA", "Front-end", "Mobile", "Back-end", "Autre"];

  const filtered = filter === "Tous" ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .proj-section { padding: 88px 0; background: white; font-family: 'Plus Jakarta Sans', sans-serif; }
        .proj-container { max-width: 1140px; margin: 0 auto; padding: 0 28px; }
        .section-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #0d9488; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .section-eyebrow::before { content: ''; width: 24px; height: 2px; background: #0d9488; display: inline-block; border-radius: 2px; }
        .section-title { font-size: clamp(24px, 2.8vw, 36px); font-weight: 800; color: #0f172a; letter-spacing: -0.8px; margin-bottom: 12px; }
        .section-sub { font-size: 15px; color: #64748b; margin-bottom: 36px; }
        .filter-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 40px; }
        .filter-btn {
          padding: 7px 18px; border-radius: 100px; font-size: 13px; font-weight: 600;
          border: 1.5px solid #e2e8f0; background: white; color: #64748b;
          cursor: pointer; font-family: inherit; transition: all 0.2s;
        }
        .filter-btn:hover { border-color: #0d9488; color: #0d9488; background: #f0fdf4; }
        .filter-btn.active { background: #0d9488; color: white; border-color: #0d9488; box-shadow: 0 4px 12px rgba(13,148,136,0.25); }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .project-card {
          background: white; border: 1.5px solid #e2e8f0; border-radius: 16px;
          overflow: hidden; transition: transform 0.22s, box-shadow 0.22s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          display: flex; flex-direction: column;
        }
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
        .project-header { padding: 18px; display: flex; justify-content: space-between; align-items: center; }
        .project-icon { font-size: 28px; }
        .project-num { font-size: 22px; font-weight: 800; opacity: 0.2; }
        .project-body { padding: 0 18px 20px; flex: 1; display: flex; flex-direction: column; }
        .project-category { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 4px; }
        .project-title { font-size: 15px; font-weight: 700; color: #0f172a; margin-bottom: 4px; line-height: 1.3; }
        .project-subtitle { font-size: 11.5px; color: #94a3b8; margin-bottom: 10px; }
        .project-detail { font-size: 12.5px; color: #64748b; line-height: 1.65; margin-bottom: 14px; flex: 1; }
        .project-stack { display: flex; flex-wrap: wrap; gap: 5px; }
        .project-tag { padding: 3px 10px; border-radius: 100px; font-size: 10.5px; font-weight: 600; border: 1.5px solid; }
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="proj-section">
        <div className="proj-container">
          <p className="section-eyebrow">Réalisations</p>
          <h2 className="section-title">Mes Projets</h2>
          <p className="section-sub">{projects.length} projets académiques et professionnels</p>

          <div className="filter-row">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-header" style={{ background: p.color + "12", borderBottom: `2px solid ${p.color}` }}>
                  <span className="project-icon">{p.icon}</span>
                  <span className="project-num" style={{ color: p.color }}>0{i + 1}</span>
                </div>
                <div className="project-body">
                  <p className="project-category">{p.category}</p>
                  <h4 className="project-title">{p.title}</h4>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-detail">{p.detail}</p>
                  <div className="project-stack">
                    {p.stack.map(s => (
                      <span key={s} className="project-tag" style={{ color: p.color, borderColor: p.color + "50", background: p.color + "0e" }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;