function problem4(boardsFunction,listsFunction, cardsFunction, cbCards, cbLists, cbBoards, id) {

        boardsFunction(cbBoards, id).then(console.log);

         listsFunction(cbLists, id).then(res => {
            console.log(res);
         })
         
          cardsFunction(cbCards, id).then(res => {
              console.log(res);
          });
}

module.exports = problem4;