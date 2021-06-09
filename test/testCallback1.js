const boardData = require('../jsonData/boards');
const problem1 = require('../callback1');


function cb(id) {
    return boardData.id === id ? boardData : null;
}

problem1(cb,"def453ed").then((res) =>{
       console.log(res);
});