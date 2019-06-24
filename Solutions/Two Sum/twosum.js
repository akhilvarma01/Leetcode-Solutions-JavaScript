##60ms solution O(n)

const twoSum = function(nums, target) {
  let hash = {};
  for(let i in nums){
    const j = target - nums[i];
    if(typeof(hash[j]) !== 'undefined'){
       return [hash[j],i];
       }
      hash[nums[i]] = i;
      }
     return hash;
 };

##32ms solution O(n)
##Updated 

twoSum = (nums,target) => {
const comp = {};
  for(let i in nums){
  if(comp[nums[i]] >=0){
  return [comp[nums[i]],i];
  }
    comp[target - nums[i]] = i;
  }
}
