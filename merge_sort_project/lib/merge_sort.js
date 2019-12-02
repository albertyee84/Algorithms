function merge(array1, array2) {
    let result = [];
    while(array1.length > 0 && array2.length > 0){
        if(array1[0] < array2[0]){
            result.push(array1.shift());
        } else {
            result.push(array2.shift());
        }
    }
    return result.concat(array1).concat(array2);
    //result.concat(array1, array2)
}

function mergeSort(array) {
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length /2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

module.exports = {
    merge,
    mergeSort
};

//https://open.appacademy.io/learn/swe-in-person/career-quest/merge-sort-notes

//Time Complexity: O(n log(n))
// n is the length of the input array
// We must calculate how many recursive calls we make. The number of recursive calls is the number of times we must split the array to reach the base case. Since we split in half each time, the number of recursive calls is O(log(n)).
// for example, say we had an array of length 32
// then the length would change as 32 -> 16 -> 8 -> 4 -> 2 -> 1, we have to split 5 times before reaching the base case, log(32) = 5
// in our algorithm, log(n) describes how many times we must halve n until the quantity reaches 1.
// Besides the recursive calls, we must consider the while loop within the merge function, which contributes O(n) in isolation
// We call merge in every recursive mergeSort call, so the total complexity is O(n * log(n))
// Space Complexity: O(n)
// Merge Sort is the first non-O(1) space sorting algorithm we've seen thus far.

// The larger the size of our input array, the greater the number of subarrays we must create in memory. These are not free! They each take up finite space, and we will need a new subarray for each element in the original input. Therefore, Merge Sort has a linear space complexity, O(n).

// When should we use Merge Sort?
// Unless we, the engineers, have access in advance to some unique, exploitable insight about our dataset, it turns out that O(n log n) time is the best we can do when sorting unknown datasets.

// That means that Merge Sort is fast! It's way faster than Bubble Sort, Selection Sort, and Insertion Sort. However, due to its linear space complexity, we must always weigh the tradeoff between speed and memory consumption when making the choice to use Merge Sort. Consider the following:

// If you have unlimited memory available, use it, it's fast!
// If you have a decent amount of memory available and a medium sized dataset, run some tests first, but use it!
// If you have very limited memory and you've got time to kill, maybe you should consider other options.
// If you have very limited memory and no time to kill...well, you're going to have to do some data analysis to look for some exploitable feature of the data set, but that takes human time.