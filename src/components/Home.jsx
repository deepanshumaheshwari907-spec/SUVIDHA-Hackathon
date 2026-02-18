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
      selectLanguage: 'SELECT YOUR LANGUAGE',
      startService: 'START SERVICE',
      authorized: 'Authorized by Ministry of Electronics & Information Technology',
      government: 'Government of India Initiative',
      tagline: 'Digital Service For Every Citizen'
    },
    hi: {
      title: 'SUVIDHA+',
      subtitle: 'स्मार्ट शहरी नागरिक सेवा कियोस्क',
      selectLanguage: 'अपनी भाषा चुनें',
      startService: 'सेवा शुरू करें',
      authorized: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय द्वारा अधिकृत',
      government: 'भारत सरकार की पहल',
      tagline: 'हर नागरिक के लिए डिजिटल सेवा'
    },
    mr: {
      title: 'SUVIDHA+',
      subtitle: 'स्मार्ट शहरी नागरिक सेवा कियोस्क',
      selectLanguage: 'आपली भाषा निवडा',
      startService: 'सेवा सुरू करा',
      authorized: 'इलेक्ट्रॉनिक्स आणि सूचना प्रौद्योगिकी मंत्रालय द्वारे अधिकृत',
      government: 'भारत सरकार उद्योग',
      tagline: 'प्रत्येक नागरिकासाठी डिजिटल सेवा'
    }
  };

  const t = translations[language];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f7fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* TOP HEADER - GOVERNMENT OFFICIAL LOOK */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 45%, #ffffff 55%, #138808 100%)',
        padding: '16px 0',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
        position: 'relative'
      }}>
        {/* LEFT FLAG */}
        <div style={{ fontSize: '48px', animation: 'wave 1s ease-in-out infinite' }}>
          🇮🇳
        </div>
        
        <div style={{
          textAlign: 'center',
          borderLeft: '3px solid #ff9933',
          borderRight: '3px solid #138808',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}>
          <p style={{
            margin: '0',
            fontSize: '18px',
            fontWeight: '800',
            color: '#1e3a5f',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            GOVERNMENT OF INDIA
          </p>
          <p style={{
            margin: '4px 0 0 0',
            fontSize: '12px',
            color: '#666',
            fontWeight: '600'
          }}>
            Ministry of Electronics & IT
          </p>
          <p style={{
            margin: '2px 0 0 0',
            fontSize: '10px',
            color: '#999'
          }}>
            SUVIDHA 2026 Initiative
          </p>
        </div>

        {/* RIGHT FLAG */}
        <div style={{ fontSize: '48px', animation: 'wave 1s ease-in-out infinite 0.2s' }}>
          🇮🇳
        </div>
      </div>

      {/* MAIN CARD */}
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '50px 45px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        textAlign: 'center',
        border: '2px solid #e0e0e0'
      }}>
        
        {/* ASHOKA CHAKRA */}
        <div style={{
          fontSize: '60px',
          marginBottom: '20px'
        }}>
          ☸️
        </div>

        {/* TITLE */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          color: '#1e3a5f',
          marginBottom: '8px',
          letterSpacing: '-0.5px'
        }}>
          {t.title}
        </h1>

        {/* SUBTITLE */}
        <p style={{
          fontSize: '16px',
          color: '#555',
          marginBottom: '6px',
          fontWeight: '500'
        }}>
          {t.subtitle}
        </p>

        {/* TAGLINE */}
        <p style={{
          fontSize: '13px',
          color: '#ff9933',
          marginBottom: '30px',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          ✓ {t.tagline}
        </p>

        {/* DIVIDER */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(90deg, #ff9933, #138808)',
          marginBottom: '35px',
          borderRadius: '2px'
        }} />

        {/* LANGUAGE SELECTION LABEL */}
        <label style={{
          display: 'block',
          fontSize: '16px',
          fontWeight: '700',
          color: '#1e3a5f',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          {t.selectLanguage}
        </label>

        {/* LANGUAGE BUTTONS */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '30px'
        }}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              style={{
                width: '100%',
                padding: '16px 20px',
                border: language === lang.code ? '3px solid #ff9933' : '2px solid #ddd',
                background: language === lang.code 
                  ? '#fff8f0' 
                  : 'white',
                color: language === lang.code ? '#1e3a5f' : '#333',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Inter', sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: language === lang.code 
                  ? '0 4px 12px rgba(255, 153, 51, 0.15)' 
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (language !== lang.code) {
                  e.target.style.borderColor = '#ff9933';
                  e.target.style.background = '#fff8f0';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== lang.code) {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.background = 'white';
                }
              }}
            >
              <span style={{ fontSize: '24px' }}>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>

        {/* DIVIDER */}
        <div style={{
          height: '2px',
          background: '#e0e0e0',
          marginBottom: '30px'
        }} />

        {/* START SERVICE BUTTON */}
        <button
          onClick={() => onNext('services')}
          style={{
            width: '100%',
            padding: '16px 24px',
            background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '25px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
          }}
        >
          {t.startService} →
        </button>

        {/* FOOTER - OFFICIAL CERTIFICATION */}
        <div style={{
          marginTop: '25px',
          textAlign: 'center',
          fontSize: '11px',
          color: '#999',
          borderTop: '1px solid #e0e0e0',
          paddingTop: '20px',
          lineHeight: '1.8'
        }}>
          <p style={{ margin: '5px 0', fontWeight: '600', color: '#666' }}>
            ✓ {t.authorized}
          </p>
          <p style={{ margin: '5px 0', fontWeight: '600', color: '#666' }}>
            {t.government}
          </p>
          <p style={{ margin: '8px 0 0 0', color: '#999' }}>
            Secure • Citizen-Centric • Accessible
          </p>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}