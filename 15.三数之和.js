/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// const { forEachOf } = require('async');

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length <= 2) {
      return [];
    }
    if (nums.length === 3) {
      if (nums.reduce((a, b) => a + b) === 0) {
        return [nums];
      } else {
        return [];
      }
    }
    const temp = new Map();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        break;
      }
      let [start, end] = [i + 1, nums.length - 1];
      while (end > start) {
        let sum = nums[i] + nums[start] + nums[end];
        if (sum === 0) {
          temp.set([nums[i], nums[start], nums[end]].toString(),[nums[i], nums[start], nums[end]]);
          start+=1;
        } else if (sum < 0) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
    const arr = [...temp.values()];
    return arr;
  };
  // @lc code=end  