const listData = require('../jsonData/lists');
const problem2 = require('../callback2');


function cb(id) {
    return listData[id];
}

problem2(cb,"def453ed").then((res) =>{
       console.log(res);
});
