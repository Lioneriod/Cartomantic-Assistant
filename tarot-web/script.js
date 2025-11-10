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

function populateCardPicker(cards) {
  const picker = document.getElementById("card-picker");
  picker.innerHTML = "";
  for (const cardData of cards) {
    const cardElement = document.createElement("div");
    cardElement.className = "card-picker-item";
    cardElement.draggable = true;
    cardElement.innerHTML = `<img src="${cardData.image}" alt="${cardData.name}">`;
    cardElement.dataset.cardId = cardData.id;
    cardElement.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", cardData.id);
      event.target.style.cursor = "grabbing";
    });
    picker.appendChild(cardElement);
  }
}

function setupDragAndDrop() {
  for (let i = 1; i <= 10; i++) {
    const slot = document.getElementById(`slot-${i}`);
    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("drag-over-active");
    });
    slot.addEventListener("dragleave", () => {
      slot.classList.remove("drag-over-active");
    });
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drag-over-active");
      slot.innerHTML = `<span class="slot-number">${i}</span>`;
      const cardId = event.dataTransfer.getData("text/plain");
      const cardData = allCards.find((card) => card.id == cardId);
      const cardElement = createCardElement(cardData, "upright");
      slot.appendChild(cardElement);
      spreadState[i - 1].card = cardData;
      spreadState[i - 1].orientation = "upright";
    });
  }
}

function createCardElement(cardData, orientation) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  if (orientation === "reversed") {
    cardDiv.classList.add("reversed");
  }
  cardDiv.dataset.cardId = cardData.id;
  cardDiv.innerHTML = `
        <img src="${cardData.image}" alt="${cardData.name}">
        <div class="icon question-icon">?</div>
        <div class="icon arrow-icon">🔄</div>
    `;
  return cardDiv;
}

function setupButtonListeners() {
  const autoBtn = document.getElementById("auto-mode-btn");
  if (autoBtn) {
    autoBtn.addEventListener("click", runAutomaticMode);
  }
  console.log("Button listeners are ready.");
}

function setupCardIconListeners() {
  console.log("Icon listeners are ready.");
}

function setupCardIconListeners() {
  const spreadContainer = document.getElementById("spread-container");
  spreadContainer.addEventListener("click", (event) => {
    const target = event.target;
    const cardElement = target.closest(".card");
    if (!cardElement) return;
    const slotElement = cardElement.closest(".card-slot");
    if (!slotElement) return;
    const slotId = parseInt(slotElement.id.replace("slot-", ""));
    if (
      target.classList.contains("arrow-icon") ||
      target.closest(".arrow-icon")
    ) {
      handleFlipCard(cardElement, slotId);
    }
    if (
      target.classList.contains("question-icon") ||
      target.closest(".question-icon")
    ) {
      handleShowMeaning(cardElement, slotId);
    }
  });
}

function handleFlipCard(cardElement, slotId) {
  const isReversed = cardElement.classList.toggle("reversed");
  const slotIndex = slotId - 1;
  spreadState[slotIndex].orientation = isReversed ? "reversed" : "upright";
  console.log(
    `Slot ${slotId} flipped to: ${spreadState[slotIndex].orientation}`
  );
}

function handleShowMeaning(cardElement, slotId) {
  const slotState = spreadState[slotId - 1];
  if (!slotState.card) {
    console.log(`No card in slot ${slotId} to show meaning for.`);
    return;
  }

  const cardData = slotState.card;
  const orientation = slotState.orientation;
  const positionMeaning = getPositionMeaning(slotId);
  const meaning = cardData.meanings.general[orientation];

  alert(`
      --- Card Meaning ---
      Position ${slotId}: ${positionMeaning}
      
      Card: ${cardData.name}
      Orientation: ${orientation}
      
      General Meaning:
      ${meaning}
  `);
}

function getPositionMeaning(slotId) {
  const legend = {
    1: "The Present Situation / The Self",
    2: "The Problem / What Crosses You",
    3: "The Past / Roots",
    4: "The Future / Near Future",
    5: "Conscious / Crown",
    6: "Unconscious / Foundation",
    7: "Your Influence / The Querent",
    8: "External Influence / Hopes & Fears of Others",
    9: "Hopes & Fears",
    10: "Outcome / Final Result",
  };
  return legend[slotId] || "Unknown Position";
}

function setupButtonListeners() {
  const manualBtn = document.getElementById("manual-mode-btn");
  const autoBtn = document.getElementById("auto-mode-btn");
  if (autoBtn) {
    autoBtn.addEventListener("click", runAutomaticMode);
  }
}

function clearBoard() {
  for (let i = 1; i <= 10; i++) {
    const slot = document.getElementById(`slot-${i}`);
    slot.innerHTML = `<span class="slot-number">${i}</span>`;
    spreadState[i - 1].card = null;
    spreadState[i - 1].orientation = "upright";
  }
}

function shuffleArray(array) {
  const arrCopy = [...array];
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }
  return arrCopy;
}

function runAutomaticMode() {
  console.log("Running Automatic Spread...");
  clearBoard();
  const shuffledDeck = shuffleArray(allCards);
  const drawnCards = shuffledDeck.slice(0, 10); // Take the first 10 random cards
  for (let i = 0; i < 10; i++) {
    const slotId = i + 1;
    const slot = document.getElementById(`slot-${slotId}`);
    const cardData = drawnCards[i];
    const orientation = Math.random() < 0.5 ? "upright" : "reversed";
    spreadState[i].card = cardData;
    spreadState[i].orientation = orientation;
    const cardElement = createCardElement(cardData, orientation);
    slot.appendChild(cardElement);
  }

  console.log("Spread complete. Check spreadState for final result.");
}
