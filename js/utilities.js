// input field to number function
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}


// Html tag to number function
function getTextValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}


// Show Sections function
function showSectionById(id) {
    document.getElementById('donationCards').classList.add('hidden');
    document.getElementById('historySection').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
}


// Add donate History Function
function historyAdding(where,money) {
    const history = document.getElementById('historySection');
    const historyDiv = document.createElement('div');
    const currentTime = new Date();
    historyDiv.innerHTML = `
    <div class = "border p-8 rounded-xl space-y-4" >
        <h3 class = "text-xl font-bold text-[#111]">
            ${money} Taka is Donate for ${where}, Bangladesh.
        </h3>
        <p class="text-base font-light">Date: ${currentTime}</p>
    </div>
    `
    history.appendChild(historyDiv);
}
