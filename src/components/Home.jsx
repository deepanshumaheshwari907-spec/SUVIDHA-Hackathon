import { useState } from 'react';

export default function Home({ onNext, language, setLanguage }) {

  const languages = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'hi', label: '🇮🇳 हिंदी' },
    { code: 'mr', label: '🇲🇭 मराठी' },
  ];

  // Translation Object
  const translations = {
    en: {
      title: 'SUVIDHA+',
      subtitle: 'Smart Urban Civic Services',
      selectLanguage: 'Select Language',
      startService: 'Start Service →',
      authorized: 'Authorized by Ministry of Electronics & IT',
      government: 'Government of India'
    },
    hi: {
      title: 'SUVIDHA+',
      subtitle: 'स्मार्ट शहरी नागरिक सेवाएं',
      selectLanguage: 'भाषा चुनें',
      startService: 'सेवा शुरू करें →',
      authorized: 'इलेक्ट्रॉनिक्स और आईटी मंत्रालय द्वारा अधिकृत',
      government: 'भारत सरकार'
    },
    mr: {
      title: 'SUVIDHA+',
      subtitle: 'स्मार्ट शहरी नागरिक सेवा',
      selectLanguage: 'भाषा निवडा',
      startService: 'सेवा सुरू करा →',
      authorized: 'इलेक्ट्रॉनिक्स आणि आयटी मंत्रालय द्वारे अधिकृत',
      government: 'भारत सरकार'
    }
  };

  const t = translations[language];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '50px 40px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
      }}>
        {/* Logo */}
        <div style={{
          fontSize: '60px',
          marginBottom: '20px'
        }}>
          🏛️
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#667eea',
          marginBottom: '10px'
        }}>
          {t.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '14px',
          color: '#999',
          marginBottom: '35px',
          minHeight: '20px'
        }}>
          {t.subtitle}
        </p>

        {/* Language Label */}
        <label style={{
          display: 'block',
          fontSize: '16px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '15px'
        }}>
          {t.selectLanguage}
        </label>

        {/* Language Buttons */}
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
                padding: '14px 20px',
                border: language === lang.code ? '2px solid #667eea' : '2px solid #ddd',
                background: language === lang.code ? '#667eea' : 'white',
                color: language === lang.code ? 'white' : '#333',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: "'Poppins', sans-serif"
              }}
              onMouseEnter={(e) => {
                if (language !== lang.code) {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.background = '#f5f7ff';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== lang.code) {
                  e.target.style.borderColor = '#ddd';
                  e.target.style.background = 'white';
                }
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Start Service Button */}
        <button
          onClick={() => onNext('services')}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
            marginBottom: '20px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          {t.startService}
        </button>

        {/* Footer */}
        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          fontSize: '11px',
          color: '#999',
          borderTop: '1px solid #eee',
          paddingTop: '20px'
        }}>
          <p style={{ margin: '5px 0' }}>{t.authorized}</p>
          <p style={{ margin: '5px 0' }}>{t.government}</p>
        </div>
      </div>
    </div>
  );
}