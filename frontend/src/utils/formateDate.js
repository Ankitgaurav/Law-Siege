export const formatDate = (date, config) => {
  const defaultOptions = { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" };
  const options = config ? config : defaultOptions;
  return new Date(date).toLocaleDateString("en-IN", options);
};
