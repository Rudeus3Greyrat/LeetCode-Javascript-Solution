/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) {
      return [];
    }
    if (nums.length === 4) {
      if (nums.reduce((a, b) => a + b) === target) {
        return [nums];
      }
    }
    nums.sort((a, b) => a - b);
    const temp=new Map()
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let [start,end]=[j+1,nums.length-1]
            while(end>start){
                if(nums[i]+nums[j]+nums[start]+nums[end]===target){
                    temp.set([nums[i],nums[j],nums[start],nums[end]].toString(),[nums[i],nums[j],nums[start],nums[end]])
                    start+=1
                }else if(nums[i]+nums[j]+nums[start]+nums[end]<target){
                    start+=1
                }else{
                    end-=1
                }
            }
        }
    }
    return [...temp.values()]
  };
  // @lc code=end  