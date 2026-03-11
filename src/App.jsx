import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Layout from './Pages/Layout';
import AdminLayout from './components/Admin/AdminLayout.jsx';

// Pages publiques
import Hero from './components/Accueil/Hero';
import About from './components/Accueil/About';
import Experience from './components/Accueil/Experience';
import Projects from './components/Accueil/Projects';
import Skills from './components/Accueil/Skills';
import Certificates from './components/Accueil/Certificates';
import ContactForm from './components/Formulaire/FormulaireG6';

// Admin
import AdminDashboard from './components/Admin/Dashboard';
import AdminUsers from './components/Admin/Users';
import AdminAnalytics from './components/Admin/Statistics';
import AdminSettings from './components/Admin/Settings';
import AdminFormSubmissions from './components/Admin/AdminFormSubmissions.jsx';

// Auth
import ProtectedRoute from './components/Admin/ProtectedRoute';
import Logout from './components/Auth/Logout.jsx';
import Login from './components/Auth/Login.jsx';

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 72, fontWeight: 800, color: '#0f172a', margin: 0 }}>404</h1>
        <p style={{ fontSize: 18, color: '#64748b', margin: '12px 0 32px' }}>Page non trouvée</p>
        <a href="/" style={{ background: '#0d9488', color: 'white', padding: '12px 28px', borderRadius: 10, textDecoration: 'none', fontWeight: 600 }}>
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

function App() {
  const token = localStorage.getItem('authToken');
  const isAuthenticated = Boolean(token);

  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="login" element={isAuthenticated ? <Navigate to="/admin" replace /> : <Login />} />
      </Route>

      {/* Routes admin */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAllowed={isAuthenticated} redirectPath="/login">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="forms" element={<AdminFormSubmissions />} />
      </Route>

      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;