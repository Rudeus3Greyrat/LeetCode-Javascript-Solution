/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length === 1) {
      return nums;
    }
    if (nums.length === 2) {
      return nums.reverse();
    }
    let flag = false;
    for (let i = nums.length - 1; i - 1 >= 0; i--) {
      if (nums[i] > nums[i - 1]) {
        flag = true;
        for (let j = nums.length - 1; j >= i; j--) {
          if (nums[j] > nums[i - 1]) {
            [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
            let [k, l] = [nums.length - 1, i];
            while (k >= l) {
              [nums[k], nums[l]] = [nums[l], nums[k]];
              k -= 1;
              l += 1;
            }
            break;
          }
        }
        break;
      }
    }
    if (!flag) {
      nums.reverse();
    }
    return nums;
  };
  // @lc code=end
  