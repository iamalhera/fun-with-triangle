const angleInputs = document.querySelectorAll(".angle-input")
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function checkTriangle(){
    const angleOneNum = Number(angleInputs[0].value);
    const angleTwoNum = Number(angleInputs[1].value);
    const angleThreeNum = Number(angleInputs[2].value);

    if(angleOneNum<=0 || angleTwoNum<=0 || angleThreeNum<=0){
        output.innerText = "Please Enter valid angles ";
    }
    else{
      const sumOfAngles = angleOneNum + angleTwoNum + angleThreeNum ;
        if(sumOfAngles === 180 ){
            output.innerText = "This is a Triangle! ";
        }
        else{
            output.innerText = "This is NOT a Triangle! ";
        }
    }
    
}

checkButton.addEventListener("click",checkTriangle);