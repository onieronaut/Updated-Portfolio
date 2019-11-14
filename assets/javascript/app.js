const portfolio = [

    animalHangman = {
        name: "Animal Hangman",
        url: "https://onieronaut.github.io/Word-Guess-Game/",
        target: "animalhangman",

    },

    pokemonRPG = {
        name: "Pokemon RPG",
        url: "https://onieronaut.github.io/RPG-Game/",
        target: "pokemonrpg",

    },

    crystalCollector = {
        name: "Crystal Collector",
        url: "https://onieronaut.github.io/unit-4-game/",
        target: "crystalcollector",

    },

    universalTrivia = {
        name: "Universal Trivia",
        url: "https://onieronaut.github.io/TriviaGame/",
        target: "universaltrivia",

    },

    giphyComedians = {
        name: "Giphy Comedians",
        url: "https://onieronaut.github.io/GiphyProject/",
        target: "giphycomedians",

    },

    trainScheduler = {
        name: "Train Scheduler",
        url: "https://onieronaut.github.io/TrainScheduler/",
        target: "trainscheduler",
    },

    spaceBnb = {
        name: "SpaceBnB",
        url: "https://onieronaut.github.io/Project1/",
        target: "spacebnb",
    }
]

createPortfolio();

function createPortfolio() {

    for (let i = 0; i < portfolio.length; i++) {

        let addNewPortfolio = $("<div>").addClass("col-sm-6 hi");
        let newPortfolioHeader = $("<div>").addClass("imageHeader").text(portfolio[i].name);
        let newPortfolioImage = $("<img>").attr({
            src: "#",
            height: 250,
            width: 250,
            "data-toggle": "modal",
            "data-target": `#${portfolio[i].target}`
        });
        addNewPortfolio.append(newPortfolioHeader);
        addNewPortfolio.append(newPortfolioImage);
        $(".portfolioImages").append(addNewPortfolio);
    }

}


for (let i = 0; i < portfolio.length; i++) {

let addNewModal = $("<div>").addClass("modal fade").attr({
    id: portfolio[i].target,
    tabindex: "-1",
    role: "dialog",
});
let newModalDialog = $("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document");
let newModalContent = $("<div>").addClass("modal-content");
let newModalHeader = $("<div>").addClass("modal-header");
let newModalTitle = $("<h5>").addClass("modal-title").text(portfolio[i].name);
let newModalX = $("<button>").addClass("close").text("X").attr({
    type: "button",
    "data-dismiss": "modal"
});
let newModalBody = $("<div>").addClass("modal-body").text("hey");
let newModalFooter = $("<div>").addClass("modal-footer");
let newModalClose = $("<button>").addClass("btn  btn-secondary").text("Close").attr({
    type: "button",
    "data-dismiss": "modal"
});

newModalFooter.append(newModalClose);
newModalHeader.append(newModalTitle);
newModalHeader.append(newModalX);
newModalContent.append(
    newModalHeader,
    newModalBody,
    newModalFooter
);
newModalDialog.append(newModalContent);
addNewModal.append(newModalDialog);
$(".mymodals").append(addNewModal);

}