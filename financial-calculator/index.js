
    const principalElement = document.getElementById("principal");
    const interestRateElement = document.getElementById("interestRate");
    const loanMonthsElement = document.getElementById("loanMonths");
    const answerElement = document.getElementById("answer");
    
    
    const principal = parseFloat(principalElement.value);
    const interestRate = parseFloat(interestRateElement.value) / 100;
    const loanMonths = parseFloat(loanMonthsElement.value);

function calculate() {
    const monthlyPayment = principal * (interestRate * ((1 + interestRate) ** loanMonths)) / (((1 + interestRate) ** loanMonths) - 1);
    const totalInterest = monthlyPayment * loanMonths - principal;
    
    const message = `A $${principal.toFixed(2)} loan at ${interestRate*12*100}% interest for ${Math.floor(loanMonths/12)} years would have a $${monthlyPayment.toFixed(2)}/mo payment with a total interest of $${totalInterest.toFixed(2)}`;
    
    answerElement.innerText = message;
}
