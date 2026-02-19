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
      title: 'File Your Complaint',
      subtitle: 'We are here to help - Tell us about your issue',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      phone: 'Mobile Number',
      phonePlaceholder: '10-digit mobile number',
      consumer: 'Consumer Number',
      consumerPlaceholder: 'Your electricity consumer number',
      issueType: 'Type of Issue',
      description: 'Detailed Description',
      descPlaceholder: 'Please describe your issue in detail...',
      submit: '✓ SUBMIT COMPLAINT',
      back: '← BACK',
      success: 'Complaint Registered Successfully!',
      redirecting: 'Generating your receipt...',
      submitting: 'Processing your complaint...',
      nameError: '❌ Name is required',
      phoneError: '❌ Enter valid 10-digit number',
      phoneValid: '✅ Valid',
      consumerError: '❌ Consumer number required',
      descError: '❌ Description required',
      refId: 'Your Reference ID will be displayed in the next screen',
      required: 'All fields are mandatory'
    },
    hi: {
      title: 'अपनी शिकायत दर्ज करें',
      subtitle: 'हम आपकी मदद के लिए यहाँ हैं - अपनी समस्या बताएं',
      fullName: 'पूरा नाम',
      fullNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
      phone: 'मोबाइल नंबर',
      phonePlaceholder: '10 अंकों का मोबाइल नंबर',
      consumer: 'उपभोक्ता संख्या',
      consumerPlaceholder: 'आपकी बिजली उपभोक्ता संख्या',
      issueType: 'समस्या का प्रकार',
      description: 'विस्तृत विवरण',
      descPlaceholder: 'कृपया अपनी समस्या का विस्तार से विवरण दें...',
      submit: '✓ शिकायत दर्ज करें',
      back: '← वापस',
      success: 'शिकायत सफलतापूर्वक पंजीकृत!',
      redirecting: 'आपकी रसीद तैयार की जा रही है...',
      submitting: 'आपकी शिकायत प्रसंस्कृत की जा रही है...',
      nameError: '❌ नाम आवश्यक है',
      phoneError: '❌ वैध 10 अंकों का नंबर दर्ज करें',
      phoneValid: '✅ मान्य',
      consumerError: '❌ उपभोक्ता संख्या आवश्यक है',
      descError: '❌ विवरण आवश्यक है',
      refId: 'आपकी संदर्भ ID अगली स्क्रीन पर दिखाई देगी',
      required: 'सभी फील्ड आवश्यक हैं'
    },
    mr: {
      title: 'आपली तक्रार दाखल करा',
      subtitle: 'आम्ही आपल्या मदतीसाठी येथे आहोत - आपल्या समस्येबद्दल सांगा',
      fullName: 'पूर्ण नाव',
      fullNamePlaceholder: 'आपले पूर्ण नाव दाखल करा',
      phone: 'मोबाइल क्रमांक',
      phonePlaceholder: '10 अंकांचा मोबाइल क्रमांक',
      consumer: 'ग्राहक क्रमांक',
      consumerPlaceholder: 'आपल्या विजली ग्राहक क्रमांक',
      issueType: 'समस्येचा प्रकार',
      description: 'तपशीलवार विवरण',
      descPlaceholder: 'कृपया आपल्या समस्येचा तपशीलवार विवरण द्या...',
      submit: '✓ तक्रार दाखल करा',
      back: '← मागे',
      success: 'तक्रार यशस्वीरित्या नोंदणीकृत!',
      redirecting: 'आपली पावती तयार केली जात आहे...',
      submitting: 'आपली तक्रार प्रक्रिया केली जात आहे...',
      nameError: '❌ नाव आवश्यक आहे',
      phoneError: '❌ वैध 10 अंकांचा क्रमांक दाखल करा',
      phoneValid: '✅ वैध',
      consumerError: '❌ ग्राहक क्रमांक आवश्यक आहे',
      descError: '❌ विवरण आवश्यक आहे',
      refId: 'आपल्या संदर्भ ID पुढील स्क्रीनवर दिसेल',
      required: 'सर्व फील्ड आवश्यक आहेत'
    }
  };

  const issueTypes = [
    { value: 'high-bill', en: 'High Bill Complaint', hi: 'अधिक बिल की शिकायत', mr: 'जास्त बिल तक्रार' },
    { value: 'bill-not-received', en: 'Bill Not Received', hi: 'बिल नहीं मिला', mr: 'बिल मिला नाही' },
    { value: 'meter-issue', en: 'Meter Problem', hi: 'मीटर की समस्या', mr: 'मीटर समस्या' },
    { value: 'no-supply', en: 'No Electricity Supply', hi: 'बिजली नहीं आ रही', mr: 'वीज नाही येत' },
    { value: 'connection-issue', en: 'Connection Problem', hi: 'कनेक्शन की समस्या', mr: 'जोडणी समस्या' },
    { value: 'bill-correction', en: 'Bill Correction Request', hi: 'बिल सुधार अनुरोध', mr: 'बिल सुधार विनंती' },
    { value: 'other', en: 'Other Issue', hi: 'अन्य समस्या', mr: 'इतर समस्या' },
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

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '50px 40px',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          border: '3px solid #28a745'
        }}>
          <div style={{ fontSize: '80px', marginBottom: '20px', animation: 'celebrate 0.6s ease-out' }}>✅</div>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#155724', marginBottom: '15px' }}>{t.success}</h2>
          <p style={{ color: '#155724', fontSize: '14px', marginBottom: '25px' }}>{t.redirecting}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fa',
      padding: '0',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* HEADER */}
      <div style={{
        width: '100%',
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
        <div style={{
          textAlign: 'center',
          borderLeft: '3px solid #ff9933',
          borderRight: '3px solid #138808',
          paddingLeft: '15px',
          paddingRight: '15px'
        }}>
          <p style={{ margin: '0', fontSize: '16px', fontWeight: '800', color: '#1e3a5f' }}>SUVIDHA+</p>
          <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#666', fontWeight: '600' }}>Government of India</p>
        </div>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
      </div>

      {/* MAIN FORM CONTAINER */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        
        {/* TITLE SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
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
            <span>📝</span>
            {t.title}
          </h1>
          <p style={{ color: '#666', fontSize: '15px', margin: '0', fontWeight: '500' }}>{t.subtitle}</p>
        </div>

        {/* FORM CARD */}
        <form onSubmit={handleSubmit} style={{
          background: 'white',
          borderRadius: '12px',
          padding: '45px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
          border: '2px solid #e8eef7'
        }}>

          {/* FORM GRID - 2 COLUMNS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '30px'
          }}>
            {/* NAME FIELD */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '800',
                color: '#1e3a5f',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {t.fullName}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.fullNamePlaceholder}
                style={{
                  width: '100%',
                  padding: '13px 15px',
                  border: errors.name ? '2px solid #dc3545' : '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                  background: errors.name ? '#fff5f5' : 'white',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9933';
                  e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.name ? '#dc3545' : '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.name && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{errors.name}</p>}
              {formData.name && !errors.name && <p style={{ color: '#28a745', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{t.phoneValid}</p>}
            </div>

            {/* PHONE FIELD */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '800',
                color: '#1e3a5f',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {t.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t.phonePlaceholder}
                style={{
                  width: '100%',
                  padding: '13px 15px',
                  border: errors.phone ? '2px solid #dc3545' : '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                  background: errors.phone ? '#fff5f5' : 'white',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9933';
                  e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.phone ? '#dc3545' : '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.phone && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{errors.phone}</p>}
              {formData.phone && formData.phone.length === 10 && !errors.phone && <p style={{ color: '#28a745', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{t.phoneValid}</p>}
            </div>
          </div>

          {/* SECOND ROW - 2 COLUMNS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '30px'
          }}>
            {/* CONSUMER NUMBER */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '800',
                color: '#1e3a5f',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {t.consumer}
              </label>
              <input
                type="text"
                name="consumerNumber"
                value={formData.consumerNumber}
                onChange={handleChange}
                placeholder={t.consumerPlaceholder}
                style={{
                  width: '100%',
                  padding: '13px 15px',
                  border: errors.consumerNumber ? '2px solid #dc3545' : '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                  background: errors.consumerNumber ? '#fff5f5' : 'white',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9933';
                  e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = errors.consumerNumber ? '#dc3545' : '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {errors.consumerNumber && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{errors.consumerNumber}</p>}
              {formData.consumerNumber && !errors.consumerNumber && <p style={{ color: '#28a745', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{t.phoneValid}</p>}
            </div>

            {/* ISSUE TYPE */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '800',
                color: '#1e3a5f',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {t.issueType}
              </label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '13px 15px',
                  border: '2px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: 'white',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ff9933';
                  e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {issueTypes.map((issue) => (
                  <option key={issue.value} value={issue.value}>
                    {issue[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DESCRIPTION - FULL WIDTH */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: '800',
              color: '#1e3a5f',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {t.description}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="6"
              placeholder={t.descPlaceholder}
              style={{
                width: '100%',
                padding: '13px 15px',
                border: errors.description ? '2px solid #dc3545' : '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: "'Inter', sans-serif",
                resize: 'vertical',
                transition: 'all 0.3s ease',
                background: errors.description ? '#fff5f5' : 'white',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#ff9933';
                e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.description ? '#dc3545' : '#ddd';
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.description && <p style={{ color: '#dc3545', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>{errors.description}</p>}
          </div>

          {/* INFO MESSAGE */}
          <div style={{
            background: '#e7f3ff',
            border: '1px solid #b6d4fe',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '30px',
            fontSize: '12px',
            color: '#084298',
            fontWeight: '500'
          }}>
            ℹ️ {t.refId}
          </div>

          {/* BUTTONS */}
          <div style={{ display: 'flex', gap: '15px' }}>
            {loading ? (
              <div style={{
                flex: 1,
                padding: '14px',
                background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)',
                color: 'white',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <BeatLoader color="white" size={11} />
                <p style={{ margin: '0', fontSize: '13px', fontWeight: '600' }}>{t.submitting}</p>
              </div>
            ) : (
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: '14px',
                  background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }}
              >
                {t.submit}
              </button>
            )}

            {!loading && (
              <button
                type="button"
                onClick={() => window.location.reload()}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: 'transparent',
                  color: '#1e3a5f',
                  border: '2px solid #1e3a5f',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f4f8';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {t.back}
              </button>
            )}
          </div>
        </form>
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