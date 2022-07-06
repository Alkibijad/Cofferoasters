const moreBtn = document.querySelectorAll(".more-btn");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener("click", function () {
    answer[i].classList.toggle("active");
    moreBtn[i].classList.toggle("active-btn");
  });
}

/// selecton plan function
makeSelection();
function makeSelection() {
  let selectionManuH4 = document.querySelectorAll(".selection-menu h4"); //plan page side selected manu
  let answerDiv = document.querySelectorAll(".answer"); // answer is div, child of every block question
  let cards = document.querySelectorAll(".card-option"); // card is a child of answer, 3 cards in every answer

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      saveOrder(this);

      let currentChild = this.getAttribute("data-option"); // return number 0 of current card
      selectionManuH4[currentChild].style.color = "rgb(51, 61, 75)";
      let currentParent =
        answerDiv[currentChild].querySelectorAll(".card-option"); // answer[0] return parent of current card

      for (let i = 0; i < currentParent.length; i++) {
        currentParent[i].style.background = "rgb(248, 241, 223)";
      }
      this.style.background = "rgb(14, 135, 132)";
    });
  }
}

let orderPlan = {
  how: "",
  type: "",
  amount: "",
  grind: "",
  delivery: "",
  price: "",
};

function saveOrder(card) {
  let selection = card.getAttribute("data-option");

  if (selection == 0) {
    orderPlan.how = card.querySelector("h4").innerHTML;
  } else if (selection == 1) {
    orderPlan.type = card.querySelector("h4").innerHTML;
  } else if (selection == 2) {
    orderPlan.amount = card.querySelector("h4").innerHTML;
  } else if (selection == 3) {
    orderPlan.grind = card.querySelector("h4").innerHTML;
  } else if (selection == 4) {
    orderPlan.delivery = card.querySelector("h4").innerHTML;
    orderPlan.price = card.querySelector(".price").innerHTML;
    checkEntryData();
  }
}

function checkEntryData() {
  if (
    orderPlan.how !== "" &&
    orderPlan.type !== "" &&
    orderPlan.amount !== "" &&
    orderPlan.grind !== "" &&
    orderPlan.delivery !== "" &&
    orderPlan.price !== ""
  ) {
    document.querySelector(".button-container").style.display = "block";
    let button = document.querySelector(".button-container button");

    button.addEventListener("click", function () {
      let reviewContainer = document.querySelector(".review-container");
      let text = ` <div>
        <h2>Order summary</h2>
        <p>I drink my coffee as <span class="order">${orderPlan.how}</span> , with a <span class="order">${orderPlan.type}</span> type of bean. <span class="order">${orderPlan.amount}</span>
        ground ala <span class="order">${orderPlan.grind}</span>, sent to me <span class="order">${orderPlan.delivery}</span>.
        </p>
        <p>Is this correct? YOu can procced to checkou tor go back to plan selection if something is off. subscription discount  code acan also be redeemed at the checkout</p>
        <div class="priceAndButton">
        <p>${orderPlan.price}</p>
        <button><a href="index.html">Checkout</a></button>
        </div>
        </div>`;

      reviewContainer.style.display = "block";
      reviewContainer.innerHTML = text;
    });
  }
}
