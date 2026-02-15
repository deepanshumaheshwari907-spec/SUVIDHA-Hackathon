import { useState } from 'react';

export default function ComplaintForm({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consumerNumber: '',
    issueType: 'billing-issue',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const issueTypes = [
    { value: 'billing-issue', label: 'Billing Issue' },
    { value: 'connection-problem', label: 'Connection Problem' },
    { value: 'meter-issue', label: 'Meter Issue' },
    { value: 'voltage-issue', label: 'Voltage Issue' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate Reference ID
    const referenceId = 'SUVIDHA-' + Date.now();
    
    // Save to localStorage
    localStorage.setItem(referenceId, JSON.stringify({
      ...formData,
      status: 'Pending Review',
      submittedDate: new Date().toLocaleDateString(),
      referenceId,
    }));

    setSubmitted(true);
    setTimeout(() => onNext('receipt', referenceId), 2000);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl font-bold text-blue-600">📝 File Complaint</h1>
          <p className="text-gray-600 mt-2">Tell us about your issue</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10 digit mobile number"
              />
            </div>

            {/* Consumer Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Consumer Number *
              </label>
              <input
                type="text"
                name="consumerNumber"
                value={formData.consumerNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 123456789"
              />
            </div>

            {/* Issue Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Issue Type *
              </label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {issueTypes.map((issue) => (
                  <option key={issue.value} value={issue.value}>
                    {issue.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Describe the Issue *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please provide detailed information about your issue..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Submit Complaint
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full text-blue-600 hover:underline font-semibold py-2"
            >
              ← Back
            </button>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-300 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Complaint Submitted!</h2>
            <p className="text-gray-600">Redirecting to receipt...</p>
          </div>
        )}
      </div>
    </div>
  );
}