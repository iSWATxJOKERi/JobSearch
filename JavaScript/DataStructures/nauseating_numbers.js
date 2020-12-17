//strange_sums

function strange_sums(arr) {
    let count = 0;
    let values = new Set(arr);
    for(let i = 0; i < arr.length; i++) {
        if(values.has(0 - arr[i]) && 0 !== arr[i]) {
            count += 1;
        }
    }
    return count / 2;
}

// console.log(strange_sums([2, -3, 3, 4, -2]))//     # 2
// console.log(strange_sums([42, 3, -1, -42]))//      # 1
// console.log(strange_sums([-5, 5]))//               # 1
// console.log(strange_sums([19, 6, -3, -20]))//      # 0
// console.log(strange_sums([9]))//                   # 0

//pair_product

function pair_product(numbers, product) {
    let values = new Set(numbers);
    for(let i = 0; i < numbers.length; i++) {
        if(values.has(product / numbers[i]) && (product / numbers[i]) !== numbers[i]) {
            return true;
        }
    }
    return false;
}

// console.log(pair_product([4, 2, 5, 8], 16))    // true
// console.log(pair_product([8, 1, 9, 3], 8))     // true
// console.log(pair_product([3, 4], 12))          // true
// console.log(pair_product([3, 4, 6, 2, 5], 12)) // true
// console.log(pair_product([4, 2, 5, 7], 16))    // false
// console.log(pair_product([8, 4, 9, 3], 8))     // false
// console.log(pair_product([3], 12))             // false

//rampant_repeats

function rampant_repeats(str, hsh) {
    let ans = "";
    for(let i = 0; i < str.length; i++) {
        if(hsh[str[i]]) {
            for(let j = 0; j < hsh[str[i]]; j++) {
                ans += str[i]
            }
        } else {
            ans += str[i]
        }
    }
    return ans;
}

// console.log(rampant_repeats('taco', {'a' : 3, 'c' : 2}))             // 'taaacco'
// console.log(rampant_repeats('feverish', {'e' : 2, 'f' : 4, 's' : 3})) // 'ffffeeveerisssh'
// console.log(rampant_repeats('misispi', {'s' : 2, 'p' : 2}))          // 'mississppi'
// console.log(rampant_repeats('faarm', {'e' : 3, 'a' : 2}))            // 'faaaarm'

//perfect_square?

function perfect_square(n) {
    let i = 0;
    while(i * i <= n) {
        if(i * i === n) {
            return true;
        }
        i += 1;
    }
    return false;
}

// console.log(perfect_square(1))     // true
// console.log(perfect_square(4))     // true
// console.log(perfect_square(64))    // true
// console.log(perfect_square(100))   // true
// console.log(perfect_square(169))   // true
// console.log(perfect_square(2))     // false
// console.log(perfect_square(40))    // false
// console.log(perfect_square(32))    // false
// console.log(perfect_square(50))    // false

//anti_prime?

function anti_prime(anti) {
    let m = helper(anti);
    for(let i = 0; i < anti; i++) {
        if(helper(i) >= m) {
            return false;
        }
    }
    return true;
}

function helper(n) {
    let count = 0;
    for(let i = 0; i <= n; i++) {
        if(n % i === 0) {
            count += 1;
        }
    }
    return count;
}

// console.log(anti_prime(24))   // true
// console.log(anti_prime(36))   // true
// console.log(anti_prime(48))   // true
// console.log(anti_prime(360))  // true
// console.log(anti_prime(1260)) // true
// console.log(anti_prime(27))   // false
// console.log(anti_prime(5))    // false
// console.log(anti_prime(100))  // false
// console.log(anti_prime(136))  // false
// console.log(anti_prime(1024)) // false

//matrix_addition

function matrix_addition(m1, m2) {
    let matrice = new Array(m1.length);
    for(let i = 0; i < matrice.length; i++) {
        matrice[i] = new Array(m1[0].length);
    }

    let j = 0;
    let k = 0;
    while(j < m1.length) {
        matrice[j][k] = m1[j][k] + m2[j][k];
        k += 1;
        if(k >= m1[j].length) {
            j += 1;
            k = 0;
        }
    }
    return matrice;
}


// let matrix_a = [[2,5], [4,7]];
// let matrix_b = [[9,1], [3,0]];
// let matrix_c = [[-1,0], [0,-1]];
// let matrix_d = [[2, -5], [7, 10], [0, 1]];
// let matrix_e = [[0 , 0], [12, 4], [6,  3]];

// console.log(matrix_addition(matrix_a, matrix_b)) // [[11, 6], [7, 7]]
// console.log(matrix_addition(matrix_a, matrix_c)) // [[1, 5], [4, 6]]
// console.log(matrix_addition(matrix_b, matrix_c)) // [[8, 1], [3, -1]]
// console.log(matrix_addition(matrix_d, matrix_e)) // [[2, -5], [19, 14], [6, 4]]

//mutual_factors

function mutual_factors(...args) {
    let arr = helper2(args[0]);

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < args.length; j++) {
            if(args[j] % arr[i] !== 0) {
                arr = arr.slice(0,i).concat(arr.slice(i + 1));
                i -= 1;
            }
        }
    }
    return arr;
}

function helper2(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

// console.log(mutual_factors(50, 30))            // [1, 2, 5, 10]
// console.log(mutual_factors(50, 30, 45, 105))   // [1, 5]
// console.log(mutual_factors(8, 4))              // [1, 2, 4]
// console.log(mutual_factors(8, 4, 10))          // [1, 2]
// console.log(mutual_factors(12, 24))            // [1, 2, 3, 4, 6, 12]
// console.log(mutual_factors(12, 24, 64))        // [1, 2, 4]
// console.log(mutual_factors(22, 44))            // [1, 2, 11, 22]
// console.log(mutual_factors(22, 44, 11))        // [1, 11]
// console.log(mutual_factors(7))                 // [1, 7]
// console.log(mutual_factors(7, 9))              // [1]

//tribonacci_number

function tribonacci_number(n) {
    if(n === 1 || n === 2) {
        return 1
    }
    if (n === 3) {
        return 2
    }
    let trib = [1, 1, 2];
    while(trib.length !== n) {
        trib.push((trib[trib.length - 1] + trib[trib.length - 2] + trib[trib.length - 3]))
    }
    return trib[trib.length - 1];
}

// console.log(tribonacci_number(1))  // 1
// console.log(tribonacci_number(2))  // 1
// console.log(tribonacci_number(3))  // 2
// console.log(tribonacci_number(4))  // 4
// console.log(tribonacci_number(5))  // 7
// console.log(tribonacci_number(6))  // 13
// console.log(tribonacci_number(7))  // 24
// console.log(tribonacci_number(11)) // 274

//matrix_addition_reloaded

function matrix_addition_reloaded(...matrices) {
    if(matrices.length < 2) {
        return matrices;
    }
    if(check(matrices)) {
        let matrix =  matrix_addition(matrices.shift(), matrices.shift());
        while(matrices.length > 0) {
            matrix = matrix_addition(matrix, matrices.shift());
        }
        return matrix;
    } else {
        return null;
    }
}

function check(m) {
    for(let i = 0; i < m.length - 1; i++) {
        if((m[i][0].length !== m[i + 1][0].length) || (m[i].length !== m[i + 1].length)) {
            return false;
        }
    }
    return true;
}


let matrix_a = [[2,5], [4,7]]
let matrix_b = [[9,1], [3,0]]
let matrix_c = [[-1,0], [0,-1]]
let matrix_d = [[2, -5], [7, 10], [0, 1]]
let matrix_e = [[0 , 0], [12, 4], [6,  3]]

// console.log(matrix_addition_reloaded(matrix_a, matrix_b))              // [[11, 6], [7, 7]]
// console.log(matrix_addition_reloaded(matrix_a, matrix_b, matrix_c))    // [[10, 6], [7, 6]]
// console.log(matrix_addition_reloaded(matrix_e))                        // [[0, 0], [12, 4], [6, 3]]
// console.log(matrix_addition_reloaded(matrix_d, matrix_e))              // [[2, -5], [19, 14], [6, 4]]
// console.log(matrix_addition_reloaded(matrix_a, matrix_b, matrix_e))    // nil
// console.log(matrix_addition_reloaded(matrix_d, matrix_e, matrix_c))    // nil

//squarocol?

function squarocol(arr) {
    for(let i = 0; i < arr.length; i++) {
        let count = 1;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i][j] === arr[i][j + 1]) {
                count += 1;
            }
        }
        if(count === arr.length) { return true };
    }
    for(let i = 0; i < arr.length; i++) {
        let count = 1;
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j][i] === arr[j + 1][i]) {
                count += 1;
            }
        }
        if(count === arr.length) { return true }; 
    }
    return false;
}

// console.log(squarocol([
//     ["a", "x" , "d"],
//     ["b", "x" , "e"],
//     ["c", "x" , "f"],
// ])) // true

// console.log(squarocol([
//     ["x", "y", "x"],
//     ["x", "z", "x"],
//     ["o", "o", "o"],
// ])) // true

// console.log(squarocol([
//     ["o", "x" , "o"],
//     ["x", "o" , "x"],
//     ["o", "x" , "o"],
// ])) // false

// console.log(squarocol([
//     [1, 2, 2, 7],
//     [1, 6, 6, 7],
//     [0, 5, 2, 7],
//     [4, 2, 9, 7],
// ])) // true

// console.log(squarocol([
//     [1, 2, 2, 7],
//     [1, 6, 6, 0],
//     [0, 5, 2, 7],
//     [4, 2, 9, 7],
// ])) // false