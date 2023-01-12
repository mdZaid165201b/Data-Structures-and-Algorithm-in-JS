/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var searchRange = function (nums, target) {
    let indexes = [nums.indexOf(target),nums.lastIndexOf(target)];
    return indexes;
};
