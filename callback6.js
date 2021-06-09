function problem6(boardsFunction, listsFunction, cardsFunction, cbCards, cbLists, cbBoards, id) {
    setTimeout(() => {
        boardsFunction(cbBoards, id).then(res => {
            console.log(res);
        });
    }, 2000)

    setTimeout(() => {
        listsFunction(cbLists, id).then(res => {
            console.log(res);
        })
    }, 3000)

    setTimeout(() => {
        cardsFunction(cbCards, id).then(res => {
            console.log(res);
        });
    }, 4000)

}

module.exports = problem6;