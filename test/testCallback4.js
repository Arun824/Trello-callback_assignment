const boardsFunction = require("../callback1");
const listsFunction = require("../callback2");
const cardsFunction = require("../callback3");
const problem4 = require("../callback4");

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
    for (list of listsData[id]) {
        return list["name"] === "Mind" ? cardsData[list.id] : null;
    }
}


problem4(boardsFunction, listsFunction, cardsFunction, cbCards, cbLists, cbBoards, "def453ed");