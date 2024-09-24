// Card 1 functionality start

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
    if (inputNumber > totalBalanceNum || inputNumber < 1) {
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

    // Modal PopUp
    my_modal_5.showModal();

    document.getElementById('input-donate-noa').value = '';

    // Add donate History
    historyAdding('Flood at Noakhali', inputNumber);



})

// Card 1 functionality end


// Card 2 functionality start

document.getElementById('btn-donate-feni').addEventListener('click', function () {
    const inputNumber = getInputFieldValueById('input-donate-feni');

    // Check donation amount validation
    if (isNaN(inputNumber)) {
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-feni').value = '';
        return;
    }

    const totalDonationNum = getTextValueByID('total-donation-feni');

    const totalBalanceNum = getTextValueByID('balance')

    // Check greater donation from balance
    if (inputNumber > totalBalanceNum || inputNumber < 1) {
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-feni').value = '';
        return;
    }

    // Total Donation Calculation
    const finalDonation = totalDonationNum + inputNumber;
    document.getElementById('total-donation-feni').innerText = finalDonation;

    // Balance Calculation
    const finalBalance = totalBalanceNum - inputNumber;
    document.getElementById('balance').innerText = finalBalance;


    // Modal PopUp
    my_modal_5.showModal();

    document.getElementById('input-donate-feni').value = '';

    // Add donate History
    historyAdding('Flood Relief in Feni', inputNumber);

})

// Card 2 functionality end


// Card 3 functionality start

document.getElementById('btn-donate-protest').addEventListener('click', function () {
    const inputNumber = getInputFieldValueById('input-donate-protest');

    // Check donation amount validation
    if (isNaN(inputNumber)) {
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-protest').value = '';
        return;
    }

    const totalDonationNum = getTextValueByID('total-donation-protest');

    const totalBalanceNum = getTextValueByID('balance')

    // Check greater donation from balance
    if (inputNumber > totalBalanceNum || inputNumber < 1) {
        alert("Invalid Donation Amount.");
        document.getElementById('input-donate-protest').value = '';
        return;
    }

    // Total Donation Calculation
    const finalDonation = totalDonationNum + inputNumber;
    document.getElementById('total-donation-protest').innerText = finalDonation;

    // Balance Calculation
    const finalBalance = totalBalanceNum - inputNumber;
    document.getElementById('balance').innerText = finalBalance;


    // Modal PopUp
    my_modal_5.showModal();

    document.getElementById('input-donate-protest').value = '';

    // Add donate History
    historyAdding('Aid for Injured in the Quota Movement', inputNumber);

})

// Card 3 functionality end


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


// Navigate Blog page
document.getElementById('blog-page').addEventListener('click', function () {
    window.location.href = './blog.html';
})
