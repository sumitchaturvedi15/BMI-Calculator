const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please provide a valid height';
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please provide a valid weight';
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const displayType=function(bmi){
        if(bmi<18.6){
            return "Underweight"
        }
        else if(bmi<24.9){
            return "Normal Weight"
        }
        else{
            return "Overweight"
        }
    }
    results.innerHTML = `<span>Your BMI is ${bmi} & you are ${displayType(bmi)}</span>`;
});
