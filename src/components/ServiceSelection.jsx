export default function ServiceSelection({ onNext, language }) {
  const translations = {
    en: {
      title: 'Electricity Services',
      subtitle: 'Choose a service to continue',
      back: '← Back to Home',
      billPayment: 'Bill Payment',
      billDesc: 'Pay your electricity bill online',
      complaint: 'File Complaint',
      complaintDesc: 'Register a complaint about service',
      connection: 'Connection Details',
      connectionDesc: 'View your connection details',
      status: 'Check Status',
      statusDesc: 'Track your request status',
      continue: 'Continue'
    },
    hi: {
      title: 'बिजली सेवाएं',
      subtitle: 'जारी रखने के लिए एक सेवा चुनें',
      back: '← घर जाएं',
      billPayment: 'बिल भुगतान',
      billDesc: 'अपने बिजली बिल का ऑनलाइन भुगतान करें',
      complaint: 'शिकायत दर्ज करें',
      complaintDesc: 'सेवा के बारे में शिकायत दर्ज करें',
      connection: 'कनेक्शन विवरण',
      connectionDesc: 'अपने कनेक्शन विवरण देखें',
      status: 'स्थिति जांचें',
      statusDesc: 'अपनी अनुरोध की स्थिति ट्रैक करें',
      continue: 'जारी रखें'
    },
    mr: {
      title: 'विजली सेवा',
      subtitle: 'सेवा निवडा',
      back: '← घरी जा',
      billPayment: 'बिल भरणा',
      billDesc: 'बिजली बिल ऑनलाइन भरा',
      complaint: 'तक्रार करा',
      complaintDesc: 'सेवेबाबत तक्रार दाखल करा',
      connection: 'जोडणी तपशील',
      connectionDesc: 'आपल्या जोडणीचे तपशील पहा',
      status: 'स्थिती तपासा',
      statusDesc: 'तुमच्या विनंतीची स्थिती ट्रॅक करा',
      continue: 'पुढे जा'
    }
  };

  const t = translations[language];

  const services = [
    { id: 'bill-payment', emoji: '💳', titleKey: 'billPayment', descKey: 'billDesc', icon: '💰' },
    { id: 'complaint', emoji: '⚠️', titleKey: 'complaint', descKey: 'complaintDesc', icon: '📝' },
    { id: 'connection', emoji: '🔌', titleKey: 'connection', descKey: 'connectionDesc', icon: '⚡' },
    { id: 'status', emoji: '✅', titleKey: 'status', descKey: 'statusDesc', icon: '📊' },
  ];

  const handleServiceClick = (serviceId) => {
    if (serviceId === 'complaint') onNext('complaint-form');
    else if (serviceId === 'status') onNext('status-tracking');
    else if (serviceId === 'bill-payment') onNext('bill-payment');
    else if (serviceId === 'connection') onNext('consumer-details');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '20px', fontFamily: "'Inter', sans-serif" }}>
      {/* HEADER - GOVERNMENT OFFICIAL */}
      <div style={{
        width: 'calc(100% + 40px)',
        marginLeft: '-20px',
        background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 45%, #ffffff 55%, #138808 100%)',
        padding: '14px 0',
        marginBottom: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ fontSize: '36px' }}>🇮🇳</div>
        <div style={{ textAlign: 'center', borderLeft: '2px solid #ff9933', borderRight: '2px solid #138808', paddingLeft: '15px', paddingRight: '15px' }}>
          <p style={{ margin: '0', fontSize: '14px', fontWeight: '700', color: '#1e3a5f' }}>SUVIDHA+</p>
          <p style={{ margin: '2px 0 0 0', fontSize: '10px', color: '#666' }}>Government of India</p>
        </div>
        <div style={{ fontSize: '36px' }}>🇮🇳</div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* TITLE SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{
            fontSize: '40px',
            color: '#1e3a5f',
            fontWeight: '800',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px'
          }}>
            <span>⚡</span>
            {t.title}
          </h1>
          <p style={{ color: '#666', fontSize: '16px', margin: '0' }}>{t.subtitle}</p>
        </div>

        {/* SERVICE CARDS GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          maxWidth: '1100px',
          margin: '0 auto 40px',
          marginBottom: '50px'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: 'white',
              padding: '35px 25px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '2px solid transparent',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(30, 58, 95, 0.15)';
              e.currentTarget.style.borderColor = '#ff9933';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
            onClick={() => handleServiceClick(service.id)}>

              {/* ICON BACKGROUND */}
              <div style={{
                fontSize: '60px',
                marginBottom: '20px',
                background: '#f0f4f8',
                width: '90px',
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}>
                {service.emoji}
              </div>

              {/* SERVICE TITLE */}
              <h3 style={{
                fontSize: '20px',
                color: '#1e3a5f',
                marginBottom: '10px',
                fontWeight: '700',
                marginTop: '0'
              }}>
                {t[service.titleKey]}
              </h3>

              {/* SERVICE DESCRIPTION */}
              <p style={{
                color: '#666',
                fontSize: '14px',
                marginBottom: '20px',
                lineHeight: '1.6',
                margin: '0 0 20px 0'
              }}>
                {t[service.descKey]}
              </p>

              {/* CONTINUE BUTTON */}
              <button style={{
                background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}>
                {t.continue} →
              </button>
            </div>
          ))}
        </div>

        {/* BACK BUTTON */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={() => window.location.reload()} style={{
            background: 'transparent',
            color: '#1e3a5f',
            border: '2px solid #1e3a5f',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '12px 30px',
            borderRadius: '6px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#f0f4f8';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.transform = 'translateY(0)';
          }}>
            {t.back}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}