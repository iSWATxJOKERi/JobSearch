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

console.log(strange_sums([2, -3, 3, 4, -2]))//     # 2
console.log(strange_sums([42, 3, -1, -42]))//      # 1
console.log(strange_sums([-5, 5]))//               # 1
console.log(strange_sums([19, 6, -3, -20]))//      # 0
console.log(strange_sums([9]))//                   # 0