const formEls = [
  ...Array.from(document.querySelectorAll("input")),
  document.querySelector("#message"),
];

// What if we had other buttons like a 'reset' button?
const submitBtn = document.querySelector("button[type='submit']");
