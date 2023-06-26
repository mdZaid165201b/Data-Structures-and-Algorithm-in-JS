const fortnightPayrollPeriods = (startDate, endDate) => {
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  const periods = [];
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const tempStartDate = new Date(currentDate);
    const tempEndDate = new Date(currentDate);
    tempEndDate.setDate(tempEndDate.getDate() + 13);
    currentDate.setDate(currentDate.getDate() + 14);
    periods.push({
      startDate: tempStartDate,
      endDate: tempEndDate,
      title: tempStartDate.toDateString() + " - " + tempEndDate.toDateString(),
    });
  }

  return periods;
};

const fortnightPeriods = fortnightPayrollPeriods("01/1/2023", "03/30/2023");
console.log(fortnightPeriods);