/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//My Initial Solution
//Learn Hashmap
var twoSum = function(nums, target) {
    let pairs = []
    for(let i=0;i<nums.length-1;i++){
        for (let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target) {
                pairs.push(i);
                pairs.push(j);
            }
        }
    }

    return(pairs)
};


console.log(twoSum([2,7,11,15],9));