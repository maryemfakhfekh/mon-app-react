import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@400;500&display=swap');

        .footer-root {
          background: #0a0f1a;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 36px 28px;
          font-family: 'Outfit', sans-serif;
        }
        .footer-inner {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-mark {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: linear-gradient(135deg, #0d9488, #0369a1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 13px;
        }
        .footer-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #e2e8f0;
        }
        .footer-copy {
          font-size: 13px;
          color: #475569;
        }
        .footer-links {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .footer-social {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.2s;
        }
        .footer-social:hover {
          border-color: #0d9488;
          color: #0d9488;
          background: rgba(13,148,136,0.1);
        }

        @media (max-width: 600px) {
          .footer-inner { flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-mark">MF</div>
            <div>
              <p className="footer-name">Maryem Fakhfekh</p>
              <p className="footer-copy">© {new Date().getFullYear()} — Génie Logiciel & IA · IIT Sfax</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="https://www.linkedin.com/in/maryem-fakhfekh-616231364/" target="_blank" rel="noreferrer" className="footer-social">
              <FaLinkedin />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer-social">
              <FaGithub />
            </a>
            <a href="mailto:maryemfakhfekh1@gmail.com" className="footer-social">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;