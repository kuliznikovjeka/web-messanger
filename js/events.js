import { modalElements } from './ui-elements.js';
import { openModal, closeModal } from './modal.js';
import { chatElements } from './ui-elements.js';
import { sendMessage } from './mainFunctions.js';

const eventOpenMoval = modalElements.btnSettings.addEventListener("click", openModal);
const eventCloseModal = modalElements.modalOverlay.addEventListener("click", closeModal);
const sendMessageToUser = chatElements.formForMessage.addEventListener("submit", sendMessage);

