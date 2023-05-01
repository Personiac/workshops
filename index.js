const principalElement = document.getElementById("principal");
//parseFloat(prompt("Enter the loan amount: "));
const interestRateElement = document.getElementById("interestRate");
//parseFloat(prompt("Enter the interest rate (%): ")) / 100 / 12;
const loanMonthsElement = document.getElementById("loanMonths");
//parseInt(prompt("Enter the loan length (in years): ")) * 12;

const principal = parseFloat(principalElement.value);
const interestRate = parseFloat(interestRateElement.value);
const loanMonths = parseFloat(loanMonthsElement.value);

const monthlyPayment = principal * (interestRate * ((1 + interestRate) ** loanMonths)) / (((1 + interestRate) ** loanMonths) - 1);
const totalInterest = monthlyPayment * loanMonths - principal;

const message = `A $${principal.toFixed(2)} loan at ${interestRate*12*100}% interest for ${Math.floor(loanMonths/12)} years would have a $${monthlyPayment.toFixed(2)}/mo payment with a total interest of $${totalInterest.toFixed(2)}`;
