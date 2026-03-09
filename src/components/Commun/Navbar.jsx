import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(Boolean(token));
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Expérience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  function handleLogout() {
    localStorage.removeItem('authToken');
    navigate('/login', { replace: true });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@400;500;600&display=swap');

        .nav-root {
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }
        .nav-root.scrolled {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(13, 148, 136, 0.12);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .nav-root.top {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
        }
        .nav-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .nav-logo-mark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0d9488, #0369a1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: -0.5px;
          box-shadow: 0 4px 14px rgba(13,148,136,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-logo:hover .nav-logo-mark {
          transform: rotate(-6deg) scale(1.05);
          box-shadow: 0 6px 20px rgba(13,148,136,0.4);
        }
        .nav-logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 17px;
          color: #0f172a;
          letter-spacing: -0.3px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-link {
          position: relative;
          padding: 7px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .nav-link:hover {
          color: #0d9488;
          background: rgba(13,148,136,0.06);
        }
        .nav-link.active {
          color: #0d9488;
          font-weight: 600;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          background: #0d9488;
          border-radius: 2px;
        }
        .nav-btn-login {
          padding: 8px 20px;
          border: 1.5px solid #0d9488;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #0d9488;
          background: transparent;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: 12px;
        }
        .nav-btn-login:hover {
          background: #0d9488;
          color: white;
          box-shadow: 0 4px 14px rgba(13,148,136,0.3);
        }
        .nav-btn-logout {
          padding: 8px 16px;
          border: 1.5px solid #e2e8f0;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          background: transparent;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.2s;
          margin-left: 8px;
        }
        .nav-btn-logout:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: #fff5f5;
        }
        .nav-dashboard-link {
          font-size: 13px;
          font-weight: 600;
          color: #0d9488;
          text-decoration: none;
          padding: 8px 16px;
          background: rgba(13,148,136,0.08);
          border-radius: 100px;
          transition: background 0.2s;
          margin-left: 12px;
        }
        .nav-dashboard-link:hover {
          background: rgba(13,148,136,0.15);
        }
        .burger-btn {
          display: none;
          background: none;
          border: 1.5px solid #e2e8f0;
          border-radius: 9px;
          padding: 8px 10px;
          color: #374151;
          cursor: pointer;
          font-size: 16px;
          transition: border-color 0.2s;
        }
        .burger-btn:hover {
          border-color: #0d9488;
          color: #0d9488;
        }
        .mobile-menu {
          background: white;
          border-top: 1px solid #f1f5f9;
          padding: 12px 20px 20px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        .mobile-nav-link {
          display: block;
          padding: 11px 14px;
          font-size: 15px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          border-radius: 10px;
          margin-bottom: 2px;
          transition: background 0.15s, color 0.15s;
          font-family: 'Outfit', sans-serif;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: #f0fdf4;
          color: #0d9488;
        }
        .mobile-divider {
          height: 1px;
          background: #f1f5f9;
          margin: 10px 0;
        }
        .mobile-auth-btn {
          display: block;
          width: 100%;
          text-align: center;
          padding: 11px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          text-decoration: none;
          transition: all 0.2s;
          border: none;
        }
        .mobile-auth-btn.login {
          background: #0d9488;
          color: white;
          box-shadow: 0 4px 14px rgba(13,148,136,0.25);
        }
        .mobile-auth-btn.login:hover { background: #0f766e; }
        .mobile-auth-btn.logout {
          background: #fff;
          color: #64748b;
          border: 1.5px solid #e2e8f0;
          margin-top: 6px;
        }
        .mobile-auth-btn.logout:hover { border-color: #ef4444; color: #ef4444; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : 'top'}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-mark">MF</div>
            <span className="nav-logo-name">Maryem Fakhfekh</span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <Link to="/login" className="nav-btn-login">
                Se connecter
              </Link>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/admin" className="nav-dashboard-link">
                  Tableau de bord
                </Link>
                <button onClick={handleLogout} className="nav-btn-logout">
                  Déconnexion
                </button>
              </div>
            )}
          </div>

          {/* Mobile burger */}
          <button
            className="burger-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="mobile-menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mobile-divider" />
            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setIsMobileOpen(false)}
                className="mobile-auth-btn login"
              >
                Se connecter
              </Link>
            ) : (
              <>
                <Link
                  to="/admin"
                  onClick={() => setIsMobileOpen(false)}
                  className="mobile-auth-btn login"
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={() => { setIsMobileOpen(false); handleLogout(); }}
                  className="mobile-auth-btn logout"
                >
                  Se déconnecter
                </button>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;