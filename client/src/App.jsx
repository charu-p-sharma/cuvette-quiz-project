import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AuthForm from './components/AuthForm'; // Import your AuthForm component
import Dashboard from './components/Dashboard'; // Import your Dashboard component
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
