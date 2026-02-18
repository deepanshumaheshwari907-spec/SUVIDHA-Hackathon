import { useState } from 'react';

export default function ConsumerDetails({ onNext, language }) {
  const translations = {
    en: {
      title: 'Your Connection Details',
      subtitle: 'View your electricity connection information',
      consumerNumber: 'Consumer Number',
      consumerName: 'Name',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      connectionStatus: 'Connection Status',
      meterNumber: 'Meter Number',
      connectionDate: 'Connection Date',
      sanctionedLoad: 'Sanctioned Load',
      billingCycle: 'Billing Cycle',
      lastBillDate: 'Last Bill Date',
      lastBillAmount: 'Last Bill Amount',
      outstanding: 'Outstanding Amount',
      active: 'Active',
      payBill: '💳 Pay Bill',
      fileComplaint: '📝 File Complaint',
      back: '← Back'
    },
    hi: {
      title: 'आपके कनेक्शन विवरण',
      subtitle: 'अपनी बिजली कनेक्शन जानकारी देखें',
      consumerNumber: 'उपभोक्ता संख्या',
      consumerName: 'नाम',
      address: 'पता',
      phone: 'फोन',
      email: 'ईमेल',
      connectionStatus: 'कनेक्शन स्थिति',
      meterNumber: 'मीटर संख्या',
      connectionDate: 'कनेक्शन तारीख',
      sanctionedLoad: 'स्वीकृत लोड',
      billingCycle: 'बिलिंग चक्र',
      lastBillDate: 'पिछली बिल तारीख',
      lastBillAmount: 'पिछली बिल रकम',
      outstanding: 'बकाया रकम',
      active: 'सक्रिय',
      payBill: '💳 बिल भरें',
      fileComplaint: '📝 शिकायत दर्ज करें',
      back: '← वापस'
    },
    mr: {
      title: 'आपल्या जोडणीचे तपशील',
      subtitle: 'आपली वीज जोडणी माहिती पहा',
      consumerNumber: 'ग्राहक क्रमांक',
      consumerName: 'नाव',
      address: 'पता',
      phone: 'फोन',
      email: 'ईमेल',
      connectionStatus: 'जोडणी स्थिती',
      meterNumber: 'मीटर क्रमांक',
      connectionDate: 'जोडणी तारीख',
      sanctionedLoad: 'मंजूर भार',
      billingCycle: 'बिलिंग चक्र',
      lastBillDate: 'मागील बिल तारीख',
      lastBillAmount: 'मागील बिल रक्कम',
      outstanding: 'बाकी रक्कम',
      active: 'सक्रिय',
      payBill: '💳 बिल भरा',
      fileComplaint: '📝 तक्रार करा',
      back: '← मागे'
    }
  };

  const t = translations[language];

  const mockData = {
    consumerNumber: '1234567890',
    consumerName: 'Rajesh Kumar',
    address: '123 Main Street, Indore, MP 452001',
    phone: '9876543210',
    email: 'rajesh.kumar@email.com',
    connectionStatus: 'Active',
    meterNumber: 'MH-123456',
    connectionDate: '15 Jan 2020',
    sanctionedLoad: '2 kW',
    billingCycle: 'January',
    lastBillDate: '31 Jan 2026',
    lastBillAmount: '₹2,100',
    outstanding: '₹0'
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef7 100%)', padding: '20px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '30px' }}>
          <h1 style={{ fontSize: '32px', color: '#667eea', fontWeight: '700', marginBottom: '10px' }}>⚡ {t.title}</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>{t.subtitle}</p>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', padding: '40px' }}>
          
          {/* Status Card */}
          <div style={{ background: '#d4edda', border: '2px solid #28a745', borderRadius: '12px', padding: '20px', marginBottom: '30px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: '#155724', marginBottom: '5px' }}>{t.connectionStatus}</p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#28a745' }}>✅ {t.active}</p>
          </div>

          {/* Personal Details */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #ddd' }}>👤 Personal Details</h3>
            <DetailRow label={t.consumerNumber} value={mockData.consumerNumber} />
            <DetailRow label={t.consumerName} value={mockData.consumerName} />
            <DetailRow label={t.phone} value={mockData.phone} />
            <DetailRow label={t.email} value={mockData.email} />
            <DetailRow label={t.address} value={mockData.address} isLast />
          </div>

          {/* Connection Details */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #ddd' }}>🔌 Connection Details</h3>
            <DetailRow label={t.meterNumber} value={mockData.meterNumber} />
            <DetailRow label={t.connectionDate} value={mockData.connectionDate} />
            <DetailRow label={t.sanctionedLoad} value={mockData.sanctionedLoad} isLast />
          </div>

          {/* Billing Details */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#333', marginBottom: '15px', paddingBottom: '10px', borderBottom: '2px solid #ddd' }}>📊 Billing Details</h3>
            <DetailRow label={t.billingCycle} value={mockData.billingCycle} />
            <DetailRow label={t.lastBillDate} value={mockData.lastBillDate} />
            <DetailRow label={t.lastBillAmount} value={mockData.lastBillAmount} />
            <DetailRow label={t.outstanding} value={mockData.outstanding} isLast />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {t.payBill}
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {t.fileComplaint}
            </button>
            <button
              onClick={() => window.location.reload()}
              style={{
                width: '100%',
                padding: '12px',
                background: 'transparent',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {t.back}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, isLast }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: isLast ? 'none' : '1px solid #eee',
      alignItems: 'center'
    }}>
      <span style={{ fontSize: '13px', color: '#666', fontWeight: '500' }}>{label}:</span>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>{value}</span>
    </div>
  );
}