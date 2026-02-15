import { useState } from 'react';

export default function StatusTracking({ language }) {
  const [referenceId, setReferenceId] = useState('');
  const [complaintData, setComplaintData] = useState(null);
  const [searched, setSearched] = useState(false);

  const translations = {
    en: {
      title: 'Check Status',
      subtitle: 'Track your complaint status',
      refLabel: 'Enter Reference ID *',
      refPlaceholder: 'e.g., SUVIDHA-1234567890',
      search: '🔍 Search Status',
      notFound: '❌ No complaint found with this ID',
      details: 'Complaint Details',
      refId: 'Reference ID:',
      name: 'Name:',
      phone: 'Phone:',
      consumer: 'Consumer Number:',
      issueType: 'Issue Type:',
      date: 'Submitted Date:',
      status: 'Current Status:',
      info: 'ℹ️ Your complaint is being reviewed. Expected resolution: 5-7 working days.',
      searchAnother: '🔄 Search Another',
      home: '🏠 Go to Home'
    },
    hi: {
      title: 'स्थिति जांचें',
      subtitle: 'अपनी शिकायत की स्थिति ट्रैक करें',
      refLabel: 'संदर्भ ID दर्ज करें *',
      refPlaceholder: 'उदा., SUVIDHA-1234567890',
      search: '🔍 स्थिति खोजें',
      notFound: '❌ इस ID के साथ कोई शिकायत नहीं मिली',
      details: 'शिकायत विवरण',
      refId: 'संदर्भ ID:',
      name: 'नाम:',
      phone: 'फोन:',
      consumer: 'उपभोक्ता संख्या:',
      issueType: 'समस्या का प्रकार:',
      date: 'दर्ज करने की तारीख:',
      status: 'वर्तमान स्थिति:',
      info: 'ℹ️ आपकी शिकायत की समीक्षा की जा रही है। अपेक्षित समाधान: 5-7 कार्य दिवस।',
      searchAnother: '🔄 दूसरी खोजें',
      home: '🏠 होम पर जाएं'
    },
    mr: {
      title: 'स्थिती तपासा',
      subtitle: 'आपल्या तक्रारीची स्थिती ट्रॅक करा',
      refLabel: 'संदर्भ ID दाखल करा *',
      refPlaceholder: 'उदा., SUVIDHA-1234567890',
      search: '🔍 स्थिती शोधा',
      notFound: '❌ या ID सह कोणतीही तक्रार आढळली नाही',
      details: 'तक्रार तपशील',
      refId: 'संदर्भ ID:',
      name: 'नाव:',
      phone: 'फोन:',
      consumer: 'ग्राहक क्रमांक:',
      issueType: 'समस्येचा प्रकार:',
      date: 'दाखल केलेची तारीख:',
      status: 'वर्तमान स्थिती:',
      info: 'ℹ️ आपल्या तक्रारीची समीक्षा केली जात आहे। अपेक्षित निराकरण: 5-7 कार्य दिवस।',
      searchAnother: '🔄 दुसरा शोधा',
      home: '🏠 होमला जा'
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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#667eea', fontWeight: '700', marginBottom: '10px' }}>📊 {t.title}</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>{t.subtitle}</p>
        </div>

        {!complaintData ? (
          <form onSubmit={handleSearch} style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', padding: '40px' }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.refLabel}</label>
              <input type="text" value={referenceId} onChange={(e) => setReferenceId(e.target.value)} required placeholder={t.refPlaceholder} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Poppins', sans-serif", transition: 'all 0.3s' }} onFocus={(e) => { e.target.style.borderColor = '#667eea'; e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'; }} onBlur={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = 'none'; }} />
            </div>

            <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)'; }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>{t.search}</button>

            {searched && !complaintData && (<div style={{ marginTop: '20px', padding: '15px', background: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '8px', textAlign: 'center' }}><p style={{ color: '#721c24', fontWeight: '600', margin: '0' }}>{t.notFound}</p></div>)}
          </form>
        ) : (
          <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', padding: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#333', marginBottom: '25px' }}>📋 {t.details}</h2>

            <div style={{ background: '#d1ecf1', borderLeft: '4px solid #0c5460', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
              <DetailRow label={t.refId} value={complaintData.referenceId} isMono />
              <DetailRow label={t.name} value={complaintData.name} />
              <DetailRow label={t.phone} value={complaintData.phone} />
              <DetailRow label={t.consumer} value={complaintData.consumerNumber} />
              <DetailRow label={t.issueType} value={complaintData.issueType} />
              <DetailRow label={t.date} value={complaintData.submittedDate} />
              <DetailRow label={t.status} value={complaintData.status} isStatus isLast />
            </div>

            <div style={{ background: '#cfe2ff', border: '1px solid #b6d4fe', borderRadius: '8px', padding: '20px', marginBottom: '25px' }}>
              <p style={{ color: '#084298', fontSize: '13px', lineHeight: '1.6', margin: '0' }}>{t.info}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button onClick={() => { setComplaintData(null); setReferenceId(''); setSearched(false); }} style={{ width: '100%', padding: '12px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}>{t.searchAnother}</button>
              <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>{t.home}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value, isMono, isStatus, isLast }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: isLast ? '0' : '12px', marginBottom: isLast ? '0' : '12px', borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.3)' }}>
      <span style={{ fontWeight: '600', color: '#333', fontSize: '13px' }}>{label}</span>
      <span style={{ color: '#333', fontSize: '13px', fontFamily: isMono ? 'monospace' : 'inherit', fontWeight: isMono ? '600' : 'normal', background: isMono ? '#fff' : 'transparent', padding: isMono ? '4px 8px' : '0', borderRadius: isMono ? '4px' : '0', color: isStatus ? '#ffc107' : '#333', fontWeight: isStatus ? '700' : 'normal' }}>{value}</span>
    </div>
  );
}