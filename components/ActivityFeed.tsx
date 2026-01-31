type ActivityItem = {
  id: string;
  action: string;
  detail: string;
  time: string;
};

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <div className="rounded-xl border border-surface-700 bg-surface-900/50 p-6">
      <h3 className="text-lg font-semibold text-white">Recent activity</h3>
      <p className="mt-0.5 text-sm text-surface-400">
        Audit trail · Real-time
      </p>
      <ul className="mt-4 space-y-4">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3">
            <div className="relative flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-brand-500" />
              {i < items.length - 1 && (
                <div className="absolute top-2 left-1/2 h-full w-px -translate-x-1/2 bg-surface-700" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <p className="text-sm font-medium text-surface-200">{item.action}</p>
              <p className="text-xs text-surface-500">{item.detail}</p>
              <p className="mt-0.5 text-xs text-surface-600">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
