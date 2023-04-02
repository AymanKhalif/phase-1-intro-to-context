function createEmployeeRecord(newEmployee) {
  return {
    firstName: newEmployee[0],
    familyName: newEmployee[1],
    title: newEmployee[2],
    payPerHour: newEmployee[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}
function createEmployeeRecords(employees) {
  return employees.map((employee) => createEmployeeRecord(employee));
}
function createTimeInEvent(dateTime) {
  let newTimeIn = {
    type: "TimeIn",
    hour: parseInt(dateTime.slice(11)),
    date: dateTime.slice(0, 10),
  };
  this.timeInEvents.push(newTimeIn);
  return this;
}
let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });
  function createTimeOutEvent(dateTime) {
    let newTimeOut = {
      type: "TimeOut",
      hour: parseInt(dateTime.slice(11)),
      date: dateTime.slice(0, 10),
    };
    this.timeOutEvents.push(newTimeOut);
    return this;
  }
};
let payable = eligibleDates.reduce(
  function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d);
  }.bind(this),
  0
);
function hoursWorkedOnDate(date) {
  let start = this.timeInEvents.indexOf(
    this.timeInEvents.find((entry) => entry.date === date)
  );
  let end = this.timeOutEvents.indexOf(
    this.timeOutEvents.find((entry) => entry.date === date)
  );
  return (this.timeOutEvents[end].hour - this.timeInEvents[start].hour) / 100;
}
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}
function allWagesFor() {
  return this.timeInEvents.reduce(
    (total, num) => total + wagesEarnedOnDate.call(this, num.date),
    0
  );
}
function findEmployeeByFirstName(employees, firstName) {
  return employees.find((entry) => entry.firstName === firstName);
}
function calculatePayroll(employees) {
  return employees.reduce((total, num) => total + allWagesFor.call(num), 0);
}
