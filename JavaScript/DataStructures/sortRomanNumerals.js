function sortRoman(names) {
    // Write your code here
    if(names.length < 2) { return names };
    let pivot = names[0];
    let right = [];
    let left = [];
    
    for(let i = 1; i < names.length; i++) {
        if(lessThan(names[i], pivot)) {
            left.push(names[i]);
        } else {
            right.push(names[i]);
        }
    }
    console.log(left);
    console.log(right);
    return sortRoman(left).concat([pivot]).concat(sortRoman(right));
}

function lessThan(n1, n2) {
    let word1 = n1.split(" ")[0];
    let num1 = n1.split(" ")[1];
    let word2 = n2.split(" ")[0];
    let num2 = n2.split(" ")[1];

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    if(word1 === word2) {
        if(addition(num1, num2)) {
            return true;
        }
        return false;
    }

    for(let i = 0; i < word1.length; i++) {
        if(alphabet.indexOf(word1[i].toLowerCase()) < alphabet.indexOf(word2[i].toLowerCase())) {
            return true;
        } else if(alphabet.indexOf(word1[i].toLowerCase()) > alphabet.indexOf(word2[i].toLowerCase())) {
            return false;
        }
    }
}

function addition(a, b) {
    let obj = {
       "I" : 1,
       "II" : 2,
       "III" : 3,
       "IV" : 4,
       "V" : 5,
       "VI" : 6,
       "VII" : 7,
       "VIII" : 8,
       "IX" : 9,
       "X" : 10,
       "XX" : 20,
       "XXX" : 30,
       "XL" : 40,
       "L" : 50
    }
    let sum1 = 0;
    let sum2 = 0;
   
    for(let i = 0; i < a.length; i++) {
        if(a[i] === "I" && (a[i + 1] === "V" || a[i + 1] === "X")) {
            sum1 += (obj[(a[i + 1])] - obj[(a[i])]);
            i += 1;
        } else if(a[i] === "X" && a[i + 1] === "L" ) {
            sum1 += (obj[(a[i + 1])] - obj[(a[i])]);
            i += 1;
        } else {
            sum1 += obj[a[i]];
        }
    }
    for(let j = 0; j < b.length; j++) {
        if(b[j] === "I" && (b[j + 1] === "V" || b[j + 1] === "X")) {
            sum2 += (obj[(b[j + 1])] - obj[(b[j])]);
            j += 1;
        } else if(b[j] === "X" && b[j + 1] === "L" ) {
            sum2 += (obj[(b[j + 1])] - obj[(b[j])]);
            j += 1;
        } else {
            sum2 += obj[b[j]];
        }
    }
    if(sum1 < sum2) {
        return true;
    }
    return false;
}

// console.log(sortRoman(['David IX', 'Mary XV', 'Masy XIII', 'Mary XX']));
console.log(sortRoman(['Steven XL', 'Steven XVI', 'David IX', 'Mary XV', 'Masy XIII', 'Mary XX']));
// console.log(sortRoman(['Mary XV', 'Masy XIII', 'Mary XX']));