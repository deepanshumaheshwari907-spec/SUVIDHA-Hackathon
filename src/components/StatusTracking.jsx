import { useState } from 'react';

export default function StatusTracking() {
  const [referenceId, setReferenceId] = useState('');
  const [complaintData, setComplaintData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const data = localStorage.getItem(referenceId);
    
    if (data) {
      setComplaintData(JSON.parse(data));
    }
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl font-bold text-blue-600">📊 Check Status</h1>
          <p className="text-gray-600 mt-2">Track your complaint status</p>
        </div>

        {!complaintData ? (
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Enter Reference ID *
              </label>
              <input
                type="text"
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., SUVIDHA-1234567890"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Search Status
            </button>

            {searched && !complaintData && (
              <div className="mt-4 p-4 bg-red-50 border border-red-300 rounded-lg text-center">
                <p className="text-red-600 font-semibold">No complaint found with this ID</p>
              </div>
            )}
          </form>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Complaint Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Reference ID:</span>
                  <span className="text-gray-800">{complaintData.referenceId}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Name:</span>
                  <span className="text-gray-800">{complaintData.name}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Issue Type:</span>
                  <span className="text-gray-800 capitalize">{complaintData.issueType}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Submitted Date:</span>
                  <span className="text-gray-800">{complaintData.submittedDate}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-600">Current Status:</span>
                  <span className="text-yellow-600 font-bold">{complaintData.status}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-gray-600 text-sm">
                Your complaint is being reviewed. You will receive updates via SMS and Email.
              </p>
            </div>

            <button
              onClick={() => setComplaintData(null)}
              className="w-full text-blue-600 hover:underline font-semibold py-2"
            >
              ← Search Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}