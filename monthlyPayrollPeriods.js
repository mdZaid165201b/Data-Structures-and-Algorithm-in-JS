const monthlyPayrollPeriods = (startDate, endDate) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const periods = [];
  console.log(startDate, " ", endDate);
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  console.log(startDate, " ", endDate);
  const currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    const tempStartDate = new Date(currentDate);
    const tempEndDate = new Date(currentDate);
    console.log(tempStartDate.getMonth());
    const monthDays = daysInMonth(
      tempStartDate.getMonth() + 1,
      tempStartDate.getFullYear()
    );
    tempEndDate.setDate(tempEndDate.getDate() + monthDays - 1);
    currentDate.setDate(currentDate.getDate() + monthDays);
    periods.push({
      startDate: tempStartDate,
      endDate: tempEndDate,
      title: tempStartDate.toDateString() + " - " + tempEndDate.toDateString(),
    });
  }
  console.log(periods);
};

const daysInMonth = (month, year) => {
  const days = new Date(year, month, 0).getDate();
  return days;
};

monthlyPayrollPeriods("01/15/2023", "03/15/2024");
