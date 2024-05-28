export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const currentDate = new Date();

  const dateString = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  if (
    date.getDate() === currentDate.getDate() - 1 &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return "Yesterday";
  }

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return timeString;
  }

  return dateString;
};
