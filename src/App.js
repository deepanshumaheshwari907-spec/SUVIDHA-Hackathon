import { useState } from 'react';
import Home from './components/Home';
import ServiceSelection from './components/ServiceSelection';
import ComplaintForm from './components/ComplaintForm';
import StatusTracking from './components/StatusTracking';
import Receipt from './components/Receipt';
import BillPayment from './components/BillPayment';
import ConsumerDetails from './components/ConsumerDetails';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [referenceId, setReferenceId] = useState('');
  const [language, setLanguage] = useState('en');

  const handleNext = (page, id = '') => {
    setCurrentPage(page);
    if (id) setReferenceId(id);
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <Home onNext={handleNext} language={language} setLanguage={setLanguage} />
      )}
      {currentPage === 'services' && (
        <ServiceSelection onNext={handleNext} language={language} />
      )}
      {currentPage === 'complaint-form' && (
        <ComplaintForm onNext={handleNext} language={language} />
      )}
      {currentPage === 'status-tracking' && (
        <StatusTracking language={language} />
      )}
      {currentPage === 'receipt' && (
        <Receipt referenceId={referenceId} onNext={handleNext} language={language} />
      )}
      {currentPage === 'bill-payment' && (
        <BillPayment onNext={handleNext} language={language} />
        )}
      {currentPage === 'consumer-details' && (
        <ConsumerDetails onNext={handleNext} language={language} />
        )}
      </div>
  );
}

export default App;