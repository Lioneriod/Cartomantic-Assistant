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
  fetch("https://cartomantic-assistant.onrender.com/api/cards")
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
  const aiBtn = document.getElementById("ai-interpret-btn");
  if (aiBtn) {
    aiBtn.addEventListener("click", runAIInterpretation);
  }
}

function runAIInterpretation() {
  console.log("Starting AI Interpretation...");
  const category = document.getElementById("question-category").value;
  const questionText = document.getElementById("user-question").value.trim();
  const placedCards = spreadState.filter((slot) => slot.card !== null);
  if (placedCards.length !== 10) {
    alert(
      "Please place 10 cards on the spread (either manually or automatically) before asking for an interpretation."
    );
    return;
  }
  if (questionText.length < 5) {
    alert(
      "Please enter a clear question in the text box for the AI to interpret the cards."
    );
    return;
  }
  const interpretationData = prepareInterpretationData(
    placedCards,
    questionText,
    category
  );
  sendToAIService(interpretationData);
}

function prepareInterpretationData(placedCards, question, category) {
  const spreadDetails = placedCards.map((slot) => {
    const cardData = slot.card;
    const selectedMeaning = cardData.meanings[category][slot.orientation];
    return {
      position: slot.slotId,
      meaning_of_position: getPositionMeaning(slot.slotId),
      card_name: cardData.name,
      orientation: slot.orientation,
      selected_meaning: selectedMeaning,
    };
  });

  return {
    user_question: question,
    question_category: category,
    spread_type: "Celtic Cross",
    spread_layout: spreadDetails,
  };
}

function formatAIResponse(text) {
  let html = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/\n/g, "<br>");
  return html;
}

async function sendToAIService(payload) {
  const API_KEY = "AIzaSyCPqW8zLLnh6r6WxkVSI5EELuU2E6HAd2M";
  const AI_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

  const responseContainer = document.getElementById("ai-response-container");
  const responseContent = document.getElementById("ai-response-content");
  const interpretBtn = document.getElementById("ai-interpret-btn");

  try {
    interpretBtn.textContent = "Interpreting...";
    interpretBtn.disabled = true;
    responseContent.textContent = "Consulting the arcana...";
    responseContainer.style.display = "block";

    const promptText = constructGeminiPrompt(payload);

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: promptText,
            },
          ],
        },
      ],
    };

    const response = await fetch(AI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(
        `AI Service Error: ${errData.error?.message || response.statusText}`
      );
    }

    const result = await response.json();

    const interpretationText =
      result.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Could not get a clear interpretation.";

    const formattedHtml = formatAIResponse(interpretationText);
    responseContent.innerHTML = formattedHtml;
  } catch (error) {
    console.error("AI Interpretation Failed:", error);
    responseContent.textContent = `Error: Failed to get interpretation. ${error.message}`;
  } finally {
    interpretBtn.textContent = "Interpret";
    interpretBtn.disabled = false;
  }
}

function constructGeminiPrompt(body) {
  const formattedLayout = body.spread_layout
    .map(
      (slot) =>
        `Position ${slot.position} (${slot.meaning_of_position}): ${slot.card_name} (${slot.orientation})
    Meaning (${body.question_category}): ${slot.selected_meaning}`
    )
    .join("\n");

  const geminiPrompt = `You are a profound and supportive Tarot interpreter.
The user has a question about: **${body.question_category}**.
Their specific question is: **"${body.user_question}"**. If this question seems like gibberish or just random characters/numbers pressed, address the user about it instead of following the rest of the prompt.

Provide a professional, insightful, and supportive reading based *only* on the provided category. Do not use meanings from other categories.
Address each card position and conclude with a summary.

---
**Spread Details (Celtic Cross):**
${formattedLayout}

Don't write an intro, only the results of the interpretation. Present the interpretation in the same language as the question. If the question was in Brazilian Portuguese, translate upright to normal and reversed to invertido). Try your best to make the text short but separating by each slot and card`;

  return geminiPrompt;
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
  const drawnCards = shuffledDeck.slice(0, 10);
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
