let allCards = [];

let spreadState = [
  { slotId: 1, card: null, orientation: "upright" },
  { slotId: 2, card: null, orientation: "upright" },
  { slotId: 3, card: null, orientation: "upright" },
  { slotId: 4, card: null, orientation: "upright" },
  { slotId: 5, card: null, orientation: "upright" },
  { slotId: 6, card: null, orientation: "upright" },
  { slotId: 7, card: null, orientation: "upright" },
  { slotId: 8, card: null, orientation: "upright" },
  { slotId: 9, card: null, orientation: "upright" },
  { slotId: 10, card: null, orientation: "upright" },
];

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/cards")
    .then((response) => response.json())
    .then((data) => {
      allCards = data;
      populateCardPicker(allCards);
    });

  setupButtonListeners();
  setupCardIconListeners();
  setupDragAndDrop();
});

// --- Called once at the start ---
function populateCardPicker(cards) {
  const picker = document.getElementById("card-picker");
  picker.innerHTML = ""; // Clear it first

  for (const cardData of cards) {
    const cardElement = document.createElement("div");
    cardElement.className = "card-picker-item";
    cardElement.draggable = true; // Make it draggable!
    cardElement.innerHTML = `<img src="${cardData.image}" alt="${cardData.name}">`;

    // IMPORTANT: Store the ID for the drag event
    cardElement.dataset.cardId = cardData.id;

    // Add the drag listener
    cardElement.addEventListener("dragstart", (event) => {
      // Tell the browser which data to drag
      event.dataTransfer.setData("text/plain", cardData.id);
    });

    picker.appendChild(cardElement);
  }
}

// --- Called once at the start ---
function setupDragAndDrop() {
  // We need to add listeners to all 10 slots
  for (let i = 1; i <= 10; i++) {
    const slot = document.getElementById(`slot-${i}`);

    // 1. 'dragover': Allows a drop
    slot.addEventListener("dragover", (event) => {
      event.preventDefault(); // This is required
      slot.classList.add("drag-over-active"); // (Optional) visual feedback
    });

    // 2. 'dragleave': (Optional) visual feedback
    slot.addEventListener("dragleave", () => {
      slot.classList.remove("drag-over-active");
    });

    // 3. 'drop': The main event!
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drag-over-active");

      // Clear only this slot
      slot.innerHTML = `<span class="slot-number">${i}</span>`;

      // A. Get the card ID we stored in 'dragstart'
      const cardId = event.dataTransfer.getData("text/plain");

      // B. Find that card in our 'allCards' array
      // Note: use == because one is a string, one is a number
      const cardData = allCards.find((card) => card.id == cardId);

      // C. Create the card element (default to 'upright')
      const cardElement = createCardElement(cardData, "upright");
      slot.appendChild(cardElement);

      // D. Update the state
      spreadState[i - 1].card = cardData;
      spreadState[i - 1].orientation = "upright";
    });
  }
}
