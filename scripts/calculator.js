// percentage calculators

function percentage() {
  let number = document.getElementById("percent").value;
  let total = document.getElementById("value").value;
  let percent = (number / 100) * total;
  document.getElementById(
    "percent-value-result"
  ).innerHTML = `${number}% of ${total} = ${percent}`;
}

function calculatePercentageDifference() {
  let value1 = document.getElementById("percentage-diff-value1").value;
  let value2 = document.getElementById("percentage-diff-value2").value;
  let difference = Math.abs(value1 - value2);
  let average = (parseFloat(value1) + parseFloat(value2)) / 2;
  let percentageDifference = ((difference / average) * 100).toFixed(3);
  document.getElementById("percentage-diff-result").value =
    percentageDifference + "%";
}

function calculatePercentageChange() {
  let originalValue = document.getElementById("percentage-change-value1").value;
  let newValue = document.getElementById("percentage-change-value2").value;
  let change = newValue - originalValue;
  let percentageChange = ((change / originalValue) * 100).toFixed(3);
  if (percentageChange > 0) {
    document.getElementById("percentage-change-result").value =
      percentageChange + " % increase";
  } else {
    document.getElementById("percentage-change-result").value =
      percentageChange + " % decrease";
  }
}

// finance calculators

function simpleInterest() {
  let principal = document.getElementById("si-principle-amount").value;
  let rate = document.getElementById("si-amount").value;
  let time = document.getElementById("si-period").value;
  let timeUnit = document.getElementById("period-type").value;

  if (timeUnit === "days") {
    time = time / 365;
  } else if (timeUnit === "months") {
    time = time / 12;
  }
  let simpleInterest = ((principal * rate * time) / 100).toFixed(3);
  let totalAmount = (principal - +-simpleInterest).toFixed(3);

  document.getElementById(
    "answer"
  ).innerHTML = ` Total Interest = ${simpleInterest} and Total Amount = ${totalAmount}`;
}

function compoundInterest() {
  let principal = document.getElementById("ci-principle-amount").value;
  let rate = document.getElementById("ci-interest-rate").value;
  let time = document.getElementById("ci-period").value;
  let timeUnit = document.getElementById("period-type").value;

  if (timeUnit === "days") {
    time = time / 365;
  } else if (timeUnit === "months") {
    time = time / 12;
  }

  let interest = (principal * Math.pow(1 + rate / 100, time)).toFixed(3);
  interest = interest - principal;
  let totalAmount = (principal - +-interest).toFixed(3);

  document.getElementById(
    "ci-result"
  ).innerHTML = `Total interest = ${interest} and TotalAmount = ${totalAmount}`;
}

function calculateFutureValue() {
  let presentValue = document.getElementById("fv-present-value").value;
  let rate = document.getElementById("fv-interest-rate").value;
  let time = document.getElementById("fv-period").value;
  let timeUnit = document.getElementById("period-type").value;

  if (timeUnit === "days") {
    time = time / 365;
  } else if (timeUnit === "months") {
    time = time / 12;
  }

  let futureValue = (presentValue * Math.pow(1 + rate / 100, time)).toFixed(3);
  let totalAmount = futureValue;
  document.getElementById(
    "fv-result"
  ).innerHTML = `future Value is : ${futureValue}`;
}

function calculatePresentValue() {
  let futureValue = document.getElementById("fv-value").value;
  let rate = document.getElementById("fv-interest-value").value;
  let time = document.getElementById("fv-period").value;
  let timeUnit = document.getElementById("period-type").value;

  if (timeUnit === "days") {
    time = time / 365;
  } else if (timeUnit === "months") {
    time = time / 12;
  }

  let presentValue = (futureValue / Math.pow(1 + rate / 100, time)).toFixed(3);
  let totalAmount = (presentValue * Math.pow(1 + rate / 100, time)).toFixed(3);
  document.getElementById(
    "fv-result"
  ).innerHTML = `Present Value is: ${presentValue}`;
}

function calculateMortgage() {
  let principal = document.getElementById("mortage-loan-amount").value;
  let rate = document.getElementById("mortage-interest-rate").value / 100 / 12;
  let term = document.getElementById("mortage-period").value;

  let monthlyPayment = (
    (principal * (rate * Math.pow(1 + rate, term))) /
    (Math.pow(1 + rate, term) - 1)
  ).toFixed(3);
  let totalInterest = (monthlyPayment * term - principal).toFixed(3);
  let totalAmount = principal - +-totalInterest;
  document.getElementById(
    "mortage-result"
  ).innerHTML = ` monthly payment is : ${monthlyPayment}, total interest is : ${totalInterest}, and total amount is : ${totalAmount}`;
}

// time calculators

setInterval(function () {
  let timestamp = new Date().getTime();
  let date = new Date();
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let lastDayOfYear = new Date(currentYear, 11, 31);
  let timeDiff = lastDayOfYear - currentDate;
  let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  document.getElementById(
    "current-timestamp"
  ).innerHTML = `* Current Timestamp : ${timestamp}`;
  document.getElementById(
    "days-left"
  ).innerHTML = `* ${daysLeft} days left in the current year`;
}, 1000);

function daysBetweenDates() {
  let startDate = new Date(document.getElementById("date1").value);
  let endDate = new Date(document.getElementById("date2").value);
  let difference = endDate.getTime() - startDate.getTime();
  let differenceInDays = difference / (1000 * 3600 * 24);
  document.getElementById("date-days").innerHTML =
    "Difference: " + differenceInDays + " days";
}

function convertToTimestamp() {
  let date = new Date(document.getElementById("date3").value);
  let timestamp = date.getTime();
  document.getElementById("date-timestamp").innerHTML =
    "Timestamp: " + timestamp;
}

function convertToDate() {
  let timestamp = document.getElementById("timestamp3").value;
  console.log("timestamp: ", timestamp);
  document.getElementById("timestamp-date").innerHTML =
    "Date: " + new Date(timestamp);
}

function calculateDifference() {
  let startTime = document.getElementById("timestamp1").value;
  let endTime = document.getElementById("timestamp2").value;
  let differenceInMiliseconds = endTime - startTime;
  let differenceInSeconds = differenceInMiliseconds / 1000;
  let differenceInMinutes = differenceInSeconds / 60;
  let differenceInHours = differenceInMinutes / 60;
  document.getElementById(
    "milliseconds"
  ).innerHTML = `difference in milliseconds ${differenceInMiliseconds}`;
  document.getElementById(
    "seconds"
  ).innerHTML = `difference in seconds ${differenceInSeconds}`;
  document.getElementById(
    "minutes"
  ).innerHTML = `difference in minutes ${differenceInMinutes}`;
  document.getElementById(
    "hours"
  ).innerHTML = `differnce in hours ${differenceInHours}`;
}

// paypal fee

function calculatePaypalFee() {
  // Get the amount from the input field
  let amount = document.getElementById("paypal-amount").value;

  // Calculate the fee (2.9% + $0.30)
  let fee = (amount * 0.029 + 0.3).toFixed(3);

  // Display the fee
  document.getElementById("paypal-result").innerHTML = "Fee: $" + fee;
}
