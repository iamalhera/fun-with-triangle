const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const calculateHypotenuseButton = document.querySelector("#calculate-hypotenuse-button");
const output = document.querySelector("#output");

function calculateButtonHandler(){
    const firstSideNum = Number(firstSide.value);
    const secondSideNum = Number(secondSide.value);

    const lengthOfHypotenuse = Math.sqrt((firstSideNum*firstSideNum)+(secondSideNum*secondSideNum));
    output.innerText = "The value of Hypotenuse is : "+ lengthOfHypotenuse ;
}

calculateHypotenuseButton.addEventListener("click",calculateButtonHandler);