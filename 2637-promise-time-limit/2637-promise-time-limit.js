/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        try {
            return new Promise(async (resolve, reject) => {
                setTimeout(() => reject("Time Limit Exceeded"), t);
                try {
                    const result = await fn(...args);
                    resolve(result);
                } catch (err) {
                    return reject(err);
                }
            })
        } catch(err) {
            return err;
        }
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */