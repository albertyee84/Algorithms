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


// https://open.appacademy.io/learn/swe-in-person/career-quest/radix-sort-notes
// Time and Space Complexity Analysis
// Time Complexity
// In general, the best, average, and worst case time complexities of Radix Sort are all the same.

// Since this algorithm requires iterating over all n elements of the input array, and doing so k times, where k is the length (number of digits) of the longest integer in the array, we wind up with a run time of O(n * k). This makes Radix Sort faster than any of the previous comparison-based algorithms we've seen earlier in the course!

// However, there is actually some debate in the computer science community over this topic. There exists a camp that believes that when Radix Sort's input array contains entirely unique values, due to a characteristic of the way computers store numerical data, that k becomes log k. (See Wikipedia: Radix Sort)

// If this is true, the absolute worst case scenario becomes the case where the length of the longest integer in the input array, k, is equal to (or greater than) the total number of elements in the array, n. In this scenario, we wind up with an O(n log(k)), or approximately O(n log(n)), run time, making Radix Sort, at worst, equal in speed to our fastest comparison-based sorting algorithm.

// Though it will require some additional research, this may be a worthwhile talking point in an interview setting!

// Space Complexity
// Radix Sort is an O(n + k) space algorithm.

// The amount of memory consumed by the algorithm increases relative to both the size of the input array and the length of the longest integer.

// When should we use Radix Sort?
// You should consider using Radix sort whenever you need to:

// Sort a list of any sort of binary data, including numeric, text, or image data in binary format.
// Sort a list of integers, and you don't know the value of the largest element in the list.
// If you do know the largest element in the list, see countingSort!
// Radix Sort's run time, O(n * k), is depedendent on the length (number of digits) of the largest integer in the input, k. For this reason, it is fastest when k is relatively small.