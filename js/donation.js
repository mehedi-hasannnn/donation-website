// Re usable function
function addMoney(event, balanceId, moneyInput){
    event.preventDefault();
    const addMoneyInput = document.getElementById(moneyInput).value;

    if( !isNaN(addMoneyInput) && addMoneyInput > 0 ){
        const balance = document.getElementById(balanceId).innerText;
        const accountBalance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const accountBalanceNumber = parseFloat(accountBalance);
        const newBalance = balanceNumber + addMoneyNumber;
        const newAccountBalance = accountBalanceNumber - addMoneyNumber;
        document.getElementById(balanceId).innerText = newBalance;
        document.getElementById('account-balance').innerText = newAccountBalance;
        document.getElementById('my_modal_5').showModal();
    }

    else{
        alert('Failed to add your donation. Please insert a valid donation amount.');
    }
}

// Noakhali part
document.getElementById('btn-add-money').addEventListener('click', 
function(event){
    addMoney(event,'noa-balance', 'add-money-input') 
})

// Feni part
document.getElementById('btn-add-money2').addEventListener('click', function(event){
    addMoney(event,'feni-balance', 'add-money-input2')
})

// Quota part
document.getElementById('btn-add-money3').addEventListener('click', function(event){
    addMoney(event, 'quota-balance', 'add-money-input3')
})


document.getElementById('close-modal-btn').addEventListener('click', function() {
    document.getElementById('my_modal_5').close();
});