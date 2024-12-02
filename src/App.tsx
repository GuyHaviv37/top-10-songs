import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { YearPage } from './pages/YearPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/year/:year" element={<YearPage />} />
      </Routes>
    </Router>
  );
}

export default App;