import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

export default function BillPayment({ onNext, language }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentGateway, setShowPaymentGateway] = useState(false);
  const [otp, setOtp] = useState('');
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const translations = {
    en: {
      title: 'Pay Electricity Bill',
      billAmount: 'Bill Amount',
      dueDate: 'Due Date',
      consumerNumber: 'Consumer Number',
      consumerName: 'Name',
      address: 'Address',
      billingCycle: 'Billing Cycle',
      lastAmount: 'Last Bill Amount',
      selectPayment: 'Select Payment Method',
      upi: 'UPI',
      debitCard: 'Debit Card',
      netBanking: 'Net Banking',
      wallet: 'Digital Wallet',
      payNow: '💳 Pay Now',
      back: '← Back',
      gatewayTitle: 'Enter Payment Details',
      otpLabel: 'Enter OTP sent to your phone',
      otpPlaceholder: '6-digit OTP',
      verify: '✅ Verify & Pay',
      selectMethod: 'Please select a payment method first',
      success: 'Payment Successful!',
      receipt: 'Payment receipt sent to email',
      newPayment: 'Make Another Payment',
      demoOtp: 'Demo OTP: 123456'
    },
    hi: {
      title: 'बिजली का बिल भरें',
      billAmount: 'बिल की रकम',
      dueDate: 'अंतिम तारीख',
      consumerNumber: 'उपभोक्ता संख्या',
      consumerName: 'नाम',
      address: 'पता',
      billingCycle: 'बिलिंग चक्र',
      lastAmount: 'पिछला बिल',
      selectPayment: 'भुगतान विधि चुनें',
      upi: 'यूपीआई',
      debitCard: 'डेबिट कार्ड',
      netBanking: 'नेट बैंकिंग',
      wallet: 'डिजिटल वॉलेट',
      payNow: '💳 अभी भरें',
      back: '← वापस',
      gatewayTitle: 'भुगतान विवरण दर्ज करें',
      otpLabel: 'अपने फोन पर भेजे गए OTP दर्ज करें',
      otpPlaceholder: '6 अंकों का OTP',
      verify: '✅ सत्यापित करें & भरें',
      selectMethod: 'पहले भुगतान विधि चुनें',
      success: 'भुगतान सफल!',
      receipt: 'भुगतान रसीद ईमेल पर भेजी गई',
      newPayment: 'अन्य भुगतान करें',
      demoOtp: 'Demo OTP: 123456'
    },
    mr: {
      title: 'वीज बिल भरा',
      billAmount: 'बिलाची रक्कम',
      dueDate: 'शेवटची तारीख',
      consumerNumber: 'ग्राहक क्रमांक',
      consumerName: 'नाव',
      address: 'पता',
      billingCycle: 'बिलिंग चक्र',
      lastAmount: 'मागील बिल',
      selectPayment: 'भुगतान पद्धती निवडा',
      upi: 'यूपीआई',
      debitCard: 'डेबिट कार्ड',
      netBanking: 'नेट बँकिंग',
      wallet: 'डिजिटल वॉलेट',
      payNow: '💳 आता भरा',
      back: '← मागे',
      gatewayTitle: 'भुगतान तपशील दाखल करा',
      otpLabel: 'आपल्या फोनवर पाठवलेला OTP दाखल करा',
      otpPlaceholder: '6 अंकांचा OTP',
      verify: '✅ सत्यापित करा & भरा',
      selectMethod: 'पहिले भुगतान पद्धती निवडा',
      success: 'भुगतान यशस्वी!',
      receipt: 'भुगतान रसीद ईमेलवर पाठवली',
      newPayment: 'इतर भुगतान करा',
      demoOtp: 'Demo OTP: 123456'
    }
  };

  const t = translations[language];

  const mockBillData = {
    consumerNumber: '1234567890',
    consumerName: 'Rajesh kumar',
    address: '123 Main Street, Indore, MP 452001',
    billAmount: 2450,
    dueDate: '25 Feb 2026',
    billingCycle: 'January 2026',
    lastAmount: 2100
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert(t.selectMethod);
      return;
    }
    setShowPaymentGateway(true);
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      alert('OTP must be 6 digits');
      return;
    }
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
    }, 2000);
  };

  // SUCCESS PAGE
  if (completed) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)', padding: '40px', maxWidth: '400px', textAlign: 'center' }}>
          <div style={{ fontSize: '70px', marginBottom: '20px', animation: 'celebrate 0.6s ease-out' }}>✅</div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#28a745', marginBottom: '10px' }}>{t.success}</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>{t.receipt}</p>
          <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '12px', background: '#1e3a5f', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>{t.newPayment}</button>
        </div>
      </div>
    );
  }

  // OTP GATEWAY PAGE
  if (showPaymentGateway) {
    return (
      <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)', padding: '40px', maxWidth: '500px', width: '100%' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#1e3a5f', marginBottom: '30px', textAlign: 'center' }}>{t.gatewayTitle}</h2>

          {/* Payment Summary */}
          <div style={{ background: '#e7f3ff', border: '2px solid #1e3a5f', borderRadius: '10px', padding: '20px', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontWeight: '600', color: '#333' }}>{t.billAmount}:</span>
              <span style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '18px' }}>₹{mockBillData.billAmount}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '600', color: '#333' }}>{t.consumerNumber}:</span>
              <span style={{ fontWeight: '600', color: '#333' }}>{mockBillData.consumerNumber}</span>
            </div>
          </div>

          {/* Payment Method Display */}
          <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#666', margin: '0 0 5px 0' }}>Payment Method</p>
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#333', margin: '0' }}>
              {paymentMethod === 'upi' && '📱 UPI'}
              {paymentMethod === 'debit' && '💳 Debit Card'}
              {paymentMethod === 'netbanking' && '🏦 Net Banking'}
              {paymentMethod === 'wallet' && '💰 Digital Wallet'}
            </p>
          </div>

          {/* OTP Input */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>{t.otpLabel}</label>
            <input 
              type="text" 
              value={otp} 
              onChange={(e) => setOtp(e.target.value.slice(0, 6))}
              placeholder={t.otpPlaceholder}
              maxLength="6"
              style={{ width: '100%', padding: '12px', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '18px', fontWeight: '600', textAlign: 'center', letterSpacing: '10px', fontFamily: 'monospace' }}
            />
            <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>{t.demoOtp}</p>
          </div>

          {/* Verify Button */}
          {processing ? (
            <div style={{ width: '100%', padding: '15px', background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)', color: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
              <BeatLoader color="white" size={10} />
              <span>Processing...</span>
            </div>
          ) : (
            <button onClick={handleVerifyOTP} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '10px' }}>
              {t.verify}
            </button>
          )}

          {/* Back Button */}
          <button onClick={() => setShowPaymentGateway(false)} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#1e3a5f', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  // MAIN BILL PAYMENT PAGE
  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', padding: '20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#1e3a5f', fontWeight: '700', marginBottom: '10px' }}>💳 {t.title}</h1>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)', padding: '40px' }}>
          {/* Bill Details */}
          <div style={{ background: '#e7f3ff', border: '2px solid #1e3a5f', borderRadius: '12px', padding: '25px', marginBottom: '30px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{t.billAmount}</p>
                <p style={{ fontSize: '28px', fontWeight: '700', color: '#1e3a5f' }}>₹{mockBillData.billAmount}</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{t.dueDate}</p>
                <p style={{ fontSize: '18px', fontWeight: '600', color: '#dc3545' }}>{mockBillData.dueDate}</p>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{t.consumerNumber}</p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>{mockBillData.consumerNumber}</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{t.consumerName}</p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>{mockBillData.consumerName}</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{t.billingCycle}</p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>{mockBillData.billingCycle}</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{t.lastAmount}</p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>₹{mockBillData.lastAmount}</p>
              </div>
            </div>

            <p style={{ fontSize: '12px', color: '#666', marginTop: '20px', marginBottom: '5px' }}>{t.address}</p>
            <p style={{ fontSize: '13px', fontWeight: '500', color: '#333', margin: '0' }}>{mockBillData.address}</p>
          </div>

          {/* Payment Methods */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontSize: '16px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>{t.selectPayment}</label>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { id: 'upi', label: t.upi, icon: '📱' },
                { id: 'debit', label: t.debitCard, icon: '💳' },
                { id: 'netbanking', label: t.netBanking, icon: '🏦' },
                { id: 'wallet', label: t.wallet, icon: '💰' }
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  style={{
                    padding: '15px',
                    border: paymentMethod === method.id ? '2px solid #1e3a5f' : '2px solid #ddd',
                    background: paymentMethod === method.id ? '#f0f4f8' : 'white',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333'
                  }}
                >
                  <div style={{ fontSize: '24px', marginBottom: '5px' }}>{method.icon}</div>
                  {method.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pay Button */}
          <button onClick={handlePayment} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8c 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '10px' }}>
            {t.payNow}
          </button>

          {/* Back Button */}
          <button onClick={() => window.location.reload()} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#1e3a5f', border: '2px solid #1e3a5f', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
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