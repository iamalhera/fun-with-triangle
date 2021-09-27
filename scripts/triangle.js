const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function checkTriangle(){
    const angleOneNum = Number(angleOne.value);
    const angleTwoNum = Number(angleTwo.value);
    const angleThreeNum = Number(angleThree.value);
    const sumOfAngles = angleOneNum + angleTwoNum + angleThreeNum ;
    if(sumOfAngles === 180 ){
        output.innerText = "This is a triangle! ";
    }
    else{
        output.innerText = "This is not a triangle! ";
    }
}

checkButton.addEventListener("click",checkTriangle);