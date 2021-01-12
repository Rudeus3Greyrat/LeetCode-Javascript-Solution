/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (m.has(nums[i])) {
        nums.splice(i, 1);
        i -= 1;
      } else {
        m.set(nums[i], nums[i]);
      }
    }
    return nums.length;
  };
  // @lc code=end  