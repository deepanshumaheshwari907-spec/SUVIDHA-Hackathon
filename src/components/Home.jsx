import { useState } from 'react';

export default function Home({ onNext }) {
  const [language, setLanguage] = useState('en');

  const languages = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'hi', label: '🇮🇳 हिंदी' },
    { code: 'mr', label: '🇲🇭 मराठी' },
  ];

    return (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }}>
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      maxWidth: '500px',
      width: '100%',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      textAlign: 'center'
    }}>
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🏛️</div>
          <h1 className="text-3xl font-bold text-blue-600">SUVIDHA+</h1>
          <p className="text-gray-600 text-sm mt-2">Smart Urban Civic Services</p>
        </div>

        {/* Language Selection */}
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-700 mb-4">
            Select Language
          </label>
          <div className="space-y-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`w-full p-4 rounded-lg border-2 text-lg font-semibold transition ${
                  language === lang.code
                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                    : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={() => onNext('services')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
        >
          Start Service →
        </button>

        {/* Footer Info */}
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Authorized by Ministry of Electronics & IT</p>
          <p>Government of India</p>
        </div>
      </div>
    </div>
  );
}