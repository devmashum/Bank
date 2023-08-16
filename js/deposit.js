// Step 1: add event listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step 2:  get the deposit amount from the deposit amount field 
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    // step-3: get the deposit total amount 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = newDepositAmount;
    // step 4: add numbers to set the total amount ( convert string to numbers)
    const previousDepositTotalNr = parseFloat(previousDepositTotal);
    const newDepositAmountNr = parseFloat(newDepositAmount);

    const currentDepositTotal = previousDepositTotalNr + newDepositAmountNr;

    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmountNr;

    balanceTotalElement.innerText = currentBalanceTotal;








    // clear the depositField.value deposit field: 
    depositField.value = '';
}) 