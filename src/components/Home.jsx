// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

export default function Home({ onNext, language, setLanguage }) {
  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', label: 'मराठी', flag: '🇲🇭' },
  ];

  const translations = {
    en: {
      title: 'SUVIDHA+',
      subtitle: 'Smart Urban Civic Services Kiosk',
      tagline: 'Digital Service For Every Citizen',
      selectLanguage: 'SELECT YOUR LANGUAGE',
      startService: 'START SERVICE',
      authorized: 'Authorized by Ministry of Electronics & Information Technology',
      government: 'Government of India Initiative',
      
      featuresTitle: 'WHY CHOOSE SUVIDHA+?',
      features: [
        { icon: '⚡', title: 'Fast & Easy', desc: 'File complaints in seconds' },
        { icon: '🔒', title: 'Secure & Safe', desc: '100% data protection' },
        { icon: '🌐', title: 'Multilingual', desc: '3+ languages supported' },
        { icon: '24', title: '24/7 Access', desc: 'Round the clock service' }
      ],

      statsTitle: 'TRUSTED BY MILLIONS',
      stats: [
        { number: '50K+', label: 'Citizens Served' },
        { number: '95%', label: 'Satisfaction' },
        { number: '24/7', label: 'Support' },
        { number: '100%', label: 'Digital' }
      ],

      benefitsTitle: 'KEY BENEFITS',
      benefits: [
        { icon: '📝', title: 'Instant Filing', desc: 'File complaints instantly without paperwork' },
        { icon: '📊', title: 'Real-time Tracking', desc: 'Track your complaint status anytime' },
        { icon: '💰', title: 'Online Payments', desc: 'Pay bills securely and conveniently' }
      ],

      howTitle: 'HOW IT WORKS',
      steps: [
        { num: '1', title: 'Select Service', desc: 'Choose your required service' },
        { num: '2', title: 'Enter Details', desc: 'Provide your information' },
        { num: '3', title: 'Submit', desc: 'File complaint or make payment' },
        { num: '4', title: 'Get Receipt', desc: 'Receive confirmation & receipt' }
      ],

      trustTitle: 'TRUSTED & CERTIFIED',
      trust: [
        '✓ Government Approved',
        '✓ Data Secured',
        '✓ ISO Certified',
        '✓ Citizen-Centric'
      ]
    },
    hi: {
      title: 'SUVIDHA+',
      subtitle: 'स्मार्ट शहरी नागरिक सेवा कियोस्क',
      tagline: 'हर नागरिक के लिए डिजिटल सेवा',
      selectLanguage: 'अपनी भाषा चुनें',
      startService: 'सेवा शुरू करें',
      authorized: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय द्वारा अधिकृत',
      government: 'भारत सरकार की पहल',
      
      featuresTitle: 'SUVIDHA+ को क्यों चुनें?',
      features: [
        { icon: '⚡', title: 'तेज़ और आसान', desc: 'सेकंडों में शिकायत दर्ज करें' },
        { icon: '🔒', title: 'सुरक्षित', desc: '100% डेटा सुरक्षा' },
        { icon: '🌐', title: 'बहुभाषी', desc: '3+ भाषाएं समर्थित' },
        { icon: '24', title: '24/7 उपलब्ध', desc: 'चौबीसों घंटे सेवा' }
      ],

      statsTitle: 'लाखों लोगों द्वारा विश्वसनीय',
      stats: [
        { number: '50 हज़ार+', label: 'नागरिक सेवित' },
        { number: '95%', label: 'संतुष्टि' },
        { number: '24/7', label: 'सहायता' },
        { number: '100%', label: 'डिजिटल' }
      ],

      benefitsTitle: 'मुख्य लाभ',
      benefits: [
        { icon: '📝', title: 'तुरंत दर्ज करें', desc: 'कागज़ी कार्य के बिना तुरंत शिकायत दर्ज करें' },
        { icon: '📊', title: 'रीयल-टाइम ट्रैकिंग', desc: 'कभी भी अपनी शिकायत की स्थिति देखें' },
        { icon: '💰', title: 'ऑनलाइन भुगतान', desc: 'सुरक्षित रूप से बिल का भुगतान करें' }
      ],

      howTitle: 'यह कैसे काम करता है',
      steps: [
        { num: '1', title: 'सेवा चुनें', desc: 'अपनी आवश्यक सेवा चुनें' },
        { num: '2', title: 'विवरण दर्ज करें', desc: 'अपनी जानकारी प्रदान करें' },
        { num: '3', title: 'जमा करें', desc: 'शिकायत दर्ज या भुगतान करें' },
        { num: '4', title: 'रसीद प्राप्त करें', desc: 'पुष्टि और रसीद प्राप्त करें' }
      ],

      trustTitle: 'विश्वसनीय और प्रमाणित',
      trust: [
        '✓ सरकार द्वारा अनुमोदित',
        '✓ डेटा सुरक्षित',
        '✓ ISO प्रमाणित',
        '✓ नागरिक-केंद्रित'
      ]
    },
    mr: {
      title: 'SUVIDHA+',
      subtitle: 'स्मार्ट शहरी नागरिक सेवा कियोस्क',
      tagline: 'प्रत्येक नागरिकासाठी डिजिटल सेवा',
      selectLanguage: 'आपली भाषा निवडा',
      startService: 'सेवा सुरू करा',
      authorized: 'इलेक्ट्रॉनिक्स आणि सूचना प्रौद्योगिकी मंत्रालय द्वारे अधिकृत',
      government: 'भारत सरकार उद्योग',
      
      featuresTitle: 'SUVIDHA+ का चुनें?',
      features: [
        { icon: '⚡', title: 'वेगवान व सोपे', desc: 'सेकंदात तक्रार दाखल करा' },
        { icon: '🔒', title: 'सुरक्षित', desc: '100% डेटा सुरक्षा' },
        { icon: '🌐', title: 'बहुभाषी', desc: '3+ भाषा समर्थित' },
        { icon: '24', title: '24/7 उपलब्ध', desc: 'सर्वकाळीन सेवा' }
      ],

      statsTitle: 'लक्षांनी विश्वास ठेवलेले',
      stats: [
        { number: '50 हज़ार+', label: 'नागरिक सेवित' },
        { number: '95%', label: 'समाधान' },
        { number: '24/7', label: 'समर्थन' },
        { number: '100%', label: 'डिजिटल' }
      ],

      benefitsTitle: 'मुख्य लाभ',
      benefits: [
        { icon: '📝', title: 'तुरंत दाखल करा', desc: 'कागदपत्रांशिवाय तुरंत तक्रार दाखल करा' },
        { icon: '📊', title: 'रीअल-टाइम ट्रॅकिंग', desc: 'कधीही आपली तक्रार स्थिती पहा' },
        { icon: '💰', title: 'ऑनलाइन भुगतान', desc: 'सुरक्षितपणे बिल भरा' }
      ],

      howTitle: 'हे कसे काम करते',
      steps: [
        { num: '1', title: 'सेवा निवडा', desc: 'आपली आवश्यक सेवा निवडा' },
        { num: '2', title: 'तपशील दाखल करा', desc: 'आपली माहिती प्रदान करा' },
        { num: '3', title: 'जमा करा', desc: 'तक्रार दाखल किंवा भुगतान करा' },
        { num: '4', title: 'पावती मिळवा', desc: 'पुष्टी आणि पावती मिळवा' }
      ],

      trustTitle: 'विश्वसनीय आणि प्रमाणित',
      trust: [
        '✓ सरकारद्वारे मंजूर',
        '✓ डेटा सुरक्षित',
        '✓ ISO प्रमाणित',
        '✓ नागरिक-केंद्रित'
      ]
    }
  };

  const t = translations[language];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#f5f7fa' }}>
      
      {/* HEADER */}
      <div style={{
        background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 45%, #ffffff 55%, #138808 100%)',
        padding: '16px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
        position: 'sticky',
        top: '0',
        zIndex: '1000'
      }}>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
        <div style={{ textAlign: 'center', borderLeft: '3px solid #ff9933', borderRight: '3px solid #138808', paddingLeft: '15px', paddingRight: '15px' }}>
          <p style={{ margin: '0', fontSize: '16px', fontWeight: '800', color: '#1e3a5f' }}>SUVIDHA+</p>
          <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#666' }}>Government of India</p>
        </div>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
      </div>

      {/* HERO SECTION */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 10px 0' }}>{t.title}</h1>
        <p style={{ fontSize: '20px', fontWeight: '500', margin: '0 0 8px 0' }}>{t.subtitle}</p>
        <p style={{ fontSize: '14px', color: '#ffc107', fontWeight: '600', margin: '0', textTransform: 'uppercase', letterSpacing: '1px' }}>✓ {t.tagline}</p>
      </div>

      {/* MAIN CONTAINER */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px 20px' }}>

        {/* LANGUAGE SECTION */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', marginTop: '-40px', marginBottom: '50px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)', position: 'relative', zIndex: '10' }}>
          <label style={{ display: 'block', fontSize: '16px', fontWeight: '700', color: '#1e3a5f', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center' }}>{t.selectLanguage}</label>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                style={{
                  padding: '14px 24px',
                  border: language === lang.code ? '3px solid #ff9933' : '2px solid #ddd',
                  background: language === lang.code ? '#fff8f0' : 'white',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: language === lang.code ? '#1e3a5f' : '#333'
                }}
                onMouseEnter={(e) => { if (language !== lang.code) { e.target.style.borderColor = '#ff9933'; e.target.style.background = '#fff8f0'; } }}
                onMouseLeave={(e) => { if (language !== lang.code) { e.target.style.borderColor = '#ddd'; e.target.style.background = 'white'; } }}
              >
                <span style={{ marginRight: '8px' }}>{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => onNext('services')}
            style={{
              width: '100%',
              maxWidth: '400px',
              display: 'block',
              margin: '30px auto 0',
              padding: '16px',
              background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'; }}
          >
            {t.startService} →
          </button>
        </div>

        {/* FEATURES SECTION */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e3a5f', marginBottom: '40px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.featuresTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
            {t.features.map((f, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: '2px solid #e8eef7',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(30, 58, 95, 0.15)'; e.currentTarget.style.borderColor = '#ff9933'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'; e.currentTarget.style.borderColor = '#e8eef7'; }}>
                <div style={{ fontSize: '50px', marginBottom: '15px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e3a5f', margin: '0 0 10px 0' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)', borderRadius: '12px', padding: '50px 30px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '40px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.statsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', color: 'white' }}>
                <p style={{ fontSize: '36px', fontWeight: '800', margin: '0 0 8px 0', color: '#ffc107' }}>{s.number}</p>
                <p style={{ fontSize: '14px', fontWeight: '600', margin: '0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e3a5f', marginBottom: '40px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.benefitsTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {t.benefits.map((b, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: `3px solid ${['#e7f3ff', '#d4edda', '#fff3cd'][i]}`,
                display: 'flex',
                gap: '20px'
              }}>
                <div style={{ fontSize: '40px' }}>{b.icon}</div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', margin: '0 0 8px 0' }}>{b.title}</h3>
                  <p style={{ fontSize: '13px', color: '#666', margin: '0', lineHeight: '1.6' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1e3a5f', marginBottom: '40px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.howTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px' }}>
            {t.steps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #ff9933 0%, #1e3a5f 100%)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: '800',
                  margin: '0 auto 15px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e3a5f', margin: '0 0 8px 0' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', margin: '0' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TRUST BADGES */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', border: '2px solid #e8eef7' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1e3a5f', marginBottom: '25px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.trustTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {t.trust.map((badge, i) => (
              <div key={i} style={{
                padding: '15px',
                background: '#f0f4f8',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1e3a5f',
                border: '1px solid #ddd'
              }}>
                {badge}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>Ready to experience seamless civic services?</p>
          <button
            onClick={() => onNext('services')}
            style={{
              marginTop: '20px',
              padding: '14px 40px',
              background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            {t.startService} NOW
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        background: '#1e3a5f',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        fontSize: '12px',
        marginTop: '60px',
        borderTop: '3px solid #ff9933'
      }}>
        <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>✓ {t.authorized}</p>
        <p style={{ margin: '0 0 10px 0', fontWeight: '600' }}>{t.government}</p>
        <p style={{ margin: '0', color: '#999' }}>© 2026 SUVIDHA+ | All Rights Reserved</p>
      </div>
    </div>
  );
}