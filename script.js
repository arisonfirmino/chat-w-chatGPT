const messages = document.querySelector("#messages");
const inputMessage = document.querySelector("#input-message");
const submitButton = document.querySelector("#send-message");
const form = document.querySelector("form");

const showMessage = () => {
  const messageValue = inputMessage.value;

  messages.innerHTML += `<p class="text-bg-color rounded-lg bg-[#e1e1e1] p-2.5 text-right text-lg">${messageValue}</p>`;

  form.reset();
};

form.addEventListener("submit", (e) => e.preventDefault());
submitButton.addEventListener("click", showMessage);

inputMessage.addEventListener("keyup", (event) => {
  const hasValue = inputMessage.value !== "";

  submitButton.classList.remove("bg-gray-300", !hasValue);
  submitButton.classList.add("bg-bg-color", hasValue);
  submitButton.disable = !hasValue;

  if (hasValue && event.key === "Enter") {
    event.preventDefault();
    showMessage();
  }
});
