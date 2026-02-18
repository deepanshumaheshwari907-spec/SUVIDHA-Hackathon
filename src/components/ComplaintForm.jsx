import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

export default function ComplaintForm({ onNext, language }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consumerNumber: '',
    issueType: 'high-bill',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
      redirecting: 'Redirecting to receipt...',
      submitting: 'Submitting...',
      nameError: '❌ Name is required',
      phoneError: '❌ Enter 10 digit number',
      phoneValid: '✅ Valid number',
      consumerError: '❌ Consumer number required',
      descError: '❌ Description required'
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
      redirecting: 'रसीद पर रीडायरेक्ट हो रहा है...',
      submitting: 'जमा किया जा रहा है...',
      nameError: '❌ नाम आवश्यक है',
      phoneError: '❌ 10 अंकों का नंबर दर्ज करें',
      phoneValid: '✅ मान्य नंबर',
      consumerError: '❌ उपभोक्ता संख्या आवश्यक है',
      descError: '❌ विवरण आवश्यक है'
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
      redirecting: 'पावती पृष्ठावर रीडायरेक्ट करीत आहे...',
      submitting: 'सबमिट केले जात आहे...',
      nameError: '❌ नाव आवश्यक आहे',
      phoneError: '❌ 10 अंकांचा क्रमांक दाखल करा',
      phoneValid: '✅ वैध क्रमांक',
      consumerError: '❌ ग्राहक क्रमांक आवश्यक आहे',
      descError: '❌ वर्णन आवश्यक आहे'
    }
  };

  const issueTypes = [
    { value: 'high-bill', en: 'High Bill Complaint', hi: 'अधिक बिल की शिकायत', mr: 'जास्त बिल तक्रार' },
    { value: 'bill-not-received', en: 'Bill Not Received', hi: 'बिल नहीं मिला', mr: 'बिल मिला नाही' },
    { value: 'meter-issue', en: 'Meter Problem', hi: 'मीटर की समस्या', mr: 'मीटर समस्या' },
    { value: 'no-supply', en: 'No Electricity Supply', hi: 'बिजली नहीं आ रही', mr: 'वीज नाही येत' },
    { value: 'connection-issue', en: 'Connection Problem', hi: 'कनेक्शन की समस्या', mr: 'जोडणी समस्या' },
    { value: 'bill-correction', en: 'Bill Correction Request', hi: 'बिल सुधार अनुरोध', mr: 'बिल सुधार विनंती' },
    { value: 'other', en: 'Other', hi: 'अन्य', mr: 'इतर' },
  ];

  const t = translations[language];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.nameError;
    if (!formData.phone || formData.phone.length !== 10) newErrors.phone = t.phoneError;
    if (!formData.consumerNumber.trim()) newErrors.consumerNumber = t.consumerError;
    if (!formData.description.trim()) newErrors.description = t.descError;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      if (value.length > 10) return;
      if (value && !/^[0-9]/.test(value)) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    setTimeout(() => {
      const referenceId = 'SUVIDHA-' + Date.now();
      localStorage.setItem(referenceId, JSON.stringify({
        ...formData,
        status: 'Pending Review',
        submittedDate: new Date().toLocaleDateString(),
        referenceId,
      }));
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => onNext('receipt', referenceId), 2000);
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#1e3a5f', fontWeight: '700', marginBottom: '10px' }}>📝 {t.title}</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>{t.subtitle}</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)', padding: '40px' }}>
            {/* Name */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.fullName}</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.fullNamePlaceholder} style={{ width: '100%', padding: '12px', border: errors.name ? '2px solid #dc3545' : '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }} />
              {errors.name && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
              {formData.name && !errors.name && <p style={{ color: '#28a745', fontSize: '12px', marginTop: '4px' }}>✅ Valid</p>}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.phone}</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.phonePlaceholder} style={{ width: '100%', padding: '12px', border: errors.phone ? '2px solid #dc3545' : '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }} />
              {errors.phone && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</p>}
              {formData.phone && formData.phone.length === 10 && !errors.phone && <p style={{ color: '#28a745', fontSize: '12px', marginTop: '4px' }}>{t.phoneValid}</p>}
            </div>

            {/* Consumer */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.consumer}</label>
              <input type="text" name="consumerNumber" value={formData.consumerNumber} onChange={handleChange} placeholder={t.consumerPlaceholder} style={{ width: '100%', padding: '12px', border: errors.consumerNumber ? '2px solid #dc3545' : '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif" }} />
              {errors.consumerNumber && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px' }}>{errors.consumerNumber}</p>}
              {formData.consumerNumber && !errors.consumerNumber && <p style={{ color: '#28a745', fontSize: '12px', marginTop: '4px' }}>✅ Valid</p>}
            </div>

            {/* Issue Type */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.issueType}</label>
              <select name="issueType" value={formData.issueType} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif", cursor: 'pointer' }}>
                {issueTypes.map((issue) => (
                  <option key={issue.value} value={issue.value}>{issue[language]}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.description}</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder={t.descPlaceholder} style={{ width: '100%', padding: '12px', border: errors.description ? '2px solid #dc3545' : '1px solid #ddd', borderRadius: '8px', fontSize: '14px', fontFamily: "'Inter', sans-serif", resize: 'vertical' }} />
              {errors.description && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px' }}>{errors.description}</p>}
            </div>

            {/* Submit Button */}
            {loading ? (
              <div style={{ width: '100%', padding: '20px', background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)', color: 'white', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                <BeatLoader color="white" size={12} />
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '600' }}>{t.submitting}</p>
              </div>
            ) : (
              <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '10px' }}>
                {t.submit}
              </button>
            )}

            {/* Back */}
            <button type="button" onClick={() => window.location.reload()} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#1e3a5f', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
              {t.back}
            </button>
          </form>
        ) : (
          <div style={{ background: '#d4edda', border: '2px solid #28a745', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '70px', marginBottom: '20px', animation: 'celebrate 0.6s ease-out' }}>✅</div>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#155724', marginBottom: '10px' }}>{t.success}</h2>
            <p style={{ color: '#155724', fontSize: '14px' }}>{t.redirecting}</p>
          </div>
        )}
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