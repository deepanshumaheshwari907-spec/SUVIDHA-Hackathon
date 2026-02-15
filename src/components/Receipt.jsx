import { useState } from 'react';

export default function Receipt({ referenceId, onNext, language }) {
  const [complaintData] = useState(() => {
    const data = localStorage.getItem(referenceId);
    return data ? JSON.parse(data) : null;
  });

  const translations = {
    en: {
      title: 'Complaint Submitted Successfully!',
      subtitle: 'Your reference ID has been generated',
      receiptDetails: 'Receipt Details',
      refId: 'Reference ID:',
      name: 'Name:',
      phone: 'Phone:',
      consumer: 'Consumer Number:',
      issueType: 'Issue Type:',
      date: 'Submitted Date:',
      status: 'Status:',
      description: 'Problem Description:',
      email: '📧 Email Confirmation:',
      emailText: 'A confirmation email has been sent to your registered email address.',
      sms: '📱 SMS Updates:',
      smsText: 'You will receive status updates via SMS.',
      track: '🔍 Track Anytime:',
      trackText: 'Use your Reference ID to check status anytime.',
      download: '📥 Download Receipt',
      home: '🏠 Go to Home',
      newComplaint: '🔄 Start New Complaint',
      error: 'Error!',
      errorMsg: 'Complaint data not found'
    },
    hi: {
      title: 'शिकायत सफलतापूर्वक दर्ज की गई!',
      subtitle: 'आपका संदर्भ ID तैयार किया जा चुका है',
      receiptDetails: 'रसीद विवरण',
      refId: 'संदर्भ ID:',
      name: 'नाम:',
      phone: 'फोन:',
      consumer: 'उपभोक्ता संख्या:',
      issueType: 'समस्या का प्रकार:',
      date: 'दर्ज करने की तारीख:',
      status: 'स्थिति:',
      description: 'समस्या का विवरण:',
      email: '📧 ईमेल पुष्टि:',
      emailText: 'आपके पंजीकृत ईमेल पते पर एक पुष्टि ईमेल भेजा गया है।',
      sms: '📱 SMS अपडेट:',
      smsText: 'आपको SMS के माध्यम से स्थिति अपडेट प्राप्त होंगे।',
      track: '🔍 कभी भी ट्रैक करें:',
      trackText: 'अपने संदर्भ ID का उपयोग करके कभी भी स्थिति जांचें।',
      download: '📥 रसीद डाउनलोड करें',
      home: '🏠 होम पर जाएं',
      newComplaint: '🔄 नई शिकायत शुरू करें',
      error: 'त्रुटि!',
      errorMsg: 'शिकायत डेटा नहीं मिला'
    },
    mr: {
      title: 'तक्रार यशस्वीरित्या दाखल केली गई!',
      subtitle: 'आपला संदर्भ ID तयार केला गेला आहे',
      receiptDetails: 'पावती तपशील',
      refId: 'संदर्भ ID:',
      name: 'नाव:',
      phone: 'फोन:',
      consumer: 'ग्राहक क्रमांक:',
      issueType: 'समस्येचा प्रकार:',
      date: 'दाखल केलेची तारीख:',
      status: 'स्थिती:',
      description: 'समस्येचे वर्णन:',
      email: '📧 ईमेल पुष्टी:',
      emailText: 'आपल्या नोंदणीकृत ईमेल पत्त्यावर पुष्टी ईमेल पाठवली गेली आहे।',
      sms: '📱 SMS अपडेट्स:',
      smsText: 'आपल्याला SMS द्वारे स्थिती अपडेट्स प्राप्त होतील।',
      track: '🔍 कधीही ट्रॅक करा:',
      trackText: 'आपला संदर्भ ID वापरून कधीही स्थिती तपासा।',
      download: '📥 पावती डाउनलोड करा',
      home: '🏠 होमला जा',
      newComplaint: '🔄 नवीन तक्रार सुरू करा',
      error: 'त्रुटी!',
      errorMsg: 'तक्रार डेटा आढळला नाही'
    }
  };

  const t = translations[language];

  const handleDownload = () => {
    if (!complaintData) return;
    const content = `
╔════════════════════════════════════════════════════════════╗
║          SUVIDHA+ - COMPLAINT RECEIPT                      ║
╚════════════════════════════════════════════════════════════╝

Reference ID: ${complaintData.referenceId}
Date: ${complaintData.submittedDate}
Name: ${complaintData.name}
Phone: ${complaintData.phone}
Consumer: ${complaintData.consumerNumber}
Issue: ${complaintData.issueType}
Status: ${complaintData.status}

${complaintData.description}

════════════════════════════════════════════════════════════
Government of India - Ministry of Electronics & IT
    `;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', `receipt-${referenceId}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!complaintData) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins', sans-serif" }}>
        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', padding: '40px', maxWidth: '400px', textAlign: 'center' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>❌</div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#dc3545', marginBottom: '15px' }}>{t.error}</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>{t.errorMsg}</p>
          <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '12px', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>{t.home}</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '30px' }}>
          <div style={{ fontSize: '80px', marginBottom: '15px' }}>✅</div>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#28a745', marginBottom: '10px' }}>{t.title}</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>{t.subtitle}</p>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', padding: '35px', marginBottom: '25px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#333', marginBottom: '25px' }}>📋 {t.receiptDetails}</h2>

          <div style={{ background: '#d4edda', borderLeft: '4px solid #28a745', padding: '25px', borderRadius: '8px', marginBottom: '25px' }}>
            <DetailRow label={t.refId} value={complaintData.referenceId} isMono />
            <DetailRow label={t.name} value={complaintData.name} />
            <DetailRow label={t.phone} value={complaintData.phone} />
            <DetailRow label={t.consumer} value={complaintData.consumerNumber} />
            <DetailRow label={t.issueType} value={complaintData.issueType} />
            <DetailRow label={t.date} value={complaintData.submittedDate} />
            <DetailRow label={t.status} value={complaintData.status} isStatus isLast />
          </div>

          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
            <h3 style={{ fontWeight: '600', color: '#333', marginBottom: '12px', fontSize: '14px' }}>{t.description}</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{complaintData.description}</p>
          </div>

          <div style={{ background: '#cfe2ff', border: '1px solid #b6d4fe', borderRadius: '8px', padding: '20px', marginBottom: '25px' }}>
            <p style={{ color: '#084298', fontSize: '13px', lineHeight: '1.6', margin: '0 0 10px 0' }}><strong>{t.email}</strong> {t.emailText}</p>
            <p style={{ color: '#084298', fontSize: '13px', lineHeight: '1.6', margin: '0 0 10px 0' }}><strong>{t.sms}</strong> {t.smsText}</p>
            <p style={{ color: '#084298', fontSize: '13px', lineHeight: '1.6', margin: '0' }}><strong>{t.track}</strong> {t.trackText}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button onClick={handleDownload} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 25px rgba(40, 167, 69, 0.3)'; }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>{t.download}</button>
            <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)'; }} onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>{t.home}</button>
            <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={{ width: '100%', padding: '14px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>{t.newComplaint}</button>
          </div>
        </div>

        <div style={{ textAlign: 'center', color: '#666', fontSize: '12px' }}>
          <p>Thank you for using SUVIDHA+</p>
          <p style={{ marginTop: '5px', color: '#999' }}>Smart Urban Civic Services</p>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, isMono, isStatus, isLast }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: isLast ? '0' : '12px', marginBottom: isLast ? '0' : '12px', borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.3)', alignItems: 'center' }}>
      <span style={{ fontWeight: '600', color: '#333', fontSize: '13px' }}>{label}</span>
      <span style={{ color: '#333', fontSize: '13px', fontFamily: isMono ? 'monospace' : 'inherit', fontWeight: isMono ? '600' : 'normal', background: isMono ? '#fff' : 'transparent', padding: isMono ? '4px 8px' : '0', borderRadius: isMono ? '4px' : '0', color: isStatus ? '#ffc107' : '#333', fontWeight: isStatus ? '700' : 'normal' }}>{value}</span>
    </div>
  );
}