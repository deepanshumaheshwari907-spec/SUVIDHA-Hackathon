import { useState } from 'react';

export default function Receipt({ referenceId, onNext }) {
  const [complaintData, setComplaintData] = useState(() => {
    const data = localStorage.getItem(referenceId);
    return data ? JSON.parse(data) : null;
  });

  const handleDownload = () => {
    if (!complaintData) return;

    const content = `
╔════════════════════════════════════════╗
║      SUVIDHA+ - COMPLAINT RECEIPT      ║
╚════════════════════════════════════════╝

Reference ID: ${complaintData.referenceId}
Name: ${complaintData.name}
Phone: ${complaintData.phone}
Consumer Number: ${complaintData.consumerNumber}
Issue Type: ${complaintData.issueType}
Submitted Date: ${complaintData.submittedDate}
Current Status: ${complaintData.status}

DESCRIPTION:
${complaintData.description}

════════════════════════════════════════
Thank you for using SUVIDHA+
Your complaint will be addressed soon.
For queries, contact: support@suvidha.gov.in
════════════════════════════════════════
    `;

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(content)
    );
    element.setAttribute('download', `receipt-${referenceId}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!complaintData) {
    return (
      <div className="min-h-screen bg-blue-50 p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <div className="text-5xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error!</h2>
          <p className="text-gray-600 mb-6">Complaint data not found</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            🏠 Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-green-600">
            Complaint Submitted Successfully!
          </h1>
          <p className="text-gray-600 mt-2">Your reference ID has been generated</p>
        </div>

        {/* Receipt Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Receipt Details</h2>

          {/* Details Section */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6 space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Reference ID:</span>
              <span className="text-gray-900 font-mono bg-gray-100 px-3 py-1 rounded">
                {complaintData.referenceId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="text-gray-900">{complaintData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Phone:</span>
              <span className="text-gray-900">{complaintData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Consumer Number:</span>
              <span className="text-gray-900">{complaintData.consumerNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Issue Type:</span>
              <span className="text-gray-900 capitalize">{complaintData.issueType}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Submitted Date:</span>
              <span className="text-gray-900">{complaintData.submittedDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Status:</span>
              <span className="text-yellow-600 font-bold bg-yellow-50 px-3 py-1 rounded">
                {complaintData.status}
              </span>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-semibold text-gray-700 mb-3">Problem Description:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{complaintData.description}</p>
          </div>

          {/* Info Message */}
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 mb-6">
            <p className="text-blue-900 text-sm">
              <strong>📧 Important:</strong> A confirmation email has been sent to your registered email address.
            </p>
            <p className="text-blue-900 text-sm mt-2">
              <strong>📱 SMS:</strong> You will receive updates via SMS on your mobile number.
            </p>
            <p className="text-blue-900 text-sm mt-2">
              <strong>🔍 Track Status:</strong> Use your Reference ID to check the status anytime.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              📥 Download Receipt
            </button>

            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              🏠 Go to Home
            </button>

            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition"
            >
              🔄 Start New Complaint
            </button>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center text-gray-600 text-sm">
          <p>Thank you for using SUVIDHA+</p>
          <p>Smart Urban Civic Services</p>
          <p className="mt-2">For support: support@suvidha.gov.in | 1800-SUVIDHA</p>
        </div>
      </div>
    </div>
  );
}