function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}

function getTextValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}

function showSectionById(id) {
    document.getElementById('addMoneyDiv').classList.add('hidden');
    document.getElementById('cashOutDiv').classList.add('hidden');
    document.getElementById('transactionDiv').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}