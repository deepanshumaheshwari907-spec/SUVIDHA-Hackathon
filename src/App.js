import { useState } from 'react';
import Home from './components/Home';
import ServiceSelection from './components/ServiceSelection';
import ComplaintForm from './components/ComplaintForm';
import StatusTracking from './components/StatusTracking';
import Receipt from './components/Receipt';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [referenceId, setReferenceId] = useState('');

  const handleNext = (page, id = '') => {
    setCurrentPage(page);
    if (id) setReferenceId(id);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home onNext={handleNext} />}
      {currentPage === 'services' && <ServiceSelection onNext={handleNext} />}
      {currentPage === 'complaint-form' && <ComplaintForm onNext={handleNext} />}
      {currentPage === 'status-tracking' && <StatusTracking />}
      {currentPage === 'receipt' && <Receipt referenceId={referenceId} onNext={handleNext} />}
    </div>
  );
}

export default App;