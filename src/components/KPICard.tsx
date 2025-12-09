interface KPICardProps {
  icon: string;
  iconColor: string;
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
}

export default function KPICard({ icon, iconColor, title, value, change, changeType }: KPICardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-${iconColor}-100 rounded-lg flex items-center justify-center`}>
          <i className={`fa-solid ${icon} text-2xl text-${iconColor}-600`}></i>
        </div>
        <span className={`text-sm font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
