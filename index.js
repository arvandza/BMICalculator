var age = document.getElementById("ageRange");
var weight = document.getElementById("weightRange");
var height = document.getElementById("heightRange");
var ageResult = document.getElementById("age-value");
var weightResult = document.getElementById("weight-value");
var heightResult = document.getElementById("height-value");
var male = document.getElementById("pria");
var female = document.getElementById("wanita");

age.oninput = showValue;
weight.oninput = showValue;
height.oninput = showValue;

function showValue(){
    ageResult.innerText = age.value;
    weightResult.innerText = weight.value;
    heightResult.innerText = height.value;
}

function countBMI(){
    var bmi = Number(weight.value) / (Number(height.value) / 100 * Number(height.value) / 100);
    let result;
    if(male.checked){
        if(bmi < 18.5){
            result = "Underweight";
        }else if(bmi >= 18.5 && bmi < 25){
            result = "Ideal";
        }else if(bmi >= 25 && bmi < 30){
            result = "Overweight";
        }else{
            result = "Obesity";
        }
    }else{
        if(bmi < 18.5){
            result = "Underweight";
        }else if(bmi >= 18.5 && bmi < 25){
            result = "Ideal";
        }else if(bmi >= 25 && bmi < 30){
            result = "Overweight";
        }else{
            result = "Obesity";
        }
    }
    const bmiResult = `${bmi.toFixed(2)}`;
    const category = `${result}`;
    document.getElementById("bmi-result").innerHTML = bmiResult;
    document.getElementById("result-title").innerHTML = category;
}