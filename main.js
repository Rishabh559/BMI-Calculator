
// get the age input data
const inputAge = document.querySelector("#age");

// get the gender input data
const inputGender = document.querySelector("#gender");

// get the weight input data
const inputWeight = document.querySelector("#weight");

// get the height input data
const inputHeight = document.querySelector("#height");

// get the height length type input data
const inputHeightType = document.querySelector("#length-type");

// get the submit button
const submitBtn = document.querySelector("#submit-btn");

// get the clear button
const clearBtn = document.querySelector("#clear-btn");

// get the bmi output box
const bmiOutputBox = document.querySelector("#bmi-output");

// get my-bmi for show bmi
const myBmiOutput = document.querySelector("#my-bmi");

// get aboutYourFitness for showing Fitness details
const aboutYourFitness = document.querySelector("#aboutYourFitness");


// calculate BMI function
const calculateBmi = () =>{

    // get the value from age input data
    const textAge = inputAge.value;
    const age = parseInt(textAge);

    // get the value from gender input data
    const gender = inputGender.value;

    // get the value from weight input data
    const textWeight = inputWeight.value;
    const weight = parseInt(textWeight);

    // get the value from height input data
    const textHeight = inputHeight.value;
    let height = parseFloat(textHeight);

    // get the value from height type input data
    const textHeightType = inputHeightType.value;

//---------------------------------------------All functions-------------------------------------------------//

    // height converter function
    const heightConverter = () => {
        // change the height type into meter
        // centimeter to meter
        if(textHeightType == "cm"){
            height /= 100;
        }
        // inch to meter
        else if(textHeightType == "in"){
            height /= 39.3700787;
        }
        // meter to meter
        else{
            height = height;
        }
    };


    // intialize function for check fitness
    const fitness = () => {
        // display bmioutput box
        bmiOutputBox.style = "display: flex";

        if(BMI < 18.5){
            myBmiOutput.textContent = `Your BMI is : ${BMI}`;
            aboutYourFitness.textContent = "You are Underweight.";
        }
        else if(BMI >= 18.5 && BMI <= 24.9){
            myBmiOutput.textContent = `Your BMI is : ${BMI}`;
            aboutYourFitness.textContent = "You are Fit.";
        }
        else{
            myBmiOutput.textContent = `Your BMI is : ${BMI}`;
            aboutYourFitness.textContent = "You are Overweight.";
        }
    };


//-----------------------------------------------------------------------------------------------------------//

    // calling height converter function
    heightConverter();

    // calculate BMI
    let BMI = weight / (height*height);
    BMI = BMI.toFixed(2);

    // calling fitness checker function
    fitness();
}

// clear value from all input boxes function
const clearData = () => {
    // clear age input box
    inputAge.value = "";

    // clear gender input box
    inputGender.value = "male";

    // clear weight input box
    inputWeight.value = "";

    // clear height input box
    inputHeight.value = "";

    // clear height length input box
    inputHeightType.value = "m";

    // display none bmioutput box
    bmiOutputBox.style = "display: none";
}

// add click eventListner on submit button
submitBtn.addEventListener('click', calculateBmi);

// add click eventListner in clear button
clearBtn.addEventListener('click', clearData);