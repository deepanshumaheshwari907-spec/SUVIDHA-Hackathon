export default function ServiceSelection({ onNext, language }) {
  const translations = {
    en: {
      title: '⚡ Electricity Services',
      subtitle: 'Choose a service to continue',
      back: '← Back to Home',
      billPayment: 'Bill Payment',
      billDesc: 'Pay your electricity bill online',
      complaint: 'File Complaint',
      complaintDesc: 'Register a complaint about service',
      connection: 'New Connection',
      connectionDesc: 'Request new electricity connection',
      status: 'Check Status',
      statusDesc: 'Track your request status',
      continue: 'Continue',
      underdevelop: '🔧 This feature is under development!\n\nCurrently available:\n✅ File Complaint\n✅ Check Status'
    },
    hi: {
      title: '⚡ बिजली सेवाएं',
      subtitle: 'जारी रखने के लिए एक सेवा चुनें',
      back: '← घर जाएं',
      billPayment: 'बिल भुगतान',
      billDesc: 'अपने बिजली बिल का ऑनलाइन भुगतान करें',
      complaint: 'शिकायत दर्ज करें',
      complaintDesc: 'सेवा के बारे में शिकायत दर्ज करें',
      connection: 'नया कनेक्शन',
      connectionDesc: 'नया बिजली कनेक्शन का अनुरोध करें',
      status: 'स्थिति जांचें',
      statusDesc: 'अपनी अनुरोध की स्थिति ट्रैक करें',
      continue: 'जारी रखें',
      underdevelop: '🔧 यह सुविधा विकास के अधीन है!\n\nवर्तमान में उपलब्ध:\n✅ शिकायत दर्ज करें\n✅ स्थिति जांचें'
    },
    mr: {
      title: '⚡ विजली सेवा',
      subtitle: 'सेवा निवडा',
      back: '← घरी जा',
      billPayment: 'बिल भरणा',
      billDesc: 'बिजली बिल ऑनलाइन भरा',
      complaint: 'तक्रार करा',
      complaintDesc: 'सेवेबाबत तक्रार दाखल करा',
      connection: 'नवीन जोडणी',
      connectionDesc: 'नवीन विजली जोडणीची विनंती करा',
      status: 'स्थिती तपासा',
      statusDesc: 'तुमच्या विनंतीची स्थिती ट्रॅक करा',
      continue: 'पुढे जा',
      underdevelop: '🔧 ही वैशिष्ट्य विकासाधीन आहे!\n\nवर्तमान:\n✅ तक्रार करा\n✅ स्थिती तपासा'
    }
  };

  const t = translations[language];

  const services = [
    { id: 'bill-payment', emoji: '💵', titleKey: 'billPayment', descKey: 'billDesc' },
    { id: 'complaint', emoji: '⚠️', titleKey: 'complaint', descKey: 'complaintDesc' },
    { id: 'connection', emoji: '🔌', titleKey: 'connection', descKey: 'connectionDesc' },
    { id: 'status', emoji: '✅', titleKey: 'status', descKey: 'statusDesc' },
  ];

  const handleServiceClick = (serviceId) => {
    if (serviceId === 'complaint') onNext('complaint-form');
    else if (serviceId === 'status') onNext('status-tracking');
    else alert(t.underdevelop);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px', marginTop: '30px' }}>
          <h1 style={{ fontSize: '36px', color: '#667eea', fontWeight: '700', marginBottom: '10px' }}>{t.title}</h1>
          <p style={{ color: '#666', fontSize: '16px', marginTop: '10px' }}>{t.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1000px', margin: '0 auto 40px' }}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              style={{
                background: 'white',
                padding: '30px',
                borderRadius: '16px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: 'none',
                textAlign: 'left',
                fontFamily: "'Poppins', sans-serif",
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)'; }}
            >
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50%', opacity: '0.05', pointerEvents: 'none' }} />
              <div style={{ fontSize: '50px', marginBottom: '15px', display: 'inline-block', backgroundColor: '#f0f4f8', padding: '15px', borderRadius: '12px', lineHeight: '1' }}>{service.emoji}</div>
              <h3 style={{ fontSize: '22px', color: '#333', marginBottom: '12px', fontWeight: '600', marginTop: '10px' }}>💳 {t[service.titleKey]}</h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px', lineHeight: '1.5' }}>{t[service.descKey]}</p>
              <div style={{ color: '#667eea', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>Continue <span style={{ fontSize: '16px' }}>→</span></div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: 'transparent',
              color: '#667eea',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '10px 20px',
              textDecoration: 'underline',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => { e.target.style.color = '#764ba2'; }}
            onMouseLeave={(e) => { e.target.style.color = '#667eea'; }}
          >
            {t.back}
          </button>
        </div>
      </div>
    </div>
  );
}