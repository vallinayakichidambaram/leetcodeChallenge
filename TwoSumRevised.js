//Hashmap or Hashfunction = key value pairs

var twoSumRevised = (nums, target) => {
    let pairs = {};
    let arr = [];

    for (let i = 0; i < nums.length; i++) {

        if (pairs[nums[i]] != undefined) {
            arr[0] = pairs[nums[i]];
            arr[1] = i;

        } else {
           // console.log(target - nums[i] , i)
            pairs[target - nums[i]] = i;
        }
    }

    return arr;
}

console.log(twoSumRevised([2,7,11,15],9));