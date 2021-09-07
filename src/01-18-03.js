/**
 * @param {string} s
 * @return {number}
 * @des 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
*/
 var lengthOfLongestSubstring = function(s) {
    const occ = new Set()
    const n = s.length
    /* l,r 左右指针 */
    let r = 0
    let res = 0
    for (let l = 0; l < n; l++) {
        if (l !== 0) {
            occ.delete(s[l - 1])
        }
        while (r < n && !occ.has(s[r])) {
            occ.add(s[r])
            r++
        }
        res = Math.max(res, r - l)
    }
    return res
};

lengthOfLongestSubstring("pwwkew")

