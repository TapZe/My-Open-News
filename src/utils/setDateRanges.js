const setDateRange = (daysAgo) => {
  const today = new Date();
  const startDate = new Date(today.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  const endDate = today;

  return {
    begin_date: startDate.toISOString().slice(0, 10).replace(/-/g, ""),
    end_date: endDate.toISOString().slice(0, 10).replace(/-/g, ""),
  };
};

// Using getter to make it re-calculate the date for every time the code is used
const setDateRanges = {
  get oneMonthAgo() {
    return setDateRange(30);
  },
  get threeMonthAgo() {
    return setDateRange(90);
  },
  get sixMonthAgo() {
    return setDateRange(180);
  },
  get oneYearAgo() {
    return setDateRange(365);
  },
};

export default setDateRanges;
