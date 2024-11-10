const selectedPizzas = {};// object to store the selected pizzas




function addPizza(pizzaName) {
    if (!selectedPizzas[pizzaName]) {
        selectedPizzas[pizzaName] = 0;
    }
    selectedPizzas[pizzaName]++;
    updatePizzaCounter(pizzaName);

    const modal = document.querySelector("#payment-modal");
    const modalContent = modal.querySelector(".modal-content");
    const firstPageButton = modalContent.querySelector(".nextButton");
    firstPageButton.removeAttribute("disabled");
}

function subtractPizza(pizzaName) {
    if (selectedPizzas[pizzaName] > 0) {
        selectedPizzas[pizzaName]--;
        if (selectedPizzas[pizzaName] === 0) {
            delete selectedPizzas[pizzaName];
        }
        updatePizzaCounter(pizzaName);
    }

    if (Object.keys(selectedPizzas).length === 0) {
        const modal = document.querySelector("#payment-modal");
        const modalContent = modal.querySelector(".modal-content");
        modalContent.scrollTo(0, 0);
        const firstPageButton = modalContent.querySelector(".nextButton");
        firstPageButton.setAttribute("disabled", true);

    }

}

function updatePizzaCounter(pizzaName) {
    const counter = document.getElementById(`count-${pizzaName}`);
    counter.textContent = selectedPizzas[pizzaName] || 0;
}

function createShowSelectedPizzaTable(element) {

    element.innerHTML = Object.keys(selectedPizzas).map(pizza => {
        const selectedPizza = pizzas.find(p => p.name === pizza);
        console.log(selectedPizza)
        return `
        <section class="flex">
            <div>
            <h3>${selectedPizza.name}</h3>
            <p>${selectedPizza.description}</p>
            ${selectedPizza.ingredients.join(", ")}
            </div>
            <div style="text-align: center;">
            <div class="circled"> 
                <span>${selectedPizzas[pizza]}</span>
            </div>
        </section>
        `}).join("");
}

function createPizzaTable(element) {
    element.innerHTML = pizzas.map(pizza => {
        return `
        <section class="flex">
            <div>
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            ${pizza.ingredients.join(", ")}
            </div>
            <div style="text-align: center;">
                <div class="flex">
                    <button onclick="addPizza('${pizza.name}')" >+</button>
                    <button onclick="subtractPizza('${pizza.name}')">-</button>
                </div>
                <div id="count-${pizza.name}">0</div>
            </div>
        </section>
        `
    }).join("");



}



function createCloseButton(page) {

}


function configFirstPage() {
    const modalContentWrapper = document.querySelectorAll("#payment-modal .modal-content")[0];
    const page = document.querySelectorAll("#payment-modal .modal-content div")[0];

    createPizzaTable(page.querySelector("#pizza-table"));


    const nextButton = page.querySelector(".nextButton")
    nextButton.addEventListener("click", () => {
        modalContentWrapper.scrollTo(page.scrollWidth + 4, 0);
        configSecondPage();
    });
    if (Object.keys(selectedPizzas).length === 0) {
        nextButton.setAttribute("disabled", true);
    } else {
        nextButton.removeAttribute("disabled");
    }
}
function configSecondPage() {
    const modalContentWrapper = document.querySelectorAll("#payment-modal .modal-content")[0];
    const page = document.querySelectorAll("#payment-modal .modal-content > div")[1];
    createShowSelectedPizzaTable(page.querySelector("#pizza-result-table"))

    const prevButton = page.querySelector(".prevButton")
    prevButton.addEventListener("click", () => {
        modalContentWrapper.scrollTo(0, 0);
    })

    const nextButton = page.querySelector(".nextButton")
    nextButton.addEventListener("click", () => {
        modalContentWrapper.scrollTo((page.scrollWidth + 4) * 2, 0);
        // Automatically transition to fourth page after 5 seconds
        
        setTimeout(() => {
            modalContentWrapper.scrollTo(page.scrollWidth * 3 + 12, 0);
            configFourthPage();
        }, 5000);
        
    })

}
function configThirdPage() {
    const page = document.querySelectorAll("#payment-modal .modal-content > div")[2];

}
function configFourthPage() {
    const page = document.querySelectorAll("#payment-modal .modal-content > div")[3];
    const button = page.querySelector("button");
    button.addEventListener("click", () => {
    const modal = document.querySelector("#payment-modal");
    modal.classList.remove("active");
    })
}






document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector("#payment-modal");
    const modalContent = modal.querySelector(".modal-content");

    const button = document.querySelector("#order");
    button.addEventListener("click", () => {
        modal.classList.add("active");
        modalContent.scrollTo(0, 0);
    })

    configFirstPage();
    configSecondPage();
    configThirdPage();
    configFourthPage();

    //
    // creates the buttoms.


});