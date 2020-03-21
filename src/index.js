function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr2 = "";
    let rightBr = 0;
    let leftBr = 0;
    let messArr = expr.split(" ");
    let countDiv = 0;
    let countMult = 0;
    let countAdd = 0;
    if (messArr.length == 1) {
        arr2 = messArr[0];
        arr = arr2.split("");
    } else {
        arr2 = messArr.filter(function (item) {
            return item !== "";
        });
        arr = arr2.slice();
    }
    let count1=0;
    let count2=0;
    for(let f=0;f<arr.length;f++){
        if (arr[f] == "("){
        count1++;
     }else if(arr[f] == ")"){
        count2++;   
    }
   
}
   
     if (count1 !== count2){
        throw new SyntaxError("ExpressionError: Brackets must be paired");   
    }




    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == ")") {
            rightBr = j - 1;
            arr.splice(j, 1);

            for (let k = rightBr; k >= 0; k--) {
                if (arr[k] == "(") {
                    leftBr = k;
                    rightBr--;
                    arr.splice(k, 1);
                    j = leftBr - 2;

                    for (let i = leftBr; i <= rightBr; i++) {
                        if (arr[i] == '/') {
                            arr[i - 1] = Number(arr[i - 1]) / Number(arr[i + 1]);
                            if (arr[i - 1] === Infinity) {
                                throw new SyntaxError("TypeError: Division by zero.");
                            }
                            arr.splice(i, 2);
                            i = i - 1;
                            rightBr = rightBr - 2;

                        }
                    }


                    for (i = leftBr; i <= rightBr; i++) {
                        if (arr[i] == '*') {

                            arr[i - 1] = Number(arr[i - 1]) * Number(arr[i + 1]);
                            arr.splice(i, 2);
                            i = i - 1;
                            rightBr = rightBr - 2;

                        }
                    }

                    for (i = leftBr; i <= rightBr; i++) {

                        if (arr[i] == '+') {
                            arr[i - 1] = Number(arr[i - 1]) + Number(arr[i + 1]);
                            arr.splice(i, 2);
                            i = i - 1;
                            rightBr = rightBr - 2;
                        } else if (arr[i] == '-') {

                            arr[i - 1] = Number(arr[i - 1]) - Number(arr[i + 1]);

                            arr.splice(i, 2);

                            i = i - 1;

                            rightBr = rightBr - 2;

                        }

                    }

                    break;
                }
            }
            j = 0;
        } else if (j == arr.length - 1) {
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == '/') {
                    arr[i - 1] = Number(arr[i - 1]) / Number(arr[i + 1]);
                    if (arr[i - 1] === Infinity) {
                        throw new SyntaxError("TypeError: Division by zero.");
                    }
                    arr.splice(i, 2);
                    i = i - 1;

                }
            }

            for (i = 0; i < arr.length; i++) {
                if (arr[i] == '*') {
                    arr[i - 1] = Number(arr[i - 1]) * Number(arr[i + 1]);
                    arr.splice(i, 2);
                    i = i - 1;

                }
            }
            for (i = 0; i < arr.length; i++) {
                if (arr[i] == '+') {
                    arr[i - 1] = Number(arr[i - 1]) + Number(arr[i + 1]);
                    arr.splice(i, 2);
                    i = i - 1;
                } else if (arr[i] == '-') {
                    arr[i - 1] = Number(arr[i - 1]) - Number(arr[i + 1]);
                    arr.splice(i, 2);
                    i = i - 1;
                }
            }




        }


    }


    let res = Number(arr);
    let result = res;
    return (result);







}

module.exports = {
    expressionCalculator
}