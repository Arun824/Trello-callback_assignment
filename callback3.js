function problem3(cb, id) {
    return new Promise((resolve, request) => {
        setTimeout(() => {
            resolve(cb(id));
        }, 2000)
    })
}

module.exports = problem3;