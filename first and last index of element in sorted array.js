/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



// Not a best approach 

const getIndexes = (start, end, nextIndex, target, nums) => {
    for (let i = start; i < end; i++) {
        if (nums[i] === target) {
            for (let j = i; j < middle; j++) {
                if (nums[j] === target) {
                    nextIndex = j;
                    break;
                }
            }
            return [i, nextIndex];
        }
        return [-1, -1];
    }
}

var searchRange = function (nums, target) {

    let middle = Math.trunc(nums.length / 2);
    
    let nextIndex = middle;
    if (target === nums[middle]) {
        // nextIndex = middle;
        for (let j = middle+1; j < nums.length; j++) {
            if (nums[j] === target) {
                nextIndex = j;
                break;
            }
        }
        console.log([middle, nextIndex])
        return [middle, nextIndex];
    }
    else if (nums[middle] <= target) {
        return getIndexes(0, middle, nextIndex, target, nums);
    }
    else if (nums[middle] >= target) {

        return getIndexes(middle, nums.length, nextIndex, target, nums);
    }

    else {
        return [-1, -1];
    }
};
