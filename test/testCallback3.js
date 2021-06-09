const cardsData = require('../jsonData/cards');
const problem3 = require('../callback3');

function cb(id) {
    return cardsData[id];
}

problem3(cb, "qwsa221").then((res) => {
    console.log(res);
});
