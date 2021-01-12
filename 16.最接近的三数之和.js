/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 3) {
      return nums.reduce((a, b) => a + b);
    }
    nums.sort((a, b) => a - b);
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
      let [start, end] = [i + 1, nums.length - 1];
      while (end > start) {
        if (nums[i] + nums[start] + nums[end] === target) {
          return nums[i] + nums[start] + nums[end];
        }
        if (
          Math.abs(nums[i] + nums[start] + nums[end] - target) <
          Math.abs(ans - target)
        ) {
          ans = nums[i] + nums[start] + nums[end];
        }
        if (nums[i] + nums[start] + nums[end] < target) {
          start += 1;
        }
        if (nums[i] + nums[start] + nums[end] > target) {
          end -= 1;
        }
      }
    }
    return ans;
  };
  // @lc code=end  