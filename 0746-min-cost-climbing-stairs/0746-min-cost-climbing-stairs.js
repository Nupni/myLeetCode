/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const c = cost
    const n = c.length
    let step1 = c[0];
    let step2 = c[1];
    
    for (let i = 2; i < n; i++) {
        if (i % 2) {
            step2 = Math.min(step2 + c[i], step1 + c[i]);
        } else {
            step1 = Math.min(step1 + c[i], step2 + c[i]);
        }
    }

    return Math.min(step1, step2);
};