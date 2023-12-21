const messages = document.querySelector("#messages");
const inputMessage = document.querySelector("#input-message");
const submitButton = document.querySelector("#send-message");
const form = document.querySelector("form");

const API_KEY = "";

const showMessage = async () => {
  const messageValue = inputMessage.value;

  messages.innerHTML += `<p class="text-bg-color rounded-lg bg-[#e1e1e1] p-2.5 text-right text-lg">${messageValue}</p>`;

  form.reset();

  const responseGPT = await postMessageGPT(messageValue);

  messages.innerHTML += `<p class="rounded-lg bg-[#10a37f] p-2.5 text-left text-lg">${responseGPT}</p>`;
};

async function postMessageGPT(message) {
  const body = {
    messages: [
      {
        content: message,
        role: "system",
      },
    ],
    model: "gpt-3.5-turbo-0613",
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  };

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },

      body: JSON.stringify(body),
    });

    const returnResponseJson = await response.json();

    return returnResponseJson.choices[0].message.content;
  } catch (error) {
    console.error("Erro na requisição:", error.message);

    return error.message;
  }
}

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
