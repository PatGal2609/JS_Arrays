function task1() {
    let arr = [4, 16, 36, 25, 91];
    let sumArr = arr.reduce(function(sum,elem) {
        if (elem % 2 == 0) sum += Math.sqrt(elem);
        return sum;
    }, 0);
    console.log(sumArr);
}
task1();

let a = [-5, 2, 9, -15, 8, 25, 4, 7];
function taks2() {
    let arr = [-5, 2, 9, -15, 8, 25, 4, 7];
    let sumAr = arr.reduce(function(sum, elem) {
        if (elem > 0 && elem < 10) sum += elem;
        return sum;
    }, 0);
    console.log(sumAr);
}

taks2();

function taks3() {
    let arr = [2, 6, 8, 3, 22, 44, 36];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0)
            return false;
    }
         return true; 
}

console.log(taks3());

function taks4() {
    let arr = [1, 2, 5, 10, 15, 21];
    let newarr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0) {
            newarr.push(i);
        }
    }
    return newarr;
}

console.log(taks4());

function taks5() {
    let arr = [ 1, 5, 9, 15, 45, 32, 23];
    let sumarr = arr.reduce(function(sum, elem) {
        sum += elem;
        sum = sum / arr.length + 1;
        return sum.toFixed(1);
    }, 0);
    console.log(sumarr);
}

taks5();