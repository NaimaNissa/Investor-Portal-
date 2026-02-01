type ActivityItem = {
  id: string;
  action: string;
  detail: string;
  time: string;
};

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6 min-w-0">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent activity</h3>
      <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
        Audit trail · Real-time
      </p>
      <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-2 sm:gap-3 min-w-0">
            <div className="relative flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-brand-500" />
              {i < items.length - 1 && (
                <div className="absolute top-2 left-1/2 h-full w-px -translate-x-1/2 bg-gray-200" />
              )}
            </div>
            <div className="flex-1 min-w-0 pb-4">
              <p className="text-xs sm:text-sm font-medium text-gray-800 break-words">{item.action}</p>
              <p className="text-xs text-gray-600 truncate">{item.detail}</p>
              <p className="mt-0.5 text-xs text-gray-600">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
