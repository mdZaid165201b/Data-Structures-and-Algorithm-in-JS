const monthlyPayrollPeriods = (startDate, endDate) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const periods = [];
    console.log(startDate, " " ,endDate);
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    console.log(startDate, " ", endDate); 
    while(startDate <= endDate) {
        const days = daysInMonth(startDate.getMonth(), startDate.getFullYear());
        console.log({days})
        const tempStartDate = new Date(startDate);
        startDate.setMonth(startDate.getMonth() + 1);
        periods.push({
            month: months[tempStartDate.getMonth()],
            startDate: `${tempStartDate.getDate()}/${months[tempStartDate.getMonth()]}/${tempStartDate.getFullYear()}`,
            endDate: `${startDate.getDate()}/${months[startDate.getMonth()]}/${startDate.getFullYear()}`}); // startDate.getDate() - 1
        }
        // startDate.setMonth(startDate.getMonth() + 1);
    console.log(periods) 
}

const daysInMonth = (month, year) => {
    const  days = new Date(year, month, 0).getDate();
    return days;
}

monthlyPayrollPeriods("01/1/2023", "03/30/2024");