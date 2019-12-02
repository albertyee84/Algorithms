function countingSort(arr, max) {
    if(arr.length < 2) return arr;
    let result = [];
    let counters = new Array(max + 1).fill(0); //initialize new hash of max long with each element as 0;

    for (let i = 0; i < arr.length; i++) { //for each element in arr, increate count at index i by one
        counters[arr[i]]++;
    }

    for (let j = 0 ; j < counters.length; j++) { //for each element in counter, push i and decrease count while index is > 0
        while(counters[j] > 0){
            result.push(j);
            counters[j]--;
        }
    }

    return result;

}

module.exports = {
    countingSort
};