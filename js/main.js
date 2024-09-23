document.getElementById('btn-donate-noa').addEventListener('click', function () {
    const inputNumber = getInputFieldValueById('input-donate-noa');

    // Check donation amount validation
    if (isNaN(inputNumber)) {
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-noa').value = '';
        return;
    }

    const totalDonationNum = getTextValueByID('total-donation-noa');

    const totalBalanceNum = getTextValueByID('balance')

    // Check greater donation from balance
    if (inputNumber > totalBalanceNum) {
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-noa').value = '';
        return;
    }

    // Total Donation Calculation
    const finalDonation = totalDonationNum + inputNumber;
    document.getElementById('total-donation-noa').innerText = finalDonation;

    // Balance Calculation
    const finalBalance = totalBalanceNum - inputNumber;
    document.getElementById('balance').innerText = finalBalance;

    // different work
    // different work
    alert("Donation Added");
    // different work
    // different work
    
    document.getElementById('input-donate-noa').value = '';

    // Add donate History
    historyAdding('Flood at Noakhali',inputNumber);

})

// Show Sections start
document.getElementById('btn-donation').addEventListener('click', function () {
    showSectionById('donationCards');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]');
})

document.getElementById('btn-history').addEventListener('click', function () {
    showSectionById('historySection');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
})
// Show Sections end

