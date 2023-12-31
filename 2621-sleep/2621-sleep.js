/**
 * @param {number} millis
 */
async function sleep(millis) {
    const wait = new Promise(resolve => setTimeout(resolve, millis));
    return wait
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */