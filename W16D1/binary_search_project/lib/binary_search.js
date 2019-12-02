function binarySearch(array, target) {
    if(binarySearchIndex(array, target) === -1) return false;
    return true;

}

function binarySearchIndex(array, target) {
    if(array.length < 1) return -1;
    let mid = Math.floor(array.length / 2);
    if(array[mid] === target) return mid;
    if(array[mid] > target){
        return binarySearchIndex(array.slice(0, mid), target);
    }
    let subresult = binarySearchIndex(array.slice(mid+1), target);
    if(subresult === -1) return -1;
    return subresult + mid + 1;
}


module.exports = {
    binarySearch,
    binarySearchIndex
};


//https://open.appacademy.io/learn/swe-in-person/career-quest/binary-search-notes
// Time Complexity: O(log(n))
// n is the length of the input array
// We have no loops, so we must only consider the number of recursive calls it takes to hit the base case
// The number of recursive calls is the number of times we must halve the array until it's length becomes 0. This number can be described by log(n)
// for example, say we had an array of 8 elements, n = 8
// the length would halve as 8 -> 4 -> 2 -> 1
// it takes 3 calls, log(8) = 3
// Space Complexity: O(n)
// Our implementation uses n space due to half arrays we create using slice. Note that JavaScript slice creates a new array, so it requires additional memory to be allocated.

// When should we use Binary Search?
// Use this algorithm when the input data is sorted!!! This is a heavy requirement, but if you have it,you'll have an insanely fast algorithm.