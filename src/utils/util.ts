export function getTimeAgoString(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const intervals = [
    { label: "yr", seconds: 31536000 },
    { label: "mon", seconds: 2592000 },
    { label: "d", seconds: 86400 },
    { label: "hr", seconds: 3600 },
    { label: "min", seconds: 60 },
    { label: "sec", seconds: 1 },
  ];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (!interval) continue;
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval?.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}
