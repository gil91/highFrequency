
const permute = (nums) => {
    const result = []

    const backtrack = (path, set) => {
        if (path.length === nums.length) {
            result.push(path.concat())
            return 
        }
        for (let i = 0; i < nums.length; i++) {
            if (!set.has(i)) {
                path.push(nums[i])
                set.add(i)
                backtrack(path, set)
                path.pop()
                set.delete(i)
            }
        }
    }

    backtrack([], new Set())
    return result

}

console.log(permute([1, 2, 3]));