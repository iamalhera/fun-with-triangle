const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#output");

function calculateButtonHandler(){
    const firstSideNum = Number(firstSide.value);
    const secondSideNum = Number(secondSide.value);

    const hypotenuse = Math.sqrt((firstSideNum*firstSideNum)+(secondSideNum*secondSideNum));
    output.innerText = "The value of Hypotenuse is : "+ hypotenuse ;
}

calculateButton.addEventListener("click",calculateButtonHandler);