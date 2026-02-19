import { useState } from 'react';

export default function StatusTracking({ language }) {
  const [referenceId, setReferenceId] = useState('');
  const [complaintData, setComplaintData] = useState(null);
  const [searched, setSearched] = useState(false);

  const translations = {
    en: {
      title: 'Track Complaint',
      subtitle: 'Enter your reference ID to check status',
      refLabel: 'Reference ID',
      refPlaceholder: 'e.g., SUVIDHA-1234567890',
      search: '🔍 SEARCH',
      notFound: '❌ Complaint not found',
      details: 'COMPLAINT DETAILS',
      refId: 'Reference ID',
      name: 'Name',
      phone: 'Phone',
      consumer: 'Consumer',
      issue: 'Issue',
      date: 'Submitted',
      status: 'Status',
      info: 'Your complaint is being reviewed. Expected resolution: 5-7 days',
      searchAnother: '🔄 SEARCH AGAIN',
      home: '🏠 HOME'
    },
    hi: {
      title: 'शिकायत ट्रैक करें',
      subtitle: 'अपना संदर्भ ID दर्ज करें',
      refLabel: 'संदर्भ ID',
      refPlaceholder: 'उदा., SUVIDHA-1234567890',
      search: '🔍 खोजें',
      notFound: '❌ शिकायत नहीं मिली',
      details: 'शिकायत विवरण',
      refId: 'संदर्भ ID',
      name: 'नाम',
      phone: 'फोन',
      consumer: 'उपभोक्ता',
      issue: 'समस्या',
      date: 'दर्ज तारीख',
      status: 'स्थिति',
      info: 'आपकी शिकायत की समीक्षा की जा रही है। अपेक्षित समाधान: 5-7 दिन',
      searchAnother: '🔄 फिर खोजें',
      home: '🏠 होम'
    },
    mr: {
      title: 'तक्रार ट्रॅक करा',
      subtitle: 'आपला संदर्भ ID दाखल करा',
      refLabel: 'संदर्भ ID',
      refPlaceholder: 'उदा., SUVIDHA-1234567890',
      search: '🔍 शोधा',
      notFound: '❌ तक्रार आढळली नाही',
      details: 'तक्रार तपशील',
      refId: 'संदर्भ ID',
      name: 'नाव',
      phone: 'फोन',
      consumer: 'ग्राहक',
      issue: 'समस्या',
      date: 'दाखल केलेची',
      status: 'स्थिती',
      info: 'आपल्या तक्रारीची समीक्षा केली जात आहे। अपेक्षित निराकरण: 5-7 दिवस',
      searchAnother: '🔄 पुन्हा शोधा',
      home: '🏠 होम'
    }
  };

  const t = translations[language];

  const handleSearch = (e) => {
    e.preventDefault();
    const data = localStorage.getItem(referenceId);
    if (data) setComplaintData(JSON.parse(data));
    setSearched(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '0', fontFamily: "'Inter', sans-serif" }}>
      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 45%, #ffffff 55%, #138808 100%)',
        padding: '16px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
        marginBottom: '40px'
      }}>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
        <div style={{ textAlign: 'center', borderLeft: '3px solid #ff9933', borderRight: '3px solid #138808', paddingLeft: '15px', paddingRight: '15px' }}>
          <p style={{ margin: '0', fontSize: '16px', fontWeight: '800', color: '#1e3a5f' }}>SUVIDHA+</p>
          <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#666' }}>Government of India</p>
        </div>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#1e3a5f', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span>📊</span>
            {t.title}
          </h1>
          <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>{t.subtitle}</p>
        </div>

        {!complaintData ? (
          <form onSubmit={handleSearch} style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)', border: '2px solid #e8eef7' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#1e3a5f', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.refLabel}</label>
            <input
              type="text"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
              required
              placeholder={t.refPlaceholder}
              style={{ width: '100%', padding: '13px 15px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif", marginBottom: '20px', boxSizing: 'border-box' }}
              onFocus={(e) => { e.target.style.borderColor = '#ff9933'; e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)'; }}
              onBlur={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = 'none'; }}
            />
            <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.search}</button>
            {searched && !complaintData && (<div style={{ marginTop: '20px', padding: '15px', background: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '8px', textAlign: 'center', color: '#721c24', fontWeight: '600' }}>{t.notFound}</div>)}
          </form>
        ) : (
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)', border: '2px solid #d1ecf1' }}>
            <div style={{ background: '#d1ecf1', padding: '15px', textAlign: 'center' }}>
              <p style={{ margin: '0', fontSize: '14px', fontWeight: '800', color: '#0c5460', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.details}</p>
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', color: '#856404', fontWeight: '600', margin: '0 0 6px 0' }}>{t.refId}</p>
                <p style={{ fontSize: '20px', fontWeight: '800', color: '#1e3a5f', margin: '0', fontFamily: 'monospace' }}>{complaintData.referenceId}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <DetailBox label={t.name} value={complaintData.name} />
                <DetailBox label={t.phone} value={complaintData.phone} />
                <DetailBox label={t.consumer} value={complaintData.consumerNumber} />
                <DetailBox label={t.date} value={complaintData.submittedDate} />
              </div>
              <DetailBox label={t.issue} value={complaintData.issueType} />
              <DetailBox label={t.status} value={complaintData.status} highlight />
              <div style={{ background: '#d1ecf1', padding: '15px', borderRadius: '8px', marginTop: '20px', marginBottom: '20px', fontSize: '12px', color: '#0c5460', fontWeight: '600' }}>ℹ️ {t.info}</div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => { setComplaintData(null); setReferenceId(''); setSearched(false); }} style={{ flex: 1, padding: '12px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.searchAnother}</button>
                <button onClick={() => window.location.reload()} style={{ flex: 1, padding: '12px', background: '#1e3a5f', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.home}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailBox({ label, value, highlight }) {
  return (
    <div style={{ background: highlight ? '#d1ecf1' : '#f8f9fa', padding: '12px', borderRadius: '8px', marginBottom: '12px' }}>
      <p style={{ fontSize: '11px', color: '#666', fontWeight: '600', margin: '0 0 4px 0' }}>{label}</p>
      <p style={{ fontSize: '13px', fontWeight: '700', color: highlight ? '#0c5460' : '#1e3a5f', margin: '0' }}>{value}</p>
    </div>
  );
}