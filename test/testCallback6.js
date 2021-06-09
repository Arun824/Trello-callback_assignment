const boardsFunction = require("../callback1");
const listsFunction = require("../callback2");
const cardsFunction = require("../callback3");
const problem6 = require("../callback6");

const boardsData = require("../jsonData/boards");
const cardsData = require("../jsonData/cards");
const listsData = require("../jsonData/lists");

function cbBoards(id) {
    return boardsData.id === id ? boardsData : null;
}

function cbLists(id) {
    return listsData[id];
}

function cbCards(id) {
    let result = [];
    for (list of listsData[id]) {
        result.push(cardsData[list.id]);
    }
    return result;
}


problem6(boardsFunction, listsFunction, cardsFunction, cbCards, cbLists, cbBoards, "def453ed");