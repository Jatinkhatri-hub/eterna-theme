(() => {
  const handleInputTypeChange = (e) => {
    const value = e.target.value;

    document.querySelector("#buy-box").dataset.type = value;
    ["subscribe", "onetime"].forEach((type) =>
      document
        .querySelectorAll(`input[value="${type}"]`)
        .forEach((el) => (el.checked = type === value))
    );
  };

  openModalBtn.addEventListener('click', () => {
      modalBackdrop.classList.add('show');
  });

  closeModalBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('show');
  });

  modalBackdrop.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) {
          modalBackdrop.classList.remove('show');
      }
  });

  const handleOrderNow = async (e) => {
    const id = e.target.dataset.variantId;
    await fetch(window.Shopify.routes.root + "cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            id: +id,
            quantity: 1,
          },
        ],
      }),
    });
    window.location = "/checkout";
  };

  document.querySelectorAll(".purchase-radio").forEach((element) => {
    element.addEventListener("click", handleInputTypeChange);
  });
  document.querySelectorAll(".order-now-button").forEach((el) => {
    el.addEventListener("click", handleOrderNow);
  });
  // Select the timer display
  const timerDisplay = document.querySelector(".buy_box-timer");

  // Set initial countdown time in seconds (10 minutes = 600 seconds)
  let countdownTime = 10 * 60;

  // Function to format the time as MM:SS
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  // Function to update the timer every second
  function startCountdown() {
    const interval = setInterval(() => {
      // Update the display
      timerDisplay.textContent = formatTime(countdownTime);
      countdownTime--;

      // Stop the timer when it reaches 0
      if (countdownTime < 0) {
        clearInterval(interval);
        timerDisplay.textContent = "Time's up!";
      }
    }, 1000);
  }

  // Start the countdown
  timerDisplay && startCountdown();

  setTimeout(() => {
    document
      .querySelector(".smartplayer-video")
      .addEventListener("play", () =>
        [
          ".buy-box__section-wrapper",
          ".mystry-box",
          ".guarantee-box",
          ".testimonials",
        ].forEach(
          (selector) =>
            (document.querySelector(selector).style.display = "flex")
        )
      );
  }, 2000);
})();
