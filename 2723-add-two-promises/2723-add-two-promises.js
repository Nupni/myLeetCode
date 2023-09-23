/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const result = await Promise.all([promise1, promise2]).then((v) => {
        let sum = 0
        for(let i = 0; i < v.length; i++) {
            sum += v[i]
        }
        return sum
    })
    return result
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */