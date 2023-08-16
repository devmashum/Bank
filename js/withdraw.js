//1: add event handler with the withdraw button
//2: get the withdraw amount from the withdraw input field
//3: make sure to convert the string to numbers by using parseFloat
//4: get previous withdraw amount
//5: calculate total amount
//6: set total withdraw amount
//7: clean the field input.value='',

//  step 1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step 5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Your balance is not sufficient please deposit new amount')
        return;
    }

    // step 4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;




    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    withdrawField.value = '';
})