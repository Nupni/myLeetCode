/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function(total, cost1, cost2) {
    const pen = cost1
    const pencil = cost2
    let cash = total
    let result = 0
    // let ways = []

    // if(cash < pencil && cash < pen) {
    //     result++
    //     return result
    // }

    // while(cash >= 0) {
    //     ways.push(cash)
    //     cash -= pen
    // }

    // for(let v of ways) {
    //     let cash = v
    //     while(cash >= 0) {
    //         result++
    //         cash -= pencil
    //     }
    // }

    // return result

    for(let i = 0; i <= cash / pen; i++) {
        let buyPen = cash - (i * pen)
        let buyPencil = (buyPen / pencil)
        result += Math.trunc(buyPencil + 1)
    }

    return result
};