AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

const portfolio = [

    animalHangman = {
        name: "Animal Hangman",
        url: "https://onieronaut.github.io/Word-Guess-Game/",
        github: "https://github.com/onieronaut/Word-Guess-Game",
        target: "animalhangman",
        description: "Hangman with an animal theme! Type letters on your keyboard to guess.",
        image: "assets/images/animalhangman.jpg"

    },

    pokemonRPG = {
        name: "Pokemon RPG",
        url: "https://onieronaut.github.io/RPG-Game/",
        github: "https://github.com/onieronaut/RPG-Game",
        target: "pokemonrpg",
        description: "A Pokemon themed RPG! Click to navigate through the game.",
        image: "assets/images/pokemonrpg.png"

    },

    crystalCollector = {
        name: "Crystal Collector",
        url: "https://onieronaut.github.io/unit-4-game/",
        github: "https://github.com/onieronaut/unit-4-game",
        target: "crystalcollector",
        description: "Try to reach the target value by clicking on crystals in a certain order!",
        image: "assets/images/crystalcollector.png"
    },

    universalTrivia = {
        name: "Universal Trivia",
        url: "https://onieronaut.github.io/TriviaGame/",
        github: "https://github.com/onieronaut/TriviaGame",
        target: "universaltrivia",
        description: "Astronomy based trivia!",
        image: "assets/images/universaltrivia.png"
    },

    giphyComedians = {
        name: "Giphy Comedians",
        url: "https://onieronaut.github.io/GiphyProject/",
        github: "https://github.com/onieronaut/GiphyProject",
        target: "giphycomedians",
        description: "Search for GIFs of your favorite comedians!",
        image: "assets/images/giphycomedians.png"

    },

    trainScheduler = {
        name: "Train Scheduler",
        url: "https://onieronaut.github.io/TrainScheduler/",
        github: "https://github.com/onieronaut/TrainScheduler",
        target: "trainscheduler",
        description: "A demonstration of server side storage functionality and the Momentjs library",
        image: "assets/images/trainscheduler.png"
    },

    spaceBnb = {
        name: "SpaceBnB",
        url: "https://onieronaut.github.io/Project1/",
        github: "https://github.com/onieronaut/Project1",
        target: "spacebnb",
        description: "A group project showcasing a mock travel site for the Star Wars universe.",
        image: "assets/images/spacebnb.png"
    },

    liri = {
        name: "LIRI",
        url: "https://github.com/onieronaut/liri-node-app",
        github: "https://github.com/onieronaut/liri-node-app",
        target: "liri",
        description: "My first Node.js application that allows a user to either search for movie information, song information, or upcoming tour dates for a given band.",
        image: "assets/images/liri.png"
    }
]

createPortfolio();
createModals();


$(document).on("click", ".link", function() {
    window.location = $(this).attr("url");
});

function createPortfolio() {

    for (let i = 0; i < portfolio.length; i++) {

        let addNewPortfolio = $("<div>").addClass("col-sm-4");
        let newPortfolioHeader = $("<div>").addClass("imageHeader").text(portfolio[i].name).attr("data-aos", "fade-down");
        let newPortfolioImage = $("<img>").addClass("portfolioImage").attr({
            src: portfolio[i].image,
            height: 250,
            width: 250,
            "data-toggle": "modal",
            "data-target": `#${portfolio[i].target}`,
            "data-aos": "fade-up"
        });
        addNewPortfolio.append(newPortfolioHeader);
        addNewPortfolio.append(newPortfolioImage);
        $(".portfolioImages").append(addNewPortfolio);
    }

}


function createModals() {

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
        let newModalBody = $("<div>").addClass("modal-body").text(portfolio[i].description);
        let newModalFooter = $("<div>").addClass("modal-footer");
        let newModalLink = $("<button>").addClass("btn btn-primary link").text("Visit Website").attr({
            type: "button",
            url: portfolio[i].url
        })
        let newModalLink2 = $("<button>").addClass("btn btn-primary link").text("GitHub").attr({
            type: "button",
            url: portfolio[i].github
        })
        let newModalClose = $("<button>").addClass("btn btn-primary").text("Close").attr({
            type: "button",
            "data-dismiss": "modal"
        });

        newModalFooter.append(
            newModalLink,
            newModalLink2,
            newModalClose
            );
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
}