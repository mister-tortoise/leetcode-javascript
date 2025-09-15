/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    let mapTemp = new Map()
    for (let i = 0; i < nums.length; i++) {
        const check = target - nums[i];
        if (mapTemp.has(check)) {
            return [mapTemp.get(check), i]
        }
        mapTemp.set(nums[i], i);
    }
    return []
};
module.exports = twoSum;