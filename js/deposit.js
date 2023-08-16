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

    const previousDepositTotalNr = parseFloat(previousDepositTotal);
    const newDepositAmountNr = parseFloat(newDepositAmount);


    const currentDepositTotal = previousDepositTotalNr + newDepositAmountNr;




    depositTotalElement.innerText = currentDepositTotal;



    // clear the depositField.value deposit field: 
    depositField.value = '';
}) 