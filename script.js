// Highlight one type of claim at a time (facts, views or predictions).
// The page is fully readable without this script.
const buttons = document.querySelectorAll(".filter button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.filter;

    if (type === "all") {
      delete document.body.dataset.show;
    } else {
      document.body.dataset.show = type;
    }

    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
  });
});
