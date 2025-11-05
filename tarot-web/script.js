const API_BASE_URL = "http://localhost:3000";

// 2. DEFINE THE FUNCTION
async function renderAllCards() {
  const cardSelectorDiv = document.querySelector(".card-selector");

  try {
    // API_BASE_URL is now correctly in scope when this line executes
    const response = await fetch(`${API_BASE_URL}/api/cards`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const cards = await response.json();

    cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("tarot-card");

      // Ensure correct URL construction
      const imageUrl = `${API_BASE_URL}${card.image}`;

      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = card.name;

      const cardName = document.createElement("h3");
      cardName.textContent = card.name;

      cardElement.appendChild(cardImage);
      cardElement.appendChild(cardName);
      cardSelectorDiv.appendChild(cardElement);
    });
  } catch (error) {
    console.error("Could not fetch or render cards:", error);
    cardSelectorDiv.innerHTML =
      "<p>Error loading tarot cards. Please check the server status.</p>";
  }
}

// 3. CALL THE FUNCTION
renderAllCards();
