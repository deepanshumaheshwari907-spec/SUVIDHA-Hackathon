export default function ConsumerDetails({ onNext, language }) {
  const translations = {
    en: {
      title: 'Your Connection',
      subtitle: 'View your electricity connection details',
      personal: 'PERSONAL DETAILS',
      connection: 'CONNECTION DETAILS',
      billing: 'BILLING DETAILS',
      consumer: 'Consumer Number',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      status: 'Status',
      meter: 'Meter Number',
      connDate: 'Connection Date',
      load: 'Sanctioned Load',
      cycle: 'Billing Cycle',
      lastBill: 'Last Bill Date',
      lastAmount: 'Last Amount',
      outstanding: 'Outstanding',
      active: 'Active',
      payBill: '💳 PAY BILL',
      complaint: '📝 FILE COMPLAINT',
      back: '← BACK'
    },
    hi: {
      title: 'आपका कनेक्शन',
      subtitle: 'अपने विद्युत कनेक्शन विवरण देखें',
      personal: 'व्यक्तिगत विवरण',
      connection: 'कनेक्शन विवरण',
      billing: 'बिलिंग विवरण',
      consumer: 'उपभोक्ता संख्या',
      name: 'नाम',
      phone: 'फोन',
      email: 'ईमेल',
      address: 'पता',
      status: 'स्थिति',
      meter: 'मीटर संख्या',
      connDate: 'कनेक्शन तारीख',
      load: 'स्वीकृत लोड',
      cycle: 'बिलिंग चक्र',
      lastBill: 'पिछली बिल तारीख',
      lastAmount: 'पिछली राशि',
      outstanding: 'बकाया',
      active: 'सक्रिय',
      payBill: '💳 बिल भरें',
      complaint: '📝 शिकायत दर्ज करें',
      back: '← वापस'
    },
    mr: {
      title: 'आपली जोडणी',
      subtitle: 'आपली विद्युत जोडणी माहिती पहा',
      personal: 'व्यक्तिगत तपशील',
      connection: 'जोडणी तपशील',
      billing: 'बिलिंग तपशील',
      consumer: 'ग्राहक क्रमांक',
      name: 'नाव',
      phone: 'फोन',
      email: 'ईमेल',
      address: 'पता',
      status: 'स्थिती',
      meter: 'मीटर क्रमांक',
      connDate: 'जोडणी तारीख',
      load: 'मंजूर भार',
      cycle: 'बिलिंग चक्र',
      lastBill: 'मागील बिल तारीख',
      lastAmount: 'मागील रक्कम',
      outstanding: 'बाकी',
      active: 'सक्रिय',
      payBill: '💳 बिल भरा',
      complaint: '📝 तक्रार करा',
      back: '← मागे'
    }
  };

  const t = translations[language];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '0', fontFamily: "'Inter', sans-serif" }}>
      {/* HEADER */}
      <div style={{ background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 45%, #ffffff 55%, #138808 100%)', padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)', marginBottom: '40px' }}>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
        <div style={{ textAlign: 'center', borderLeft: '3px solid #ff9933', borderRight: '3px solid #138808', paddingLeft: '15px', paddingRight: '15px' }}>
          <p style={{ margin: '0', fontSize: '16px', fontWeight: '800', color: '#1e3a5f' }}>SUVIDHA+</p>
          <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#666' }}>Government of India</p>
        </div>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#1e3a5f', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span>⚡</span>
            {t.title}
          </h1>
          <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>{t.subtitle}</p>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' }}>
          
          {/* STATUS CARD */}
          <div style={{ background: '#d4edda', border: '2px solid #28a745', padding: '20px', textAlign: 'center' }}>
            <p style={{ margin: '0', fontSize: '12px', color: '#155724', fontWeight: '600' }}>{t.status}</p>
            <p style={{ margin: '6px 0 0 0', fontSize: '20px', fontWeight: '800', color: '#28a745' }}>✅ {t.active}</p>
          </div>

          {/* CONTENT */}
          <div style={{ padding: '30px' }}>
            
            {/* PERSONAL */}
            <Section title={t.personal} items={[
              { label: t.consumer, value: '1234567890' },
              { label: t.name, value: 'Rajesh Kumar' },
              { label: t.phone, value: '9876543210' },
              { label: t.email, value: 'rajesh@email.com' },
              { label: t.address, value: '123 Main Street, Indore' }
            ]} />

            {/* CONNECTION */}
            <Section title={t.connection} items={[
              { label: t.meter, value: 'MH-123456' },
              { label: t.connDate, value: '15 Jan 2020' },
              { label: t.load, value: '2 kW' }
            ]} />

            {/* BILLING */}
            <Section title={t.billing} items={[
              { label: t.cycle, value: 'January' },
              { label: t.lastBill, value: '31 Jan 2026' },
              { label: t.lastAmount, value: '₹2,100' },
              { label: t.outstanding, value: '₹0' }
            ]} />

            {/* BUTTONS */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '25px' }}>
              <button onClick={() => window.location.reload()} style={{ flex: 1, padding: '14px', background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.payBill}</button>
              <button onClick={() => window.location.reload()} style={{ flex: 1, padding: '14px', background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.complaint}</button>
            </div>
            <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#1e3a5f', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', marginTop: '12px', textTransform: 'uppercase' }}>{t.back}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div style={{ marginBottom: '25px' }}>
      <h3 style={{ fontSize: '12px', fontWeight: '800', color: '#1e3a5f', marginBottom: '12px', paddingBottom: '10px', borderBottom: '2px solid #e0e0e0', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 15px 0' }}>{title}</h3>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', marginBottom: '10px', borderBottom: i === items.length - 1 ? 'none' : '1px solid #eee' }}>
          <span style={{ fontSize: '12px', color: '#666', fontWeight: '500' }}>{item.label}:</span>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}