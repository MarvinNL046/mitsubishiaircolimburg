import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ServiceAreaPage from './pages/service-area';
import CityPage from './pages/city';
import TotSnel from './pages/tot-snel';
import ContactWebhookTest from './pages/contact-webhook-test';
import ContactTest from './pages/contact-test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/werkgebied" element={<ServiceAreaPage />} />
      <Route path="/werkgebied/:city" element={<CityPage />} />
      <Route path="/tot-snel" element={<TotSnel />} />
      <Route path="/contact-webhook-test" element={<ContactWebhookTest />} />
      <Route path="/contact-test" element={<ContactTest />} />
    </Routes>
  );
}

export default App;