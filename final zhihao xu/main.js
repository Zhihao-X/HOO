
document.getElementById("randomSnacks").addEventListener("click", showRandomSnacks);


function showRandomSnacks() {
    const SnacksCards = document.querySelectorAll(".Snacks-card");
    let selectedCardIndex;
    let counter = 0;
  
    const interval = setInterval(() => {
      if (selectedCardIndex !== undefined) {
        SnacksCards[selectedCardIndex].classList.remove("selected-Snacks");
      }
      selectedCardIndex = Math.floor(Math.random() * SnacksCards.length);
      SnacksCards[selectedCardIndex].classList.add("selected-Snacks");
      counter++;
  
      if (counter > 20) {
        clearInterval(interval);
        SnacksCards[selectedCardIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        // SnacksCards[selectedCardIndex].classList.remove("selected-Snacks");
      }
    }, 50);
  }
