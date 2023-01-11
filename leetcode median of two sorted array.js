/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b) => a - b);
    if(arr.length % 2 === 0){
        console.log("even")
        console.log(arr)
        let middle = Math.trunc(arr.length / 2);
        let ans = arr[middle] + arr[middle - 1];
        return ans / 2;
    }
    else{
        console.log("odd");
        console.log(arr)
        let middle = Math.trunc(arr.length / 2);
        return arr[middle];
    }
    
};
