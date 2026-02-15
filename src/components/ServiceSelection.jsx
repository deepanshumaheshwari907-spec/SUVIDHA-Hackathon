export default function ServiceSelection({ onNext }) {
  const services = [
    {
      id: 'bill-payment',
      title: '💳 Bill Payment',
      description: 'Pay your electricity bill online',
      icon: '💵',
    },
    {
      id: 'complaint',
      title: '📝 File Complaint',
      description: 'Register a complaint about service',
      icon: '⚠️',
    },
    {
      id: 'connection',
      title: '⚡ New Connection',
      description: 'Request new electricity connection',
      icon: '🔌',
    },
    {
      id: 'status',
      title: '📊 Check Status',
      description: 'Track your request status',
      icon: '✅',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-4">
          <h1 className="text-3xl font-bold text-blue-600">⚡ Electricity Services</h1>
          <p className="text-gray-600 mt-2">Choose a service to continue</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                if (service.id === 'complaint') onNext('complaint-form');
                else if (service.id === 'status') onNext('status-tracking');
                else alert('🔧 This feature is under development!\n\nCurrently, only "File Complaint" and "Check Status" are available.');
            }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 text-left"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
              <div className="mt-4 text-blue-600 font-semibold text-sm">
                Continue →
              </div>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.location.reload()}
            className="text-blue-600 hover:underline font-semibold"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}