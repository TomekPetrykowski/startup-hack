
export function StatCard({ title, value }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md text-center">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    );
  }
