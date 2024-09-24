// Re usable function
function addMoney(event, balanceId, moneyInput){
    event.preventDefault();
    const addMoneyInput = document.getElementById(moneyInput).value;
    const currentBalance = document.getElementById('account-balance').innerText;
    const curBalance = parseFloat(currentBalance);
    console.log(curBalance);
    if( !isNaN(addMoneyInput) && addMoneyInput > 0  && curBalance >= addMoneyInput ){
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

        // transaction
        const p = document.createElement('p');
        p.innerText = ` ${addMoneyNumber} Taka is Donated for affected peoples at ${balanceId}`

        document.getElementById('transaction').appendChild(p);

        p.style.textAlign = 'center'; 
        p.style.fontWeight = 'bold';  
        p.style.marginTop = '20px';   
        p.style.marginBottom = '10px';
        const hr = document.createElement('hr');
        hr.style.width = '80%';   
        hr.style.margin = '10px auto';

        const transactionContainer = document.getElementById('transaction');
        transactionContainer.appendChild(hr); 
        transactionContainer.appendChild(p);

        const nowdate = new Date().toString();
        const datep = document.createElement('p');
        datep.innerText = `Date: ${nowdate}`;
        datep.style.textAlign = 'center';
        datep.style.marginTop = '10px';
        datep.style.marginBottom = '20px';
        transactionContainer.appendChild(datep);
    }

    else{
        alert('Failed to add your donation. Please insert a valid donation amount.');
    }
}

// Noakhali part
document.getElementById('btn-add-money').addEventListener('click', 
function(event){
    addMoney(event,'Noakhali,Bangladesh', 'add-money-input') 
})

// Feni part
document.getElementById('btn-add-money2').addEventListener('click', function(event){
    addMoney(event,'Feni,Bangladesh', 'add-money-input2')
})

// Quota part
document.getElementById('btn-add-money3').addEventListener('click', function(event){
    addMoney(event, 'Quota Movement,Bangladesh', 'add-money-input3')
})


document.getElementById('close-modal-btn').addEventListener('click', function() {
    document.getElementById('my_modal_5').close();
});