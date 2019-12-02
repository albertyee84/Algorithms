function radixSort(arr) {
    if (!Array.isArray(arr)) return null;

    let maxDigits = getMaxDigits(arr);
    for (let k = 0; k < maxDigits; k++){
        let buckets = Array.from({ length: 10 }, () => []); //Array.from creates a 2d array with length of x(10)

        for (let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k);
            buckets[digit].push(arr[i]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

function getDigitFrom(num, place){
    let divisor = Math.pow(10, place);
    return Math.floor(Math.abs(num) / divisor) % 10;
}

function getIntLength(num){
    return num.toString().length;
}

function getMaxDigits(nums){
    let max = 0;
    for (let  i = 0; i < nums.length; i++){
        max = Math.max(max, getIntLength(nums[i]));
    }
    return max;
}

module.exports = {
    radixSort
};