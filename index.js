// 1. Function calculate power

function circuitPower(voltage, current) {
    return voltage * current;
}


function showCircuitPower() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const power = circuitPower(voltage, current);
    document.getElementById('powerOutput').innerText = `Power: ${power}`;
}



// 2. Function for maximum number in an array

function findMaxNumber(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}

function showMaxNumber() {
    const numbers = document.getElementById('maxNumbersInput').value.split(',').map(Number);
    const maxNumber = findMaxNumber(numbers);
    document.getElementById('maxNumberOutput').innerText = maxNumber !== null ? `Max number: ${maxNumber}` : 'Array is empty';
}



// 3. Function merge two arrays

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

function showMergedArrays() {
    const array1 = document.getElementById('array1Input').value.split(',').map(item => item.trim());
    const array2 = document.getElementById('array2Input').value.split(',').map(item => item.trim());
    const mergedArray = mergeArrays(array1, array2);
    document.getElementById('mergedArrayOutput').innerText = `Merged array: [${mergedArray}]`;
}


// 4. Function for return values in an array


function arrayValuesTypes(arr) {
    return arr.map(item => typeof item);
}

function showArrayValuesTypes() {
    const values = document.getElementById('valuesTypesInput').value.split(',').map(item => eval(item.trim()));
    const types = arrayValuesTypes(values);
    document.getElementById('valuesTypesOutput').innerText = `Types: [${types}]`;
}
