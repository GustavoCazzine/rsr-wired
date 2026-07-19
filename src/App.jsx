import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ServiceDetail } from './pages/ServiceDetail';
import { Portfolio } from './pages/Portfolio';
import { PlayerSearch } from './pages/PlayerSearch';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/catalogo/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/buscar" element={<PlayerSearch />} />
        {/* Sobre mim virou uma seção da Home */}
        <Route path="/sobre" element={<Navigate to="/#sobre-mim" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
