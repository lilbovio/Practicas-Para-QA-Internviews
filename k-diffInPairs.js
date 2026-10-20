/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export function findPairs(nums, k) {
    if (k < 0) {
        return 0;
    }

    const numsMap = new Map();
    let count = 0;

    for ( let num of nums) {
        numsMap.set(num, (numsMap.get(num) || 0) + 1);
    }

    for ( let [num, freq] of numsMap) {
        if ( k === 0 ) {
            if ( freq > 1 ) {
                count++;
            }
        } else {
            if ( numsMap.has(num + k) ) {
                count++;
            }
        }
    }

    return count;
};