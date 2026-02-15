import { useState } from 'react';

export default function ComplaintForm({ onNext, language }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consumerNumber: '',
    issueType: 'billing-issue',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const translations = {
    en: {
      title: 'File Complaint',
      subtitle: 'Tell us about your issue',
      fullName: 'Full Name *',
      fullNamePlaceholder: 'Enter your name',
      phone: 'Mobile Number *',
      phonePlaceholder: '10 digit mobile number',
      consumer: 'Consumer Number *',
      consumerPlaceholder: 'e.g., 123456789',
      issueType: 'Issue Type *',
      description: 'Describe the Issue *',
      descPlaceholder: 'Please provide detailed information...',
      submit: '🚀 Submit Complaint',
      back: '← Back',
      success: 'Complaint Submitted!',
      redirecting: 'Redirecting to receipt...'
    },
    hi: {
      title: 'शिकायत दर्ज करें',
      subtitle: 'अपने मुद्दे के बारे में बताएं',
      fullName: 'पूरा नाम *',
      fullNamePlaceholder: 'अपना नाम दर्ज करें',
      phone: 'मोबाइल नंबर *',
      phonePlaceholder: '10 अंकों का मोबाइल नंबर',
      consumer: 'उपभोक्ता संख्या *',
      consumerPlaceholder: 'उदा., 123456789',
      issueType: 'समस्या का प्रकार *',
      description: 'समस्या का विवरण *',
      descPlaceholder: 'कृपया विस्तृत जानकारी प्रदान करें...',
      submit: '🚀 शिकायत दर्ज करें',
      back: '← वापस',
      success: 'शिकायत दर्ज की गई!',
      redirecting: 'रसीद पर रीडायरेक्ट हो रहा है...'
    },
    mr: {
      title: 'तक्रार करा',
      subtitle: 'तुमच्या समस्येबद्दल सांगा',
      fullName: 'पूर्ण नाव *',
      fullNamePlaceholder: 'आपले नाव दाखल करा',
      phone: 'मोबाइल क्रमांक *',
      phonePlaceholder: '10 अंकांचा मोबाइल क्रमांक',
      consumer: 'ग्राहक क्रमांक *',
      consumerPlaceholder: 'उदा., 123456789',
      issueType: 'समस्येचा प्रकार *',
      description: 'समस्येचे वर्णन *',
      descPlaceholder: 'कृपया तपशीलवार माहिती द्या...',
      submit: '🚀 तक्रार करा',
      back: '← मागे',
      success: 'तक्रार दाखल केली गई!',
      redirecting: 'पावती पृष्ठावर रीडायरेक्ट करीत आहे...'
    }
  };

  const issueTypes = [
    { value: 'billing-issue', en: 'Billing Issue', hi: 'बिलिंग समस्या', mr: 'बिलिंग समस्या' },
    { value: 'connection-problem', en: 'Connection Problem', hi: 'कनेक्शन समस्या', mr: 'जोडणी समस्या' },
    { value: 'meter-issue', en: 'Meter Issue', hi: 'मीटर समस्या', mr: 'मीटर समस्या' },
    { value: 'voltage-issue', en: 'Voltage Issue', hi: 'वोल्टेज समस्या', mr: 'व्होल्टेज समस्या' },
    { value: 'other', en: 'Other', hi: 'अन्य', mr: 'इतर' },
  ];

  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const referenceId = 'SUVIDHA-' + Date.now();
    localStorage.setItem(referenceId, JSON.stringify({
      ...formData,
      status: 'Pending Review',
      submittedDate: new Date().toLocaleDateString(),
      referenceId,
    }));
    setSubmitted(true);
    setTimeout(() => onNext('receipt', referenceId), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#667eea', fontWeight: '700', marginBottom: '10px' }}>📝 {t.title}</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>{t.subtitle}</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', padding: '40px' }}>
            <FormField label={t.fullName} name="name" value={formData.name} onChange={handleChange} placeholder={t.fullNamePlaceholder} />
            <FormField label={t.phone} name="phone" value={formData.phone} onChange={handleChange} placeholder={t.phonePlaceholder} pattern="[0-9]{10}" />
            <FormField label={t.consumer} name="consumerNumber" value={formData.consumerNumber} onChange={handleChange} placeholder={t.consumerPlaceholder} />

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.issueType}</label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Poppins', sans-serif", cursor: 'pointer', transition: 'all 0.3s' }}
                onFocus={(e) => { e.target.style.borderColor = '#667eea'; e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = 'none'; }}
              >
                {issueTypes.map((issue) => (
                  <option key={issue.value} value={issue.value}>
                    {issue[language]}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.description}</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                placeholder={t.descPlaceholder}
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Poppins', sans-serif", resize: 'vertical', transition: 'all 0.3s' }}
                onFocus={(e) => { e.target.style.borderColor = '#667eea'; e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            <button
              type="submit"
              style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s', marginBottom: '10px' }}
              onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)'; }}
              onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
            >
              {t.submit}
            </button>

            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{ width: '100%', padding: '12px', background: 'transparent', color: '#667eea', border: '2px solid #667eea', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.target.style.background = '#f0f4f8'; }}
              onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}
            >
              {t.back}
            </button>
          </form>
        ) : (
          <div style={{ background: '#d4edda', border: '2px solid #28a745', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '70px', marginBottom: '20px' }}>✅</div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#155724', marginBottom: '10px' }}>{t.success}</h2>
            <p style={{ color: '#155724', fontSize: '14px' }}>{t.redirecting}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FormField({ label, ...props }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{label}</label>
      <input
        {...props}
        required
        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Poppins', sans-serif", transition: 'all 0.3s' }}
        onFocus={(e) => { e.target.style.borderColor = '#667eea'; e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'; }}
        onBlur={(e) => { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
}