// Write a function that takes an array of objects and a key, 
// ...and returns a new array sorted based on the values of that key in ascending order. 
function sortArr(arr, key){
    const sortArray = arr.sort( function(a ,b){
        return a[key] - b[key];
    });
    return sortArray;
}

const customers = [
    { name: 'John', age: 15},
    { name: 'Jane', age: 50},
    { name: 'Mary', age: 7},
    { name: 'Peter', age: 13}
]

const sortedArray = sortArr(customers, 'age');
console.log(sortedArray);

function mergeArr(arr1, arr2){
    let mergedArr = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }

    while( j < arr2.length){
        mergedArr.push(arr2[j]);
        j++;
    }

    // for(i < arr1.length; i++;){
    //     mergedArr.push(arr1[i]);
    // }

    const sortedMergedArr = mergedArr.sort((a, b) => a - b);

    return sortedMergedArr;
}

const firsArr = [5,6,4,2,15];
const secondArr = [20,1,3,8,9];

let mergedArr = mergeArr(secondArr, firsArr);

console.log(mergedArr);

