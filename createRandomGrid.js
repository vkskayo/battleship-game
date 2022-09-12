var matrix = [];
var forbidPosition = [];
var componentsSize1 = [1, 4];
var componentsSize2 = [2, 3];
var componentsSize3 = [3, 2];
var componentsSize4 = [4, 1];

 /*([x,y] é diferente em cada linha)

 ComponentSize1 = [x, y];
 ComponentSize2 = [x, y] e [z, m]. Onde [z, m] pode ser: [x + 1, y], [x, y + 1], [x - 1, y] e [x, y - 1]
 ComponentSize3 = ComponentSize2 e [x, y]
 ComponentSize4 = ComponentSize3 e [x,y]
  */ 
 


for(var i=0; i<10; i++) {
    matrix[i] = new Array(10);
}

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        matrix[i][j] = 0;
    }
}


createComponentSize1(componentsSize1, matrix, forbidPosition);
createComponentSize2(componentsSize2, matrix, forbidPosition);
createComponentSize3(componentsSize3, matrix, forbidPosition);

let myString = "";
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        myString += matrix[i][j];
    }
    myString += "\n";
}

console.log(myString);

function createComponentSize3(componentsSize3, matrix, forbidPosition){
    while(componentsSize3[1] > 0){
        let randomNum1 = Math.floor(Math.random() * 10);
        let randomNum2 = Math.floor(Math.random() * 10);
        let component3 = [[randomNum1, randomNum2]];
        
        if(Math.random() >= 0.5){
            component3.push([randomNum1 + 1, randomNum2])
            component3.push([randomNum1 - 1, randomNum2])
            orientationVertical = true;
        }else {
            component3.push([randomNum1, randomNum2 + 1])
            component3.push([randomNum1, randomNum2 - 1])
            orientationVertical = false;
            
        }

        if((!(containArray(forbidPosition, component3[0])))
            && !(containArray(forbidPosition, component3[1])) &&
             !(containArray(forbidPosition, component3[2]))
            && (randomNum1 + 1 < 10 && randomNum2 + 1 < 10) && (randomNum1 - 1 > -1 && randomNum2 - 1 > -1)
              ){

            matrix[component3[0][0]][component3[0][1]] = componentsSize3[0];
            matrix[component3[1][0]][component3[1][1]] = componentsSize3[0];
            matrix[component3[2][0]][component3[2][1]] = componentsSize3[0];
            pushForbid(forbidPosition, component3[0]);
            pushForbid(forbidPosition, component3[1]);
            pushForbid(forbidPosition, component3[2]);
            componentsSize3[1]--;
        }
    }
}

function createComponentSize2(componentsSize2, matrix, forbidPosition){
    while(componentsSize2[1] > 0){
        let randomNum1 = Math.floor(Math.random() * 10);
        let randomNum2 = Math.floor(Math.random() * 10);
        let component2 = [[randomNum1, randomNum2]];
        let orientationVertical = true;
        if(Math.random() >= 0.5){
            component2.push([randomNum1 + 1, randomNum2])
            orientationVertical = true;
        }else {
            component2.push([randomNum1, randomNum2 + 1])
            orientationVertical = false;
            
        }

        if((!(containArray(forbidPosition, component2[0])))
            && !(containArray(forbidPosition, component2[1]))
            && (randomNum1 + 1 < 10 && randomNum2 + 1 < 10)){

            matrix[component2[0][0]][component2[0][1]] = componentsSize2[0];
            matrix[component2[1][0]][component2[1][1]] = componentsSize2[0];
            pushForbid(forbidPosition, component2[0]);
            pushForbid(forbidPosition, component2[1]);
            componentsSize2[1]--;
        }
    }
    
}

function createComponentSize1(componentsSize1, matrix, forbidPosition){
    while(componentsSize1[1] > 0){
        let randomNum1 = Math.floor(Math.random() * 10);
        let randomNum2 = Math.floor(Math.random() * 10);
        if(!(containArray(forbidPosition, [randomNum1, randomNum2]))){

            matrix[randomNum1][randomNum2] = componentsSize1[0];
            pushForbid(forbidPosition, [randomNum1, randomNum2]);
            componentsSize1[1]--;
        }  
    }
} 

function pushForbid(forbidPosition, [randomNum1, randomNum2]){
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

