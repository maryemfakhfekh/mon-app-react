import React, { useMemo, useState } from "react";

// Mets tes images dans public/certificates/
const certComputerVision = "/certificates/cert-computer-vision.png";
const certKickoff = "/certificates/cert-kickoff-ai.png";
const certGenerativeAI = "/certificates/cert-generative-ai.png";
const certAWS = "/certificates/cert-aws.png";
const certCybersecurity = "/certificates/cert-cybersecurity.png";
const certArduino = "/certificates/cert-arduino-iot.png";
const certGraphicDesign = "/certificates/cert-graphic-design.png";

const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Tous");

  const certificates = [
    {
      id: 1,
      type: "Bootcamp Session",
      title: "Computer Vision Session",
      issuer: "Microsoft Tech Club ISIM-Sfax × TwinTech Talks",
      program: "Twintech AI Bootcamp",
      date: "22 Octobre 2025",
      year: 2025,
      category: "Intelligence Artificielle",
      color: "#6d28d9",
      icon: "👁️",
      image: certComputerVision,
      description:
        "Participation à la session Computer Vision du Twintech AI Bootcamp organisé par Microsoft Tech Club.",
    },
    {
      id: 2,
      type: "Bootcamp Session",
      title: "Kickoff Session — AI Bootcamp",
      issuer: "Microsoft Tech Club ISIM-Sfax × TwinTech Talks",
      program: "Twintech AI Bootcamp",
      date: "8 Octobre 2025",
      year: 2025,
      category: "Intelligence Artificielle",
      color: "#0369a1",
      icon: "🚀",
      image: certKickoff,
      description:
        "Session d'ouverture du Twintech AI Bootcamp organisé par Microsoft Tech Club ISIM-Sfax.",
    },
    {
      id: 3,
      type: "Bootcamp Session",
      title: "Generative AI & LLMs Session",
      issuer: "Microsoft Tech Club ISIM-Sfax × TwinTech Talks",
      program: "Twintech AI Bootcamp",
      date: "27 Novembre 2025",
      year: 2025,
      category: "Intelligence Artificielle",
      color: "#0d9488",
      icon: "🤖",
      image: certGenerativeAI,
      description:
        "Session dédiée à l'IA générative et aux Large Language Models (LLMs).",
    },
    {
      id: 4,
      type: "Badge",
      title: "AWS Academy Graduate – Cloud Foundations",
      issuer: "AWS Academy",
      program: "AWS Academy Training Badge",
      date: "23 Décembre 2025",
      year: 2025,
      category: "Cloud",
      color: "#f59e0b",
      icon: "☁️",
      image: certAWS,
      hours: "20 heures",
      credential: "https://www.credly.com/go/34k88gDf",
      description:
        "Badge de formation délivré par AWS Academy après validation du parcours Cloud Foundations. Formation de 20 heures couvrant les fondamentaux du cloud computing avec Amazon Web Services.",
    },
    {
      id: 5,
      type: "Training",
      title: "IEEE CyberSecurity Training",
      issuer: "IEEE IIT Student Branch — IIT Sfax",
      program: "IEEE CyberSecurity Training",
      date: "26 Nov & 2 Déc 2023",
      year: 2023,
      category: "Cybersécurité",
      color: "#dc2626",
      icon: "🔐",
      image: certCybersecurity,
      description:
        "Formation en cybersécurité organisée par IEEE IIT Student Branch à l'Institut International de Technologie de Sfax.",
    },
    {
      id: 6,
      type: "Workshop",
      title: "Workshop Arduino & IoT",
      issuer: "IEEE IIT Student Branch — IIT Sfax",
      program: "IEEE IIT SB Workshop",
      date: "2023",
      year: 2023,
      category: "IoT & Embarqué",
      color: "#b45309",
      icon: "⚡",
      image: certArduino,
      description:
        "Participation au workshop Arduino & IoT organisé par IEEE IIT Student Branch, avec une implication active tout au long du parcours.",
    },
    {
      id: 7,
      type: "Workshop",
      title: "Workshop Graphic Design",
      issuer: "IEEE IIT Student Branch — IIT Sfax",
      program: "IEEE IIT SB Workshop",
      date: "2023",
      year: 2023,
      category: "Design",
      color: "#be185d",
      icon: "🎨",
      image: certGraphicDesign,
      description:
        "Participation au workshop Graphic Design organisé par IEEE IIT Student Branch à l'Institut International de Technologie de Sfax.",
    },
  ];

  const categories = [
    "Tous",
    "Intelligence Artificielle",
    "Cloud",
    "Cybersécurité",
    "Design",
    "IoT & Embarqué",
  ];

  const filtered =
    filter === "Tous"
      ? certificates
      : certificates.filter((c) => c.category === filter);

  const latestYear = useMemo(
    () => Math.max(...certificates.map((c) => c.year)).toString(),
    [certificates]
  );

  const stats = [
    { value: certificates.length.toString(), label: "Certificats", icon: "🏆" },
    { value: "5", label: "Domaines", icon: "📚" },
    { value: latestYear, label: "Dernière certif.", icon: "📅" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .cert-section {
          padding: 88px 0;
          background: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .cert-container {
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
          content: "";
          width: 24px;
          height: 2px;
          background: #0d9488;
          display: inline-block;
          border-radius: 999px;
        }

        .section-title {
          font-size: clamp(26px, 2.8vw, 38px);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.04em;
          margin: 0 0 18px;
        }

        .section-subtitle {
          max-width: 760px;
          font-size: 15px;
          line-height: 1.8;
          color: #64748b;
          margin: 0 0 34px;
        }

        .cert-stats {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }

        .cert-stat {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 170px;
        }

        .cert-stat-icon {
          font-size: 22px;
        }

        .cert-stat-value {
          font-size: 22px;
          font-weight: 800;
          color: #0d9488;
          line-height: 1;
          margin: 0;
        }

        .cert-stat-label {
          font-size: 11px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 4px 0 0;
        }

        .filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 34px;
        }

        .filter-btn {
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #64748b;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: #0d9488;
          color: #0d9488;
        }

        .filter-btn.active {
          background: #0d9488;
          color: #fff;
          border-color: #0d9488;
          box-shadow: 0 8px 20px rgba(13, 148, 136, 0.18);
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .cert-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 44px rgba(15, 23, 42, 0.10);
          border-color: var(--card-color);
        }

        .cert-card-top {
          padding: 18px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid #eef2f7;
          background: var(--card-soft);
        }

        .cert-card-icon-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .cert-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
          flex-shrink: 0;
        }

        .cert-category-badge {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 5px 10px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .cert-card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .cert-card-issuer {
          font-size: 10.5px;
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin: 0 0 8px;
          line-height: 1.5;
        }

        .cert-card-title {
          font-size: 16px;
          font-weight: 750;
          color: #0f172a;
          margin: 0 0 6px;
          line-height: 1.4;
        }

        .cert-card-program {
          font-size: 13px;
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 16px;
        }

        .cert-card-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .cert-meta-chip {
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 6px 10px;
          border-radius: 999px;
        }

        .cert-card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .cert-date {
          font-size: 12px;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.4;
        }

        .cert-view-btn {
          font-size: 12px;
          font-weight: 700;
          padding: 7px 14px;
          border-radius: 999px;
          border: 1.5px solid;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .cert-view-btn:hover {
          background: #0f172a;
          color: #ffffff !important;
          border-color: #0f172a !important;
        }

        .ieee-card {
          margin-top: 42px;
          background: linear-gradient(135deg, #f0fdf4, #ecfeff);
          border: 1px solid #bbf7d0;
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .ieee-icon {
          font-size: 30px;
          flex-shrink: 0;
        }

        .ieee-title {
          font-size: 15px;
          font-weight: 800;
          color: #065f46;
          margin: 0 0 6px;
        }

        .ieee-desc {
          font-size: 13.5px;
          color: #334155;
          line-height: 1.8;
          margin: 0;
        }

        .ieee-badge-pill {
          display: inline-block;
          margin-top: 10px;
          padding: 4px 12px;
          background: #0d9488;
          color: white;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.70);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(6px);
        }

        .modal-box {
          width: 100%;
          max-width: 780px;
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(2, 6, 23, 0.30);
          animation: modalIn 0.22s ease;
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-media {
          position: relative;
          background: #f8fafc;
          border-bottom: 1px solid #eef2f7;
        }

        .modal-media img {
          display: block;
          width: 100%;
          max-height: 420px;
          object-fit: contain;
          background: #f8fafc;
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.95);
          color: #0f172a;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
        }

        .modal-content {
          padding: 26px 28px 30px;
        }

        .modal-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 14px;
        }

        .modal-head-left {
          min-width: 0;
        }

        .modal-badge {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 6px;
        }

        .modal-program {
          font-size: 14px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
        }

        .modal-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }

        .modal-divider {
          height: 1px;
          background: #eef2f7;
          margin: 18px 0;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 18px;
        }

        .modal-row {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 12px 14px;
        }

        .modal-row-label {
          display: block;
          font-size: 11px;
          color: #94a3b8;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 6px;
        }

        .modal-row-value {
          font-size: 13px;
          color: #334155;
          font-weight: 600;
          line-height: 1.6;
          word-break: break-word;
        }

        .modal-link {
          color: #0d9488;
          text-decoration: none;
          font-weight: 700;
        }

        .modal-link:hover {
          text-decoration: underline;
        }

        .modal-desc {
          font-size: 14px;
          color: #475569;
          line-height: 1.8;
          margin-top: 18px;
        }

        @media (max-width: 980px) {
          .cert-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .cert-section {
            padding: 72px 0;
          }

          .cert-container {
            padding: 0 18px;
          }

          .cert-grid {
            grid-template-columns: 1fr;
          }

          .modal-content {
            padding: 22px 18px 24px;
          }

          .modal-head {
            flex-direction: column;
          }

          .modal-grid {
            grid-template-columns: 1fr;
          }

          .ieee-card {
            padding: 18px;
          }
        }
      `}</style>

      <section className="cert-section" id="certifications">
        <div className="cert-container">
          <p className="section-eyebrow">Formation continue</p>
          <h2 className="section-title">Certifications & Formations</h2>
          <p className="section-subtitle">
            Sélection de badges, workshops et formations suivis dans les domaines
            de l’intelligence artificielle, du cloud, de la cybersécurité et des
            systèmes embarqués.
          </p>

          <div className="cert-stats">
            {stats.map((s) => (
              <div key={s.label} className="cert-stat">
                <span className="cert-stat-icon">{s.icon}</span>
                <div>
                  <p className="cert-stat-value">{s.value}</p>
                  <p className="cert-stat-label">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="filter-row">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="cert-grid">
            {filtered.map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                style={{
                  "--card-color": cert.color,
                  "--card-soft": `${cert.color}10`,
                }}
              >
                <div className="cert-card-top">
                  <div className="cert-card-icon-wrap">
                    <span className="cert-card-icon">{cert.icon}</span>
                  </div>

                  <span
                    className="cert-category-badge"
                    style={{
                      background: `${cert.color}18`,
                      color: cert.color,
                    }}
                  >
                    {cert.category}
                  </span>
                </div>

                <div className="cert-card-body">
                  <p className="cert-card-issuer">{cert.issuer}</p>
                  <h4 className="cert-card-title">{cert.title}</h4>
                  <p className="cert-card-program">{cert.program}</p>

                  <div className="cert-card-meta">
                    <span className="cert-meta-chip">{cert.type}</span>
                    {cert.hours && (
                      <span className="cert-meta-chip">{cert.hours}</span>
                    )}
                  </div>

                  <div className="cert-card-footer">
                    <span className="cert-date">📅 {cert.date}</span>

                    <button
                      className="cert-view-btn"
                      style={{
                        color: cert.color,
                        borderColor: `${cert.color}55`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(cert);
                      }}
                    >
                      Voir le certificat →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ieee-card">
            <span className="ieee-icon">⚡</span>
            <div>
              <p className="ieee-title">IEEE Student Branch — IIT Sfax</p>
              <p className="ieee-desc">
                Membre active depuis 2023. Participation à des événements
                technologiques, ateliers et conférences liés à l’ingénierie,
                l’informatique et l’innovation.
              </p>
              <span className="ieee-badge-pill">Membre active depuis 2023</span>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-media">
              <img src={selected.image} alt={selected.title} />
              <button
                className="modal-close-btn"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="modal-content">
              <div className="modal-head">
                <div className="modal-head-left">
                  <span
                    className="modal-badge"
                    style={{
                      background: `${selected.color}18`,
                      color: selected.color,
                    }}
                  >
                    {selected.category}
                  </span>
                  <h3 className="modal-title">{selected.title}</h3>
                  <p className="modal-program">{selected.program}</p>
                </div>

                <div
                  className="modal-icon"
                  style={{
                    background: `${selected.color}12`,
                  }}
                >
                  {selected.icon}
                </div>
              </div>

              <div className="modal-divider" />

              <div className="modal-grid">
                <div className="modal-row">
                  <span className="modal-row-label">Type</span>
                  <span className="modal-row-value">{selected.type}</span>
                </div>

                <div className="modal-row">
                  <span className="modal-row-label">Date</span>
                  <span className="modal-row-value">{selected.date}</span>
                </div>

                <div className="modal-row">
                  <span className="modal-row-label">Délivré par</span>
                  <span className="modal-row-value">{selected.issuer}</span>
                </div>

                <div className="modal-row">
                  <span className="modal-row-label">Programme</span>
                  <span className="modal-row-value">{selected.program}</span>
                </div>

                {selected.hours && (
                  <div className="modal-row">
                    <span className="modal-row-label">Durée</span>
                    <span className="modal-row-value">{selected.hours}</span>
                  </div>
                )}

                {selected.credential && (
                  <div className="modal-row">
                    <span className="modal-row-label">Badge digital</span>
                    <span className="modal-row-value">
                      <a
                        href={selected.credential}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-link"
                      >
                        Voir sur Credly →
                      </a>
                    </span>
                  </div>
                )}
              </div>

              <p className="modal-desc">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;