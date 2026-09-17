const productButtons = document.querySelectorAll(".product-button");

// Each button's data-target attribute holds the id of the placeholder it should update
productButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const placeholder = document.getElementById(button.dataset.target);
        placeholder.textContent = `${button.textContent} go here!`;
    });
});

/* This now handles all three buttons generically instead of one hardcoded pair, keeping the DRY principle intact.
Linking is done via the data-target attribute on each button matching the id of its placeholder box. */
