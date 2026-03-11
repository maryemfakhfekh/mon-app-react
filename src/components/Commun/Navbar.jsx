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
    { name: 'Accueil',      path: '/' },
    { name: 'À propos',     path: '/about' },
    { name: 'Expérience',   path: '/experience' },
    { name: 'Projets',      path: '/projects' },
    { name: 'Compétences',  path: '/skills' },
    { name: 'Certificats',  path: '/certificates' },
    { name: 'Contact',      path: '/contact' },
  ];

  function handleLogout() {
    localStorage.removeItem('authToken');
    navigate('/', { replace: true });
  }

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .nav-root {
          position: sticky; top: 0; z-index: 100;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .nav-root.scrolled {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(13,148,136,0.12);
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .nav-root.top {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 24px;
          height: 64px; display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .nav-logo-mark {
          width: 36px; height: 36px; border-radius: 10px;
          background: linear-gradient(135deg, #0d9488, #0369a1);
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 800; font-size: 13px;
          box-shadow: 0 4px 12px rgba(13,148,136,0.35);
          transition: transform 0.2s;
        }
        .nav-logo:hover .nav-logo-mark { transform: rotate(-6deg) scale(1.05); }
        .nav-logo-name {
          font-weight: 700; font-size: 15px; color: #0f172a; letter-spacing: -0.3px;
        }
        .nav-links { display: flex; align-items: center; gap: 0; }
        .nav-link {
          position: relative; padding: 6px 12px; font-size: 13px; font-weight: 500;
          color: #475569; text-decoration: none; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover { color: #0d9488; background: rgba(13,148,136,0.06); }
        .nav-link.active { color: #0d9488; font-weight: 600; }
        .nav-link.active::after {
          content: ''; position: absolute; bottom: 1px; left: 50%;
          transform: translateX(-50%); width: 16px; height: 2px;
          background: #0d9488; border-radius: 2px;
        }
        .nav-dashboard-link {
          font-size: 12px; font-weight: 600; color: #0d9488; text-decoration: none;
          padding: 7px 14px; background: rgba(13,148,136,0.08);
          border-radius: 100px; transition: background 0.2s; margin-left: 10px;
          white-space: nowrap;
        }
        .nav-dashboard-link:hover { background: rgba(13,148,136,0.15); }
        .nav-btn-logout {
          padding: 7px 14px; border: 1.5px solid #e2e8f0; border-radius: 100px;
          font-size: 12px; font-weight: 500; color: #64748b; background: transparent;
          cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif;
          transition: all 0.2s; margin-left: 6px;
        }
        .nav-btn-logout:hover { border-color: #ef4444; color: #ef4444; background: #fff5f5; }
        .burger-btn {
          display: none; background: none; border: 1.5px solid #e2e8f0;
          border-radius: 9px; padding: 7px 9px; color: #374151;
          cursor: pointer; font-size: 15px; transition: border-color 0.2s;
          align-items: center; justify-content: center;
        }
        .burger-btn:hover { border-color: #0d9488; color: #0d9488; }

        /* Mobile menu */
        .mobile-menu {
          background: white; border-top: 1px solid #f1f5f9;
          padding: 10px 16px 18px; box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        .mobile-nav-link {
          display: block; padding: 10px 14px; font-size: 14px; font-weight: 500;
          color: #374151; text-decoration: none; border-radius: 10px; margin-bottom: 2px;
          transition: background 0.15s, color 0.15s;
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          background: #f0fdf4; color: #0d9488; font-weight: 600;
        }
        .mobile-divider { height: 1px; background: #f1f5f9; margin: 8px 0; }
        .mobile-auth-btn {
          display: block; width: 100%; text-align: center; padding: 11px;
          border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-decoration: none; transition: all 0.2s; border: none; box-sizing: border-box;
        }
        .mobile-auth-btn.dashboard { background: #0d9488; color: white; box-shadow: 0 4px 14px rgba(13,148,136,0.25); }
        .mobile-auth-btn.dashboard:hover { background: #0f766e; }
        .mobile-auth-btn.logout {
          background: #fff; color: #64748b; border: 1.5px solid #e2e8f0; margin-top: 6px;
        }
        .mobile-auth-btn.logout:hover { border-color: #ef4444; color: #ef4444; }

        @media (max-width: 1024px) {
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
            {isAuthenticated && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/admin" className="nav-dashboard-link">Dashboard</Link>
                <button onClick={handleLogout} className="nav-btn-logout">Déconnexion</button>
              </div>
            )}
          </div>

          {/* Burger mobile */}
          <button className="burger-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
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
            {isAuthenticated && (
              <>
                <div className="mobile-divider" />
                <Link to="/admin" onClick={() => setIsMobileOpen(false)} className="mobile-auth-btn dashboard">
                  Tableau de bord
                </Link>
                <button onClick={() => { setIsMobileOpen(false); handleLogout(); }} className="mobile-auth-btn logout">
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