// src/components/Formulaire/FormulaireG6.jsx
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axiosClient from '../../api/axiosClient';
import { sendEmail } from '../../Services/emailservice';

const FormulaireG6 = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ sending: false, success: false, error: false });

  const contactInfo = {
    email: "maryemfakhfekh1@gmail.com",
    phone: "+216 99 144 624",
    location: "Sfax, Tunisie",
    linkedin: "https://www.linkedin.com/in/maryem-fakhfekh-616231364/",
    github: "https://github.com/",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: false });
    try {
      await axiosClient.post('/formSubmissions', {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        status: 'nouveau',
        date: new Date().toISOString(),
      });
      const emailResult = await sendEmail({
        nom: form.name,
        email: form.email,
        sujet: form.subject,
        message: form.message,
      });
      if (emailResult.success) {
        setStatus({ sending: false, success: true, error: false });
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus({ sending: false, success: false, error: false }), 8000);
      } else {
        throw new Error('Email non envoyé');
      }
    } catch (err) {
      console.error(err);
      setStatus({ sending: false, success: false, error: true });
      setTimeout(() => setStatus({ sending: false, success: false, error: false }), 8000);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .contact-section {
          padding: 88px 0;
          background: #0f172a;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .contact-bg-glow {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(13,148,136,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-container {
          position: relative;
          z-index: 1;
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
          color: white;
          letter-spacing: -0.8px;
          margin-bottom: 52px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: flex-start;
        }
        .col-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 28px;
        }

        /* Info side */
        .contact-item {
          display: flex;
          gap: 14px;
          align-items: center;
          margin-bottom: 18px;
        }
        .contact-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(13,148,136,0.15);
          border: 1px solid rgba(13,148,136,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
          color: #0d9488;
        }
        .contact-item-label {
          font-size: 11px;
          color: #475569;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 3px;
        }
        .contact-item-value {
          font-size: 14px;
          color: #cbd5e1;
        }
        .contact-item-link {
          font-size: 14px;
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-item-link:hover { color: #0d9488; }
        .social-row {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .social-btn:hover {
          border-color: #0d9488;
          color: #0d9488;
          background: rgba(13,148,136,0.08);
        }
        .master-box {
          margin-top: 32px;
          padding: 20px;
          background: rgba(13,148,136,0.08);
          border: 1px solid rgba(13,148,136,0.2);
          border-radius: 16px;
        }
        .master-label {
          font-size: 13px;
          font-weight: 700;
          color: #0d9488;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .master-text {
          font-size: 13px;
          color: #64748b;
          line-height: 1.7;
        }

        /* Form side */
        .contact-form {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 7px;
        }
        .form-input {
          width: 100%;
          padding: 11px 15px;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 11px;
          color: white;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: #475569; }
        .form-input:focus {
          border-color: #0d9488;
          background: rgba(13,148,136,0.06);
        }
        .form-textarea {
          resize: none;
        }
        .submit-btn {
          width: 100%;
          padding: 13px;
          background: #0d9488;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.25s;
          margin-top: 4px;
          box-shadow: 0 6px 20px rgba(13,148,136,0.3);
          letter-spacing: 0.01em;
        }
        .submit-btn:hover:not(:disabled) {
          background: #0f766e;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(13,148,136,0.4);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .success-msg {
          margin-top: 14px;
          padding: 14px 18px;
          background: rgba(16,185,129,0.12);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 10px;
          font-size: 14px;
          color: #6ee7b7;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .error-msg {
          margin-top: 14px;
          padding: 14px 18px;
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 10px;
          font-size: 14px;
          color: #fca5a5;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-bg-glow" />
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Disponible</p>
          <h2 className="section-title">Contactez-moi</h2>

          <div className="contact-grid">
            {/* Left — info */}
            <div>
              <p className="col-title">Mes coordonnées</p>

              {[
                { icon: <FaEnvelope />, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: <FaPhoneAlt />, label: "Téléphone", value: contactInfo.phone },
                { icon: <FaMapMarkerAlt />, label: "Localisation", value: contactInfo.location },
              ].map((c) => (
                <div key={c.label} className="contact-item">
                  <div className="contact-icon-box">{c.icon}</div>
                  <div>
                    <p className="contact-item-label">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="contact-item-link">{c.value}</a>
                    ) : (
                      <p className="contact-item-value">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="social-row">
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={contactInfo.github} target="_blank" rel="noreferrer" className="social-btn">
                  <FaGithub /> GitHub
                </a>
              </div>

              <div className="master-box">
                <p className="master-label">🎓 Objectif Master 2025</p>
                <p className="master-text">
                  Je candidate au Master Informatique à l'Université Paris-Saclay,
                  spécialisation Intelligence Artificielle &amp; Systèmes d'Information.
                  Disponible pour un entretien à tout moment.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <p className="col-title">Envoyer un message</p>
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nom complet</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="vous@exemple.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Sujet</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Écrivez votre message ici..."
                    className="form-input form-textarea"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status.sending}
                  className="submit-btn"
                >
                  {status.sending ? 'Envoi en cours...' : 'Envoyer le message →'}
                </button>

                {status.success && (
                  <div className="success-msg">✅ Merci ! Votre message a été envoyé.</div>
                )}
                {status.error && (
                  <div className="error-msg">😔 Une erreur est survenue, réessayez svp.</div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default FormulaireG6;