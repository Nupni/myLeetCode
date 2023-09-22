/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = 0

    return {
        increment: () => {
            count += 1
            return init + count
        },
        decrement: () => {
            count -= 1
            return init + count
        }, 
        reset: () => {
            count = 0
            return init
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */