const main = document.querySelector("main");
const buttonInsertText = document.querySelector(".btn-toggle");
const buttonReadText = document.querySelector("#read");
const divTextBox = document.querySelector(".text-box");
const closeDivTextBox = document.querySelector(".close");
const selectElement = document.querySelector("select");
const textArea = document.querySelector("textarea");

const humanExpressions = [
  /* Array para inserir as imagens*/
  {
    img: "./img/drink.jpg",
    text: "Estou com sede",
  } /* Objeto com duas propriedade img e text que recebe as imagens*/,
  {
    img: "./img/food.jpg",
    text: "Estou com fome",
  } /* Obs.: Os dados podem vir de uma API não precisam ser digitados a mão */,
  { img: "./img/tired.jpg", text: "Estou cansado" },
  { img: "./img/hurt.jpg", text: "Estou machucado" },
  { img: "./img/happy.jpg", text: "Estou feliz" },
  { img: "./img/angry.jpg", text: "Estou com raiva" },
  { img: "./img/sad.jpg", text: "Estou triste" },
  { img: "./img/scared.jpg", text: "Estou assustado" },
  { img: "./img/outside.jpg", text: "Quero ir lá fora" },
  { img: "./img/home.jpg", text: "Quero ir para casa" },
  { img: "./img/school.jpg", text: "Quero ir para a escola" },
  { img: "./img/grandma.jpg", text: "Quero ver a vovó" },
];

const utterance =
  new SpeechSynthesisUtterance(); /* Criação do objeto para a solicitação de fala */

const setTextMessage = (text) => {
  utterance.text = text; /* Set a mensagem de texto */
};

const speakText = () => {
  /* Set a fala com o metodo  speechSynthesis.speak()*/
  speechSynthesis.speak(utterance);
};

const setVoice = (event) => {
  const selectedVoice = voices.find(
    (voice) => voice.name === event.target.value
  );
  utterance.voice =
    selectedVoice; /* Set a Voz  encntro a voz e disparo o valor dela*/
};

const addExpressionBoxesIntoDOM = () => {
  /* Adicionando as expressões com DOM */
  main.innerHTML = humanExpressions
    .map(
      ({ img, text }) => `
        <div class="expression-box" data-js="${text}">
            <img src="${img}" alt="${text}" data-js="${text}"> 
            <p class="info" data-js="${text}">${text}</p>
        </div>
    `
    )
    .join("");
};
addExpressionBoxesIntoDOM();

const setStyleOfClickedDiv = (dataValue) => {
  /* Estilo para Div quando é clicada */
  const div = document.querySelector(`[data-js="${dataValue}"]`);
  div.classList.add("active");
  setTimeout(() => {
    div.classList.remove("active");
  }, 1000);
};

main.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const clickedElementText = clickedElement.dataset.js;
  const clickedElementTextMustBeSpoken = ["img", "p"].some(
    (elementName) =>
      clickedElement.tagName.toLowerCase() === elementName.toLowerCase()
  );

  if (clickedElementTextMustBeSpoken) {
    setTextMessage(clickedElementText);
    speakText();
    setStyleOfClickedDiv(clickedElementText);
  }
});

const insertOptionElementsIntoDOM = (voices) => {
  selectElement.innerHTML = voices.reduce((accumulator, { name, lang }) => {
    accumulator += `<option value="${name}">${lang} | ${name}</option>`;
    return accumulator;
  }, "");
};

const setGooglePtBrVoices = (voices) => {
  const googleVoicePtBr = voices.find(
    (voice) => voice.name === "Google português do Brasil"
  );

  if (googleVoicePtBr) {
    utterance.voice = googleVoicePtBr;
    const googleVoicePtBrOptionElement = selectElement.querySelector(
      `[value="${googleVoicePtBr.name}"]`
    );
    googleVoicePtBrOptionElement.selected = true;
  }
};

let voices = [];

speechSynthesis.addEventListener("voiceschanged", () => {
  voices = speechSynthesis.getVoices();

  insertOptionElementsIntoDOM(voices);
  setGooglePtBrVoices(voices);
});

buttonInsertText.addEventListener("click", () => {
  divTextBox.classList.add("show");
});

closeDivTextBox.addEventListener("click", () => {
  divTextBox.classList.remove("show");
  textArea.value = "";
});

selectElement.addEventListener("change", setVoice);

buttonReadText.addEventListener("click", () => {
  setTextMessage(textArea.value);
  speakText();
});
