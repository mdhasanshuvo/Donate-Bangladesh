document.getElementById('btn-donate-noa').addEventListener('click', function(){
    const inputNumber = getInputFieldValueById('input-donate-noa');

    if(isNaN(inputNumber)){
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-noa').value = '';
        return;
    }

    const totalDonationNum = getTextValueByID('total-donation-noa');

    const totalBalanceNum = getTextValueByID('balance')

    if(inputNumber>totalBalanceNum){
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-noa').value = '';
        return;
    }

    const finalDonation = totalDonationNum + inputNumber;
    document.getElementById('total-donation-noa').innerText = finalDonation;

    const finalBalance = totalBalanceNum - inputNumber;
    document.getElementById('balance').innerText = finalBalance;
    
    // console.log(finalDonation);
})


// console.log(inputValue);