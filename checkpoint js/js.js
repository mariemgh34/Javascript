// String Manipulation Functions
ch="hello world"
function reverseString(ch) {
    
    var rv="";
    for (let i = ch.length - 1; i >= 0; i--) {
        rv=rv+ch[i]
        
    }
    return rv
    
}
console.log(reverseString(ch))


var sumc=ch.length;
console.log(sumc)


st="hello world javascript"
function capitalizeWords(st) {
    return st.split(" ").map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords(st))

// Array Functions

function findMax(tab) {
    var max = tab[0];

    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }

    return max;
}

function findMin(tab) {
    var min = tab[0];

    for (let i = 1; i < tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
    }

    return min;
}

console.log(findMax([4, 6, 9, 5, 7])); 
console.log(findMin([5, 7, 1, 8, 9])); 



function sumArray(tab) {
    var s = 0;

    for (let i = 0; i < tab.length; i++) {
        s = s + tab[i];
    }

    return s;
}

console.log(sumArray([1, 2, 3, 4, 5]));



function filterArray(tab) {
    var res = [];

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > 0) {
            res.push(tab[i]);
        }
    }

    return res;
}

console.log(filterArray([5, 7, 0, 9, 8, -1]));


// Mathematical Functions


function factorial(n) {
    let res = 1;

    for (let i = 1; i <= n; i++) {
        res = res * i;
    }

    return res;
}

console.log(factorial(10)); 

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(10)); 
console.log(isPrime(3)); 




function fibonacci(n) {
    let res = [0, 1];

    for (let i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }

    return res;
}

console.log(fibonacci(4));

