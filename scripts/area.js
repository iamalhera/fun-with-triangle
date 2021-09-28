const sideOne = document.querySelector("#side-one");
const sideTwo = document.querySelector("#side-two");
const calculateAreaButton = document.querySelector("#calculate-area-button");
const output = document.querySelector("#output");


function calculateButtonHandler(){
    const sideOneNum = Number(sideOne.value);
    const sideTwoNum = Number(sideTwo.value);
    const area = 0.5*(sideOneNum*sideTwoNum) ;
    output.innerText = "Area of the Triangle is : " +area;
}

calculateAreaButton.addEventListener("click",calculateButtonHandler);