const trigger = document.querySelector("[data-secret-trigger]");
const message = document.querySelector("#secret-message");
const coordinateButton = document.querySelector("[data-coordinate-copy]");
const coordinateStatus = document.querySelector("#coordinate-status");

const copyCoordinates = async () => {
  if (
    !(coordinateButton instanceof HTMLButtonElement) ||
    !(coordinateStatus instanceof HTMLElement)
  ) {
    return;
  }

  const coordinates = coordinateButton.dataset.coordinateCopy;
  if (!coordinates) {
    const error = new Error("The coordinate value is missing.");
    console.error(error);
    coordinateStatus.textContent = "Couldn’t copy coordinates.";
    return;
  }

  try {
    await navigator.clipboard.writeText(coordinates);
    coordinateStatus.textContent = "Coordinates copied.";
  } catch (error) {
    console.error("Unable to copy coordinates.", error);
    coordinateStatus.textContent = "Couldn’t copy coordinates.";
  }
};

coordinateButton?.addEventListener("click", copyCoordinates);

const revealSecret = (text) => {
  if (!(trigger instanceof HTMLButtonElement) || !(message instanceof HTMLElement)) {
    return;
  }

  message.textContent = text;
  message.hidden = false;
  trigger.setAttribute("aria-expanded", "true");
};

trigger?.addEventListener("click", () => {
  revealSecret("Still a work in progress. Probably always will be.");
});

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];
let sequenceIndex = 0;

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement ||
    (target instanceof HTMLElement && target.isContentEditable);

  if (isTyping || event.repeat || event.altKey || event.ctrlKey || event.metaKey) {
    sequenceIndex = 0;
    return;
  }

  if (event.key === sequence[sequenceIndex]) {
    sequenceIndex += 1;
    if (sequenceIndex === sequence.length) {
      revealSecret("You debug things for fun, don’t you?");
      sequenceIndex = 0;
    }
    return;
  }

  sequenceIndex = event.key === sequence[0] ? 1 : 0;
});
