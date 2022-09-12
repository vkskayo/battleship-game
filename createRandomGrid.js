var matrix = [];
var forbidPosition = [];
var componentsSize1 = [1, 4];
var componentsSize2 = [2, 3];
var componentsSize3 = [3, 2];
var componentsSize4 = [4, 1];

for(var i=0; i<10; i++) {
    matrix[i] = new Array(10);
}

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        matrix[i][j] = 0;
    }
}


drawOneComponent(componentsSize1, matrix, forbidPosition);

let myString = "";
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        myString += matrix[i][j];
    }
    myString += "\n";
}

console.log(myString);



function drawOneComponent(componentsSize1, matrix, forbidPosition){
    while(componentsSize1[1] > 0){
        let randomNum1 = Math.floor(Math.random() * 10);
        let randomNum2 = Math.floor(Math.random() * 10);
        if(!(containArray(forbidPosition, [randomNum1, randomNum2]))){
            forbidPosition.push([randomNum1, randomNum2]);
            if(randomNum1 < 9 && randomNum1 > 0){
                forbidPosition.push([randomNum1 + 1, randomNum2]);
                forbidPosition.push([randomNum1 - 1, randomNum2]);
            }else if(randomNum1 < 9){
                forbidPosition.push([randomNum1 + 1, randomNum2]);
            }else if(randomNum1 > 0){
                forbidPosition.push([randomNum1 - 1, randomNum2]);
            }
    
            if(randomNum2 < 9 && randomNum2 > 0){
                forbidPosition.push([randomNum1, randomNum2 + 1]);
                forbidPosition.push([randomNum1, randomNum2 - 1]);
            }else if(randomNum2 < 9){
                forbidPosition.push([randomNum1, randomNum2 + 1]);
            }else if(randomNum2 > 0){
                forbidPosition.push([randomNum1, randomNum2 - 1]);
            }
    
             if((randomNum1 < 9 && randomNum2 < 9) && (randomNum1 > 0 && randomNum2 > 0)){
                forbidPosition.push([randomNum1 + 1, randomNum2 + 1]);
                forbidPosition.push([randomNum1 - 1, randomNum2 - 1]);
                forbidPosition.push([randomNum1 + 1, randomNum2 - 1]);
                forbidPosition.push([randomNum1 - 1, randomNum2 + 1]);
            }else if((randomNum1 < 9 && randomNum2 < 9) && randomNum1 > 0){
                forbidPosition.push([randomNum1 + 1, randomNum2 + 1]);
                forbidPosition.push([randomNum1 - 1, randomNum2 + 1]);
    
            }else if((randomNum1 < 9 && randomNum2 < 9) && randomNum2 > 0){
                forbidPosition.push([randomNum1 + 1, randomNum2 + 1]);
                forbidPosition.push([randomNum1 + 1, randomNum2 - 1]);
            }else if((randomNum1 > 0 && randomNum2 > 0) && randomNum1 < 9){
                forbidPosition.push([randomNum1 - 1, randomNum2 - 1]);
                forbidPosition.push([randomNum1 + 1, randomNum2 - 1]);
    
            }else if((randomNum1 > 0 && randomNum2 > 0) && randomNum2 < 9){
                forbidPosition.push([randomNum1 - 1, randomNum2 - 1]);
                forbidPosition.push([randomNum1 - 1, randomNum2 + 1]);
            }else if(!(randomNum1 > 0 || randomNum2 > 0)){
                forbidPosition.push([randomNum1 + 1, randomNum2 + 1]);
            }else if(!(randomNum1 < 9 || randomNum2 < 9)){
                forbidPosition.push([randomNum1 - 1, randomNum2 - 1]);
            } 
    
            matrix[randomNum1][randomNum2] = componentsSize1[0];
            componentsSize1[1]--;
        }  
    }
} 

function containArray(forbidArray, arr){
    if(forbidArray.some((e)=>{
        return JSON.stringify(e) == JSON.stringify(arr)
    })){
        return true;
    }else {
        return false;
    }
}

