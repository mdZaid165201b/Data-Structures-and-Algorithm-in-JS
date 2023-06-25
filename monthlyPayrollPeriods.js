const monthlyPayrollPeriods = (startDate, endDate) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const periods = [];
    console.log(startDate, " " ,endDate);
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    console.log(startDate, " ", endDate); 
    while(startDate <= endDate) {
        const days = daysInMonth(startDate.getMonth(), startDate.getFullYear());
        const tempStartDate = new Date(startDate);
        periods.push({month: months[tempStartDate.getMonth()], startDate: tempStartDate.getDate(), endDate: startDate.getDate() - 1});
        startDate.setMonth(startDate.getMonth() + 1);
    }
    console.log({periods}) 
}

const daysInMonth = (month, year) => {
    const  days = new Date(year, month, 0).getDate();
    console.log(days);
    return days;
}

monthlyPayrollPeriods("01/15/2023", "12/30/2023");