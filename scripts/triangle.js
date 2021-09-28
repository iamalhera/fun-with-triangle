const angleInputs = document.querySelectorAll(".angle-input")
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function checkTriangle(){
    const angleOneNum = Number(angleInputs[0].value);
    const angleTwoNum = Number(angleInputs[1].value);
    const angleThreeNum = Number(angleInputs[2].value);
    const sumOfAngles = angleOneNum + angleTwoNum + angleThreeNum ;
    if(sumOfAngles === 180 ){
        output.innerText = "This is a Triangle! ";
    }
    else{
        output.innerText = "This is NOT a Triangle! ";
    }
}

checkButton.addEventListener("click",checkTriangle);