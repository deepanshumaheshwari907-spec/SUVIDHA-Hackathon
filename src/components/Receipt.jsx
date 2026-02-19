import { useState } from 'react';

export default function Receipt({ referenceId, onNext, language }) {
  const [complaintData] = useState(() => {
    const data = localStorage.getItem(referenceId);
    return data ? JSON.parse(data) : null;
  });

  const translations = {
    en: {
      title: 'Receipt Generated',
      receiptDetails: 'COMPLAINT RECEIPT',
      refId: 'Reference ID',
      name: 'Name',
      phone: 'Phone',
      consumer: 'Consumer Number',
      issueType: 'Issue Type',
      date: 'Submitted Date',
      status: 'Status',
      description: 'Description',
      email: '✓ Email Confirmation Sent',
      sms: '✓ SMS Updates Enabled',
      track: '✓ Track Your Complaint',
      download: '📥 DOWNLOAD RECEIPT',
      home: '🏠 GO TO HOME',
      newComplaint: '🔄 FILE NEW COMPLAINT'
    },
    hi: {
      title: 'रसीद तैयार',
      receiptDetails: 'शिकायत रसीद',
      refId: 'संदर्भ ID',
      name: 'नाम',
      phone: 'फोन',
      consumer: 'उपभोक्ता संख्या',
      issueType: 'समस्या प्रकार',
      date: 'दर्ज तारीख',
      status: 'स्थिति',
      description: 'विवरण',
      email: '✓ ईमेल पुष्टि भेजी गई',
      sms: '✓ SMS अपडेट सक्षम',
      track: '✓ अपनी शिकायत ट्रैक करें',
      download: '📥 रसीद डाउनलोड करें',
      home: '🏠 होम जाएं',
      newComplaint: '🔄 नई शिकायत दर्ज करें'
    },
    mr: {
      title: 'पावती तैयार',
      receiptDetails: 'तक्रार पावती',
      refId: 'संदर्भ ID',
      name: 'नाव',
      phone: 'फोन',
      consumer: 'ग्राहक क्रमांक',
      issueType: 'समस्या प्रकार',
      date: 'दाखल केलेची तारीख',
      status: 'स्थिती',
      description: 'विवरण',
      email: '✓ ईमेल पुष्टी पाठवली',
      sms: '✓ SMS अपडेट्स सक्षम',
      track: '✓ आपली तक्रार ट्रॅक करा',
      download: '📥 पावती डाउनलोड करा',
      home: '🏠 होमला जा',
      newComplaint: '🔄 नवीन तक्रार दाखल करा'
    }
  };

  const t = translations[language];

  const handleDownload = () => {
    if (!complaintData) return;
    const content = `
╔════════════════════════════════════════════════════════════╗
║          SUVIDHA+ - COMPLAINT RECEIPT                      ║
║   Smart Urban Civic Services - Government of India         ║
╚════════════════════════════════════════════════════════════╝

Reference ID: ${complaintData.referenceId}
Submitted Date: ${complaintData.submittedDate}

COMPLAINANT DETAILS:
Name: ${complaintData.name}
Phone: ${complaintData.phone}
Consumer: ${complaintData.consumerNumber}

COMPLAINT DETAILS:
Issue Type: ${complaintData.issueType}
Status: ${complaintData.status}

Description:
${complaintData.description}

════════════════════════════════════════════════════════════
Government of India - Ministry of Electronics & IT
SUVIDHA 2026 Initiative
    `;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `SUVIDHA-${referenceId}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!complaintData) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>❌</div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#dc3545' }}>Error!</h2>
          <p style={{ color: '#666' }}>Data not found</p>
        </div>
      </div>
    );
  }

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

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        
        {/* SUCCESS ANIMATION */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px', animation: 'celebrate 0.6s ease-out' }}>✅</div>
          <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#28a745', marginBottom: '8px' }}>{t.title}</h1>
          <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>Your complaint has been registered successfully</p>
        </div>

        {/* RECEIPT CARD */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
          border: '3px solid #28a745'
        }}>
          
          {/* RECEIPT HEADER */}
          <div style={{
            background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)',
            color: 'white',
            padding: '20px',
            textAlign: 'center'
          }}>
            <p style={{ margin: '0', fontSize: '16px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.receiptDetails}</p>
          </div>

          {/* RECEIPT CONTENT */}
          <div style={{ padding: '30px' }}>
            
            {/* REFERENCE ID - HIGHLIGHT */}
            <div style={{
              background: '#fff3cd',
              border: '2px solid #ffc107',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#856404', fontWeight: '600' }}>{t.refId}</p>
              <p style={{ margin: '0', fontSize: '24px', fontWeight: '800', color: '#1e3a5f', fontFamily: 'monospace', letterSpacing: '2px' }}>{complaintData.referenceId}</p>
            </div>

            {/* DETAILS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
              <DetailBox label={t.name} value={complaintData.name} />
              <DetailBox label={t.phone} value={complaintData.phone} />
              <DetailBox label={t.consumer} value={complaintData.consumerNumber} />
              <DetailBox label={t.date} value={complaintData.submittedDate} />
              <DetailBox label={t.issueType} value={complaintData.issueType} />
              <DetailBox label={t.status} value={complaintData.status} highlight />
            </div>

            {/* DESCRIPTION */}
            <div style={{
              background: '#f8f9fa',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '25px'
            }}>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', margin: '0 0 8px 0' }}>{t.description}</p>
              <p style={{ fontSize: '13px', color: '#333', margin: '0', lineHeight: '1.6' }}>{complaintData.description}</p>
            </div>

            {/* INFO MESSAGES */}
            <div style={{ background: '#d1ecf1', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
              <p style={{ margin: '6px 0', fontSize: '12px', color: '#0c5460', fontWeight: '600' }}>{t.email}</p>
              <p style={{ margin: '6px 0', fontSize: '12px', color: '#0c5460', fontWeight: '600' }}>{t.sms}</p>
              <p style={{ margin: '6px 0', fontSize: '12px', color: '#0c5460', fontWeight: '600' }}>{t.track}</p>
            </div>

            {/* BUTTONS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                onClick={handleDownload}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(90deg, #28a745 0%, #20c997 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {t.download}
              </button>
              <button
                onClick={() => window.location.reload()}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'linear-gradient(90deg, #1e3a5f 0%, #2d5a8c 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                {t.home}
              </button>
              <button
                onClick={() => { localStorage.clear(); window.location.reload(); }}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'transparent',
                  color: '#1e3a5f',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => e.target.style.background = '#f0f4f8'}
                onMouseLeave={(e) => e.target.style.background = 'transparent'}
              >
                {t.newComplaint}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes celebrate {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function DetailBox({ label, value, highlight }) {
  return (
    <div style={{
      background: highlight ? '#d1ecf1' : '#f8f9fa',
      padding: '15px',
      borderRadius: '8px'
    }}>
      <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', margin: '0 0 6px 0' }}>{label}</p>
      <p style={{ fontSize: '13px', fontWeight: '700', color: highlight ? '#0c5460' : '#1e3a5f', margin: '0' }}>{value}</p>
    </div>
  );
}
