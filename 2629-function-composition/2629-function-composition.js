/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let result = x;
        for(let i = 0; i < functions.length; i++) {
            const f = functions[functions.length - (i + 1)]
            result = f(result)
        } 
        return result
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */