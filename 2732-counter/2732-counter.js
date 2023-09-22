/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let c = 0;
    return function() {
        let r = n + c
        c += 1
        return r
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */