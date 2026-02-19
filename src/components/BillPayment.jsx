import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

export default function BillPayment({ onNext, language }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const translations = {
    en: {
      title: 'Pay Your Bill',
      amount: 'Amount Due',
      dueDate: 'Due Date',
      consumer: 'Consumer',
      selectPayment: 'SELECT PAYMENT METHOD',
      upi: 'UPI',
      card: 'Debit Card',
      netbank: 'Net Banking',
      wallet: 'Wallet',
      payNow: '💳 PROCEED TO PAYMENT',
      verify: '✓ VERIFY & PAY',
      back: '← BACK',
      otp: 'Enter OTP',
      demoOtp: 'Demo OTP: 123456',
      success: 'Payment Successful!',
      receipt: 'Receipt sent to email',
      newPayment: 'Make Another Payment'
    },
    hi: {
      title: 'अपने बिल का भुगतान करें',
      amount: 'बकाया राशि',
      dueDate: 'अंतिम तारीख',
      consumer: 'उपभोक्ता',
      selectPayment: 'भुगतान विधि चुनें',
      upi: 'यूपीआई',
      card: 'डेबिट कार्ड',
      netbank: 'नेट बैंकिंग',
      wallet: 'वॉलेट',
      payNow: '💳 भुगतान जारी रखें',
      verify: '✓ सत्यापित करें & भरें',
      back: '← वापस',
      otp: 'OTP दर्ज करें',
      demoOtp: 'Demo OTP: 123456',
      success: 'भुगतान सफल!',
      receipt: 'रसीद ईमेल पर भेजी गई',
      newPayment: 'अन्य भुगतान करें'
    },
    mr: {
      title: 'आपल्या बिलाचा भुगतान करा',
      amount: 'बाकी रक्कम',
      dueDate: 'अंतिम तारीख',
      consumer: 'ग्राहक',
      selectPayment: 'भुगतान पद्धती निवडा',
      upi: 'यूपीआई',
      card: 'डेबिट कार्ड',
      netbank: 'नेट बँकिंग',
      wallet: 'वॉलेट',
      payNow: '💳 भुगतान सुरू करा',
      verify: '✓ सत्यापित करा & भरा',
      back: '← मागे',
      otp: 'OTP दाखल करा',
      demoOtp: 'Demo OTP: 123456',
      success: 'भुगतान यशस्वी!',
      receipt: 'रसीद ईमेलवर पाठवली',
      newPayment: 'इतर भुगतान करा'
    }
  };

  const t = translations[language];

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert('Enter 6-digit OTP');
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
    }, 2000);
  };

  if (completed) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '50px 40px', textAlign: 'center', maxWidth: '500px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', border: '3px solid #28a745' }}>
          <div style={{ fontSize: '80px', marginBottom: '20px', animation: 'celebrate 0.6s ease-out' }}>✅</div>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#155724', marginBottom: '15px' }}>{t.success}</h2>
          <p style={{ color: '#155724', marginBottom: '25px' }}>{t.receipt}</p>
          <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '14px', background: '#1e3a5f', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase' }}>{t.newPayment}</button>
        </div>
      </div>
    );
  }

  if (showOTP) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', maxWidth: '500px', width: '100%', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1e3a5f', marginBottom: '30px', textAlign: 'center' }}>🔐 {t.otp}</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.slice(0, 6))}
            maxLength="6"
            placeholder="000000"
            style={{
              width: '100%',
              padding: '16px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '24px',
              textAlign: 'center',
              fontWeight: '700',
              letterSpacing: '15px',
              fontFamily: 'monospace',
              marginBottom: '10px',
              boxSizing: 'border-box'
            }}
          />
          <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginBottom: '25px' }}>{t.demoOtp}</p>
          {processing ? (
            <div style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <BeatLoader color="white" size={10} />
            </div>
          ) : (
            <>
              <button onClick={handleVerify} style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.verify}</button>
              <button onClick={() => setShowOTP(false)} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#1e3a5f', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase' }}>{t.back}</button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '0', fontFamily: "'Inter', sans-serif" }}>
      {/* HEADER */}
      <div style={{ background: 'linear-gradient(90deg, #ff9933 0%, #ffffff 45%, #ffffff 55%, #138808 100%)', padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)', marginBottom: '40px' }}>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
        <div style={{ textAlign: 'center', borderLeft: '3px solid #ff9933', borderRight: '3px solid #138808', paddingLeft: '15px', paddingRight: '15px' }}>
          <p style={{ margin: '0', fontSize: '16px', fontWeight: '800', color: '#1e3a5f' }}>SUVIDHA+</p>
          <p style={{ margin: '3px 0 0 0', fontSize: '11px', color: '#666' }}>Government of India</p>
        </div>
        <div style={{ fontSize: '40px' }}>🇮🇳</div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', color: '#1e3a5f', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span>💳</span>
            {t.title}
          </h1>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)', border: '2px solid #e8eef7' }}>
          
          {/* BILL DETAILS */}
          <div style={{ background: '#e7f3ff', border: '2px solid #1e3a5f', borderRadius: '10px', padding: '25px', marginBottom: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', margin: '0 0 6px 0' }}>{t.amount}</p>
              <p style={{ fontSize: '28px', fontWeight: '800', color: '#1e3a5f', margin: '0' }}>₹2,450</p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', margin: '0 0 6px 0' }}>{t.dueDate}</p>
              <p style={{ fontSize: '16px', fontWeight: '700', color: '#dc3545', margin: '0' }}>25 Feb 2026</p>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <p style={{ fontSize: '12px', color: '#666', fontWeight: '600', margin: '0 0 6px 0' }}>{t.consumer}</p>
              <p style={{ fontSize: '14px', fontWeight: '600', color: '#333', margin: '0' }}>1234567890</p>
            </div>
          </div>

          {/* PAYMENT METHODS */}
          <p style={{ fontSize: '13px', fontWeight: '800', color: '#1e3a5f', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.selectPayment}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '30px' }}>
            {[
              { id: 'upi', label: t.upi, icon: '📱' },
              { id: 'card', label: t.card, icon: '💳' },
              { id: 'net', label: t.netbank, icon: '🏦' },
              { id: 'wallet', label: t.wallet, icon: '💰' }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setPaymentMethod(m.id)}
                style={{
                  padding: '15px',
                  border: paymentMethod === m.id ? '3px solid #ff9933' : '2px solid #ddd',
                  background: paymentMethod === m.id ? '#fff8f0' : 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#333',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { if (paymentMethod !== m.id) { e.target.style.borderColor = '#ff9933'; e.target.style.background = '#fff8f0'; } }}
                onMouseLeave={(e) => { if (paymentMethod !== m.id) { e.target.style.borderColor = '#ddd'; e.target.style.background = 'white'; } }}
              >
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{m.icon}</div>
                {m.label}
              </button>
            ))}
          </div>

          {/* BUTTONS */}
          <button
            onClick={() => paymentMethod ? setShowOTP(true) : alert('Select payment method')}
            style={{ width: '100%', padding: '14px', background: 'linear-gradient(90deg, #ff9933 0%, #1e3a5f 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}
          >
            {t.payNow}
          </button>
          <button
            onClick={() => window.location.reload()}
            style={{ width: '100%', padding: '12px', background: 'transparent', color: '#1e3a5f', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase' }}
          >
            {t.back}
          </button>
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