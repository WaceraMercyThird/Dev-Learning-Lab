var removeDuplicate = (nums) => {
    const unique = [...new Set(nums)];
    nums.splice(0, unique.length, ...unique);
    return unique.length;
};

var reDuplicates = (nums) => {
    const unique = nums.filter((n, i) => i === 0 || n !== nums[i - 1]);
    nums.splice(0, unique.length, ...unique);
    return unique;
};
var removeDup = (n) => {
    return [...new Set(n)];
};


console.log(removeDuplicate([0,1,1,1,9,2,1])); 
console.log(removeDup([0,1,1,1,9,2,1])); 
console.log(reDuplicates([0,1,1,1,9,2,1])); 
